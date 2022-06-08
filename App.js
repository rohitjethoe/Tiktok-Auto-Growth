const Tiktok = require('./modules/Tiktok');
const fetchInput = require('./modules/fetchInput');

(async () => {

    console.log("[*] Welkom bij Tiktok Auto Growth. \ndoor https:/www.github.com/rohitjethoe\n");
    await fetchInput.getUsername();
    await fetchInput.getPassword();

    await Tiktok.openBrowser();
    await Tiktok.loginUserByGoogle();
    await Tiktok.loginUser(fetchInput.userDetails.username, fetchInput.userDetails.password);
    await Tiktok.uploadVideo();
})();