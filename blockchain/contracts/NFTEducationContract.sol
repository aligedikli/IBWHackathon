// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract NFTEducationContract is ERC721, Ownable {
    IERC20 public haqqToken;
    uint256 public requestCounter;
    uint256 public nftId;

    mapping(uint256 => uint256) public courseStakeStartTime;
    mapping(uint256 => uint256) public courseStakeDuration;

    mapping(uint256 => address) public transferRequesters; // delete
    mapping(uint256 => bool) public approvedTransferRequests; // delete

    constructor(
        address _haqqTokenAddress
    ) ERC721("NFTEducationToken", "NFTEDU") {
        haqqToken = IERC20(_haqqTokenAddress);
        requestCounter = 1;
		nftId = 0;
    }

    modifier onlyCourseOwner(uint256 _nftId) {
        require(
            ownerOf(_nftId) == msg.sender,
            "Only the owner of the course can call this function"
        );
        _;
    }

    function mintCourse(uint256 courseId, address recipient) external onlyOwner {
        _mint(recipient, courseId);
		nftId++;
    }

    function stakeCourse(
        uint256 nftId,
        uint256 duration
    ) external onlyCourseOwner(nftId) {
        require(
            courseStakeStartTime[nftId] == 0,
            "Course is already staked"
        );

        courseStakeStartTime[nftId] = block.timestamp;
        courseStakeDuration[nftId] = duration;
    }

    function completeCourse(
        uint256 nftId
    ) external view onlyCourseOwner(nftId) {
        require(courseStakeStartTime[nftId] > 0, "Course is not staked");
        require(
            block.timestamp >=
                courseStakeStartTime[nftId] + courseStakeDuration[nftId],
            "Course stake duration not passed"
        );
    }

    function approveTransferRequest(
        uint256 requestId
    ) external onlyOwner {
        address requester = transferRequesters[requestId];
        _transfer(owner(), requester, requestId); // Transfer the NFT
    }

    function claimReward(uint256 nftId) external onlyCourseOwner(nftId) {
        require(
            ownerOf(nftId) != msg.sender,
            "Course owner cannot claim reward"
        );
        require(courseStakeStartTime[nftId] > 0, "Course is not staked");
        require(
            block.timestamp >=
                courseStakeStartTime[nftId] + courseStakeDuration[nftId],
            "Course stake duration not passed"
        );

        uint256 rewardAmount = calculateReward(courseStakeDuration[nftId]);
        courseStakeStartTime[nftId] = 0; // Reset stake details

        haqqToken.transfer(msg.sender, rewardAmount);
        _burn(nftId); // Burn the NFT after reward claim
    }

    function calculateReward(uint256 duration) internal pure returns (uint256) {
        // Implement your reward calculation logic here based on duration
        // This is just a placeholder
        return duration * 1000;
    }
}
