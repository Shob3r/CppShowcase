#include <iostream>
#include <windows.h>
#include <stdio.h>
#include <curl/curl.h>
#include <git2.h>
#include <winhttp.h>

#pragma comment(lib, "WinHTTP.lib")
#pragma comment(lib, "git2.lib")

using namespace std;

int main() {
    HINTERNET hSession = WinHttpOpen(L"PersonalPInternetChecker",
        WINHTTP_ACCESS_TYPE_AUTOMATIC_PROXY,
        WINHTTP_NO_PROXY_NAME,
        WINHTTP_NO_PROXY_BYPASS, 0);
    if (hSession) {
        HINTERNET hConnect = WinHttpConnect(hSession, L"www.google.com",
            INTERNET_DEFAULT_HTTPS_PORT, 0);
        if (hConnect) {
            int result = MessageBoxEx(NULL, L"Do you have Node.Js installed on your computer?", L"Pre-Start checks", MB_YESNO | MB_ICONQUESTION | MB_DEFBUTTON2 | MB_APPLMODAL | MB_SETFOREGROUND | MB_TOPMOST, LANG_NEUTRAL);

            if (result == IDYES) {
                // The user will never select yes, they don't even know what Node.Js is lmao
                MessageBoxEx(NULL, L"Good to know! this program will now download and install the source code", L"About to download", MB_OK) | MB_ICONWARNING | MB_DEFBUTTON1 | MB_APPLMODAL | MB_SETFOREGROUND | MB_TOPMOST);

            }
            else if (result == IDNO) {
                // Always going to be what the user selects lmao
                MessageBoxEx(NULL, L"This app will now download node.js to compile and run the app", L"About to download", MB_OK | MB_ICONASTERISK | MB_APPLMODAL | MB_SETFOREGROUND | MB_TOPMOST, LANG_NEUTRAL);
                
            }

            return 0;
        }
        else {
            MessageBoxEx(NULL, L"Could not connect to the internet! run this file again once you have connected to the internet", L"Error!", MB_OK | MB_ICONERROR | MB_APPLMODAL | MB_SETFOREGROUND | MB_TOPMOST, LANG_NEUTRAL);
            return 1;
        }
    }
    else {
        MessageBoxEx(NULL, L"Could not start WinHttp! this error is probably related to you still being on Windows 95 or you have something really wrong with your PC", L"Error!", MB_OK | MB_ICONERROR | MB_APPLMODAL | MB_SETFOREGROUND | MB_TOPMOST, LANG_NEUTRAL);
        return 1;
    }
}

    