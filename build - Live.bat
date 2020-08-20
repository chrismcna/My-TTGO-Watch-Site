set /p temp="This is Live build, Hit enter to continue"
call npm run build
docker build -t mcna/images:My-TTGO-Watch-Site .
docker push mcna/images:My-TTGO-Watch-Site
set /p temp="Hit enter to continue"