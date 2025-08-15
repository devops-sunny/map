import { factory } from "./crypto-js.min.js";

window.CryptoJS = factory();

const AesUtil = function (keySize, iterationCount) {
  this.keySize = keySize / 32;
  this.iterationCount = iterationCount;
};

AesUtil.prototype.generateKey = function (salt, passPhrase) {
  var key = CryptoJS.PBKDF2(passPhrase, CryptoJS.enc.Hex.parse(salt), {
    keySize: this.keySize,
    iterations: this.iterationCount,
  });
  return key;
};

AesUtil.prototype.encrypt = function (plainText, mytext) {
  var iv = CryptoJS.lib.WordArray.random(128 / 8).toString(CryptoJS.enc.Hex);
  var salt = CryptoJS.lib.WordArray.random(128 / 8).toString(CryptoJS.enc.Hex);

  var key = this.generateKey(salt, mytext);
  var encrypted = CryptoJS.AES.encrypt(plainText, key, {
    iv: CryptoJS.enc.Hex.parse(iv),
  });

  return btoa(
    iv + "::" + salt + "::" + encrypted.ciphertext.toString(CryptoJS.enc.Base64)
  );
};

AesUtil.prototype.decrypt = function (salt, iv, passPhrase, cipherText) {
  var key = this.generateKey(salt, passPhrase);
  var cipherParams = CryptoJS.lib.CipherParams.create({
    ciphertext: CryptoJS.enc.Base64.parse(cipherText),
  });
  var decrypted = CryptoJS.AES.decrypt(cipherParams, key, {
    iv: CryptoJS.enc.Hex.parse(iv),
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
};

export default AesUtil;
