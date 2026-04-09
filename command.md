mkdir all-blobs
xcopy blob-report all-blobs /E /I /H /Y
npx playwright test test1 --reporter=blob
xcopy blob-report all-blobs /E /I /H /Y
npx playwright test test2 --reporter=blob
npx playwright merge-reports ./all-blobs --reporter html 
npx playwright show-report