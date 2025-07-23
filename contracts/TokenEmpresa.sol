// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

/**
 * @title TokenEmpresa
 * @dev Token ERC-20 com controle de mint baseado em AccessControl e whitelist.
 */
contract TokenEmpresa is ERC20, AccessControl {
    // Papéis de controle
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    // Whitelist para endereços que podem receber mint
    mapping(address => bool) public whitelist;

    /**
     * @dev Construtor. Define o nome e símbolo do token.
     * A conta que implanta recebe o papel DEFAULT_ADMIN_ROLE.
     */
    constructor() ERC20("TokenEmpresa", "TKE") {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    /**
     * @dev Adiciona um endereço à whitelist. Apenas ADMIN pode chamar.
     * @param account Endereço a ser adicionado
     */
    function addToWhitelist(address account) external onlyRole(DEFAULT_ADMIN_ROLE) {
        whitelist[account] = true;
    }

    /**
     * @dev Remove um endereço da whitelist. Apenas ADMIN pode chamar.
     * @param account Endereço a ser removido
     */
    function removeFromWhitelist(address account) external onlyRole(DEFAULT_ADMIN_ROLE) {
        whitelist[account] = false;
    }

    /**
     * @dev Faz mint de tokens. Apenas usuários com MINTER_ROLE podem chamar.
     * O destinatário deve estar na whitelist.
     * @param to Endereço que receberá os tokens
     * @param amount Quantidade de tokens (em wei)
     */
    function mint(address to, uint256 amount) external onlyRole(MINTER_ROLE) {
        require(whitelist[to], "TokenEmpresa: recipient is not whitelisted");
        _mint(to, amount);
    }

    /**
     * @dev Função auxiliar para checar se um endereço tem um papel.
     * Útil para interfaces e frontends.
     */
    function isMinter(address account) external view returns (bool) {
        return hasRole(MINTER_ROLE, account);
    }

    function isAdmin(address account) external view returns (bool) {
        return hasRole(DEFAULT_ADMIN_ROLE, account);
    }
}
