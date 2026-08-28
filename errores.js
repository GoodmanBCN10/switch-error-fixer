const errorDatabase = [
    {
        codigo: "2002-4364",
        programa: "010000000000000C",
        titulo: "Crash de Atmosphere durante el arranque",
        alias: ["pantallazo al encender", "atmosphere no arranca", "error en el logo"],
        causas: ["Temas personalizados incompatibles con la nueva versión", "microSD en exFAT corrupta", "Datos de guardado corruptos"],
        solucion: "1. Si actualizaste recientemente, conecta la SD al PC, ve a 'atmosphere/contents' y borra la carpeta '0100000000001000' (Temas).\\n2. Comprueba si tu SD tiene errores (preferible usar FAT32).\\n3. Recrea la emuMMC si el fallo persiste.",
        fuente: "Reddit / Comunidad"
    },
    {
        codigo: "2002-1002",
        programa: "Varios (al iniciar juegos)",
        titulo: "Error de Tarjeta SD / Datos Corruptos en Juegos",
        alias: ["juego no abre", "datos dañados", "no me instalan los nsp"],
        causas: ["Partición de la emuNAND corrupta", "Juego mal instalado o archivos dañados", "Tarjeta microSD genérica/falsa o formateada en exFAT"],
        solucion: "1. Ve a Configuración -> Gestión de datos -> Programas, selecciona el juego y 'Comprobar si hay datos dañados'.\\n2. Si ocurre al instalar juegos nuevos, formatea la SD a FAT32 o comprueba si es falsa (H2testw).\\n3. Borra el juego y vuélvelo a instalar desde cero (DBI).",
        fuente: "GBATemp / Reddit"
    },
    {
        codigo: "std::abort() (0xffe)",
        programa: "010000000000bd00",
        titulo: "Módulo Mission Control Obsoleto",
        alias: ["fatal error occurred", "mando bluetooth", "crash al iniciar"],
        causas: ["El módulo Bluetooth (Mission Control) está desactualizado al subir la Switch a un nuevo firmware masivo."],
        solucion: "Ve a la carpeta 'atmosphere/contents/' en tu tarjeta SD y borra la carpeta '010000000000bd00'. Luego, descarga la última versión de Mission Control si quieres seguir usándolo.",
        fuente: "GitHub Issues (Atmosphère)"
    },
    {
        codigo: "2144-0001 (0x290)",
        programa: "Homebrew Menu / Álbum",
        titulo: "Falta de Memoria en Applet Mode",
        alias: ["error en el album", "homebrew crashea", "2168-0002"],
        causas: ["Intento de ejecutar homebrew pesado desde el modo Álbum (Applet Mode) en lugar de usar Title Redirect."],
        solucion: "No abras el Álbum directamente. En su lugar, mantén presionado el botón 'R' del mando derecho mientras inicias cualquier juego que tengas instalado en la consola. Esto abrirá el Homebrew Menu con acceso a toda la RAM.",
        fuente: "GBATemp & Reddit"
    },
    {
        codigo: "2002-3005",
        programa: "Boot / Arranque",
        titulo: "PRODINFO corrupto o Downgrade incorrecto",
        alias: ["no pasa de hekate", "emunand rota"],
        causas: ["Degradación (downgrade) de firmware incorrecta o corrupción en los archivos del sistema PRODINFO de la emuNAND."],
        solucion: "Debes reconstruir la emuMMC desde cero o restaurar una copia limpia de la NAND que tuvieras guardada previamente mediante Hekate.",
        fuente: "GBATemp"
    },
    {
        codigo: "Error Genérico",
        programa: "0100000000000025",
        titulo: "Restos Antiguos en Kernel/Boot",
        alias: ["pantalla negra despues de payload", "no carga atmosphere"],
        causas: ["Incompatibilidad crítica del gestor de arranque al arrancar emuMMC debido a restos de archivos antiguos."],
        solucion: "Realiza una instalación completamente limpia: borra las carpetas 'atmosphere' y 'bootloader' de tu SD y pon las versiones más recientes. (No sobreescribas, borra primero).",
        fuente: "GBATemp"
    },
    {
        codigo: "Pantalla Negra",
        programa: "Sysnand / Emunand",
        titulo: "Conflicto KIP / Lector SD",
        alias: ["no enciende", "se queda negro tras el logo", "no arranca"],
        causas: ["Conflicto con módulos KIP obsoletos (como el viejo fs_mitm.kip) o corrupción del lector de tarjetas SD de la consola."],
        solucion: "Revisa y limpia la carpeta 'atmosphere/kips/'. Si está vacía, prueba la estabilidad con otra tarjeta MicroSD formateada en FAT32 para descartar fallo de hardware del lector.",
        fuente: "ElOtroLado & Reddit"
    },
    {
        codigo: "Error de lectura",
        programa: "010041544D530000",
        titulo: "Rutas incorrectas en emummc.ini",
        alias: ["path config error", "no detecta la emunand"],
        causas: ["Error de sintaxis en las rutas del archivo de configuración de la emuMMC (uso de barras invertidas \\\\ en vez de /)."],
        solucion: "Abre el archivo 'emummc/emummc.ini' con un bloc de notas y corrige la ruta para que use barras normales (ejemplo: /emummc/Nintendo_emu en lugar de \\emummc\\Nintendo_emu).",
        fuente: "GitHub Issues (Atmosphère)"
    },
    {
        codigo: "2124-4007 / 2124-4508",
        programa: "Nintendo Network",
        titulo: "Consola Baneada por Nintendo",
        alias: ["baneo", "ban", "online no va", "servicios restringidos"],
        causas: ["Nintendo ha detectado telemetría modificada o juegos piratas instalados en la sysNAND y ha bloqueado el certificado de la consola."],
        solucion: "El baneo de hardware es permanente. No podrás usar los servicios oficiales de Nintendo online (eShop, juego online oficial) en esta consola nunca más. Solo podrás usar Tinfoil o LAN play.",
        fuente: "Nintendo Support"
    },
    {
        codigo: "2155-8007",
        programa: "DNS MITM / Network",
        titulo: "Error de conexión a servidores Nintendo (Bloqueado)",
        alias: ["no conecta al servidor", "error de red", "exosphere", "90dns"],
        causas: ["Estás bloqueando la telemetría de Nintendo con DNS MITM o Exosphere y un juego o servicio oficial intenta conectarse a los servidores."],
        solucion: "¡Esto es bueno! Significa que tus protecciones anti-baneo están funcionando. Si quieres jugar online a juegos legítimos, debes arrancar en sysNAND limpia (Stock) sin protecciones.",
        fuente: "GBATemp"
    },
    {
        codigo: "2162-0002",
        programa: "Varios Sysmodules (010000000000002B, etc.)",
        titulo: "Crasheo fatal en segundo plano",
        alias: ["crasheo de tesla", "sysdvr error", "fatal error atmosphere"],
        causas: ["Tienes un módulo (sysmodule) como Tesla Menu, SaltyNX, SysDVR, o EdiZon en segundo plano que es incompatible con la versión actual de Atmosphère."],
        solucion: "Ve a la tarjeta SD en la ruta 'atmosphere/contents/' y busca la carpeta que coincida con el ID del programa que te da el error (ej: 010000000000002B) y bórrala.",
        fuente: "Reddit (r/SwitchPirates)"
    },
    {
        codigo: "2123-1502",
        programa: "Tinfoil / Instalador",
        titulo: "Error de Sigpatches / Comunicación",
        alias: ["tinfoil error", "no descarga", "falla la instalacion"],
        causas: ["Normalmente ocurre al intentar instalar actualizaciones o juegos sin tener los parches de firma (sigpatches) actualizados, o por inestabilidad de la red."],
        solucion: "Asegúrate de instalar los últimos sigpatches correspondientes a tu versión de Atmosphère. Si el problema persiste, cambia las DNS de tu red Wi-Fi a las de Google (8.8.8.8).",
        fuente: "ElOtroLado"
    },
    {
        codigo: "2168-0001",
        programa: "0100000000001000 (Home Menu)",
        titulo: "Corrupción del Menú (exFAT)",
        alias: ["crash al salir del juego", "error al ir al home"],
        causas: ["Generalmente provocado por el controlador exFAT de Nintendo corrompiendo los archivos de temas de Atmosphère o archivos del sistema al salir de aplicaciones pesadas."],
        solucion: "Si tienes un tema personalizado, bórralo (carpeta '0100000000001000' en contents). Para una solución definitiva, copia tus archivos al PC y formatea la microSD en FAT32.",
        fuente: "GitHub Issues"
    },
    {
        codigo: "2016-0601",
        programa: "Gestión de Datos",
        titulo: "Fallo de Lectura de la MicroSD",
        alias: ["sd card read error", "no lee la tarjeta"],
        causas: ["La tarjeta SD está defectuosa físicamente, es falsa (capacidad inflada), o la ranura (lector de tarjetas de la consola) tiene suciedad/está roto."],
        solucion: "1. Prueba la SD en tu ordenador con un software como H2testw para verificar si es falsa.\\n2. Si la SD está bien, puede que el lector flex de la Switch esté fallando y necesite reemplazo físico.",
        fuente: "Reddit"
    },
    {
        codigo: "2101-0001",
        programa: "Hardware (Carga)",
        titulo: "Cortocircuito en el chip M92T36",
        alias: ["no enciende la pantalla", "solo modo RCM pero no carga", "M92T36"],
        causas: ["Esto no es un error de software. Es un fallo de hardware muy común: el chip de control de carga USB-C (M92T36) o el chip de vídeo (P13USB) se han quemado."],
        solucion: "Lamentablemente la única solución es enviar la consola a un técnico especializado en microsoldadura para que reemplace el chip quemado de la placa base.",
        fuente: "GBATemp (Hardware subforum)"
    },
    {
        codigo: "2005-0003",
        programa: "Instalador NSP/XCI",
        titulo: "Archivo NSP o Tarjeta SD Corruptos",
        alias: ["error instalando juego", "dbi error", "falla al instalar nsp"],
        causas: ["El archivo del juego (.nsp/.xci) está incompleto, o estás instalando un juego superior a 4GB en una tarjeta corrupta."],
        solucion: "Vuelve a descargar el archivo del juego desde otra fuente de confianza e instálalo preferiblemente mediante cable USB con DBI (Modo MTP) en lugar de instalarlo copiando a la SD.",
        fuente: "Comunidad Scene"
    },
    {
        codigo: "Failed to parse package3",
        programa: "Bootloader / Hekate",
        titulo: "Error al cargar package3 (Atmosphère)",
        alias: ["error package_3", "package3", "package 3", "no arranca atmosphere"],
        causas: ["Archivos de Atmosphère desactualizados o faltantes para el firmware actual de la consola.", "Has actualizado Hekate pero se te olvidó actualizar los archivos de Atmosphère en tu tarjeta SD."],
        solucion: "Debes actualizar Atmosphère. Descarga la última versión oficial (el archivo .zip 'release'), extrae su contenido y cópialo a la raíz de tu tarjeta SD, reemplazando la carpeta 'atmosphere' anterior.",
        fuente: "GBATemp / Reddit"
    },
    {
        codigo: "Warmboot Error",
        programa: "Sleep Mode (Modo Espera)",
        titulo: "Error de Warmboot",
        alias: ["error warmboot", "crashea al despertar", "failed to mount warmboot", "pantalla negra suspension"],
        causas: ["Incompatibilidad de firmware al intentar despertar la consola. Suele pasar en consolas Mariko o al hacer downgrades (bajar de versión) sin quemar efuses, haciendo que el firmware del warmboot no coincida."],
        solucion: "Generalmente se soluciona asegurándote de usar la versión correcta de Hekate y Atmosphère para tu firmware, o reparando/reinstalando el firmware de la consola limpiamente mediante Daybreak.",
        fuente: "GitHub Issues (SciresM)"
    },
    {
        codigo: "Failed to init emuMMC",
        programa: "Hekate / emuMMC",
        titulo: "Fallo al iniciar la partición emuMMC",
        alias: ["error emummc", "no encuentra emunand", "forced but not enabled", "pantalla roja hekate"],
        causas: ["La partición oculta de la emuNAND en la tarjeta SD se ha corrompido, tu SD está muriendo/es falsa, o has cambiado de tarjeta copiando y pegando mal (las particiones ocultas no se copian así)."],
        solucion: "1. Ve a Hekate -> emuMMC -> Migrate y fíjate si te la detecta para poder arreglarla.\\n2. Revisa que el archivo 'emummc/emummc.ini' apunte al sector correcto de tu SD.\\n3. Si la partición está corrupta sin arreglo, tendrás que extraer tus partidas guardadas (con software como NxNandManager en PC) y crear una emuMMC desde cero.",
        fuente: "ElOtroLado / Scene"
    },
    {
        codigo: "No main boot entries found",
        programa: "Hekate (hekate_ipl.ini)",
        titulo: "Falta configuración de arranque (hekate_ipl.ini)",
        alias: ["error hekate_ipl", "no me salen los botones en hekate", "boot entries", "missing ipl"],
        causas: ["Hekate ha arrancado correctamente (el menú táctil), pero no sabe qué hacer porque le falta el archivo de texto que le dice dónde está y cómo cargar Atmosphère."],
        solucion: "Debes crear (o descargar de un pack confiable) un archivo llamado 'hekate_ipl.ini' y colocarlo dentro de la carpeta 'bootloader' de tu SD. Ese archivo contiene los botones que te aparecen en el menú 'Launch' para arrancar sysNAND o emuNAND.",
        fuente: "GitHub / GBATemp"
    },
    {
        codigo: "The software was closed",
        programa: "Horizon OS / Juegos",
        titulo: "Se ha cerrado el programa a causa de un error",
        alias: ["se ha cerrado el programa", "juego se cierra solo", "software closed error", "error generico juego"],
        causas: ["Es el mensaje de error más genérico de Nintendo. Ocurre cuando un juego requiere un firmware mayor al que tienes, faltan sigpatches, hay un mod incompatible (ej. mods de Smash Bros o Zelda), o los datos del juego están corruptos."],
        solucion: "1. Actualiza tus parches de firmas (sigpatches).\\n2. Comprueba si el juego requiere un firmware de consola más alto del que tienes instalado.\\n3. Si tienes mods instalados (en 'atmosphere/contents/[TitleID]'), bórralos temporalmente para descartar conflictos.\\n4. Verifica datos corruptos desde las opciones de la consola.",
        fuente: "Nintendo / Comunidad"
    },
    {
        codigo: "2168-0002 (0x4a8)",
        programa: "0100000000000023 (AM)",
        titulo: "Crasheo del Application Manager",
        alias: ["error 0100000000000023", "0x4a8", "error al abrir juego sysmodule"],
        causas: ["El gestor de aplicaciones (Application Manager) de la consola se ha bloqueado. Casi siempre ocurre por culpa de un sysmodule en segundo plano que está desactualizado (como sys-clk, sys-botbase, SaltyNX, etc.) o un tema incompatible."],
        solucion: "1. Conecta tu tarjeta SD al PC y ve a la ruta 'atmosphere/contents/'.\\n2. Renombra la carpeta 'contents' a 'contents_bak' para desactivar todos los mods temporalmente.\\n3. Si la consola arranca y funciona bien, el problema era uno de esos sysmodules. Elimínalos o descárgalos actualizados para tu firmware.",
        fuente: "GitHub Issues / Reddit"
    }
];
