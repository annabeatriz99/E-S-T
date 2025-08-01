// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IERC721 {
    function transferFrom(address from, address to, uint256 tokenId) external;
}

contract Marketplace {
    struct Listing {
        address seller;
        address nft;
        uint256 tokenId;
        uint256 price;
        bool sold;
    }

    Listing[] public listings;

    event NFTListed(uint256 listingId, address seller, address nft, uint256 tokenId, uint256 price);
    event NFTSold(uint256 listingId, address buyer);

    function listNFT(address nft, uint256 tokenId, uint256 price) external {
        IERC721(nft).transferFrom(msg.sender, address(this), tokenId);
        listings.push(Listing(msg.sender, nft, tokenId, price, false));
        emit NFTListed(listings.length - 1, msg.sender, nft, tokenId, price);
    }

    function buyNFT(uint256 listingId) external payable {
        Listing storage item = listings[listingId];
        require(!item.sold, "Item already sold");
        require(msg.value >= item.price, "Insufficient payment");

        item.sold = true;
        payable(item.seller).transfer(item.price);
        IERC721(item.nft).transferFrom(address(this), msg.sender, item.tokenId);

        emit NFTSold(listingId, msg.sender);
    }

    function getListings() external view returns (Listing[] memory) {
        return listings;
    }
}
