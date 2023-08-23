// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract NFTEducationContract is ERC721, Ownable {
    IERC20 public haqqToken;
    uint256 public requestCounter;

    mapping(uint256 => uint256) public courseStakeStartTime;
    mapping(uint256 => uint256) public courseStakeDuration;

    mapping(uint256 => address) public transferRequesters;
    mapping(uint256 => bool) public approvedTransferRequests;

    constructor(
        address _haqqTokenAddress
    ) ERC721("NFTEducationToken", "NFTEDU") {
        haqqToken = IERC20(_haqqTokenAddress);
        requestCounter = 1;
    }

    modifier onlyCourseOwner(uint256 _courseId) {
        require(
            ownerOf(_courseId) == msg.sender,
            "Only the owner of the course can call this function"
        );
        _;
    }

    modifier validRequestId(uint256 _requestId) {
        require(
            _requestId >= 1 && _requestId < requestCounter,
            "Invalid requestId"
        );
        _;
    }

    function mintCourse(uint256 courseId, address recipient) external onlyOwner {
        _mint(recipient, courseId);
    }

    function stakeCourse(
        uint256 courseId,
        uint256 duration
    ) external onlyCourseOwner(courseId) {
        require(
            courseStakeStartTime[courseId] == 0,
            "Course is already staked"
        );

        courseStakeStartTime[courseId] = block.timestamp;
        courseStakeDuration[courseId] = duration;
    }

    function completeCourse(
        uint256 courseId
    ) external view onlyCourseOwner(courseId) {
        require(courseStakeStartTime[courseId] > 0, "Course is not staked");
        require(
            block.timestamp >=
                courseStakeStartTime[courseId] + courseStakeDuration[courseId],
            "Course stake duration not passed"
        );
    }

    function createTransferRequest(uint256 courseId) external {
        require(_exists(courseId), "Course does not exist");

        uint256 requestId = requestCounter;
        transferRequesters[requestId] = msg.sender;
        approvedTransferRequests[requestId] = false;
        requestCounter++;
    }

    function approveTransferRequest(
        uint256 requestId
    ) external onlyOwner validRequestId(requestId) {
        require(
            !approvedTransferRequests[requestId],
            "Request already approved"
        );

        approvedTransferRequests[requestId] = true;

        address requester = transferRequesters[requestId];

        _transfer(owner(), requester, requestId); // Transfer the NFT
    }

    function claimReward(uint256 courseId) external onlyCourseOwner(courseId) {
        require(
            ownerOf(courseId) != msg.sender,
            "Course owner cannot claim reward"
        );
        require(courseStakeStartTime[courseId] > 0, "Course is not staked");
        require(
            block.timestamp >=
                courseStakeStartTime[courseId] + courseStakeDuration[courseId],
            "Course stake duration not passed"
        );

        uint256 rewardAmount = calculateReward(courseStakeDuration[courseId]);
        courseStakeStartTime[courseId] = 0; // Reset stake details

        haqqToken.transfer(msg.sender, rewardAmount);
        _burn(courseId); // Burn the NFT after reward claim
    }

    function calculateReward(uint256 duration) internal pure returns (uint256) {
        // Implement your reward calculation logic here based on duration
        // This is just a placeholder
        return duration * 1000;
    }

    function getTransferRequest(
        uint256 requestId
    )
        external
        view
        validRequestId(requestId)
        returns (address requester, bool isApproved, uint256 courseId)
    {
        requester = transferRequesters[requestId];
        isApproved = approvedTransferRequests[requestId];
        courseId = requestId;
    }
}
