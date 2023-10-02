@ECHO OFF
echo == HTML check ==
call .\auto-validation\_syntax-validatie\vnu-runtime-image\bin\vnu.bat --skip-non-html --Werror --stdout --format text .  > validatie-html.txt
echo == CSS check ==
call .\auto-validation\_syntax-validatie\vnu-runtime-image\bin\vnu.bat --skip-non-css --Werror --stdout --format text .  > validatie-css.txt
echo == Conventies check ==
call .\auto-validation\_conventies-validatie\local-auto-validator.exe