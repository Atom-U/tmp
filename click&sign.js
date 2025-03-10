HTTP/2 200 OK
Cache-Control: private
Content-Type: text/html; charset=utf-8
Set-Cookie: SERVER=KACYOBACK1PROD; path=/; HttpOnly; SameSite=Strict; secure
Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization
Access-Control-Allow-Methods: GET,PUT,POST,DELETE,OPTIONS
Access-Control-Allow-Credentials: true
Access-Control-Allow-Private-Network: true
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
X-Xss-Protection: 1; mode=block
Access-Control-Allow-Origin: *
Content-Security-Policy: base-uri 'self'; default-src 'self'; frame-ancestors 'self'; script-src 'self' 'unsafe-eval' 'nonce-kacyonet' *.8x8.vc 8x8.vc https://8x8.vc *.googleapis.com googleapis.com https://maps.googleapis.com/; style-src 'self' 'unsafe-inline' *.googleapis.com googleapis.com https://maps.googleapis.com/ https://fonts.googleapis.com/ *.gstatic.com gstatic.com https://fonts.gstatic.com/; object-src 'none'; img-src * data: blob: 'unsafe-inline'; frame-src 'self' *.youtube.com youtube.com https://www.youtube.com *.genial.ly genial.ly https://view.genial.ly *.8x8.vc 8x8.vc https://8x8.vc; connect-src 'self' *.googleapis.com googleapis.com https://maps.googleapis.com/; upgrade-insecure-requests
Referrer-Policy: origin-when-cross-origin
Permissions-Policy: accelerometer=(), gyroscope=(), magnetometer=(), payment=(), usb=()
Date: Fri, 07 Mar 2025 01:15:39 GMT
Content-Length: 6800
Strict-Transport-Security: max-age=31536000;


<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head><meta charset="utf-8" /><meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1" /><link rel="icon" href="images/img/logosi.png" /><title>
	Impulse Sign-In
</title>

    <script nonce="kacyonet" type="text/javascript">
        if ((navigator.userAgent.indexOf("MSIE ") > -1 || navigator.userAgent.indexOf("Trident/") > -1) && window.location.href.indexOf('IE.aspx') < 0 && window.location.href.indexOf('Assess/Player/Default.aspx') < 0) {
            window.location.href = `/IE.aspx?uri=${encodeURIComponent(window.location.href)}`
        }
    </script>

    <script type="text/javascript" src="/js/jquery.min.js"></script>
    <script type="text/javascript" src="/css/bootstrap/js/bootstrap.min.js"></script>
    <script nonce="kacyonet">$.fn.bsTooltip = $.fn.tooltip</script>
    <script type="text/javascript" src="/js/jquery-ui/jquery-ui.min.js"></script>
    <script nonce="kacyonet">$.fn.tooltip = $.fn.bsTooltip</script>
    <script type="text/javascript" src="/js/jquery-ui/jquery.ui.touch-punch.min.js"></script>
    <script type="text/javascript" src="/js/klms.js?v=4.2.1.20"></script>

    <link rel="stylesheet" type="text/css" href="/css/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="/css/master.css" />
    <link rel="stylesheet" type="text/css" href="/css/masterportalsi.css" />
<link href="css/appli_horiba.css?v4.2.1.3" rel="stylesheet" type="text/css" /></head>
<body>
    <div class="container-fluid">
        <div id="content_login" class="row-fluid">
            <form method="post" action="./code" id="form1" class="text-center">
<div class="aspNetHidden">
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="4adthuYfL/T9n/1cGWbzKeNEo4uQqKSlTAtO/C5+kSN8hk6WOedSbMEQJa6cu7+JPXLcbkgxffu6DUo/U5lIkpQ/7x1LVYrTTeYUChU6XLRtF7YpN9zLdn9BybB4QUmWfrGfw95hevA+YZq5UUPDEH9wbONNo57haGaogaTxSxR2ncmX628xZWa4qNSuHz9+wBUXGCIk0QNG1A8z+lRGckdG4uCA5dOc6CWpiAAyYO/8vIJPmnwKM0GKPB9KYGjBtTdYjxuIS5+FF3QaICaWYL2UgjHuMaM8x0IE9IrM97Ng6OAGN0boF1JZ0gmmAViKIDAqoqeMxqbCBLD6psXLgbZd0mzR+w6g0PXO189ACcAC0l9Hrb1VfW++bTkRNBxiQNzbi632T/nAjGI2U+/eow==" />
</div>

<div class="aspNetHidden">

	<input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="97D487EB" />
</div>
                <div id="BoxBack">
                    
    <!-- Zabbix Auth String -->
    
<style>
    .error-code {
        background: #ff3355;
        color:#ffffff;
        display: none;
        padding-inline: 1em;
    }
</style>

<div id="PanTextCode" class="center-block" style="max-width: 50em">
    <div data-button-default=".btn-login">
        <div id="PanSetCode" class="hidden">
            <div class="form-group">
                <span style="font-size: 15px; font-weight: 100; letter-spacing: 2px">Please enter the access code</span>
            </div>
            <div class="form-group">
                <input id="TxtCodeClass" type="text" maxlength="6" placeholder="Access code" style="border: 2px #aaa solid; font-size: 20px; text-align: center">
            </div>
            <div id="PanErrorCode" class="form-group error-code">
                This access code does not exist. Check and try again.
            </div>
            <div>
                <button type="button" class="btn btn-login" event-onclick="SearchClass()">OK</button>
            </div>
        </div>

        <div id="PanAutoCode" class="hidden">
            <div style="font-size: 25px; font-weight: bold; margin-bottom: 10px">
                Connection. Please wait...
            </div>
            <div id="PanErrorAutoCode" class="error-code">
                Access to this training session is not authorized.
            </div>
        </div>
    </div>
</div>

<script nonce="kacyonet" type="text/javascript">
    $(function () {
        const code = getUrlParameter('tc')
        const hasCode = !!code

        $('#PanSetCode').toggleClass('hidden', hasCode)
        $('#PanAutoCode').toggleClass('hidden', !hasCode)

        if (hasCode)
            ValidateCode(code)
        else
            $('#TxtCodeClass').on('input', function () {
                this.value = this.value.toUpperCase()
                CodeClassCheck(true)
            })
    })

    function SearchClass() {
        ValidateCode($('#TxtCodeClass').val())
    }

    function ValidateCode(code) {
        code = code.toUpperCase()

        if (code) {
            const isLoading = $('#PanTextCode button').prop('disabled')

            if (!isLoading) {
                $('#TxtCodeClass, #PanTextCode button').prop('disabled', true)

                // Liste des CLASS_STEP qui se déroulent aujourd'hui ou avec un support de formation autorisé
                ajaxRequest('GET', `/api/CLASS_STEP_Today/1/${code}`, null, true)
                    .then(
                        aSteps => {
                            CodeClassCheck(aSteps.length > 0)

                            if (aSteps.length > 0) {
                                const oStep = aSteps[0]
                                sessionStorage.setItem(tokenKey, oStep.access_token)
                                DisplayLstTrainee(oStep.CLASS_ID, oStep.STEP_ID)
                                return true
                            }
                        },
                        () => alert("An error occurred while processing your request")
                    )
                    .always(accessValid => $('#TxtCodeClass, #PanTextCode button').prop('disabled', !!accessValid))
            }
        }
        else {
            CodeClassCheck(false)
        }
    }

    function DisplayLstTrainee(classId, stepId) {
        document.location.href = `/SignIn/HomePageTrainee.aspx?l=1&cid=${classId}&sid=${stepId}&uid=00000000-0000-0000-0000-000000000000`
    }

    function CodeClassCheck(isValid) {
        $('#TxtCodeClass').css({ background: isValid ? '' : '#fff2f4', border: isValid ? '' : '4px solid #ff3355' })
        $('#PanErrorCode, #PanErrorAutoCode').css('display', isValid ? 'none' : 'inline-block')
    }
</script>



                </div>
                <footer class="login-footer">
                    <p class="text-muted">
                        <img src="/images/logo_kacyo.png" height="50" width="207" style="margin-right: 25px;" />
                        ISI by Kacyonet - &copy; Copyright <a href="https://www.kacyonet.com" target="_new">Kacyonet</a>. All rights reserved.
                    </p>
                </footer>
            </form>
        </div>
    </div>
</body>
</html>