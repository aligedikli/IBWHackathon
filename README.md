# Hayırseverlikle Desteklenen NFT Tabanlı Eğitim Platformu

## Günümüzde eğitim, fırsat eşitsizliği ve erişim zorlukları gibi zorluklarla karşılaşmaktadır. Ancak, teknolojinin sunduğu olanaklar sayesinde, inovatif projeler bu sorunları çözmek için önemli adımlar atabilir. İşte hayırsever yatırımcıların desteklediği NFT tabanlı eğitim platformu projesi, eğitim alanında köklü bir değişimi temsil ediyor.

Erişilebilir ve Motive Edici Eğitim

Bu projenin temel amacı, yoksul öğrencilere destek olmak ve onları eğitimle buluşturmak. Öğrenciler, eğitim platformuna kaydolarak ilgi alanlarına ve ihtiyaçlarına uygun eğitim kursları arasından seçim yapma imkanı bulurlar. Her bir eğitim kursunun tamamlanmasında öğrenciler NFT'leri "stake" ederler ve başarılarına dayalı ödüller kazanırlar. Bu mekanizma, öğrencilerin motive olmasını ve eğitimlerini daha verimli bir şekilde tamamlamalarını sağlar.

Eğitime Destek ve Değer Artışı

Projeyi desteklemek isteyen hayırsever yatırımcılar için platform çeşitli seçenekler sunar. Yatırımcılar, tokenlarla destekleme, NFT'ler aracılığıyla eğitim sağlama veya eğitim materyallerine doğrudan katkıda bulunma gibi yöntemlerle projeye destek olabilirler. Bu yatırımların değeri, öğrencilerin başarısı ve platformun büyümesiyle artabilir. Yatırımcılar kazançlarını yeniden yatırabilir veya eğitim bursları gibi amaçlara yönlendirebilirler.

Eğitim Verme ve İçerik Üretme

Eğitmenler, platform üzerinde uzmanlık alanlarına dayalı eğitim kursları oluşturabilirler. Bu kursları NFT tabanlı hale getirerek öğrencilere ödüller sağlayabilirler. Eğitmenler, eğitim materyallerini sunarken öğrencilerin ilerlemesini ve katılımını izleyebilir, platformun topluluk bölümünde diğer eğitmenlerle ve öğrencilerle etkileşimde bulunabilirler.

Topluluk ve İşbirliği

Projede yer alan genel kullanım senaryosu, platformun topluluk etkileşimine ve işbirliğine nasıl olanak tanıdığını vurgular. Kullanıcılar, topluluk etkinliklerine katılabilir, deneyimlerini paylaşabilir, işbirliği fırsatları arayabilir ve projenin gelişimine katkıda bulunabilirler.

Bu proje, eğitim alanında yenilikçi bir yaklaşımı ve sosyal etkiyi bir araya getirerek hem öğrencilere erişilebilir eğitim imkanı sunuyor hem de hayırsever yatırımcıların bu amaç için değer yaratmasını sağlıyor. Eğitimciler de platform üzerinde eğitim vererek hem öğrencilere fayda sağlıyor hem de kendi değerlerini artırabiliyorlar. Topluluk ise platform aracılığıyla işbirliği yaparak eğitimin dönüştürücü gücüne katkı sağlıyor.

## Running the project

### Contract

Note: You should create `blockchain/.env` file with the following content:

(substitute `<...>` with the deployer wallet's private key obtained from Metamask)

```sh
PRIVATE_KEY=<...>
```

After that:

```sh
cd blockchain
npm i
npx hardhat run --network testedge scripts/deploy.js
```

Take note of the contract address printed after this command.

### Backend

In another terminal:

```sh
cd backend
npm i
npm start
```

### Frontend

In another terminal:

```sh
cd frontend
npm i
npm run dev
```
