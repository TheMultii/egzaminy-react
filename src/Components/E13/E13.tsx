import QuizQuestion from "../QuizQuestion/QuizQuestion";
import "./E13.scss"
import {useState} from "react";

export default function E13() {

    const [questions, setQuestions] = useState([
        {
            "Pytanie": "Kompatybilne podzespo\u0142y oznaczono w tabeli numerami",
            "IMG": "https://egzamin-informatyk.pl/ee08/1570.png",
            "B1": "B. 1, 3, 5",
            "B2": "C. 1, 4, 6",
            "B3": "D. 2, 4, 6",
            "P": "A. 2, 4, 5"
        },
        {
            "Pytanie": "Polecenie umo\u017cliwiaj\u0105ce poznanie adres&oacute;w fizycznych dla kart sieciowych w systemie to",
            "IMG": "",
            "B1": "A. pathping",
            "B2": "B. arp -a",
            "B3": "D. ping",
            "P": "C. getmac"
        },
        {
            "Pytanie": "Jaka jest liczba adres&oacute;w, kt&oacute;re mo\u017cna przydzieli\u0107 urz\u0105dzeniom pracuj\u0105cym w sieci o adresie IP 192.168.20.0/26?",
            "IMG": "",
            "B1": "A. 126",
            "B2": "B. 4",
            "B3": "D. 30",
            "P": "C. 62"
        },
        {
            "Pytanie": "Na ilustracji zaznaczono strza\u0142kami funkcj\u0119 przycisk&oacute;w znajduj\u0105cych si\u0119 na obudowie projektora multimedialnego. Za pomoc\u0105 tych przycisk&oacute;w mo\u017cna",
            "IMG": "https://egzamin-informatyk.pl/ee08/1585.png",
            "B1": "A. prze\u0142\u0105cza\u0107 sygna\u0142y wej\u015bciowe",
            "B2": "B. zmienia\u0107 poziom jasno\u015bci obrazu",
            "B3": "D. regulowa\u0107 odwzorowanie przestrzeni kolor&oacute;w",
            "P": "C. regulowa\u0107 zniekszta\u0142cony obraz"
        },
        {
            "Pytanie": "Odnalezienie g\u0142&oacute;wnego rekordu rozruchowego, wczytuj\u0105cego system z aktywnej partycji umo\u017cliwia",
            "IMG": "",
            "B1": "A. GUID Partition Table",
            "B2": "B. CDDL",
            "B3": "C. POST",
            "P": "D. BootstrapLoader"
        },
        {
            "Pytanie": "Odmian\u0105 pami\u0119ci tylko do odczytu, kt&oacute;r\u0105 mo\u017cna wykasowa\u0107 za pomoc\u0105 \u015bwiat\u0142a ultrafioletowego, jest pami\u0119ci\u0105",
            "IMG": "",
            "B1": "A. ROM",
            "B2": "C. PROM",
            "B3": "D. EEPROM",
            "P": "B. EPROM"
        },
        {
            "Pytanie": "Aby sprawdzi\u0107, kt&oacute;ry program najbardziej obci\u0105\u017ca procesor w systemie Windows, nale\u017cy uruchomi\u0107 program:",
            "IMG": "",
            "B1": "B. msconfig",
            "B2": "C. dxdiag",
            "B3": "D. regedit",
            "P": "A. mened\u017cer zada\u0144"
        },
        {
            "Pytanie": "W kt&oacute;rej topologii fizycznej sieci ka\u017cde urz\u0105dzenie sieciowe ma dok\u0142adnie dwa po\u0142\u0105czenia, po jednym dla swoich najbli\u017cszych s\u0105siad&oacute;w, a dane s\u0105 przesy\u0142ane od jednego komputera do nast\u0119pnego w p\u0119tli?",
            "IMG": "",
            "B1": "A. Gwiazdy",
            "B2": "B. Drzewa",
            "B3": "C. Siatki",
            "P": "D. Pier\u015bcienia"
        },
        {
            "Pytanie": "Wymiana baterii nale\u017cy do czynno\u015bci zwi\u0105zanych z eksploatacj\u0105",
            "IMG": "",
            "B1": "A. drukarki laserowej",
            "B2": "C. skanera p\u0142askiego",
            "B3": "D. telewizora projekcyjnego",
            "P": "B. myszy bezprzewodowej"
        },
        {
            "Pytanie": "Programem s\u0142u\u017c\u0105cym do wy\u015bwietlenia listy aktywnych urz\u0105dze\u0144 pracuj\u0105cych w sieci LAN jest",
            "IMG": "",
            "B1": "B. Ultimate Boot",
            "B2": "C. Netstat",
            "B3": "D. Ace Utilities",
            "P": "A. Advanced IP Scaner"
        },
        {
            "Pytanie": "Na zamieszczonym zrzucie panelu konfiguracyjnego rutera wida\u0107, \u017ce serwer DHCP",
            "IMG": "https://egzamin-informatyk.pl/e13/178.jpg",
            "B1": "A. przydziela adresy IP z zakresu 192.168.1.1 - 192.168.1.10",
            "B2": "B. mo\u017ce przydzieli\u0107 maksymalnie 154 adresy IP",
            "B3": "C. przydziela adresy IP z zakresu 192.168.1.1 - 192.168.1.100",
            "P": "D. mo\u017ce przydzieli\u0107 maksymalnie 10 adres&oacute;w IP"
        },
        {
            "Pytanie": "Zapis liczby siedem w systemie &oacute;semkowym to",
            "IMG": "",
            "B1": "A. 7(b)",
            "B2": "C. 7(d)",
            "B3": "D. 7(h)",
            "P": "B. 7(o)"
        },
        {
            "Pytanie": "Mechanizm umo\u017cliwiaj\u0105cy pod\u0142\u0105czenie urz\u0105dze\u0144 peryferyjnych wsp&oacute;\u0142pracuj\u0105cych z systemem komputerowym, w kt&oacute;rym pod\u0142\u0105czane urz\u0105dzenie jest rozpoznawane za pomoc\u0105 nadanego mu numeru identyfikacyjnego, to ",
            "IMG": "",
            "B1": "A. BootLoader",
            "B2": "B. Hot Swap",
            "B3": "D. CrossFire",
            "P": "C. Plug and Play"
        },
        {
            "Pytanie": "W jakich jednostkach wyra\u017cony przes\u0142uch zbli\u017cny NEXT?",
            "IMG": "",
            "B1": "A. w amperach",
            "B2": "B. w omach",
            "B3": "C. w d\u017culach",
            "P": "D. w decybelach"
        },
        {
            "Pytanie": "Medium transmisyjne odporne na zak\u0142&oacute;cenia elektromagnetyczne i atmosferyczne to",
            "IMG": "",
            "B1": "B. gruby kabel koncentryczny",
            "B2": "C. skr\u0119tka typu UTP",
            "B3": "D. cienki kabel koncentryczny",
            "P": "A. \u015bwiat\u0142ow&oacute;d"
        },
        {
            "Pytanie": "Jak\u0105 funkcj\u0119 pe\u0142ni podzesp&oacute;\u0142 wskazany strza\u0142k\u0105 na schemacie chipsetu p\u0142yty g\u0142&oacute;wnej ?",
            "IMG": "https://egzamin-informatyk.pl/new/295.jpg",
            "B1": "A. Pozwala wykorzysta\u0107 typowe pami\u0119ci DDR SDRAM",
            "B2": "B. Umo\u017cliwia po\u0142\u0105czenie i korzystanie z pami\u0119ci DDR 400 jako DUAL Channel w celu zachowania zgodno\u015bci z DUAL Channel DDR2 800",
            "B3": "D. Umo\u017cliwia korzystanie z pami\u0119ci DDR3-800 i DDR2-800 jako DUAL Channel",
            "P": "C. Pozwala wykorzysta\u0107 magistral\u0119 o szeroko\u015bci 128 bit&oacute;w do przesy\u0142ania danych pomi\u0119dzy pami\u0119ci\u0105 RAM, a kontrolerem pami\u0119ci"
        },
        {
            "Pytanie": "Transmisja interfejsem r&oacute;wnoleg\u0142ym synchronicznym cechuje si\u0119 tym, \u017ce",
            "IMG": "",
            "B1": "A. pocz\u0105tek i koniec przesy\u0142anych bit po bicie danych jest oznaczony bitem startu i stopu",
            "B2": "C. dane s\u0105 przesy\u0142ane jednocze\u015bnie ca\u0142\u0105 szeroko\u015bci\u0105 magistrali, a pocz\u0105tek i koniec transmisji jest oznaczony bitem startu i stopu",
            "B3": "D. dane s\u0105 przesy\u0142ane bit po bicie w wyznaczonych okresach czasu okre\u015blanych sygna\u0142em zegarowym CLK",
            "P": "B. w wyznaczonych okresach czasu okre\u015blanych sygna\u0142em zegarowym CLK dane przesy\u0142ane s\u0105 jednocze\u015bnie kilkoma przewodami"
        },
        {
            "Pytanie": "Kt&oacute;ry adres IP jest adresem urz\u0105dzenia pracuj\u0105cego w sieci 10.0.0.0/17?",
            "IMG": "",
            "B1": "A. 10.0.128.254",
            "B2": "C. 10.0.128.127",
            "B3": "D. 10.0.254.128",
            "P": "B. 10.0.127.128"
        },
        {
            "Pytanie": "Jakie oprogramowanie, zapobiegaj\u0105ce w\u0142amaniu do sieci, nale\u017cy zainstalowa\u0107 na serwerze udost\u0119pniaj\u0105cym po\u0142\u0105czenie z internetem?",
            "IMG": "",
            "B1": "A. DHCP",
            "B2": "C. Active Directory",
            "B3": "D. DNS",
            "P": "B. FireWall"
        },
        {
            "Pytanie": "Aby zapewni\u0107 najwi\u0119ksze bezpiecze\u0144stwo danych przy wykorzystaniu dok\u0142adnie 3 dysk&oacute;w, powinny one by\u0107 zapisywane w macierzy dyskowej",
            "IMG": "",
            "B1": "A. RAID 6",
            "B2": "C. RAID 10",
            "B3": "D. RAID 50",
            "P": "B. RAID 5"
        },
        {
            "Pytanie": "Kt&oacute;rym elementem sieci SIP jest telefon IP?",
            "IMG": "",
            "B1": "A. Serwerem przekierowa\u0144",
            "B2": "B. Serwerem Proxy SIP",
            "B3": "C. Serwerem rejestracji SIP",
            "P": "D. Terminalem ko\u0144cowym"
        },
        {
            "Pytanie": "Kt&oacute;ry tryb pracy Access Pointa jest stosowany dla zapewnienia urz\u0105dzeniom bezprzewodowym dost\u0119pu do przewodowej sieci LAN?",
            "IMG": "",
            "B1": "A. Most bezprzewodowy",
            "B2": "C. Tryb klienta",
            "B3": "D. Repeater",
            "P": "B. Punkt dost\u0119powy"
        },
        {
            "Pytanie": "W celu promowania serwera do roli kontrolera domeny w systemach Windows Server nale\u017cy zastosowa\u0107 polecenie",
            "IMG": "",
            "B1": "A. winnt32",
            "B2": "C. regsvr32",
            "B3": "D. dcgpofix",
            "P": "B. dcpromo"
        },
        {
            "Pytanie": "U\u017cytkownik zamierza zainstalowa\u0107 32-bitowy system operacyjny Windows 7. Ile minimalnie pami\u0119ci RAM musi posiada\u0107 komputer, aby by\u0142a mo\u017cliwa praca w trybie graficznym?",
            "IMG": "",
            "B1": "A. 512 MB",
            "B2": "C. 2 GB",
            "B3": "D. 256 MB",
            "P": "B. 1 GB"
        },
        {
            "Pytanie": "Ustawa z dnia 14 grudnia 2012r. o odpadach nakazuje",
            "IMG": "",
            "B1": "A. neutralizacj\u0119 odpad&oacute;w w dowolny spos&oacute;b w jak najkr&oacute;tszym czasie",
            "B2": "B. sk\u0142adowanie odpad&oacute;w maksymalnie przez 1 rok",
            "B3": "D. spalenie odpad&oacute;w w jak najwy\u017cszej temperaturze",
            "P": "C. poddanie odpad&oacute;w w pierwszej kolejno\u015bci odzyskowi"
        },
        {
            "Pytanie": "W systemie Linux ustawiono prawa dostepu do folderu okre\u015blone w postaci ci\u0105gu znak&oacute;w rwx--x--x. Jakiej warto\u015bci numerycznej odpowiadaj\u0105 te prawa?",
            "IMG": "",
            "B1": "A. 621",
            "B2": "B. 543",
            "B3": "C. 777",
            "P": "D. 711"
        },
        {
            "Pytanie": "Jak musz\u0105 by\u0107 ustawione prawa dost\u0119pu w systemie Linux, aby tylko jego w\u0142a\u015bciciel m&oacute;g\u0142 zapisywa\u0107 w danym katalogu?",
            "IMG": "",
            "B1": "B. rwxr-xrwx",
            "B2": "C. r-xr-xrwx",
            "B3": "D. r-xrwxr-x",
            "P": "A. rwxr-xr-x"
        },
        {
            "Pytanie": "W architekturze sieci lokalnych typu klient-serwer",
            "IMG": "",
            "B1": "A. ka\u017cdy komputer zar&oacute;wno udost\u0119pnia jak i korzysta z zasob&oacute;w innych komputer&oacute;w",
            "B2": "C. wszystkie komputery klienckie maj\u0105 dost\u0119p do zasob&oacute;w komputerowych",
            "B3": "D. \u017caden z komputer&oacute;w nie pe\u0142ni roli nadrz\u0119dnej w stosunku do pozosta\u0142ych",
            "P": "B. wyr&oacute;\u017cnione komputery pe\u0142ni\u0105 rol\u0119 serwer&oacute;w udost\u0119pniaj\u0105cych zasoby, a pozosta\u0142e komputery z tych zasob&oacute;w korzystaj\u0105"
        },
        {
            "Pytanie": "Natychmiast po zauwa\u017ceniu utraty wa\u017cnych plik&oacute;w na dysku twardym u\u017cytkownik powinien",
            "IMG": "",
            "B1": "A. przeprowadzi\u0107 test S.M.A.R.T. tego dysku",
            "B2": "B. wykona\u0107 defragmentacj\u0119 dysku",
            "B3": "D. zainstalowa\u0107 program diagnostyczny",
            "P": "C. uchroni\u0107 dysk przed zapisem nowych danych"
        },
        {
            "Pytanie": "Zmniejszenie liczby jedynek w masce umo\u017cliwi zaadresowanie",
            "IMG": "",
            "B1": "A. mniejszej liczby sieci i mniejszej liczby urz\u0105dze\u0144",
            "B2": "B. wi\u0119kszej liczby sieci i wi\u0119kszej liczby urz\u0105dze\u0144",
            "B3": "D. wi\u0119kszej liczby sieci i mniejszej liczby urz\u0105dze\u0144",
            "P": "C. mniejszej liczby sieci i wi\u0119kszej liczby urz\u0105dze\u0144"
        },
        {
            "Pytanie": "Norma PN-EN 50174 nie zawiera wytycznych dotycz\u0105cych",
            "IMG": "",
            "B1": "A. zapewnienia jako\u015bci instalacji okablowania",
            "B2": "C. wykonania instalacji na zewn\u0105trz budynk&oacute;w",
            "B3": "D. wykonania instalacji wewn\u0105trz budynk&oacute;w",
            "P": "B. uziemie\u0144 instalacji urz\u0105dze\u0144 przetwarzania danych"
        },
        {
            "Pytanie": "Kt&oacute;ry typ routingu najlepiej zastosowa\u0107 w rozbudowanych, szybko zmieniaj\u0105cych si\u0119 sieciach?",
            "IMG": "",
            "B1": "A. Statyczny",
            "B2": "C. Zewn\u0119trzny",
            "B3": "D. Lokalny",
            "P": "B. Dynamiczny"
        },
        {
            "Pytanie": "Urz\u0105dzenie, na kt&oacute;rym mo\u017cna dokona\u0107 konfiguracji sieci VLAN, to",
            "IMG": "",
            "B1": "A. most przezroczysty (transparent bridge)",
            "B2": "B. firewall",
            "B3": "D. regenerator (repeater)",
            "P": "C. switch"
        },
        {
            "Pytanie": "Do konfiguracji interfejsu sieciowego w systemie Linux s\u0142u\u017cy polecenie",
            "IMG": "",
            "B1": "A. networking",
            "B2": "B. interfaces",
            "B3": "D. ipconfig",
            "P": "C. ifconfig"
        },
        {
            "Pytanie": "W systemie Linux polecenie ps spowoduje wy\u015bwietlenie",
            "IMG": "",
            "B1": "A. listy aktualnych proces&oacute;w drukowania",
            "B2": "C. konfiguracji serwera drukarek Print Server",
            "B3": "D. konfiguracji Proxy Server",
            "P": "B. listy aktualnych proces&oacute;w zalogowanego u\u017cytkownika"
        },
        {
            "Pytanie": "Liczba 110011(2) zapisana w systemie dziesi\u0119tnym ma posta\u0107",
            "IMG": "",
            "B1": "A. 53",
            "B2": "B. 50",
            "B3": "D. 52",
            "P": "C. 51"
        },
        {
            "Pytanie": "Element oznaczony numerem 1 na schemacie blokowym procesora jest odpowiedzialny za",
            "IMG": "https://egzamin-informatyk.pl/old/714.jpg",
            "B1": "A. przechowywanie wyniku operacji",
            "B2": "B. przechowywanie dodatkowych informacji o wykonywanej operacji",
            "B3": "C. wykonywanie operacji na blokach danych",
            "P": "D. wykonywanie operacji na liczbach zmiennoprzecinkowych"
        },
        {
            "Pytanie": "Zabrudzony czytnik w nap\u0119dzie optycznym powinno si\u0119 czy\u015bci\u0107",
            "IMG": "",
            "B1": "B. rozpuszczalnikiem ftalowym",
            "B2": "C. benzyn\u0105 ekstrakcyjn\u0105",
            "B3": "D. spirytusem",
            "P": "A. izopropanolem"
        },
        {
            "Pytanie": "Oprogramowanie, przypisane do jednego komputera lub jego cz\u0119\u015bci, uniemo\u017cliwiaj\u0105ce ponown\u0105 instalacj\u0119 na nowszym sprz\u0119cie zakupionym przez tego samego u\u017cytkownika, to",
            "IMG": "",
            "B1": "A. CPL",
            "B2": "C. MPL",
            "B3": "D. MOLP",
            "P": "B. OEM"
        },
        {
            "Pytanie": "Do przetestowania dzia\u0142ania serwera DNS w systemach Windows Server mo\u017cna u\u017cy\u0107 narz\u0119dzia nslookup. Je\u017celi jako argument polecenia u\u017cyje si\u0119 nazwy komputera, np. nslookup host.domena.com, to nast\u0105pi sprawdzenie",
            "IMG": "",
            "B1": "B. strefy przeszukiwania wstecz",
            "B2": "C. obu stref przeszukiwania, najpierw wstecz a nast\u0119pnie do przodu",
            "B3": "D. aliasu wprowadzonego dla rekordu adresu domeny",
            "P": "A. strefy przeszukiwania do przodu"
        },
        {
            "Pytanie": "Pami\u0119\u0107 oznaczona symbolem PC3200 nie mo\u017ce wsp&oacute;\u0142pracowa\u0107 z magistral\u0105",
            "IMG": "",
            "B1": "A. 300 MHz",
            "B2": "B. 400 MHz",
            "B3": "C. 333 MHz",
            "P": "D. 533 MHz"
        },
        {
            "Pytanie": "Do centralnego zarz\u0105dzania konfiguracj\u0105 grup komputer&oacute;w i u\u017cytkownik&oacute;w w systemach Windows Server nale\u017cy zastosowa\u0107 narz\u0119dzie",
            "IMG": "",
            "B1": "A. MMC",
            "B2": "B. UNC",
            "B3": "D. RDP",
            "P": "C. GPMC"
        },
        {
            "Pytanie": "Z\u0142\u0105cze SC nale\u017cy zamontowa\u0107 na kablu",
            "IMG": "",
            "B1": "A. typu skr\u0119tka",
            "B2": "B. telefonicznym",
            "B3": "D. koncentrycznym",
            "P": "C. \u015bwiat\u0142owodowym"
        },
        {
            "Pytanie": "Dana jest sie\u0107 o adresie 172.16.0.0/16. Kt&oacute;re z adres&oacute;w sieci 172.16.0.0/16 s\u0105 prawid\u0142owe, je\u015bli zostan\u0105 wydzielone cztery podsieci o masce 18 bitowej?",
            "IMG": "",
            "B1": "B. 172.16.64.0, 172.16.64.64, 172.16.64.128, 172.16.64.192\n",
            "B2": "C. 172.16.64.0, 172.16.0.128, 172.16.192.0, 172.16.0.255",
            "B3": "D. 172.16.0.0, 172.16.0.64, 172.16.0.128, 172.16.0.192\n",
            "P": "A. 172.16.0.0, 172.16.64.0, 172.16.128.0, 172.16.192.0"
        },
        {
            "Pytanie": "Maska w postaci pe\u0142nej podsieci o prefiksie /25 to",
            "IMG": "",
            "B1": "A. 255.255.255.192",
            "B2": "C. 255.255.255.240",
            "B3": "D. 255.255.255.224",
            "P": "B. 255.255.255.128"
        },
        {
            "Pytanie": "Jak jest nazywana transmisja dwukierunkowa w sieci Ethernet?",
            "IMG": "",
            "B1": "A. Duosimplex",
            "B2": "C. Simplex",
            "B3": "D. Half duplex",
            "P": "B. Full duplex"
        },
        {
            "Pytanie": "W systemie Windows do instalacji aktualizacji oraz przywracania sterownik&oacute;w urz\u0105dze\u0144 nale\u017cy u\u017cy\u0107 przystawki",
            "IMG": "",
            "B1": "B. fsmgmt.msc",
            "B2": "C. wmimgmt.msc",
            "B3": "D. certmgr.msc",
            "P": "A. devmgmt.msc"
        },
        {
            "Pytanie": "W systemie Linux wy\u015bwietlenie informacji o uruchomionych procesach umo\u017cliwia polecenie",
            "IMG": "",
            "B1": "A. su",
            "B2": "B. ls",
            "B3": "D. rm",
            "P": "C. ps"
        },
        {
            "Pytanie": "Kt&oacute;rej kategorii skr\u0119tka umo\u017cliwia transmisj\u0119 danych w pa\u015bmie cz\u0119stotliwo\u015bci nie wi\u0119kszym ni\u017c 100 MHz o przepustowo\u015bci do 1 Gb/s?",
            "IMG": "",
            "B1": "A. Kategorii 6a",
            "B2": "B. Kategorii 6",
            "B3": "D. Kategorii 3",
            "P": "C. Kategorii 5e"
        },
        {
            "Pytanie": "Jak\u0105 liczb\u0119 adres&oacute;w urz\u0105dze\u0144 sieciowych zapewnia do dyspozycji stosowanie klasy adresowej C w sieciach opartych na rodzinie protoko\u0142&oacute;w TCP/IP?",
            "IMG": "",
            "B1": "B. 100",
            "B2": "C. 256",
            "B3": "D. 200",
            "P": "A. 254"
        },
        {
            "Pytanie": "W systemie Linux mamy nast\u0119puj\u0105ce prawa dost\u0119pu do pewnego pliku rwxr--r-- . Jakim poleceniem zmienimy je na rwxrwx---?",
            "IMG": "",
            "B1": "B. chmod 221 nazwapliku",
            "B2": "C. chmod 544 nazwapliku",
            "B3": "D. chmod 755 nazwapliku",
            "P": "A. chmod 770 nazwapliku"
        },
        {
            "Pytanie": "W metodzie dost\u0119pu do no\u015bnika CSMA/CD (Carrier Sense Multiple Access with Collision Detection) stacja, kt&oacute;ra zamierza rozpocz\u0105\u0107 nadawanie, nas\u0142uchuje czy w sieci odbywa si\u0119 ruch, a nast\u0119pnie",
            "IMG": "",
            "B1": "B. wysy\u0142a zg\u0142oszenie \u017c\u0105dania transmisji",
            "B2": "C. oczekuje na nadanie priorytetu transmisji przez koncentrator",
            "B3": "D. oczekuje \u017cetonu zezwalaj\u0105cego rozpocz\u0119cie nadawania",
            "P": "A. po wykryciu ruchu w sieci czeka a\u017c no\u015bnik b\u0119dzie wolny"
        },
        {
            "Pytanie": "Aby zapobiec wyst\u0119powaniu r&oacute;\u017cnic w kolorach mi\u0119dzy zeskanowanymi zdj\u0119ciami wy\u015bwietlanymi na monitorze komputerowym a ich orygina\u0142ami, nale\u017cy wykona\u0107",
            "IMG": "",
            "B1": "A. modelowanie skanera",
            "B2": "C. kadrowanie skanera",
            "B3": "D. interpolacj\u0119 skanera",
            "P": "B. kalibracj\u0119 skanera"
        },
        {
            "Pytanie": "Zamieszczony komunikat widoczny po uruchomieniu narz\u0119dzia do naprawy systemu Windows mo\u017ce \u015bwiadczy\u0107 o",
            "IMG": "https://egzamin-informatyk.pl/ee08/1966.jpg",
            "B1": "A. uszkodzeniu sterownik&oacute;w",
            "B2": "B. konieczno\u015bci wykonania kopii zapasowej systemu",
            "B3": "D. wykryciu nieprawid\u0142owej adresacji IP",
            "P": "C. uszkodzeniu plik&oacute;w startowych systemu"
        },
        {
            "Pytanie": "Kt&oacute;ry z protoko\u0142&oacute;w jest protoko\u0142em synchronizacji czasu?",
            "IMG": "",
            "B1": "A. FTP",
            "B2": "B. NNTP",
            "B3": "C. HTTP",
            "P": "D. NTP"
        },
        {
            "Pytanie": "Kt&oacute;re kana\u0142y najlepiej wybra\u0107 dla trzech sieci WLAN 2,4 GHz, aby wyeliminowa\u0107 ich wzajemne zak\u0142&oacute;cenia?",
            "IMG": "",
            "B1": "B. 1, 3, 12",
            "B2": "C. 3, 6, 12",
            "B3": "D. 2, 5, 7",
            "P": "A. 1, 6, 11"
        },
        {
            "Pytanie": "Narz\u0119dziem systemu Windows s\u0142u\u017c\u0105cym do sprawdzenia pr&oacute;b logowania do systemu jest dziennik",
            "IMG": "",
            "B1": "A. aplikacji",
            "B2": "B. setup",
            "B3": "C. system",
            "P": "D. zabezpiecze\u0144"
        },
        {
            "Pytanie": "Program komputerowy s\u0142u\u017c\u0105cy do zarz\u0105dzania struktur\u0105 plik&oacute;w i katalog&oacute;w, to:",
            "IMG": "",
            "B1": "A. system plik&oacute;w",
            "B2": "B. edytor tekstowy",
            "B3": "C. mened\u017cer urz\u0105dze\u0144",
            "P": "D. mened\u017cer plik&oacute;w"
        },
        {
            "Pytanie": "Autor zamieszczonego oprogramowania zezwala na jego bezp\u0142atne u\u017cywanie jedynie w przypadku",
            "IMG": "https://egzamin-informatyk.pl/ee08/1934.jpg",
            "B1": "A. uiszczenia dobrowolnej op\u0142aty na cele charytatywne",
            "B2": "B. zaakceptowania ograniczenia czasowego podczas instalacji",
            "B3": "C. przes\u0142ania przelewu z kwot\u0105 $1 na konto autora",
            "P": "D. wys\u0142ania tradycyjnej kartki pocztowej do autora"
        },
        {
            "Pytanie": "Transmisja danych typu p&oacute;\u0142duplex jest transmisj\u0105",
            "IMG": "",
            "B1": "A. jednokierunkow\u0105 z kontrol\u0105 parzysto\u015bci",
            "B2": "B. dwukierunkow\u0105 jednoczesn\u0105",
            "B3": "D. jednokierunkow\u0105 z trybem bezpo\u0142\u0105czeniowym",
            "P": "C. dwukierunkow\u0105 naprzemienn\u0105"
        },
        {
            "Pytanie": "Kt&oacute;ry protok&oacute;\u0142 jest stosowany do terminalowego \u0142\u0105czenia si\u0119 ze zdalnymi urz\u0105dzeniami zapewniaj\u0105cy transfer zaszyfrowanych danych?",
            "IMG": "",
            "B1": "A. Telnet",
            "B2": "B. Remote",
            "B3": "D. SSL (Secure Socket Layer)",
            "P": "C. SSH (Secure Shell)"
        },
        {
            "Pytanie": "Najbardziej prawdopodobn\u0105 przyczyn\u0105 s\u0142abej jako\u015bci wydruku drukarki laserowej, charakteryzuj\u0105cego si\u0119 widocznym rozmazywaniem tonera jest",
            "IMG": "https://egzamin-informatyk.pl/e12/448.jpg",
            "B1": "B. zaci\u0119cie papieru",
            "B2": "C. zanieczyszczenie wn\u0119trza drukarki",
            "B3": "D. uszkodzenie rolek",
            "P": "A. zbyt niska temperatura utrwalacza"
        },
        {
            "Pytanie": "Magistrala, kt&oacute;ra \u0142\u0105czy w komputerze procesor z kontrolerem pami\u0119ci, sk\u0142adaj\u0105ca si\u0119 z szyny adresowej, szyny danych i linii steruj\u0105cych, nosi nazw\u0119",
            "IMG": "",
            "B1": "A. ISA &ndash; Industry Standard Architecture",
            "B2": "B. AGP &ndash; Accelerated Graphics Port",
            "B3": "D. PCI &ndash; Peripheral Component Interconnect",
            "P": "C. FSB &ndash; Front Side Bus"
        },
        {
            "Pytanie": "Kt&oacute;rego narz\u0119dzia trzeba u\u017cy\u0107 do zarobienia ko\u0144c&oacute;wek kabla UTP w module keystone ze stykami typu 110?",
            "IMG": "",
            "B1": "A. Zaciskarki do wtyk&oacute;w RJ45",
            "B2": "C. Wkr\u0119taka p\u0142askiego",
            "B3": "D. Wkr\u0119taka krzy\u017cakowego",
            "P": "B. Narz\u0119dzia uderzeniowego"
        },
        {
            "Pytanie": "Przedstawiony panel tylny p\u0142yty g\u0142&oacute;wnej jest wyposa\u017cony w interfejsy:",
            "IMG": "https://egzamin-informatyk.pl/e12/858.jpg",
            "B1": "A. 2 x PS2; 1 x RJ45; 6 x USB 2.0, 1.1",
            "B2": "B. 2 x HDMI, 1 x D-SUB, 1 x RJ11, 6 x USB 2.0",
            "B3": "D. 2 x USB 3.0; 2 x USB 2.0, 1.1; 2 x DP, 1 x DVI",
            "P": "C. 2 x USB 3.0; 4 x USB 2.0, 1.1, 1 x D-SUB"
        },
        {
            "Pytanie": "Do pomiaru warto\u015bci mocy pobieranej przez komputer nale\u017cy u\u017cy\u0107",
            "IMG": "",
            "B1": "A. amperomierza",
            "B2": "C. woltomierza",
            "B3": "D. testera zasilaczy",
            "P": "B. watomierza"
        },
        {
            "Pytanie": "Urz\u0105dzeniem dzia\u0142aj\u0105cym w warstwie \u0142\u0105cza danych, s\u0142u\u017c\u0105cym do \u0142\u0105czenia segment&oacute;w sieci o r&oacute;\u017cnych architekturach, jest",
            "IMG": "",
            "B1": "A. regenerator",
            "B2": "B. ruter",
            "B3": "D. koncentrator",
            "P": "C. most"
        },
        {
            "Pytanie": "W systemie Windows Server narz\u0119dziem umo\u017cliwiaj\u0105cym zarz\u0105dzanie zasadami grupy jest",
            "IMG": "",
            "B1": "A. Serwer DNS",
            "B2": "B. Mened\u017cer zada\u0144",
            "B3": "C. Panel sterowania",
            "P": "D. Konsola GPMC"
        },
        {
            "Pytanie": "W kt&oacute;rej warstwie modelu ISO/OSI s\u0105 stosowane adresy logiczne?",
            "IMG": "",
            "B1": "B. Transportowej",
            "B2": "C. \u0141\u0105cza danych",
            "B3": "D. Fizycznej",
            "P": "A. Sieciowej"
        },
        {
            "Pytanie": "Kt&oacute;re urz\u0105dzenie przedstawia rysunek?",
            "IMG": "https://egzamin-informatyk.pl/e13/455.jpg",
            "B1": "A. Prze\u0142\u0105cznik",
            "B2": "C. Most sieciowy",
            "B3": "D. Koncentrator",
            "P": "B. Punkt dost\u0119powy"
        },
        {
            "Pytanie": "Impulsator umo\u017cliwia testowanie uszkodzonych uk\u0142ad&oacute;w logicznych komputera mi\u0119dzy innymi przez",
            "IMG": "",
            "B1": "A. kalibracj\u0119 mierzonych wielko\u015bci elektrycznych",
            "B2": "C. badanie stan&oacute;w logicznych obwod&oacute;w cyfrowych",
            "B3": "D. odczytanie stanu wyj\u015bciowego uk\u0142adu",
            "P": "B. podanie na wej\u015bcie uk\u0142adu stanu wysokiego"
        },
        {
            "Pytanie": "Mened\u017cer us\u0142ug IIS (Internet Information Services) systemu Windows jest interfejsem graficznym s\u0142u\u017c\u0105cym do konfigurowania serwera",
            "IMG": "",
            "B1": "A. DNS",
            "B2": "C. wydruku",
            "B3": "D. terminali",
            "P": "B. WWW"
        },
        {
            "Pytanie": "Standard transmisji Gigabit Ethernet opisuje norma",
            "IMG": "",
            "B1": "A. IEEE 802.3x",
            "B2": "B. IEEE 802.3i",
            "B3": "C. IEEE 802.3u",
            "P": "D. IEEE 802.3ab"
        },
        {
            "Pytanie": "Kt&oacute;ra norma zawiera specyfikacj\u0119 parametr&oacute;w transmisyjnych komponent&oacute;w kategorii 5e?",
            "IMG": "",
            "B1": "B. EIA/TIA 607",
            "B2": "C. TIA/EIA-568-B-1",
            "B3": "D. CSA T527",
            "P": "A. TIA/EIA-568-B-2"
        },
        {
            "Pytanie": "Aby zwi\u0119kszy\u0107 bezpiecze\u0144stwo prywatnych danych sesji na stronie WWW jest wskazane wy\u0142\u0105czenie w opcjach przegl\u0105darki",
            "IMG": "",
            "B1": "A. blokady wyskakuj\u0105cych okienek",
            "B2": "B. powiadamiania o wygas\u0142ych certyfikatach",
            "B3": "D. blokady uruchamiania skrypt&oacute;w",
            "P": "C. funkcji zapami\u0119tywania hase\u0142"
        },
        {
            "Pytanie": "Udost\u0119pniono w sieci lokalnej jako udzia\u0142 specjalny folder o nazwie egzamin znajduj\u0105cy si\u0119 na komputerze o nazwie SERWER_2 w katalogu g\u0142&oacute;wnym dysku C:. Jak powinna wygl\u0105da\u0107 \u015bcie\u017cka dost\u0119pu do katalogu egzamin, w kt&oacute;rym przechowywany jest folder macierzysty dla konta u\u017cytkownika o okre\u015blonym loginie?",
            "IMG": "",
            "B1": "A. SERWER_2egzamin$\\%$USERNAME%",
            "B2": "B. SERWER_2$egzamin$\\%USERNAME%",
            "B3": "C. SERWER_2$egzamin\\%USERNAME%",
            "P": "D. SERWER_2egzamin$\\%USERNAME%"
        },
        {
            "Pytanie": "Urz\u0105dzenie sieciowe s\u0142u\u017c\u0105ce do po\u0142\u0105czenia pi\u0119ciu komputer&oacute;w ze sob\u0105 w tej samej sieci, tak aby nie wyst\u0119powa\u0142y kolizje pakiet&oacute;w, to",
            "IMG": "",
            "B1": "A. ruter",
            "B2": "B. koncentrator",
            "B3": "D. most",
            "P": "C. prze\u0142\u0105cznik"
        },
        {
            "Pytanie": "Polecenie uname -s w systemie Linux jest wykorzystywane do sprawdzania",
            "IMG": "",
            "B1": "A. ilo\u015bci wolnej pami\u0119ci",
            "B2": "B. statusu aktywnych interfejs&oacute;w sieciowych",
            "B3": "C. wolnego miejsca na dyskach twardych",
            "P": "D. nazwy j\u0105dra systemu operacyjnego"
        },
        {
            "Pytanie": "Wska\u017c urz\u0105dzenie, kt&oacute;re nale\u017cy wykorzysta\u0107, aby pod\u0142\u0105czy\u0107 dwa komputery do sieci Internet z dost\u0119pem przez sie\u0107 lokaln\u0105 Ethernet, w kt&oacute;rej mamy do dyspozycji tylko jeden adres IP",
            "IMG": "",
            "B1": "A. Spliter ADSL",
            "B2": "B. Prze\u0142\u0105cznik LAN",
            "B3": "D. Modem ISDN",
            "P": "C. Router LAN"
        },
        {
            "Pytanie": "Na rysunku przedstawiono sie\u0107 lokaln\u0105 opart\u0105 na okablowaniu kat. 6. Stacja robocza C nie mo\u017ce skomunikowa\u0107 si\u0119 z sieci\u0105. Jaki problem warstwy fizycznej mo\u017ce powodowa\u0107 brak \u0142\u0105czno\u015bci?",
            "IMG": "https://egzamin-informatyk.pl/e13/247.jpg",
            "B1": "A. Nieprawid\u0142owy adres IP",
            "B2": "C. Nieodpowiedni kabel",
            "B3": "D. Z\u0142y typ prze\u0142\u0105cznika",
            "P": "B. Z\u0142a d\u0142ugo\u015b\u0107 kabla"
        },
        {
            "Pytanie": "Kod BREAK odczytywany przez uk\u0142ad elektroniczny klawiatury oznacza",
            "IMG": "",
            "B1": "A. konieczno\u015b\u0107 ustawienia warto\u015bci op&oacute;\u017anienia powtarzania znak&oacute;w",
            "B2": "C. awari\u0119 kontrolera klawiatury",
            "B3": "D. uruchomienie funkcji czyszcz\u0105cej bufor",
            "P": "B. zwolnienie klawisza"
        },
        {
            "Pytanie": "Za pomoc\u0105 przedstawionego urz\u0105dzenia mo\u017cna przeprowadzi\u0107 diagnostyk\u0119 dzia\u0142ania",
            "IMG": "https://egzamin-informatyk.pl/e12/988.jpg",
            "B1": "A. interfejsu SATA",
            "B2": "B. pami\u0119ci RAM",
            "B3": "C. modu\u0142u DAC karty graficznej",
            "P": "D. zasilacza ATX"
        },
        {
            "Pytanie": "Aby u\u017cytkownik notebooka z systemem Windows 7 lub nowszym m&oacute;g\u0142 u\u017cywa\u0107 drukarki za po\u015brednictwem sieci WiFi, powinien zainstalowa\u0107 drukark\u0119 na porcie",
            "IMG": "",
            "B1": "A. Nul",
            "B2": "C. COM3",
            "B3": "D. LPT3",
            "P": "B. WSD"
        },
        {
            "Pytanie": "Do uruchomienia edytora rejestru w systemie Windows nale\u017cy u\u017cy\u0107 narz\u0119dzia",
            "IMG": "",
            "B1": "A. cmd",
            "B2": "C. ipconfig",
            "B3": "D. msconfig",
            "P": "B. regedit"
        },
        {
            "Pytanie": "W ramce umieszczono wyniki badania dysku twardego. Jakie dzia\u0142ania nale\u017cy podj\u0105\u0107 po ich analizie, aby poprawi\u0107 sprawno\u015b\u0107 dysku?",
            "IMG": "https://egzamin-informatyk.pl/old/734.jpg",
            "B1": "A. Oczy\u015bci\u0107 dysk",
            "B2": "C. Sformatowa\u0107 dysk",
            "B3": "D. Podzieli\u0107 dysk na partycje",
            "P": "B. Zdefragmentowa\u0107 dysk"
        },
        {
            "Pytanie": "W dokumentacji technicznej p\u0142yty g\u0142&oacute;wnej jest zapis Supports up to Athlon XP 3000+ procesor. Oznacza on, \u017ce p\u0142yta g\u0142&oacute;wna obs\u0142uguj\u0119 procesory Athlon.",
            "IMG": "",
            "B1": "A. zgodnie z mobile Athlon 64",
            "B2": "B. wszystkie o cz\u0119stotliwo\u015bci poni\u017cej 3000 MHz",
            "B3": "D. wszystkie o cz\u0119stotliwo\u015bci powy\u017cej 3000 MHz",
            "P": "C. nie nowsze ni\u017c Athlon XP 3000+"
        },
        {
            "Pytanie": "Jak nazywany jest proces dok\u0142adania do danych z warstwy aplikacji informacji zwi\u0105zanych z protoko\u0142ami dzia\u0142aj\u0105cymi na poszczeg&oacute;lnych warstwach modelu sieciowego?",
            "IMG": "",
            "B1": "A. Dekodowanie",
            "B2": "B. Multipleksacja",
            "B3": "C. Segmentacja",
            "P": "D. Enkapsulacja"
        },
        {
            "Pytanie": "System operacyjny dzia\u0142aj\u0105cy w trybie tekstowym z mo\u017cliwo\u015bci\u0105 uruchomienia \u015brodowiska graficznego KDE, to",
            "IMG": "",
            "B1": "A. Windows XP",
            "B2": "B. Windows 95",
            "B3": "C. DOS",
            "P": "D. Linux"
        },
        {
            "Pytanie": "Polecenie Gpresult",
            "IMG": "",
            "B1": "B. aktualizuje ustawienia zasad grupy",
            "B2": "C. przywraca domy\u015blne zasady grup dla kontrolera",
            "B3": "D. wy\u015bwietla informacje o kontrolerze",
            "P": "A. wy\u015bwietla wynikowy zestaw zasad dla u\u017cytkownika lub komputera"
        },
        {
            "Pytanie": "Jaki b\u0119dzie minimalny koszt zakupu kabla UTP, przy wykonaniu okablowania kategorii 5e, do po\u0142\u0105czenia panelu krosowniczego z dwoma podw&oacute;jnymi gniazdami natynkowymi 2 x RJ45, znajduj\u0105cymi si\u0119 w odleg\u0142o\u015bci 10 m i 20 m od panelu, je\u017celi 1 m kabla kosztuje 1,20 z\u0142?",
            "IMG": "",
            "B1": "A. 48,00 z\u0142",
            "B2": "B. 96,00 z\u0142",
            "B3": "D. 36,00 z\u0142",
            "P": "C. 72,00 z\u0142"
        },
        {
            "Pytanie": "Kt&oacute;re z zada\u0144 realizuje us\u0142uga katalogowa Active Directory w systemach Windows Server?",
            "IMG": "",
            "B1": "B. centralnie zarz\u0105dza adresami IP i powi\u0105zanymi informacjami, a tak\u017ce udostepnia je automatycznie klientom",
            "B2": "C. obs\u0142uguje \u017c\u0105dania protoko\u0142u komunikacyjnego",
            "B3": "D. umo\u017cliwia wymian\u0119 plik&oacute;w z odleg\u0142ymi komputerami za pomoc\u0105 protoko\u0142u komunikacyjnego",
            "P": "A. przechowuje informacje o obiektach znajdujacych si\u0119 w sieci"
        },
        {
            "Pytanie": "Numer przerwania przydzielony dla karty sieciowej zosta\u0142 przedstawiony w postaci binarnej jako liczba 10101. Jaka to liczba dziesi\u0119tna?",
            "IMG": "",
            "B1": "A. 15",
            "B2": "C. 20",
            "B3": "D. 41",
            "P": "B. 21"
        },
        {
            "Pytanie": "Lokalnej podsieci komputerowej nadano adres IP 172.16.10.0/24. Komputer1 ma adres IP 172.16.0.10, komputer2 - 172.16.10.100, a komputer3 - 172.16.255.20. Kt&oacute;ry z komputer&oacute;w nale\u017cy do tej podsieci?",
            "IMG": "",
            "B1": "B. Wszystkie trzy wymienione komputery",
            "B2": "C. Wy\u0142\u0105cznie komputer1 o adresie IP 172.16.0.10",
            "B3": "D. Wy\u0142\u0105cznie komputer3 o adresie IP 172.16.255.20",
            "P": "A. Wy\u0142\u0105cznie komputer2 o adresie IP 172.16.10.100"
        },
        {
            "Pytanie": "W firmie nale\u017ca\u0142o naprawi\u0107 5 komputer&oacute;w oraz serwer. Czas naprawy ka\u017cdego komputera wyni&oacute;s\u0142 1,5 godziny, a serwera 2,5 godziny. Cena us\u0142ugi wynosi 100,00 z\u0142 za roboczogodzin\u0119 plus podatek VAT 23%. Jaka b\u0119dzie nale\u017cno\u015b\u0107 brutto za t\u0119 us\u0142ug\u0119?",
            "IMG": "",
            "B1": "B. 2460,00 z\u0142",
            "B2": "C. 2046,00 z\u0142",
            "B3": "D. 1023,00 z\u0142",
            "P": "A. 1230,00 z\u0142"
        },
        {
            "Pytanie": "Do zasilacza UPS o mocy rzeczywistej 480 W nie nale\u017cy pod\u0142\u0105cza\u0107",
            "IMG": "",
            "B1": "A. monitora",
            "B2": "C. modemu ADSL",
            "B3": "D. urz\u0105dze\u0144 sieciowych typu router",
            "P": "B. drukarki laserowej"
        },
        {
            "Pytanie": "Protok&oacute;\u0142 ARP (Address Resolution Protocol) umo\u017cliwia mapowanie logicznych adres&oacute;w warstwy sieciowej na fizyczne adresy warstwy",
            "IMG": "",
            "B1": "A. transportowej",
            "B2": "B. aplikacji",
            "B3": "C. fizycznej",
            "P": "D. \u0142\u0105cza danych"
        },
        {
            "Pytanie": "G\u0142&oacute;wnym celem mechanizmu Plug and Play jest",
            "IMG": "",
            "B1": "A. automatyczne odinstalowywanie sterownik&oacute;w, kt&oacute;re przez d\u0142u\u017cszy czas nie by\u0142y u\u017cywane",
            "B2": "B. automatyczne tworzenie kopii danych na nowo pod\u0142\u0105czonym no\u015bniku pami\u0119ci",
            "B3": "D. automatycznie uruchamianie ostatnio otwartej gry",
            "P": "C. wykrycie nowo pod\u0142\u0105czonego sprz\u0119tu i automatycznie przydzielenie mu zasob&oacute;w"
        },
        {
            "Pytanie": "Kt&oacute;ry z sieciowych system&oacute;w operacyjnych jest udost\u0119pniany na licencji GNU?",
            "IMG": "",
            "B1": "A. OS X Server",
            "B2": "B. Unix",
            "B3": "C. Windows Server 2012",
            "P": "D. Linux"
        },
        {
            "Pytanie": "Kt&oacute;ry przyrz\u0105d nale\u017cy wybra\u0107 do pomiar&oacute;w mapy po\u0142\u0105cze\u0144 okablowania strukturalnego sieci lokalnej?",
            "IMG": "",
            "B1": "A. Analizator protoko\u0142&oacute;w",
            "B2": "B. Monitor sieciowy",
            "B3": "C. Reflektometr OTDR",
            "P": "D. Analizator sieci LAN"
        },
        {
            "Pytanie": "Kt&oacute;ry aplet panelu sterowania w systemie Windows 7 umo\u017cliwia ograniczenie czasu pracy u\u017cytkownika na komputerze?",
            "IMG": "",
            "B1": "A. Windows Defender",
            "B2": "C. Centrum akcji",
            "B3": "D. Konta u\u017cytkownik&oacute;w",
            "P": "B. Kontrola rodzicielska"
        },
        {
            "Pytanie": "Aby zapobiec utracie danych w programie do prowadzenia ewidencji uczni&oacute;w, nale\u017cy po zako\u0144czeniu pracy ka\u017cdego dnia wykona\u0107",
            "IMG": "",
            "B1": "A. aktualizacj\u0119 systemu operacyjnego",
            "B2": "B. bezpieczne zamkni\u0119cie systemu operacyjnego",
            "B3": "D. aktualizacj\u0119 systemu",
            "P": "C. kopi\u0119 zapasow\u0105 danych programu"
        },
        {
            "Pytanie": "Aby sprawdzi\u0107 integralno\u015b\u0107 systemu plik&oacute;w w systemie Linux nale\u017cy u\u017cy\u0107 polecenia",
            "IMG": "",
            "B1": "A. mkfs",
            "B2": "B. fstab",
            "B3": "D. man",
            "P": "C. fsck"
        },
        {
            "Pytanie": "Pliki, kt&oacute;re znajduj\u0105 si\u0119 w koszu, mo\u017cna odzyska\u0107 poprzez zastosowanie polecenia",
            "IMG": "",
            "B1": "A. Pon&oacute;w",
            "B2": "B. Cofnij",
            "B3": "C. Wr&oacute;\u0107",
            "P": "D. Przywr&oacute;\u0107"
        },
        {
            "Pytanie": "Za pomoc\u0105 polecenia taskmgr u\u017cytkownik systemu Windows mo\u017ce",
            "IMG": "",
            "B1": "A. wykona\u0107 aktualizacj\u0119 sterownik&oacute;w systemowych",
            "B2": "C. naprawi\u0107 b\u0142\u0119dy systemu plik&oacute;w",
            "B3": "D. odzyska\u0107 uszkodzone sektory dysku",
            "P": "B. zako\u0144czy\u0107 dzia\u0142anie wadliwej aplikacji"
        },
        {
            "Pytanie": "Kt&oacute;re urz\u0105dzenie umo\u017cliwi pod\u0142\u0105czenie drukarki nieposiadaj\u0105cej karty sieciowej do lokalnej sieci komputerowej?",
            "IMG": "",
            "B1": "A. Koncentrator",
            "B2": "C. Regenerator",
            "B3": "D. Punkt dost\u0119pu",
            "P": "B. Serwer wydruku"
        },
        {
            "Pytanie": "W technologii Blu-ray no\u015bnik jednokrotnego zapisu oznaczany jest",
            "IMG": "",
            "B1": "A. BD-RE",
            "B2": "B. BD-ROM",
            "B3": "D. BD ",
            "P": "C. BD-R "
        },
        {
            "Pytanie": "Odwrotno\u015bci\u0105 bezstratnej kompresji danych jest",
            "IMG": "",
            "B1": "A. pakowanie danych",
            "B2": "B. archiwizacja",
            "B3": "D. prekompresja",
            "P": "C. dekompresja"
        },
        {
            "Pytanie": "Rysunek przedstawia fizyczn\u0105 topologi\u0119",
            "IMG": "https://egzamin-informatyk.pl/e13/410.jpg",
            "B1": "B. Magistrali",
            "B2": "C. Drzewa",
            "B3": "D. Szyny",
            "P": "A. Gwiazdy"
        },
        {
            "Pytanie": "Ustawienia wszystkich u\u017cytkownik&oacute;w komputera zapisane s\u0105 w ga\u0142\u0119zi rejestru o akronimie",
            "IMG": "",
            "B1": "A. HKLM",
            "B2": "B. HKCC",
            "B3": "D. HKCR",
            "P": "C. HKU"
        },
        {
            "Pytanie": "Aby w systemie Windows zmieni\u0107 port zainstalowanej drukarki, nale\u017cy wykorzysta\u0107 funkcj\u0119",
            "IMG": "",
            "B1": "A. Ostatnia znana dobra konfiguracja",
            "B2": "B. Preferencje drukowania",
            "B3": "D. Mened\u017cer zada\u0144",
            "P": "C. W\u0142a\u015bciwo\u015bci drukarki"
        },
        {
            "Pytanie": "Na rysunku przedstawiono ta\u015bm\u0119 (kabel) z\u0142\u0105cza",
            "IMG": "https://egzamin-informatyk.pl/e12/436.jpg",
            "B1": "A. SAS",
            "B2": "B. SATA",
            "B3": "D. SCSI",
            "P": "C. ATA"
        },
        {
            "Pytanie": "Okre\u015bl wielko\u015b\u0107 klastra na podstawie zamieszczonego fragmentu komunikatu systemu WINDOWS wy\u015bwietlonego po zako\u0144czeniu dzia\u0142ania programu format a:",
            "IMG": "https://egzamin-informatyk.pl/old/247.jpg",
            "B1": "A. 1 457 664 bajt&oacute;w",
            "B2": "B. 12 bit&oacute;w",
            "B3": "C. 512 KB",
            "P": "D. 0,5 KB"
        },
        {
            "Pytanie": "Interfejs SLI (ang. Scalable Link Interface) s\u0142u\u017cy do \u0142\u0105czenia ",
            "IMG": "",
            "B1": "A. nap\u0119du Blu-ray z kart\u0105 d\u017awi\u0119kow\u0105",
            "B2": "B. karty graficznej z odbiornikiem TV",
            "B3": "C. czytnika kart z p\u0142yt\u0105 g\u0142&oacute;wn\u0105",
            "P": "D. dw&oacute;ch kart graficznych"
        },
        {
            "Pytanie": "Na rysunku przedstawiono patchpanel - nieekranowany panel krosowy kategorii 5e, wyposa\u017cony w z\u0142\u0105cza szczelinowe typu LSA. Do monta\u017cu (zaszywania) kabli w z\u0142\u0105cza szczelinowe nale\u017cy u\u017cy\u0107",
            "IMG": "https://egzamin-informatyk.pl/e13/252.jpg",
            "B1": "A. narz\u0119dzia zaciskowego 8P8C",
            "B2": "B. narz\u0119dzia zaciskowego BNC",
            "B3": "C. narz\u0119dzia JackRapid",
            "P": "D. narz\u0119dzia uderzeniowego"
        },
        {
            "Pytanie": "Przedstawiona na rysunku karta rozszerze\u0144 posiada ch\u0142odzenie",
            "IMG": "https://egzamin-informatyk.pl/e12/326.jpg",
            "B1": "A. aktywne",
            "B2": "C. wymuszone",
            "B3": "D. symetryczne",
            "P": "B. pasywne"
        },
        {
            "Pytanie": "W przypadku zaschni\u0119cia dyszy w drukarce atramentowej spowodowanych d\u0142ugimi przestojami nale\u017cy w pierwszej kolejno\u015bci",
            "IMG": "",
            "B1": "A. ustawi\u0107 wydruk ekonomiczny",
            "B2": "B. oczy\u015bci\u0107 dysz\u0119 wacikiem nas\u0105czonym olejem syntetycznym",
            "B3": "D. wymieni\u0107 mechanizm drukuj\u0105cy",
            "P": "C. dokona\u0107 oczyszczenia dyszy z poziomu odpowiedniego programu"
        },
        {
            "Pytanie": "Jaki rodzaj transmisji danych przesy\u0142anych przez interfejs komputera osobistego zosta\u0142 przedstawiony na rysunku?",
            "IMG": "https://egzamin-informatyk.pl/e12/703.jpg",
            "B1": "A. R&oacute;wnoleg\u0142y synchroniczny",
            "B2": "C. R&oacute;wnoleg\u0142y asynchroniczny",
            "B3": "D. Szeregowy synchroniczny",
            "P": "B. Szeregowy asynchroniczny"
        },
        {
            "Pytanie": "Programem nas\u0142uchowym s\u0142u\u017c\u0105cym do przechwytywania i nagrywania r&oacute;\u017cnych pakiet&oacute;w sieciowych oraz ich dekodowania jest\n",
            "IMG": "",
            "B1": "B. konqueror",
            "B2": "C. finder",
            "B3": "D. tracker",
            "P": "A. whireshark"
        },
        {
            "Pytanie": "W dokumentacji karty d\u017awi\u0119kowej znajduje si\u0119 nast\u0119puj\u0105ca informacja: cz\u0119stotliwo\u015b\u0107 pr&oacute;bkowania 22kHz, rozdzielczo\u015b\u0107 pr&oacute;bkowania 16 bit&oacute;w. Jaka b\u0119dzie przybli\u017cona wielko\u015b\u0107 pliku d\u017awi\u0119kowego z 10-sekundowym nagraniem mono (jednokana\u0142owym)?",
            "IMG": "",
            "B1": "A. 220000 B",
            "B2": "B. 80000 B",
            "B3": "D. 160000 B",
            "P": "C. 440000 B"
        },
        {
            "Pytanie": "W wyniku u\u017cycia polecenia route ustawiono ",
            "IMG": "https://egzamin-informatyk.pl/ee08/1719.jpg",
            "B1": "A. 25 bitow\u0105 mask\u0119 dla adresu docelowego\n",
            "B2": "C. mask\u0119 255.255.255.0 dla adresu IP bramy 192.168.0.2",
            "B3": "D. koszt metryki na 0 przeskok&oacute;w",
            "P": "B. adres docelowej sieci na 192.168.35.0"
        },
        {
            "Pytanie": "Symulowanie stan&oacute;w logicznych obwod&oacute;w cyfrowych umo\u017cliwia",
            "IMG": "",
            "B1": "A. kalibrator",
            "B2": "B. sonda logiczna",
            "B3": "D. sonometr",
            "P": "C. impulsator"
        },
        {
            "Pytanie": "Kt&oacute;re polecenie uruchamia edytor zasad grup w rodzinie system&oacute;w Windows Server?",
            "IMG": "",
            "B1": "A. dcpromo.exe",
            "B2": "B. regedit.exe",
            "B3": "D. services.msc",
            "P": "C. gpedit.msc"
        },
        {
            "Pytanie": "Je\u017celi oczekuje si\u0119, aby tylko wybrane urz\u0105dzenia mog\u0142y \u0142\u0105czy\u0107 si\u0119 z sieci\u0105 WiFi, nale\u017cy w punkcie dost\u0119powym",
            "IMG": "",
            "B1": "A. zmieni\u0107 has\u0142o",
            "B2": "C. zmieni\u0107 spos&oacute;b szyfrowania z WEP na WPA",
            "B3": "D. zmieni\u0107 kana\u0142 radiowy",
            "P": "B. skonfigurowa\u0107 filtrowanie adres&oacute;w MAC"
        },
        {
            "Pytanie": "W serwerach warto stosowa\u0107 dyski obs\u0142uguj\u0105ce tryb Hot plugging, poniewa\u017c",
            "IMG": "",
            "B1": "A. pr\u0119dko\u015b\u0107 zapisu wzrasta do 250 MB/s",
            "B2": "C. czas odczytu wzrasta trzykrotnie w por&oacute;wnaniu z trybem Cable select",
            "B3": "D. zwi\u0119ksza si\u0119 pojemno\u015b\u0107 dysku poprzez automatyczn\u0105 kompresj\u0119 danych",
            "P": "B. jest mo\u017cliwe pod\u0142\u0105czenie oraz od\u0142\u0105czenie dysku przy w\u0142\u0105czonym zasilaniu serwera"
        },
        {
            "Pytanie": "Jaka jest r&oacute;\u017cnica pomi\u0119dzy poleceniem ps a poleceniem top w systemie Linux?",
            "IMG": "",
            "B1": "A. Polecenie top umo\u017cliwia wy\u015bwietlenie PID procesu, a ps nie",
            "B2": "B. Polecenie ps pozwala na wy\u015bwietlenie uprawnie\u0144, z jakimi dzia\u0142a proces, a top nie pozwala",
            "B3": "D. Polecenie ps nie pokazuje stopnia wykorzystania CPU, a polecenie top ma tak\u0105 funkcjonalno\u015b\u0107",
            "P": "C. Polecenie top wy\u015bwietla aktualnie dzia\u0142aj\u0105ce w systemie procesy od\u015bwie\u017caj\u0105c na bie\u017c\u0105co informacje, a ps nie"
        },
        {
            "Pytanie": "Program antyspyware chroni przed",
            "IMG": "",
            "B1": "A. programami typu robak",
            "B2": "B. atakami typu DoS i DDoS(Denial of Service)",
            "B3": "D. programami antywirusowymi",
            "P": "C. programami szpieguj\u0105cymi"
        },
        {
            "Pytanie": "Urz\u0105dzenie komputerowe, kt&oacute;re bezwzgl\u0119dnie powinno by\u0107 pod\u0142\u0105czone do sieci za po\u015brednictwem UPS, to",
            "IMG": "",
            "B1": "A. dysk zewn\u0119trzny",
            "B2": "C. drukarka atramentowa",
            "B3": "D. ploter",
            "P": "B. serwer sieciowy"
        },
        {
            "Pytanie": "Kt&oacute;ry element stanowi zawarto\u015b\u0107 dokumentacji powykonawczej?",
            "IMG": "",
            "B1": "A. Analiza biznesowa potrzeb zamawiaj\u0105cego",
            "B2": "B. Kalkulacja koszt&oacute;w na podstawie katalogu nak\u0142ad&oacute;w rzeczowych KNR",
            "B3": "D. Wst\u0119pny kosztorys ofertowy",
            "P": "C. Wyniki test&oacute;w sieci"
        },
        {
            "Pytanie": "Kt&oacute;re polecenie nale\u017cy wykona\u0107 w celu zamontowania pierwszej partycji logicznej dysku primary slave w systemie Linux?",
            "IMG": "",
            "B1": "A. mount /dev/hda2 /mnt/hdd",
            "B2": "C. mount /dev/hda4 /mnt/hdd",
            "B3": "D. mount /dev/hdb3 /mnt/hdd",
            "P": "B. mount /dev/hdb5 /mnt/hdd"
        },
        {
            "Pytanie": "Jaki b\u0119dzie \u0142\u0105czny koszt materia\u0142&oacute;w s\u0142u\u017c\u0105cych do wykonania 20 kabli po\u0142\u0105czeniowych typu patchcord o d\u0142ugo\u015bci 1,5m ka\u017cdy, je\u015bli 1 metr bie\u017c\u0105cego kabla kosztuje 1z\u0142, a wtyk 50 gr?",
            "IMG": "",
            "B1": "A. 60 z\u0142",
            "B2": "B. 30 z\u0142",
            "B3": "D. 40 z\u0142",
            "P": "C. 50 z\u0142"
        },
        {
            "Pytanie": "U\u017cytkownik komputera testuj\u0105cy po\u0142\u0105czenia sieciowe poleceniem ping otrzyma\u0142 wynik jak na rysunku. Co jest przyczyn\u0105 braku odpowiedzi serwera przy pierwszej probie, przy za\u0142o\u017ceniu, \u017ce domena wp.pl ma adres 212.77.100.101?",
            "IMG": "https://egzamin-informatyk.pl/e13/359.jpg",
            "B1": "B. Brak adresu domy\u015blnej bramy w konfiguracji karty sieciowej.",
            "B2": "C. Brak przypisanego karcie sieciowej serwera DHCP.",
            "B3": "D. B\u0142\u0119dny adres IP przepisany karcie sieciowej.",
            "P": "A. Brak adres&oacute;w serwera DNS w konfiguracji karty sieciowej."
        },
        {
            "Pytanie": "Dla dysku twardego, warto\u015b\u0107 wsp&oacute;\u0142czynnika MTBF (Mean Time Between Failure) podawana jest w",
            "IMG": "",
            "B1": "A. minutach",
            "B2": "B. latach",
            "B3": "C. dniach",
            "P": "D. godzinach"
        },
        {
            "Pytanie": "Na rysunku przedstawiono tylny panel stacji roboczej. Strza\u0142k\u0105 oznaczono port",
            "IMG": "https://egzamin-informatyk.pl/ee08/1892.jpg",
            "B1": "A. HDMI",
            "B2": "B. USB 3.0",
            "B3": "C. eSATA",
            "P": "D. DisplayPort"
        },
        {
            "Pytanie": "Kt&oacute;ry ze znak&oacute;w w systemach z rodziny Windows nale\u017cy zastosowa\u0107 podczas udost\u0119pniania zasobu ukrytego w sieci?",
            "IMG": "",
            "B1": "A. @",
            "B2": "B. #",
            "B3": "D. ?",
            "P": "C. $"
        },
        {
            "Pytanie": "Kt&oacute;ry protok&oacute;\u0142 jest wykorzystywany do przesy\u0142ania plik&oacute;w bez nawi\u0105zania po\u0142\u0105czenia?",
            "IMG": "",
            "B1": "A. DNS (Domain Name System)",
            "B2": "B. HTTP (Hyper Text Transfer Protocol)",
            "B3": "D. FTP (File Transfer Protocol)",
            "P": "C. TFTP (Trivial File Transfer Protocol)"
        },
        {
            "Pytanie": "Kt&oacute;ry element pasywny sieci nale\u017cy zastosowa\u0107 do pod\u0142\u0105czenia okablowania ze wszystkich gniazd abonenckich z panelem krosowniczym zako\u0144czonym w szafie rack?",
            "IMG": "",
            "B1": "B. Adapter LAN",
            "B2": "C. Przepust szczotkowy",
            "B3": "D. Kabel po\u0142\u0105czeniowy",
            "P": "A. Organizer kabli"
        },
        {
            "Pytanie": "Ile kom&oacute;rek pami\u0119ci mo\u017cna zaadresowa\u0107 bezpo\u015brednio w 64 bitowym procesorze, kt&oacute;ry ma 32 bitow\u0105 szyn\u0119 adresow\u0105?",
            "IMG": "",
            "B1": "A. 64 do pot\u0119gi 2",
            "B2": "B. 32 do pot\u0119gi 2",
            "B3": "D. 2 do pot\u0119gi 64",
            "P": "C. 2 do pot\u0119gi 32"
        },
        {
            "Pytanie": "Polecenie dsadd umo\u017cliwia",
            "IMG": "",
            "B1": "A. zmian\u0119 w\u0142a\u015bciwo\u015bci obiekt&oacute;w w katalogu",
            "B2": "C. przenoszenie obiekt&oacute;w w obr\u0119bie jednej domeny",
            "B3": "D. usuwanie u\u017cytkownik&oacute;w, grup, komputer&oacute;w, kontakt&oacute;w i jednostek organizacyjnych do us\u0142ugi Active Directory",
            "P": "B. dodawanie u\u017cytkownik&oacute;w, grup, komputer&oacute;w, kontakt&oacute;w i jednostek organizacyjnych do us\u0142ugi Active Directory"
        },
        {
            "Pytanie": "Wymiana ta\u015bmy barwi\u0105cej zwi\u0105zana jest z u\u017cytkowaniem drukarki",
            "IMG": "",
            "B1": "A. laserowej",
            "B2": "C. termicznej",
            "B3": "D. atramentowej",
            "P": "B. ig\u0142owej"
        },
        {
            "Pytanie": "Kt&oacute;re urz\u0105dzenie nale\u017cy zastosowa\u0107 w sieci Ethernet, aby ograniczy\u0107 liczb\u0119 kolizji pakiet&oacute;w?",
            "IMG": "",
            "B1": "A. Bramk\u0119 VoIP",
            "B2": "C. Koncentrator",
            "B3": "D. Regenerator",
            "P": "B. Prze\u0142\u0105cznik"
        },
        {
            "Pytanie": "Aby zarz\u0105dza\u0107 wielko\u015bci\u0105 transferu sieciowego, administrator powinien wykorzysta\u0107 program typu",
            "IMG": "",
            "B1": "A. task manager",
            "B2": "B. quality manager",
            "B3": "C. package manager",
            "P": "D. bandwidth manager"
        },
        {
            "Pytanie": "Program stanowi\u0105cy dodatek dla systemu Windows i s\u0142u\u017c\u0105cy do ochrony przed oprogramowaniem szpieguj\u0105cym oraz innymi niepo\u017c\u0105danymi komponentami to",
            "IMG": "",
            "B1": "B. Windows Embedded",
            "B2": "C. Windows Azure",
            "B3": "D. Windows Home Server",
            "P": "A. Windows Defender"
        },
        {
            "Pytanie": "Wynikiem dodawania liczb 33(8) oraz 71(8) jest liczba",
            "IMG": "",
            "B1": "A. 1010101(2)",
            "B2": "B. 1001100(2)",
            "B3": "C. 1100101(2)",
            "P": "D. 1010100(2)"
        },
        {
            "Pytanie": "Materia\u0142em eksploatacyjnym plotera solwentowego jest",
            "IMG": "",
            "B1": "A. g\u0142owica tn\u0105ca",
            "B2": "B. atrament \u017celowy",
            "B3": "C. zestaw metalowych rylc&oacute;w",
            "P": "D. farba na bazie rozpuszczalnik&oacute;w"
        },
        {
            "Pytanie": "Dysk z systemem plik&oacute;w FAT32, na kt&oacute;rym cz\u0119sto wykonywane s\u0105 operacje kasowania starych plik&oacute;w oraz zapisu nowych plik&oacute;w, ulega:",
            "IMG": "",
            "B1": "B. relokacji",
            "B2": "C. defragmentacji",
            "B3": "D. kolokacji",
            "P": "A. fragmentacji"
        },
        {
            "Pytanie": "Tusz \u017celowy jest stosowany w drukarkach",
            "IMG": "",
            "B1": "B. ig\u0142owych",
            "B2": "C. fiskalnych",
            "B3": "D. termotransferowych",
            "P": "A. sublimacyjnych"
        },
        {
            "Pytanie": "Wybierz medium, kt&oacute;re w sieciach komputerowych zapewnia najszybsz\u0105 transmisj\u0119 danych",
            "IMG": "",
            "B1": "B. Fale radiowe",
            "B2": "C. Czteroparowy kabel kat. 5",
            "B3": "D. Mikrofale",
            "P": "A. Kabel \u015bwiat\u0142owodowy"
        },
        {
            "Pytanie": "Active Directory w systemach MS Windows Server 2000 i MS Windows Server 2003 to",
            "IMG": "",
            "B1": "A. baza danych zawieraj\u0105ca informacje o u\u017cytkownikach sieci, ich has\u0142ach dost\u0119pu i uprawnieniach",
            "B2": "B. logiczna grupa komputer&oacute;w, kt&oacute;re maj\u0105 mo\u017cliwo\u015b\u0107 komunikowania si\u0119 w sieci i wzajemnego udost\u0119pniania zasob&oacute;w",
            "B3": "C. grupa komputer&oacute;w po\u0142\u0105czonych w sie\u0107, sk\u0142adaj\u0105ca si\u0119 z serwera pe\u0142ni\u0105cego rol\u0119 kontrolera oraz stacji roboczych &ndash; klient&oacute;w",
            "P": "D. us\u0142uga katalogowa, kt&oacute;ra przechowuje informacje dotycz\u0105ce obiekt&oacute;w w sieci i udost\u0119pnia je u\u017cytkownikom oraz administratorom sieci"
        },
        {
            "Pytanie": "W systemie Windows XP do zmiany typu systemu plik&oacute;w na dysku z FAT32 na NTFS nale\u017cy skorzysta\u0107 z programu",
            "IMG": "",
            "B1": "B. subst",
            "B2": "C. attrib",
            "B3": "D. replace",
            "P": "A. convert"
        },
        {
            "Pytanie": "Jaki typ z\u0142\u0105cza musi posiada\u0107 p\u0142yta g\u0142&oacute;wna, aby u\u017cytkownik m&oacute;g\u0142 zainstalowa\u0107 przedstawion\u0105 na rysunku kart\u0119 graficzn\u0105?",
            "IMG": "https://egzamin-informatyk.pl/e12/565.jpg",
            "B1": "A. PCI",
            "B2": "B. PCIe x1",
            "B3": "D. AGP",
            "P": "C. PCIe x16"
        },
        {
            "Pytanie": "W systemie Windows 7 w celu skopiowania katalogu c:\test wraz z podkatologami na dysk przeno\u015bny f: nale\u017cy u\u017cy\u0107 polecenia",
            "IMG": "",
            "B1": "A. xcopy f:\test c:\test/E",
            "B2": "B. copy c:\test f:\test/E",
            "B3": "D. copy f:\test c:\test/E",
            "P": "C. xcopy c:\test f:\test/E"
        },
        {
            "Pytanie": "Instalowanie system&oacute;w Linux oraz Windows 7 przebieg\u0142o bez \u017cadnych utrudnie\u0144. Systemy zainstalowa\u0142y si\u0119 poprawnie z domy\u015blnymi ustawieniami. Na tym samym komputerze, przy identycznej konfiguracji, podczas instalowania systemu Windows XP wy\u015bwietlony zosta\u0142 komunikat o braku dysk&oacute;w twardych co mo\u017ce \u015bwiadczy\u0107 o",
            "IMG": "",
            "B1": "B. uszkodzeniu logicznym dysku twardego",
            "B2": "C. \u017ale ustawionym bootowaniu nap\u0119d&oacute;w",
            "B3": "D. z\u0142ym u\u0142o\u017ceniu zworek w dysku twardym",
            "P": "A. braku sterownik&oacute;w"
        },
        {
            "Pytanie": "W zestawie komputerowym o parametrach przedstawionych w tabeli nale\u017cy wymieni\u0107 kart\u0119 graficzn\u0105 na kart\u0119 now\u0105, wskazan\u0105 w ramce. W zwi\u0105zku z tym modernizacja tego komputera wymaga r&oacute;wnie\u017c wymiany",
            "IMG": "https://egzamin-informatyk.pl/ee08/1932.jpg",
            "B1": "A. p\u0142yty g\u0142&oacute;wnej",
            "B2": "B. procesora",
            "B3": "D. karty sieciowej",
            "P": "C. zasilacza"
        },
        {
            "Pytanie": "Kt&oacute;ry protok&oacute;\u0142 zapewnia szyfrowanie po\u0142\u0105czenia?",
            "IMG": "",
            "B1": "A. DHCP",
            "B2": "C. DNS",
            "B3": "D. TELNET",
            "P": "B. SSH"
        },
        {
            "Pytanie": "Aby serwer umo\u017cliwia\u0142 transmisj\u0119 danych w pasmach cz\u0119stotliwo\u015bci 2,4 GHz oraz 5 GHz, nale\u017cy zainstalowa\u0107 w nim kart\u0119 sieciow\u0105 pracuj\u0105c\u0105 w standardzie",
            "IMG": "",
            "B1": "B. 802.11a",
            "B2": "C. 802.11b\n",
            "B3": "D. 802.11b\n",
            "P": "A. 802.11n"
        },
        {
            "Pytanie": "Magistrala zako\u0144czona elementem przedstawionym na rysunku jest charakterystyczna dla interfejsu",
            "IMG": "https://egzamin-informatyk.pl/e12/763.jpg",
            "B1": "B. UDMA",
            "B2": "C. SATA",
            "B3": "D. ATAPI",
            "P": "A. SCSI"
        },
        {
            "Pytanie": "Materia\u0142em eksploatacyjnym stosowanym w drukarkach tekstylnych jest",
            "IMG": "",
            "B1": "B. filament",
            "B2": "C. fuser",
            "B3": "D. ta\u015bma woskowa",
            "P": "A. atrament sublimacyjny"
        },
        {
            "Pytanie": "Kt&oacute;re polecenie w systemie Windows nale\u017cy zastosowa\u0107 do monitorowania listy aktywnych po\u0142\u0105cze\u0144 karty sieciowej w komputerze?",
            "IMG": "",
            "B1": "A. Ipconfig",
            "B2": "B. Ping",
            "B3": "C. Telnet",
            "P": "D. Netstat"
        },
        {
            "Pytanie": "Kt&oacute;ry z podanych adres&oacute;w jest adresem klasy C?",
            "IMG": "",
            "B1": "A. 176.18.5.26",
            "B2": "B. 154.0.12.50",
            "B3": "D. 125.9.3.234",
            "P": "C. 196.74.6.29"
        },
        {
            "Pytanie": "Komputer o adresie IP 192.168.5.165 z mask\u0105 podsieci 255.255.255.192 pracuje w sieci o adresie",
            "IMG": "",
            "B1": "A. 192.168.5.192",
            "B2": "B. 192.168.5.0",
            "B3": "D. 192.168.5.64",
            "P": "C. 192.168.5.128"
        },
        {
            "Pytanie": "W kt&oacute;rym rodzaju cz\u0142onkostwa w VLAN port mo\u017ce by\u0107 cz\u0142onkiem wielu sieci VLAN?",
            "IMG": "",
            "B1": "A. Port-Based VLAN",
            "B2": "C. Statycznym VLAN",
            "B3": "D. Dynamicznym VLAN",
            "P": "B. Multi-VLAN"
        },
        {
            "Pytanie": "Kt&oacute;re urz\u0105dzenie nale\u017cy zastosowa\u0107 do podzia\u0142u domeny rozg\u0142oszeniowej?",
            "IMG": "",
            "B1": "B. Koncentrator",
            "B2": "C. Most",
            "B3": "D. Prze\u0142\u0105cznik",
            "P": "A. Ruter"
        },
        {
            "Pytanie": "Program fsck jest wykorzystywany w systemie Linux do",
            "IMG": "",
            "B1": "A. przeprowadzenia test&oacute;w wydajno\u015bciowych serwera WWW poprzez wys\u0142anie du\u017cej liczby\n\u017c\u0105da\u0144",
            "B2": "B. monitorowania parametr&oacute;w pracy i wydajno\u015bci podzespo\u0142&oacute;w komputera",
            "B3": "C. wykrycia struktury sieci i diagnostyki przepustowo\u015bci sieci lokalnej",
            "P": "D. dokonania oceny stanu systemu plik&oacute;w i wykrycia uszkodzonych sektor&oacute;w"
        },
        {
            "Pytanie": "Kt&oacute;ra topologia fizyczna jest stosowana w sieciach o topologii logicznej Token Ring?",
            "IMG": "",
            "B1": "A. Gwiazdy",
            "B2": "B. Siatki",
            "B3": "C. Magistrali",
            "P": "D. Pier\u015bcienia"
        },
        {
            "Pytanie": "Kt&oacute;re z wymienionych polece\u0144 jest stosowane w celu naprawy g\u0142&oacute;wnego rekordu rozruchowego dysku twardego systemu z rodziny Windows?",
            "IMG": "",
            "B1": "A. bootcfg",
            "B2": "B. fixboot",
            "B3": "C. bcdedit",
            "P": "D. fixmbr"
        },
        {
            "Pytanie": "Monitoruj\u0105c ruch sieciowy, wykryto, \u017ce na adres serwera wykonano tysi\u0105ce zapyta\u0144 DNS na sekund\u0119 z r&oacute;\u017cnych adres&oacute;w IP, co spowodowa\u0142o zawieszenie systemu operacyjnego. Przyczyn\u0105 tego by\u0142 atak typu",
            "IMG": "",
            "B1": "A. DNS snooping",
            "B2": "B. Mail Bombing",
            "B3": "C. Flooding",
            "P": "D. DDoS (Distributed Denial of Service)"
        },
        {
            "Pytanie": "System plik&oacute;w, kt&oacute;ry nie wspiera tworzenia wewn\u0119trznego dziennika zmian, zwanego ksi\u0119gowaniem to",
            "IMG": "",
            "B1": "A. ext3",
            "B2": "B. NTFS",
            "B3": "C. ext4",
            "P": "D. FAT32"
        },
        {
            "Pytanie": "Je\u017celi przy uruchamianiu komputera procedura POST zasygnalizuje b\u0142\u0105d odczytu/zapisu pami\u0119ci CMOS, to nale\u017cy",
            "IMG": "",
            "B1": "B. wymontowa\u0107 modu\u0142 pami\u0119ci RAM, oczy\u015bci\u0107 styki modu\u0142u pami\u0119ci i zamontowa\u0107 pami\u0119\u0107 ponownie",
            "B2": "C. przywr&oacute;ci\u0107 ustawienia fabryczne BIOS Setup",
            "B3": "D. zaprogramowa\u0107 pami\u0119\u0107 EEPROM p\u0142yty g\u0142&oacute;wnej",
            "P": "A. wymieni\u0107 bateri\u0119 uk\u0142adu lub wymieni\u0107 p\u0142yt\u0119 g\u0142&oacute;wn\u0105"
        },
        {
            "Pytanie": "Us\u0142uga, za pomoc\u0105 kt&oacute;rej mo\u017cna pracowa\u0107 zdalnie na komputerze z systemem Windows z innego komputera z systemem Windows pod\u0142\u0105czonego do tej samej sieci lub do Internetu, to",
            "IMG": "",
            "B1": "A. DHCP",
            "B2": "B. FTP",
            "B3": "D. serwer plik&oacute;w",
            "P": "C. pulpit zdalny"
        },
        {
            "Pytanie": "Na zdj\u0119ciu jest widoczny tylny panel komputera. Jak nazywa si\u0119 wej\u015bcie oznaczone strza\u0142k\u0105?",
            "IMG": "https://egzamin-informatyk.pl/old/491.jpg",
            "B1": "B. LPT",
            "B2": "C. USB",
            "B3": "D. COM",
            "P": "A. FireWire"
        },
        {
            "Pytanie": "Norma IEEE 802.11b jest standardem sieci",
            "IMG": "",
            "B1": "B. przewodowych",
            "B2": "C. telefonicznych",
            "B3": "D. \u015bwiat\u0142owodowych",
            "P": "A. bezprzewodowych"
        },
        {
            "Pytanie": "W stacjach roboczych s\u0105 zainstalowane karty sieciowe Ethernet 10/100/1000 ze z\u0142\u0105czem RJ45. Kt&oacute;re medium transmisyjne nale\u017cy wybra\u0107 do budowy sieci komputerowej, aby zapewni\u0107 prac\u0119 z najwy\u017csz\u0105 przepustowo\u015bci\u0105?",
            "IMG": "",
            "B1": "A. \u015awiat\u0142ow&oacute;d jednomodowy",
            "B2": "B. Kabel UTP kategorii 5",
            "B3": "C. \u015awiat\u0142ow&oacute;d wielomodowy",
            "P": "D. Kabel UTP kategorii 5e"
        },
        {
            "Pytanie": "Rysunek przedstawia panel konfiguracyjny bezprzewodowego urz\u0105dzenia dost\u0119powego, kt&oacute;ry umo\u017cliwia",
            "IMG": "https://egzamin-informatyk.pl/e13/97.jpg",
            "B1": "A. nadanie nazwy hosta",
            "B2": "C. przypisanie adres&oacute;w MAC kart sieciowych",
            "B3": "D. przypisanie maski podsieci",
            "P": "B. konfiguracj\u0119 serwera DHCP"
        },
        {
            "Pytanie": "Kt&oacute;re urz\u0105dzenie NIE powinno by\u0107 naprawiane w trakcie u\u017cywania urz\u0105dze\u0144 antystatycznych?",
            "IMG": "",
            "B1": "A. Dysk twardy",
            "B2": "B. Pami\u0119\u0107",
            "B3": "C. Modem",
            "P": "D. Zasilacz"
        },
        {
            "Pytanie": "U\u017cytkownik systemu Windows za pomoc\u0105 programu Cipher mo\u017ce",
            "IMG": "",
            "B1": "A. usun\u0105\u0107 konto u\u017cytkownika wraz z jego profilem oraz dokumentami",
            "B2": "B. wykona\u0107 przyrostow\u0105 kopi\u0119 zapasow\u0105 plik&oacute;w systemowych",
            "B3": "D. przeskanowa\u0107 system w poszukiwania malware",
            "P": "C. chroni\u0107 dane przez szyfrowanie plik&oacute;w"
        },
        {
            "Pytanie": "Jaka jest nominalna moc wyj\u015bciowa (ci\u0105g\u0142a) zasilacza o parametrach zapisanych w tabeli?",
            "IMG": "https://egzamin-informatyk.pl/e12/967.jpg",
            "B1": "B. 336,0 W",
            "B2": "C. 456,0 W",
            "B3": "D. 576,0 W",
            "P": "A. 472,1 W"
        },
        {
            "Pytanie": "Schemat uk\u0142adu po\u0142\u0105cze\u0144 bramek logicznych przedstawia ",
            "IMG": "https://egzamin-informatyk.pl/e12/541.jpg",
            "B1": "B. sumator",
            "B2": "C. kontroler przerwa\u0144",
            "B3": "D. muliplekser",
            "P": "A. przerzutnik"
        },
        {
            "Pytanie": "W pomieszczeniu biurowym nale\u017cy zainstalowa\u0107 5 podw&oacute;jnych gniazd abonenckich. \u015arednia odleg\u0142o\u015b\u0107 gniazda abonenckiego od lokalnego punktu dystrybucyjnego wynosi 10m. Jaki b\u0119dzie przybli\u017cony koszt zakupu kabla UTP kategorii 5e przeznaczonego do budowy sieci lokalnej, je\u017celi cena brutto 1m kabla UTP kategorii 5e wynosi 1,60 z\u0142?",
            "IMG": "",
            "B1": "A. 80,00 z\u0142",
            "B2": "B. 800,00 z\u0142",
            "B3": "D. 320,00 z\u0142",
            "P": "C. 160,00 z\u0142"
        },
        {
            "Pytanie": "Translacja adres&oacute;w \u017ar&oacute;d\u0142owych w ramach us\u0142ugi NAT routera umo\u017cliwiaj\u0105ca komputerom w sieci prywatnej dost\u0119p do internetu nosi nazw\u0119:",
            "IMG": "",
            "B1": "A. DNAT",
            "B2": "B. WNAT",
            "B3": "D. LNAT",
            "P": "C. SNAT"
        },
        {
            "Pytanie": "Jakie s\u0105 warto\u015bci pasma cz\u0119stotliwo\u015bci oraz maksymalnej szybko\u015bci transmisji danych w standardzie 802.11g WiFi?",
            "IMG": "",
            "B1": "A. 2,4 GHz 300 Mbps",
            "B2": "B. 5 GHz 300 Mbps",
            "B3": "C. 5 GHz 54 Mbps",
            "P": "D. 2,4 GHz 54 Mbps"
        },
        {
            "Pytanie": "Przy uruchamianiu si\u0119 komputera pojawia si\u0119 komunikat CMOS checksum error press F1 to continue press DEL to setup. Wci\u015bni\u0119cie klawisza DEL spowoduje",
            "IMG": "",
            "B1": "A. skasowanie zawarto\u015bci pami\u0119ci CMOS",
            "B2": "B. usuni\u0119cie pliku setup",
            "B3": "D. przej\u015bcie do konfiguracji systemu Windows",
            "P": "C. wej\u015bcie do ustawie\u0144 BIOS-u komputera"
        },
        {
            "Pytanie": "Przedstawiony na rysunku interfejs to",
            "IMG": "https://egzamin-informatyk.pl/e12/413.jpg",
            "B1": "A. D-Sub",
            "B2": "C. S-Video",
            "B3": "D. DisplayPort",
            "P": "B. HDMI"
        },
        {
            "Pytanie": "Jaki przew&oacute;d nale\u017cy zastosowa\u0107 do instalacji sieci w pomieszczeniach, w kt&oacute;rych wyst\u0119puj\u0105 silne pola zak\u0142&oacute;caj\u0105ce?",
            "IMG": "",
            "B1": "A. Koncentryczny z transmisj\u0105 szerokopasmow\u0105",
            "B2": "C. Koncentryczny z transmisj\u0105 w pa\u015bmie podstawowym",
            "B3": "D. Typu skr\u0119tka",
            "P": "B. Ekranowany"
        },
        {
            "Pytanie": "Jakie zadanie realizuje protok&oacute;\u0142 ARP (Address Resolution Protocol)?",
            "IMG": "",
            "B1": "B. Przesy\u0142a informacje zwrotne o problemach z sieci\u0105",
            "B2": "C. Zarz\u0105dza grupami multicastowymi w sieciach opartych na protokole IP",
            "B3": "D. Kontroluje przep\u0142yw pakiet&oacute;w wewn\u0105trz system&oacute;w autonomicznych",
            "P": "A. Ustala adres MAC na podstawie adresu IP"
        },
        {
            "Pytanie": "Kt&oacute;ry adres IPv6 jest wykorzystywany jako adres link-local w procesie autokonfiguracji urz\u0105dze\u0144?",
            "IMG": "",
            "B1": "B. he88::/10",
            "B2": "C. fe88::/10",
            "B3": "D. de80::/10",
            "P": "A. fe80::/10"
        },
        {
            "Pytanie": "Dodatkowa funkcja mikroprocesora Intel Turbo Boost pozwala na",
            "IMG": "",
            "B1": "A. w\u0142\u0105czenie i wy\u0142\u0105czenie element&oacute;w mikroprocesora w celu oszcz\u0119dzania energii",
            "B2": "B. wykonywanie wi\u0119kszej liczby instrukcji w jednym cyklu zegara",
            "B3": "C. dokonywanie rozleg\u0142ych oblicze\u0144 przez dwa niezale\u017cne rdzenie, przy czym ka\u017cdy z nich wykonuje do czterech pe\u0142nych instrukcji jednocze\u015bnie",
            "P": "D. automatyczn\u0105 regulacj\u0119 cz\u0119stotliwo\u015bci pracy mikroprocesora w zale\u017cno\u015bci od obci\u0105\u017cenia"
        },
        {
            "Pytanie": "Programem umo\u017cliwiaj\u0105cym wydzielanie logicznych cz\u0119\u015bci dysku twardego w systemie GNU/Linux jest",
            "IMG": "",
            "B1": "A. truncate",
            "B2": "B. format",
            "B3": "C. convert",
            "P": "D. fdisk"
        },
        {
            "Pytanie": "Kt&oacute;re urz\u0105dzenie nale\u017cy wykorzysta\u0107 do pod\u0142\u0105czenia urz\u0105dzenia peryferyjnego, wyposa\u017conego w bezprzewodowy interfejs wykorzystuj\u0105cy do komunikacji fale \u015bwietlne w zakresie podczerwieni, z laptopem, kt&oacute;ry nie ma takiego interfejsu, a ma natomiast interfejs USB?",
            "IMG": "https://egzamin-informatyk.pl/e12/937.jpg",
            "B1": "A. A",
            "B2": "C. C",
            "B3": "D. D",
            "P": "B. B"
        },
        {
            "Pytanie": "Podstawowe znaczenie przy budowie stacji roboczej, na kt&oacute;rej b\u0119dzie dzia\u0142a\u0107 wiele wirtualnych maszyn ma:",
            "IMG": "",
            "B1": "A. Silna karta graficzna",
            "B2": "B. Wysokiej klasy karta sieciowa",
            "B3": "C. Zesp&oacute;\u0142 ch\u0142odzenia wod\u0105",
            "P": "D. Liczba rdzeni procesora"
        },
        {
            "Pytanie": "Urz\u0105dzenie przedstawione na rysunku to",
            "IMG": "https://egzamin-informatyk.pl/e13/373.jpg",
            "B1": "A. bramka VoIP",
            "B2": "B. ruter",
            "B3": "C. wt&oacute;rnik",
            "P": "D. koncentrator"
        },
        {
            "Pytanie": "U\u017cytkownicy dysk&oacute;w SSD w ramach zalecanych czynno\u015bci konserwacyjnych nie powinni wykonywa\u0107",
            "IMG": "",
            "B1": "B. Systematycznych kopii zapasowych danych",
            "B2": "C. Systematycznego sprawdzania dysku programem antywirusowym",
            "B3": "D. Czyszczenia wn\u0119trza jednostki centralnej z kurzu",
            "P": "A. Defragmentacji dysku"
        },
        {
            "Pytanie": "W kt&oacute;rym protokole sieciowym adres \u017ar&oacute;d\u0142owy sk\u0142ada si\u0119 ze 128 bit&oacute;w?",
            "IMG": "",
            "B1": "A. UDP",
            "B2": "C. IPv4",
            "B3": "D. DNS",
            "P": "B. IPv6"
        },
        {
            "Pytanie": "Co mo\u017cna zaobserwowa\u0107 przy pomocy programu Wireshark?",
            "IMG": "",
            "B1": "A. Zwarcie przewod&oacute;w",
            "B2": "B. Przerwy w okablowaniu",
            "B3": "D. Po\u0142\u0105czenia par przewod&oacute;w",
            "P": "C. Ruch pakiet&oacute;w sieciowych"
        },
        {
            "Pytanie": "Uruchomienie systemu Windows jest niemo\u017cliwe z powodu usterki programowej. Aby dokona\u0107 mo\u017cliwie najmniej inwazyjnej diagnozy i usuni\u0119cia tej usterki, wskazane jest",
            "IMG": "",
            "B1": "A. wykonanie wymiany podzespo\u0142&oacute;w",
            "B2": "B. wykonanie diagnostyki podzespo\u0142&oacute;w",
            "B3": "C. wykonanie reinstalacji systemu Windows",
            "P": "D. uruchomienie komputera w trybie awaryjnym"
        },
        {
            "Pytanie": "Popraw\u0119 jako\u015bci skanowania mo\u017cna uzyska\u0107 poprzez zmian\u0119",
            "IMG": "",
            "B1": "B. wielko\u015bci wydruku",
            "B2": "C. formatu pliku wej\u015bciowego",
            "B3": "D. rozmiaru skanowanego dokumentu",
            "P": "A. rozdzielczo\u015bci"
        },
        {
            "Pytanie": "Na rysunku przedstawiono konfiguracj\u0119 karty sieciowej, kt&oacute;rej adres MAC ma warto\u015b\u0107",
            "IMG": "https://egzamin-informatyk.pl/e13/674.jpg",
            "B1": "A. FEC0:0:0:FFFF::2",
            "B2": "B. FE80:E890:BE2B:4C6C:5AA9",
            "B3": "C. 192.168.56.1",
            "P": "D. 0A-00-27-00-00-07"
        },
        {
            "Pytanie": "Pracownik serwisu komputerowego podczas wykonywania konserwacji i czyszczenia drukarki laserowej, od\u0142\u0105czonej od \u017ar&oacute;d\u0142a zasilania, mo\u017ce wykorzysta\u0107 jako \u015brodek ochrony indywidualnej",
            "IMG": "",
            "B1": "A. chusteczk\u0119 do czyszczenia zabrudze\u0144",
            "B2": "C. podzesp&oacute;\u0142 kotwicz\u0105cy",
            "B3": "D. odkurzacz r\u0119czny komputerowy",
            "P": "B. r\u0119kawiczki ochronne"
        },
        {
            "Pytanie": "W celu wymiany uszkodzonego modu\u0142u pami\u0119ci RAM w pierwszej kolejno\u015bci nale\u017cy",
            "IMG": "",
            "B1": "B. otworzy\u0107 obudow\u0119 komputera",
            "B2": "C. wy\u0142\u0105czy\u0107 monitor ekranowy",
            "B3": "D. zdemontowa\u0107 uszkodzony modu\u0142 pami\u0119ci",
            "P": "A. od\u0142\u0105czy\u0107 zasilanie komputera"
        },
        {
            "Pytanie": "Serwer DNS jest serwerem",
            "IMG": "",
            "B1": "A. dynamicznie przydzielaj\u0105cym adresy IP",
            "B2": "C. zdalnego i szyfrowanego dost\u0119pu",
            "B3": "D. us\u0142ug terminalowych",
            "P": "B. dzi\u0119ki kt&oacute;remu nazwy mnemoniczne (opisowe) mog\u0105 zosta\u0107 zamienione na odpowiadaj\u0105ce im adresy IP"
        },
        {
            "Pytanie": "Kt&oacute;re z podanych oznacze\u0144 okre\u015bla, \u017ce jest to kabel typu skr\u0119tka posiadaj\u0105cy podw&oacute;jne ekranowanie?",
            "IMG": "",
            "B1": "A. UTP",
            "B2": "C. SFTP",
            "B3": "D. FTP",
            "P": "B. S-STP"
        },
        {
            "Pytanie": "Jak\u0105 funkcj\u0119 realizuje us\u0142uga NAT uruchomiona na ruterze?",
            "IMG": "",
            "B1": "A. Transport danych korekcyjnych RTCM z wykorzystaniem protoko\u0142u NTRIP",
            "B2": "B. Uwierzytelnianie protoko\u0142em NTLM nazwy i has\u0142a u\u017cytkownika",
            "B3": "C. Synchronizacj\u0119 zegara z serwerem czasu w sieci Internet",
            "P": "D. T\u0142umaczenie adres&oacute;w u\u017cywanych w sieci LAN na jeden lub kilka adres&oacute;w publicznych"
        },
        {
            "Pytanie": "Kt&oacute;rym poleceniem w systemie Linux przypisuje si\u0119 adres IP i mask\u0119 podsieci dla interfejsu eth0?",
            "IMG": "",
            "B1": "A. ipconfig eth0 172.16.31.1 netmask 255.255.0.0",
            "B2": "B. ifconfig eth0 172.16.31.1 mask 255.255.0.0",
            "B3": "C. ipconfig eth0 172.16.31.1 mask 255.255.0.0",
            "P": "D. ifconfig eth0 172.16.31.1 netmask 255.255.0.0"
        },
        {
            "Pytanie": "Ramka z danymi wys\u0142anymi z komputera PC1 do serwera www znajduje si\u0119 pomi\u0119dzy ruterem R1 a ruterem R2 (punkt A). Kt&oacute;re adresy s\u0105 w niej zawarte?",
            "IMG": "https://egzamin-informatyk.pl/e13/564.jpg",
            "B1": "A. \u0179r&oacute;d\u0142owy adres IP rutera R1, docelowy adres IP rutera R2, adres \u017ar&oacute;d\u0142owy MAC komputera PC1, adres docelowy MAC serwera",
            "B2": "B. \u0179r&oacute;d\u0142owy adres IP komputera PC1, docelowy adres IP serwera, adres \u017ar&oacute;d\u0142owy MAC komputera PC1, adres docelowy MAC serwera",
            "B3": "D. \u0179r&oacute;d\u0142owy adres IP komputera PC1, docelowy adres rutera R2, adres \u017ar&oacute;d\u0142owy MAC komputera PC1, adres docelowy MAC serwera",
            "P": "C. \u0179r&oacute;d\u0142owy adres IP komputera PC1, docelowy adres IP serwera, adres \u017ar&oacute;d\u0142owy MAC rutera R1, adres docelowy MAC rutera R2"
        },
        {
            "Pytanie": "Przedstawiony na rysunku element elektroniczny to:",
            "IMG": "https://egzamin-informatyk.pl/ee08/1687.png",
            "B1": "A. rezystor",
            "B2": "B. kondensator",
            "B3": "D. cewka",
            "P": "C. tranzystor"
        },
        {
            "Pytanie": "Je\u015bli podczas uruchamiania si\u0119 systemu BIOS firmy AWARD komputer wyda\u0142 d\u0142ugi sygna\u0142 i dwa kr&oacute;tkie, oznacza to, \u017ce wyst\u0105pi\u0142 b\u0142\u0105d",
            "IMG": "",
            "B1": "A. pami\u0119ci Flash - BIOS",
            "B2": "B. kontrolera klawiatury",
            "B3": "C. p\u0142yty g\u0142&oacute;wnej",
            "P": "D. karty graficznej"
        },
        {
            "Pytanie": "W drukarce laserowej do utrwalenia na kartce wydruku wykorzystuje si\u0119",
            "IMG": "",
            "B1": "A. promienie lasera",
            "B2": "B. g\u0142owice piezoelektryczne",
            "B3": "C. ta\u015bmy transmisyjne",
            "P": "D. rozgrzane wa\u0142ki"
        },
        {
            "Pytanie": "W systemach Linux, aby doda\u0107 repozytorium, mo\u017cna u\u017cy\u0107 polece\u0144",
            "IMG": "",
            "B1": "A. zypper ref oraz add-apt-repository",
            "B2": "C. zypper rr oraz remove-apt-repository",
            "B3": "D. zypper lr oraz remove-apt-repository",
            "P": "B. zypper ar oraz add-apt-repository"
        },
        {
            "Pytanie": "Do kt&oacute;rej klasy adres&oacute;w IP nale\u017cy adres 130.140.0.0?",
            "IMG": "",
            "B1": "A. Do klasy A",
            "B2": "B. Do klasy D",
            "B3": "C. Do klasy C",
            "P": "D. Do klasy B"
        },
        {
            "Pytanie": "Aby chroni\u0107 system przed atakami z sieci okre\u015blanymi mianem phishing, nie zaleca si\u0119",
            "IMG": "",
            "B1": "A. uaktualniania oprogramowania do obs\u0142ugi poczty elektronicznej",
            "B2": "B. korzystania z serwis&oacute;w WWW u\u017cywaj\u0105cych protoko\u0142u HTTPS",
            "B3": "D. korzystania z bankowo\u015bci elektronicznej",
            "P": "C. u\u017cywania starszych przegl\u0105darek internetowych"
        },
        {
            "Pytanie": "Ka\u017cdy kolejny router IP na trasie pakietu",
            "IMG": "",
            "B1": "A. zwi\u0119ksza warto\u015b\u0107 TTL przekazywanego pakietu o jeden",
            "B2": "B. zmniejsza warto\u015b\u0107 TTL przekazywanego pakietu o dwa",
            "B3": "C. zwi\u0119ksza warto\u015b\u0107 TTL przekazywanego pakietu o dwa",
            "P": "D. zmniejsza warto\u015b\u0107 TTL przekazywanego pakietu o jeden"
        },
        {
            "Pytanie": "Wska\u017c nazw\u0119 us\u0142ugi prze\u0142\u0105cznika, kt&oacute;ra umo\u017cliwi ustawienie wy\u017cszego priorytetu dla transmisji VoIP",
            "IMG": "",
            "B1": "B. STP",
            "B2": "C. SNMP",
            "B3": "D. VNC",
            "P": "A. QoS"
        },
        {
            "Pytanie": "Zastosowanie na komputerze z systemem Windows kolejno polece\u0144 ipconfig /release i ipconfig /renew pozwoli sprawdzi\u0107, czy w sieci prawid\u0142owo dzia\u0142a us\u0142uga",
            "IMG": "",
            "B1": "A. rutingu",
            "B2": "B. Active Directory",
            "B3": "D. serwera DNS",
            "P": "C. serwera DHCP"
        },
        {
            "Pytanie": "Do sporz\u0105dzenia projektu sieci komputerowej dla budynku szko\u0142y najlepiej wykorzysta\u0107 edytor grafiki wektorowej, kt&oacute;rym jest program",
            "IMG": "",
            "B1": "A. MS Excel",
            "B2": "C. MS Publisher",
            "B3": "D. Adobe Photoshop",
            "P": "B. AutoCad"
        },
        {
            "Pytanie": "AES (ang. Advanced Encryption Standard)",
            "IMG": "",
            "B1": "A. nie mo\u017ce by\u0107 wykorzystany przy szyfrowaniu plik&oacute;w",
            "B2": "B. jest poprzednikiem DES (ang. Data Encryption Standard)",
            "B3": "C. nie mo\u017ce by\u0107 zaimplementowany sprz\u0119towo",
            "P": "D. wykorzystuje symetryczny algorytm szyfruj\u0105cy"
        },
        {
            "Pytanie": "Aby unikn\u0105\u0107 uszkodzenia uk\u0142ad&oacute;w scalonych, podczas naprawy sprz\u0119tu komputerowego nale\u017cy stosowa\u0107",
            "IMG": "",
            "B1": "A. sk&oacute;rzane r\u0119kawiczki",
            "B2": "B. gumowe r\u0119kawiczki",
            "B3": "C. okulary ochronne",
            "P": "D. opask\u0119 antystatyczn\u0105"
        },
        {
            "Pytanie": "Kt&oacute;re narz\u0119dzie najlepiej wykorzysta\u0107 do lekkiego odgi\u0119cia blachy obudowy komputera oraz zamocowania \u015bruby monta\u017cowej w trudno dost\u0119pnym miejscu?",
            "IMG": "https://egzamin-informatyk.pl/e12/867.jpg",
            "B1": "A. A",
            "B2": "B. B",
            "B3": "C. C",
            "P": "D. D"
        },
        {
            "Pytanie": "Kt&oacute;ry z symboli oznacza zastrze\u017cenie praw autorskich?",
            "IMG": "https://egzamin-informatyk.pl/ee08/1896.jpg",
            "B1": "B. B",
            "B2": "C. C",
            "B3": "D. D",
            "P": "A. A"
        },
        {
            "Pytanie": "Przedstawion\u0105 diagnostyk\u0119 systemu Linux mo\u017cna zrealizowa\u0107 za pomoc\u0105 polecenia",
            "IMG": "https://egzamin-informatyk.pl/e12/913.jpg",
            "B1": "A. pwd",
            "B2": "C. cat",
            "B3": "D. whoami",
            "P": "B. lscpu"
        },
        {
            "Pytanie": "Korzystaj\u0105c z zamieszczonej w tabeli specyfikacji p\u0142yty g\u0142&oacute;wnej, okre\u015bl maksymaln\u0105 liczb\u0119 kart rozszerze\u0144, kt&oacute;re mo\u017cna pod\u0142\u0105czy\u0107 do magistrali Peripheral Component Interconnect",
            "IMG": "https://egzamin-informatyk.pl/e12/475.jpg",
            "B1": "A. 3",
            "B2": "C. 1",
            "B3": "D. 2",
            "P": "B. 5"
        },
        {
            "Pytanie": "Serwer Samba umo\u017cliwia wsp&oacute;\u0142dzielenie plik&oacute;w i drukarek w sieci za pomoc\u0105 demona",
            "IMG": "",
            "B1": "A. grep",
            "B2": "C. quota",
            "B3": "D. mkfs",
            "P": "B. smbd"
        },
        {
            "Pytanie": "Kt&oacute;ry protok&oacute;\u0142 nie funkcjonuje w warstwie aplikacji modelu ISO/OSI?",
            "IMG": "",
            "B1": "B. DNS",
            "B2": "C. FTP",
            "B3": "D. HTTP",
            "P": "A. IP"
        },
        {
            "Pytanie": "W tabeli zamieszczono podstawowe dane techniczne dw&oacute;ch interfejs&oacute;w. Wynika z nich, \u017ce SATA w por&oacute;wnaniu z ATA ma",
            "IMG": "https://egzamin-informatyk.pl/old/649.jpg",
            "B1": "A. mniejsz\u0105 przepustowo\u015b\u0107 i mniejsz\u0105 liczb\u0119 wyprowadze\u0144 w z\u0142\u0105czu",
            "B2": "B. mniejsz\u0105 przepustowo\u015b\u0107 i wi\u0119ksz\u0105 liczb\u0119 wyprowadze\u0144 w z\u0142\u0105czu",
            "B3": "D. wi\u0119ksz\u0105 przepustowo\u015b\u0107 i wi\u0119ksz\u0105 liczb\u0119 wyprowadze\u0144 w z\u0142\u0105czu",
            "P": "C. wi\u0119ksz\u0105 przepustowo\u015b\u0107 i mniejsz\u0105 liczb\u0119 wyprowadze\u0144 w z\u0142\u0105czu"
        },
        {
            "Pytanie": "Mapowanie dysk&oacute;w jest",
            "IMG": "",
            "B1": "A. nadaniem uprawnie\u0144 do folderu u\u017cytkownikom sieci WAN",
            "B2": "C. konfiguracja interfejs&oacute;w sieciowych",
            "B3": "D. definiowaniem u\u017cytkownik&oacute;w i grup u\u017cytkownik&oacute;w",
            "P": "B. przyporz\u0105dkowaniem oznaczenia dysku wybranemu katalogowi sieciowemu"
        },
        {
            "Pytanie": "W systemie Linux, aby wyszuka\u0107 wszystkie pliki z rozszerzeniem txt, kt&oacute;re znajduj\u0105 si\u0119 w katalogu /home/user i zaczynaj\u0105 si\u0119 na liter\u0119 a lub liter\u0119 b lub liter\u0119 c, nale\u017cy wyda\u0107 polecenie",
            "IMG": "",
            "B1": "B. ls /home/user/abc*.txt",
            "B2": "C. ls /home/user/a?b?c?.txt",
            "B3": "D. ls /home/user/[!abc]*.txt",
            "P": "A. ls /home/user/[a-c]*.txt"
        },
        {
            "Pytanie": "Do po\u0142\u0105czenia kamery cyfrowej posiadaj\u0105cej interfejs IEEE 1394 (FireWire), z komputerem stosuje si\u0119 kabel z wtyczk\u0105 przedstawion\u0105 na zdj\u0119ciu",
            "IMG": "https://egzamin-informatyk.pl/old/351.jpg",
            "B1": "B. B",
            "B2": "C. C",
            "B3": "D. D",
            "P": "A. A"
        },
        {
            "Pytanie": "Aby w systemie Windows wykona\u0107 \u015bledzenie trasy pakiet&oacute;w do serwera strony internetowej, nale\u017cy wykorzysta\u0107 polecenie",
            "IMG": "",
            "B1": "A. ping",
            "B2": "C. iproute",
            "B3": "D. netstat",
            "P": "B. tracert"
        },
        {
            "Pytanie": "Najlepszym zabezpieczeniem sieci bezprzewodowej jest",
            "IMG": "",
            "B1": "B. protok&oacute;\u0142 WEP",
            "B2": "C. protok&oacute;\u0142 WPA",
            "B3": "D. protok&oacute;\u0142 SSH",
            "P": "A. protok&oacute;\u0142 WPA2"
        },
        {
            "Pytanie": "W drukarce laserowej do utrwalania wydruku wykorzystuje si\u0119",
            "IMG": "",
            "B1": "A. g\u0142owice piezoelektryczne",
            "B2": "B. ta\u015bmy transmisyjne ",
            "B3": "D. promienie lasera",
            "P": "C. rozgrzane wa\u0142ki"
        },
        {
            "Pytanie": "AC-72-89-17-6E-B2 to adres fizyczny karty sieciowej zapisany w postaci",
            "IMG": "",
            "B1": "A. binarnej",
            "B2": "C. dziesi\u0119tnej",
            "B3": "D. oktalnej",
            "P": "B. heksadecymalnej"
        },
        {
            "Pytanie": "Kt&oacute;ry parametr okablowania strukturalnego okre\u015bla stosunek mocy sygna\u0142u testowego w jednej z par do mocy sygna\u0142u wyindukowanego w s\u0105siedniej parze na tym samym ko\u0144cu kabla?",
            "IMG": "",
            "B1": "A. Przenik zdalny",
            "B2": "C. Suma przenik&oacute;w zdalnych",
            "B3": "D. Suma przenik&oacute;w zbli\u017cnych i zdalnych",
            "P": "B. Przenik zbli\u017cny"
        },
        {
            "Pytanie": "Prze\u0142\u0105cznik sieciowy standardu Fast Ethernet umo\u017cliwia transmisj\u0119 danych z maksymaln\u0105 pr\u0119dko\u015bci\u0105",
            "IMG": "",
            "B1": "A. 10 MB/s",
            "B2": "B. 10 Mbps",
            "B3": "C. 100 MB/s",
            "P": "D. 100 Mbps"
        },
        {
            "Pytanie": "Aby udro\u017cni\u0107 zatkane dysze kartrid\u017ca drukarki atramentowej, nale\u017cy",
            "IMG": "",
            "B1": "A. oczy\u015bci\u0107 dysze za pomoc\u0105 spr\u0119\u017conego powietrza",
            "B2": "C. przeczy\u015bci\u0107 dysze drobnym papierem \u015bciernym",
            "B3": "D. oczy\u015bci\u0107 dysze za pomoc\u0105 drucianych zmywak&oacute;w",
            "P": "B. przemy\u0107 dysz\u0119 specjalnym \u015brodkiem chemicznym"
        },
        {
            "Pytanie": "Adresy IPv4 klasy B w pierwszym oktecie zawieraj\u0105 liczby z zakresu",
            "IMG": "",
            "B1": "A. od 192 do 223",
            "B2": "C. od 64 do 127",
            "B3": "D. od 32 do 63",
            "P": "B. od 128 do 191"
        },
        {
            "Pytanie": "Kt&oacute;ra karta graficzna nie b\u0119dzie wsp&oacute;\u0142pracowa\u0142a z monitorem, wyposa\u017conym w z\u0142\u0105cza przedstawione na zdj\u0119ciu (zak\u0142adaj\u0105c, \u017ce do pod\u0142\u0105czenia monitora nie mo\u017cna zastosowa\u0107 adaptera)?",
            "IMG": "https://egzamin-informatyk.pl/e12/923.jpg",
            "B1": "B. Sapphire Fire Pro W9000 6GB GDDR5 (384 bit) 6x mini DisplayPort",
            "B2": "C. Fujitsu NVIDIA Quadro M2000 4GB GDDR5 (128 Bit) 4xDisplayPort",
            "B3": "D. Asus Radeon RX 550 4GB GDDR5 (128 bit), DVI-D, HDMI, DisplayPort",
            "P": "A. HIS R7 240 2GB GDDR3 (128 bit) HDMI, DVI, D-Sub"
        },
        {
            "Pytanie": "Transformator impulsowy w przedstawionym zasilaczu oznaczono symbolem",
            "IMG": "https://egzamin-informatyk.pl/ee08/1568.png",
            "B1": "B. B",
            "B2": "C. C",
            "B3": "D. D",
            "P": "A. A"
        },
        {
            "Pytanie": "Przedstawiony schemat obrazuje zasad\u0119 dzia\u0142ania",
            "IMG": "https://egzamin-informatyk.pl/e12/859.jpg",
            "B1": "A. skanera p\u0142askiego",
            "B2": "C. cyfrowego aparatu fotograficznego",
            "B3": "D. drukarki termosublimacyjnej",
            "P": "B. myszy optycznej"
        },
        {
            "Pytanie": "W dokumentacji technicznej efektywno\u015b\u0107 g\u0142o\u015bnika pod\u0142\u0105czonego do komputera zapisuje si\u0119 w jednostce:",
            "IMG": "",
            "B1": "A. kHz",
            "B2": "B. W",
            "B3": "D. J",
            "P": "C. dB"
        },
        {
            "Pytanie": "System o\u015bwietlenia oparty o tr&oacute;jkolorowe diody LED wykorzystuj\u0105 skanery typu",
            "IMG": "",
            "B1": "B. CMOS",
            "B2": "C. CCD",
            "B3": "D. CMYK",
            "P": "A. CIS"
        },
        {
            "Pytanie": "Standard IEEE 802.11 definiuje sieci",
            "IMG": "",
            "B1": "A. Fast Ethernet",
            "B2": "C. \u015awiat\u0142owodowe LAN",
            "B3": "D. Gigabit Ethernet",
            "P": "B. Bezprzewodowe LAN"
        },
        {
            "Pytanie": "Kt&oacute;ra us\u0142uga serwera Windows pozwoli u\u017cytkownikom ko\u0144cowym sieci przedstawionej na rysunku na korzystanie z Internetu?",
            "IMG": "https://egzamin-informatyk.pl/e13/759.jpg",
            "B1": "A. Us\u0142uga drukowania",
            "B2": "B. Us\u0142uga LDS",
            "B3": "C. Us\u0142uga udost\u0119pniania",
            "P": "D. Us\u0142uga rutingu"
        },
        {
            "Pytanie": "W systemie Windows 7 w celu skopiowania katalogu c:\test wraz z podkatalogami na dysk przeno\u015bny, nalezy u\u017cy\u0107 polecenia",
            "IMG": "",
            "B1": "B. copy c:\test f:\test /E",
            "B2": "C. xcopy f:\test c:\test /E",
            "B3": "D. copy f:\test c:\test /E",
            "P": "A. xcopy c:\test f:\test /E"
        },
        {
            "Pytanie": "Podstawowy protok&oacute;\u0142 u\u017cywany do wyznaczenia trasy i wysy\u0142ania ni\u0105 pakietu danych w sieci komputerowej to",
            "IMG": "",
            "B1": "A. POP3",
            "B2": "B. PPP",
            "B3": "D. SSL",
            "P": "C. RIP"
        },
        {
            "Pytanie": "Kt&oacute;re porty nale\u017cy zablokowa\u0107 w zaporze sieciowej, aby uniemo\u017cliwi\u0107 po\u0142\u0105czenie z serwerem FTP?",
            "IMG": "",
            "B1": "B. 80 i 443",
            "B2": "C. 25 i 143",
            "B3": "D. 22 i 23",
            "P": "A. 20 i 21"
        },
        {
            "Pytanie": "W firmowej sieci bezprzewodowej zosta\u0142a uruchomiona us\u0142uga polegaj\u0105ca na t\u0142umaczeniu nazw mnemonicznych. Jest to us\u0142uga",
            "IMG": "",
            "B1": "B. DHCP",
            "B2": "C. RADIUS",
            "B3": "D. RDS",
            "P": "A. DNS"
        },
        {
            "Pytanie": "Aby mo\u017cliwe by\u0142o przesy\u0142anie cyfrowego sygna\u0142u audio i wideo bez strat jako\u015bci z komputera do urz\u0105dzenia zewn\u0119trznego pod\u0142\u0105czonego do wyj\u015bcia karty graficznej, to karta graficzna powinna by\u0107 wyposa\u017cona w interfejs",
            "IMG": "",
            "B1": "A. D-Sub",
            "B2": "B. DVI-A",
            "B3": "D. VGA",
            "P": "C. HDMI"
        },
        {
            "Pytanie": "Kt&oacute;rego z polece\u0144 systemu Linux nale\u017cy u\u017cy\u0107 do utworzenia archiwum danych?",
            "IMG": "",
            "B1": "A. date",
            "B2": "B. cal",
            "B3": "D. grep",
            "P": "C. tar"
        },
        {
            "Pytanie": "Z jak\u0105 najni\u017csz\u0105 efektywn\u0105 cz\u0119stotliwo\u015bci\u0105 taktowania mog\u0105 wsp&oacute;\u0142pracowa\u0107 pami\u0119ci DDR2?",
            "IMG": "",
            "B1": "B. 800 MHz",
            "B2": "C. 233 MHz",
            "B3": "D. 333 MHz",
            "P": "A. 533 MHz"
        },
        {
            "Pytanie": "Kt&oacute;re urz\u0105dzenie sieciowe przedstawia symbol graficzny?",
            "IMG": "https://egzamin-informatyk.pl/e13/289.jpg",
            "B1": "A. Access Point",
            "B2": "C. Hub",
            "B3": "D. Switch",
            "P": "B. Router"
        },
        {
            "Pytanie": "Kt&oacute;ra z topologii przedstawionych na rysunkach jest topologi\u0105 siatki?",
            "IMG": "https://egzamin-informatyk.pl/e13/609.jpg",
            "B1": "B. B",
            "B2": "C. C",
            "B3": "D. D",
            "P": "A. A"
        },
        {
            "Pytanie": "Na kt&oacute;rych portach brama internetowa musi przepuszcza\u0107 ruch, aby u\u017cytkownicy sieci lokalnej mogli pobiera\u0107 pliki z serwera FTP?",
            "IMG": "",
            "B1": "A. 110 i 995",
            "B2": "C. 80 i 443",
            "B3": "D. 22 i 25",
            "P": "B. 20 i 21"
        },
        {
            "Pytanie": "Aby zabezpieczy\u0107 sie\u0107 bezprzewodow\u0105 przed nieautoryzowanym dost\u0119pem, nale\u017cy mi\u0119dzy innymi",
            "IMG": "",
            "B1": "B. zastosowa\u0107 nazw\u0119 identyfikatora sieci SSID o d\u0142ugo\u015bci min. 16 znak&oacute;w",
            "B2": "C. wy\u0142\u0105czy\u0107 szyfrowanie danych",
            "B3": "D. korzysta\u0107 wy\u0142\u0105cznie z kana\u0142&oacute;w u\u017cywanych przez inne sieci WiFi",
            "P": "A. w\u0142\u0105czy\u0107 filtrowanie adres&oacute;w MAC"
        },
        {
            "Pytanie": "Przedstawiony symbol odnosi si\u0119 do urz\u0105dze\u0144",
            "IMG": "https://egzamin-informatyk.pl/old/458.jpg",
            "B1": "B. IEEE-1394",
            "B2": "C. USB",
            "B3": "D. LPT",
            "P": "A. SCSI"
        },
        {
            "Pytanie": "W systemie Windows XP na komputerze klienckim, plik &quot;hosts&quot; jest plikiem tekstowym, kt&oacute;ry s\u0142u\u017cy do mapowania",
            "IMG": "",
            "B1": "B. dysk&oacute;w twardych",
            "B2": "C. nazw host&oacute;w przez serwery DNS",
            "B3": "D. nazw host&oacute;w na adresy MAC",
            "P": "A. nazw host&oacute;w na adresy IP"
        },
        {
            "Pytanie": "Zgodnie z KNR (katalogiem nak\u0142ad&oacute;w rzeczowych) monta\u017c na skr\u0119tce 4-parowej modu\u0142u RJ45 i z\u0142\u0105cza kraw\u0119dziowego to 0,07 r-g, monta\u017c gniazd abonenckich natynkowych to 0,30 r-g. Jaki b\u0119dzie koszt robocizny zamontowania 10 pojedynczych gniazd natynkowych z modu\u0142ami RJ45, je\u017celi stawka godzinowa montera-instalatora wynosi 20,00 z\u0142?",
            "IMG": "",
            "B1": "A. 14,00 z\u0142",
            "B2": "B. 120,00 z\u0142",
            "B3": "D. 60,00 z\u0142",
            "P": "C. 74,00 z\u0142"
        },
        {
            "Pytanie": "Jakim poleceniem w systemie Linux, mo\u017cna zmieni\u0107 prawa dost\u0119pu do pliku b\u0105d\u017a katalogu?",
            "IMG": "",
            "B1": "A. chattrib",
            "B2": "B. iptables",
            "B3": "C. attrib",
            "P": "D. chmod"
        },
        {
            "Pytanie": "Kt&oacute;ry standard sieci LAN definiuje dost\u0119p do medium na podstawie tokenu (\u017cetonu)?",
            "IMG": "",
            "B1": "A. IEEE 802.2",
            "B2": "B. IEEE 802.3",
            "B3": "C. IEEE 802.1",
            "P": "D. IEEE 802.5"
        },
        {
            "Pytanie": "Wska\u017c wtyk zasilaj\u0105cy, kt&oacute;ry podczas monta\u017cu zestawu komputerowego nale\u017cy pod\u0142\u0105czy\u0107 do nap\u0119du optycznego.",
            "IMG": "https://egzamin-informatyk.pl/e12/926.jpg",
            "B1": "B. B",
            "B2": "C. C",
            "B3": "D. D",
            "P": "A. A"
        },
        {
            "Pytanie": "Kt&oacute;re zdanie opisuje protok&oacute;\u0142 SSH (Secure Shell)?",
            "IMG": "",
            "B1": "A. Sesje SSH nie pozwalaj\u0105 okre\u015bli\u0107, czy punkty ko\u0144cowe s\u0105 autentyczne",
            "B2": "C. Sesje SSH powoduj\u0105 wysy\u0142anie zwyk\u0142ego tekstu, niezaszyfrowanych danych",
            "B3": "D. Protok&oacute;\u0142 do zdalnej pracy na odleg\u0142ym komputerze nie zapewnia kodowania transmisji",
            "P": "B. Bezpieczny protok&oacute;\u0142 terminalu sieciowego udost\u0119pniaj\u0105cy us\u0142ugi szyfrowania po\u0142\u0105czenia"
        },
        {
            "Pytanie": "Czynno\u015bci\u0105 konserwacyjn\u0105 zwi\u0105zan\u0105 z eksploatacj\u0105 skanera p\u0142askiego jest",
            "IMG": "",
            "B1": "A. w\u0142\u0105czenie automatycznego pobierania zalecanych sterownik&oacute;w do urz\u0105dzenia ",
            "B2": "C. czyszczenie dysz kartrid\u017ca",
            "B3": "D. pod\u0142\u0105czenie urz\u0105dzenia do listwy przepi\u0119ciowej",
            "P": "B. regularne czyszczenie szyby skanera oraz p\u0142yty dociskowej "
        },
        {
            "Pytanie": "Aby wymontowa\u0107 dysk twardy zamocowany w laptopie za pomoc\u0105 przedstawionych \u015brub monta\u017cowych, najlepiej u\u017cy\u0107 wkr\u0119taka typu",
            "IMG": "https://egzamin-informatyk.pl/e12/868.jpg",
            "B1": "A. imbus",
            "B2": "B. torx",
            "B3": "C. spanner",
            "P": "D. philips"
        },
        {
            "Pytanie": "Kt&oacute;re urz\u0105dzenie sieciowe warstwy \u0142\u0105cza danych modelu OSI analizuje zawarte w ramce Ethernet adresy MAC i na tej podstawie podejmuje decyzj\u0119, o przes\u0142aniu sygna\u0142u z jednego do drugiego segmentu sieci lub o jego zablokowaniu?",
            "IMG": "",
            "B1": "A. koncentrator",
            "B2": "B. punkt dost\u0119powy",
            "B3": "C. wzmacniak",
            "P": "D. most"
        },
        {
            "Pytanie": "Kt&oacute;rego protoko\u0142u nale\u017cy u\u017cy\u0107 do odbioru poczty elektronicznej ze swojego serwera?",
            "IMG": "",
            "B1": "B. FTP",
            "B2": "C. SMTP",
            "B3": "D. SNMP",
            "P": "A. POP3"
        },
        {
            "Pytanie": "Aby zapewni\u0107 w\u0142a\u015bciwie funkcjonowanie skanera, nale\u017cy",
            "IMG": "",
            "B1": "B. sprawdzi\u0107 temperatur\u0119 podzespo\u0142&oacute;w komputera",
            "B2": "C. mie\u0107 zainstalowany w systemie program antywirusowy",
            "B3": "D. smarowa\u0107 \u0142o\u017cyska wentylator&oacute;w ch\u0142odzenia jednostki centralnej",
            "P": "A. nie wk\u0142ada\u0107 kartek ze zszywkami do podajnika urz\u0105dzenia, je\u015bli jest on automatyczny"
        },
        {
            "Pytanie": "Kt&oacute;re z wymienionych polece\u0144 w systemie Windows XP s\u0142u\u017cy do sprawdzenia bie\u017c\u0105cej konfiguracji IP systemu Windows?",
            "IMG": "",
            "B1": "A. ipedit",
            "B2": "C. configip",
            "B3": "D. tcpconfig",
            "P": "B. ipconfig"
        },
        {
            "Pytanie": "Zdj\u0119cie przedstawia kart\u0119",
            "IMG": "https://egzamin-informatyk.pl/old/75.jpg",
            "B1": "A. d\u017awi\u0119kow\u0105 ze z\u0142\u0105czem PCI",
            "B2": "C. telewizyjn\u0105 ze z\u0142\u0105czem ISA",
            "B3": "D. sieciow\u0105 ze z\u0142\u0105czem ISA",
            "P": "B. telewizyjn\u0105 ze z\u0142\u0105czem PCI"
        },
        {
            "Pytanie": "Na schemacie dzia\u0142ania skanera numerem 1 oznaczono element, kt&oacute;rego zadaniem jest",
            "IMG": "https://egzamin-informatyk.pl/old/713.jpg",
            "B1": "B. wzmacnianie sygna\u0142u elektrycznego",
            "B2": "C. wzmacnianie sygna\u0142u optycznego",
            "B3": "D. zamiana sygna\u0142u analogowego na sygna\u0142 cyfrowy",
            "P": "A. zamiana sygna\u0142u optycznego na sygna\u0142 elektryczny"
        },
        {
            "Pytanie": "Na rysunku przedstawiono zako\u0144czenie kabla",
            "IMG": "https://egzamin-informatyk.pl/ee08/1904.jpg",
            "B1": "A. typu skr\u0119tka",
            "B2": "B. koncentrycznego",
            "B3": "C. telefonicznego",
            "P": "D. \u015bwiat\u0142owodowego"
        },
        {
            "Pytanie": "Kt&oacute;ra us\u0142uga musi byc uruchomiona na serwerze by stacja robocza pobiera\u0142a automatycznie adres IP?",
            "IMG": "",
            "B1": "A. DNS",
            "B2": "C. PROXY",
            "B3": "D. WINS",
            "P": "B. DHCP"
        },
        {
            "Pytanie": "Fast Ethernet to standard sieci przewodowej, umo\u017cliwiaj\u0105cy transmisj\u0119 danych z maksymaln\u0105 pr\u0119dko\u015bci\u0105",
            "IMG": "",
            "B1": "A. 108 Mbps",
            "B2": "B. 1000 Mbps",
            "B3": "D. 54 Mbps",
            "P": "C. 100 Mbps"
        },
        {
            "Pytanie": "Podstawowym mechanizmem ochrony danych znajduj\u0105cych si\u0119 na serwerze jest",
            "IMG": "",
            "B1": "A. w\u0142\u0105czenie ochrony systemu",
            "B2": "B. automatyczne wykonywanie kompresji danych",
            "B3": "C. tworzenie punktu przywracania systemu",
            "P": "D. tworzenie kopii bezpiecze\u0144stwa"
        },
        {
            "Pytanie": "Kt&oacute;re pole jest zawarte w nag\u0142&oacute;wku protoko\u0142u UDP?",
            "IMG": "",
            "B1": "A. Numer potwierdzenia",
            "B2": "B. Wska\u017anik pilno\u015bci",
            "B3": "C. Numer sekwencyjny",
            "P": "D. Suma kontrolna"
        },
        {
            "Pytanie": "Klient dostarczy\u0142 niesprawny sprz\u0119t komputerowy do serwisu. Serwisant w trakcie procedury przyj\u0119cia sprz\u0119tu, lecz przed przyst\u0105pieniem do jego naprawy, powinien",
            "IMG": "",
            "B1": "B. sporz\u0105dzi\u0107 rewers serwisowy i opiecz\u0119towany przed\u0142o\u017cy\u0107 do podpisu",
            "B2": "C. sporz\u0105dzi\u0107 rachunek naprawy w dw&oacute;ch egzemplarzach",
            "B3": "D. wykona\u0107 testowanie powykonawcze sprz\u0119tu",
            "P": "A. wykona\u0107 przegl\u0105d og&oacute;lny sprz\u0119tu oraz przeprowadzi\u0107 wywiad z klientem"
        },
        {
            "Pytanie": "Kt&oacute;ry typ plik&oacute;w nale\u017cy utworzy\u0107 w systemie operacyjnym do zautomatyzowania najcz\u0119\u015bciej wykonywanych czynno\u015bci, takich jak kopiowanie, tworzenie plik&oacute;w lub folder&oacute;w?",
            "IMG": "",
            "B1": "B. Konfiguracyjny",
            "B2": "C. Inicjuj\u0105cy",
            "B3": "D. Systemowy",
            "P": "A. Wsadowy"
        },
        {
            "Pytanie": "Industry Standard Architecture jest standardem magistrali, zgodnie z kt&oacute;rym szyna danych ma szeroko\u015b\u0107:",
            "IMG": "",
            "B1": "A. 64 bit&oacute;w",
            "B2": "B. 32 bit&oacute;w",
            "B3": "D. 128 bit&oacute;w",
            "P": "C. 16 bit&oacute;w"
        },
        {
            "Pytanie": "Transmisja za pomoc\u0105 fal radiowych korzystaj\u0105cych z pasma ISM jest realizowana w interfejsie",
            "IMG": "",
            "B1": "A. FireWire",
            "B2": "B. IrDA",
            "B3": "C. HDMI",
            "P": "D. Bluetooth"
        },
        {
            "Pytanie": "Zestaw narz\u0119dzi do monta\u017cu okablowania miedzianego typu &quot;skr\u0119tka&quot; w sieci lokalnej powinien zawiera\u0107",
            "IMG": "",
            "B1": "A. narz\u0119dzie uderzeniowe, n&oacute;\u017c monterski, spawark\u0119 \u015bwiat\u0142owodow\u0105, tester okablowania",
            "B2": "B. komplet wkr\u0119tak&oacute;w, narz\u0119dzie uderzeniowe, tester okablowania, lutownic\u0119",
            "B3": "D. \u015bci\u0105gacz izolacji, zaciskark\u0119 z\u0142\u0105czy modularnych, n&oacute;\u017c monterski, miernik uniwersalny",
            "P": "C. zaciskark\u0119 z\u0142\u0105czy modularnych, \u015bci\u0105gacz izolacji, narz\u0119dzie uderzeniowe, tester okablowania"
        },
        {
            "Pytanie": "Jaki zakres adres&oacute;w obejmuj\u0105 adresy klasy C?",
            "IMG": "",
            "B1": "A. 224.0.0.1 - 239.255.255.0",
            "B2": "B. 128.0.0.1 - 191.255.255.254",
            "B3": "C. 1.0.0.1 - 126.255.255.254",
            "P": "D. 192.0.0.0 - 223.255.255.255"
        },
        {
            "Pytanie": "Komputer K1 jest pod\u0142\u0105czony do interfejsu G0 rutera, komputer K2 do interfejsu G1 tego samego rutera. Na podstawie przedstawionej w tabelce adresacji ustal prawid\u0142owy adres bramy komputera K2.",
            "IMG": "https://egzamin-informatyk.pl/e13/787.jpg",
            "B1": "A. 172.16.0.1",
            "B2": "B. 192.168.0.2",
            "B3": "D. 172.16.0.2",
            "P": "C. 192.168.0.1"
        },
        {
            "Pytanie": "Internetowy protok&oacute;\u0142 pocztowy, kt&oacute;ry pozwala na zarz\u0105dzanie wieloma folderami pocztowymi oraz pobieranie i operowanie na listach znajduj\u0105cych si\u0119 na zdalnym serwerze, to",
            "IMG": "",
            "B1": "A. POP3",
            "B2": "C. SMTP",
            "B3": "D. TCP",
            "P": "B. IMAP"
        },
        {
            "Pytanie": "Przedstawiony na rysunku symbol oznacza produkt",
            "IMG": "https://egzamin-informatyk.pl/e12/516.jpg",
            "B1": "A. biodegradowalny",
            "B2": "C. przeznaczony do powt&oacute;rnego u\u017cycia",
            "B3": "D. niebezpieczny",
            "P": "B. nadaj\u0105cy si\u0119 do powt&oacute;rnego przetworzenia"
        },
        {
            "Pytanie": "U\u017cytkownik, kt&oacute;ry chce drukowa\u0107 dokumenty jednocze\u015bnie w oryginale i trzech kopiach na papierze samokopiuj\u0105cym, powinien do tego celu zakupi\u0107 drukark\u0119",
            "IMG": "",
            "B1": "A. laserow\u0105",
            "B2": "B. atramentow\u0105",
            "B3": "C. termotransferow\u0105",
            "P": "D. ig\u0142ow\u0105"
        },
        {
            "Pytanie": "Jakie oznaczenie zgodnie z Dyrektywami Rady Europy musi posiada\u0107 komputer, by m&oacute;g\u0142 by\u0107 dopuszczony do sprzeda\u017cy na terenie Polski?",
            "IMG": "https://egzamin-informatyk.pl/old/537.jpg",
            "B1": "B. B",
            "B2": "C. C",
            "B3": "D. D",
            "P": "A. A"
        },
        {
            "Pytanie": "Klawiszem F5 standardowo w programie Explorator systemu Windows aktywowana jest czynno\u015b\u0107:",
            "IMG": "",
            "B1": "B. otwierania okna wyszukiwania",
            "B2": "C. uruchamiania drukowania zrzutu ekranowego",
            "B3": "D. kopiowania",
            "P": "A. od\u015bwie\u017cania zawarto\u015bci bie\u017c\u0105cego okna"
        },
        {
            "Pytanie": "Urz\u0105dzenie sieciowe most (ang. bridge):",
            "IMG": "",
            "B1": "A. pracuje w zerowej warstwie modelu OSI",
            "B2": "C. pracuje w &oacute;smej warstwie modelu OSI",
            "B3": "D. nie analizuje ramki pod k\u0105tem adresu MAC",
            "P": "B. jest urz\u0105dzeniem typu store and forward"
        },
        {
            "Pytanie": "Shareware to rodzaj licencji polegaj\u0105cej na",
            "IMG": "",
            "B1": "A. u\u017cywaniu programu bezp\u0142atnie, bez \u017cadnych ogranicze\u0144",
            "B2": "B. bezp\u0142atnym rozprowadzaniu aplikacji bez ujawniania kodu \u017ar&oacute;d\u0142owego",
            "B3": "C. korzystaniu z programu przez okre\u015blony czas, po kt&oacute;rym program przestaje dzia\u0142a\u0107",
            "P": "D. bezp\u0142atnym rozpowszechnianiu programu na czas test&oacute;w przed zakupem"
        },
        {
            "Pytanie": "Kt&oacute;ry standard wykorzystuje cz\u0119stotliwo\u015b\u0107 5 GHz?",
            "IMG": "",
            "B1": "A. 802.11b",
            "B2": "C. 802.11",
            "B3": "D. 802.11g",
            "P": "B. 802.11a"
        },
        {
            "Pytanie": "Certyfikatem potwierdzaj\u0105cym energooszcz\u0119dno\u015b\u0107 urz\u0105dzenia jest",
            "IMG": "",
            "B1": "A. Energy IEEE",
            "B2": "B. Energy ISO",
            "B3": "C. Energy TCO",
            "P": "D. Energy STAR"
        },
        {
            "Pytanie": "Po instalacji z domy\u015blnymi ustawieniami system Windows XP nie obs\u0142uguje systemu plik&oacute;w",
            "IMG": "",
            "B1": "B. FAT16",
            "B2": "C. NTFS",
            "B3": "D. FAT32",
            "P": "A. EXT"
        },
        {
            "Pytanie": "Kt&oacute;rym symbolem oznaczona jest skr\u0119tka nieekranowana?",
            "IMG": "",
            "B1": "A. U/FTP",
            "B2": "B. S/FTP",
            "B3": "D. F/UTP",
            "P": "C. U/UTP"
        },
        {
            "Pytanie": "Przy pr&oacute;bie odzyskania danych z dysku, kt&oacute;ry zosta\u0142 sformatowany nale\u017cy skorzysta\u0107 z programu typu",
            "IMG": "",
            "B1": "A. p2p",
            "B2": "B. sniffer",
            "B3": "C. irc",
            "P": "D. recovery"
        },
        {
            "Pytanie": "W systemach Windows mo\u017cna przypisa\u0107 u\u017cytkownika do dowolnej grupy za pomoc\u0105 przystawki",
            "IMG": "",
            "B1": "A. fsmgmt",
            "B2": "B. services",
            "B3": "D. certsrv",
            "P": "C. lusrmgr"
        },
        {
            "Pytanie": "W systemie Linux program fsck pozwala na",
            "IMG": "",
            "B1": "B. testowanie wydajno\u015bci karty sieciowej",
            "B2": "C. monitorowanie stanu procesora",
            "B3": "D. usuwanie b\u0142\u0119dnych wpis&oacute;w w rejestrze systemowym",
            "P": "A. zlokalizowanie i napraw\u0119 uszkodzonych sektor&oacute;w na dysku twardym"
        },
        {
            "Pytanie": "Kt&oacute;ry adres IPv4 okre\u015bla urz\u0105dzenie pracuj\u0105ce w sieci o adresie 14.36.64.0/20?",
            "IMG": "",
            "B1": "A. 14.36.80.1",
            "B2": "B. 14.36.48.1",
            "B3": "C. 14.36.17.1",
            "P": "D. 14.36.65.1"
        },
        {
            "Pytanie": "Na rysunku przedstawiono symbol uk\u0142adu cyfrowego",
            "IMG": "https://egzamin-informatyk.pl/old/563.jpg",
            "B1": "B. demultipleksera priorytetu",
            "B2": "C. multipleksera priorytetu",
            "B3": "D. dekodera priorytetu",
            "P": "A. kodera priorytetu"
        },
        {
            "Pytanie": "Urz\u0105dzenia korzystaj\u0105ce z portu USB 2.0 s\u0105 zasilane napi\u0119ciem, kt&oacute;rego warto\u015b\u0107 mie\u015bci si\u0119 w zakresie",
            "IMG": "",
            "B1": "A. 4,15 V - 4,75 V",
            "B2": "B. 5,35 V - 5,95 V",
            "B3": "C. 3,55 V - 4,15 V",
            "P": "D. 4,75 V - 5,35 V"
        },
        {
            "Pytanie": "Zasady budowy systemu okablowania strukturalnego, specyfikacja parametr&oacute;w kabli oraz procedury testowania obowi\u0105zuj\u0105ce w Polsce zosta\u0142y zawarte w normach",
            "IMG": "",
            "B1": "A. EN 50167",
            "B2": "C. PN-EN 50310",
            "B3": "D. EN 50169",
            "P": "B. PN-EN 50173"
        },
        {
            "Pytanie": "Aby wyeliminowa\u0107 podstawowe zagro\u017cenia zwi\u0105zane z bezpiecze\u0144stwem pracy na komputerze pod\u0142\u0105czonym do sieci Internet, w pierwszej kolejno\u015bci nale\u017cy",
            "IMG": "",
            "B1": "A. odsun\u0105\u0107 komputer od \u017ar&oacute;d\u0142a ciep\u0142a, nie przygniata\u0107 przewod&oacute;w zasilaj\u0105cych komputera i urz\u0105dze\u0144 peryferyjnych",
            "B2": "C. wyczy\u015bci\u0107 wn\u0119trze jednostki centralnej, nie je\u015b\u0107 i nie pi\u0107 przy komputerze oraz nie podawa\u0107 swojego has\u0142a innym u\u017cytkownikom",
            "B3": "D. sprawdzi\u0107 temperatur\u0119 podzespo\u0142&oacute;w, pod\u0142\u0105czy\u0107 komputer do zasilacza UPS oraz nie wchodzi\u0107 na podejrzane strony internetowe",
            "P": "B. zainstalowa\u0107 program antywirusowy, zaktualizowa\u0107 bazy wirus&oacute;w, w\u0142\u0105czy\u0107 firewall i wykona\u0107 aktualizacj\u0119 systemu"
        },
        {
            "Pytanie": "Przyczyn\u0105 awarii drukarki ig\u0142owej mo\u017ce by\u0107 usterka",
            "IMG": "",
            "B1": "A. elektrody \u0142aduj\u0105cej",
            "B2": "C. dyszy",
            "B3": "D. termorezystora",
            "P": "B. elektromagnesu"
        },
        {
            "Pytanie": "Przedstawione wbudowane narz\u0119dzie system&oacute;w Windows w wersji Enterprise lub Ultimate s\u0142u\u017cy do",
            "IMG": "https://egzamin-informatyk.pl/e12/853.jpg",
            "B1": "A. konsolidacji danych na dyskach",
            "B2": "B. kompresji dysku",
            "B3": "C. tworzenia kopii dysku",
            "P": "D. kryptograficznej ochrony danych na dyskach"
        },
        {
            "Pytanie": "Aby zapobiec wy\u0142adowaniom elektrostatycznym podczas wymiany podzespo\u0142&oacute;w komputerowych, technik powinien zastosowa\u0107",
            "IMG": "",
            "B1": "B. r\u0119kawice gumowe",
            "B2": "C. odzie\u017c poliestrow\u0105 ",
            "B3": "D. okulary ochronne",
            "P": "A. mat\u0119 i opask\u0119 antystatyczn\u0105"
        },
        {
            "Pytanie": "Protok&oacute;\u0142 umo\u017cliwiaj\u0105cy pobieranie poczty e-mail z serwera to:",
            "IMG": "",
            "B1": "A. FTP",
            "B2": "C. SMTP",
            "B3": "D. DNS",
            "P": "B. POP3"
        },
        {
            "Pytanie": "Wy\u0142\u0105czenie automatycznej aktualizacji systemu Windows powoduje",
            "IMG": "",
            "B1": "A. automatyczne sprawdzenie, czy jest dost\u0119pna aktualizacja i powiadomienie o niej u\u017cytkownika",
            "B2": "B. zablokowanie ka\u017cdego sposobu pobierania aktualizacji systemu",
            "B3": "C. automatyczne pobieranie aktualizacji bez jej instalacji",
            "P": "D. zablokowanie samodzielnego pobierania uaktualnie\u0144 przez system"
        },
        {
            "Pytanie": "Kt&oacute;ry z wymienionych adres&oacute;w IPv4 nale\u017cy do klasy B?",
            "IMG": "",
            "B1": "B. 224.100.10.10",
            "B2": "C. 10.10.10.10",
            "B3": "D. 192.168.1.10",
            "P": "A. 128.100.100.10"
        },
        {
            "Pytanie": "Sie\u0107, w kt&oacute;rej pracuje stacja robocza o adresie IP 192.168.100.50/28,podzielono na 4 podsieci. Prawid\u0142owa lista podsieci to",
            "IMG": "",
            "B1": "B. 192.168.100.48/29; 192.168.100.54/29; 192.168.100.56/29; 192.168.100.58/29",
            "B2": "C. 192.168.100.50/28; 192.168.100.52/28; 192.168.100.56/28; 192.168.100.60/28",
            "B3": "D. 192.168.100.48/27; 192.168.100.52/27; 192.168.100.56/27; 192.168.100.58/27",
            "P": "A. 192.168.100.48/30; 192.168.100.52/30; 192.168.100.56/30; 192.168.100.60/30"
        },
        {
            "Pytanie": "Najcz\u0119\u015bciej stosowany kodek mowy podczas konfiguracji bramki VoIP to",
            "IMG": "",
            "B1": "A. A.512",
            "B2": "C. AC3",
            "B3": "D. GSM",
            "P": "B. G.711"
        },
        {
            "Pytanie": "Integraln\u0105 cz\u0119\u015bci\u0105 systemu Windows 10 chroni\u0105c\u0105 jego u\u017cytkownik&oacute;w przed z\u0142o\u015bliwym oprogramowaniem jest program",
            "IMG": "",
            "B1": "A. Microsoft Hyper-V",
            "B2": "B. Windows PowerShell",
            "B3": "D. Microsoft Security Essentials",
            "P": "C. Windows Defender"
        },
        {
            "Pytanie": "Administrator Active Directory w domenie firma.local chce skonfigurowa\u0107 profil mobilny dla wszystkich u\u017cytkownik&oacute;w. Ma on by\u0107 zapisywany na serwerze serwer1, w folderze pliki, udost\u0119pnionym w sieci jako dane$. Kt&oacute;ry z wpis&oacute;w we w\u0142a\u015bciwo\u015bciach profilu u\u017cytkownika realizuje opisane wymagania?",
            "IMG": "",
            "B1": "A. firma.localdane\\%username%",
            "B2": "C. firma.localpliki\\%username%",
            "B3": "D. serwer1pliki\\%username%",
            "P": "B. serwer1dane$\\%username%"
        },
        {
            "Pytanie": "G\u0142&oacute;wny rekord rozruchowy dysku twardego to",
            "IMG": "",
            "B1": "B. NTLDR",
            "B2": "C. FDISK",
            "B3": "D. BOOT",
            "P": "A. MBR"
        },
        {
            "Pytanie": "Na podstawie zamieszczonej w tabeli informacji dotycz\u0105cej dysku twardego okre\u015bl, kt&oacute;ry wniosek jest prawdziwy ",
            "IMG": "https://egzamin-informatyk.pl/new/297.jpg",
            "B1": "A. Defragmentacja jest zb\u0119dna, fragmentacja plik&oacute;w wynosi 0%",
            "B2": "B. Nale\u017cy zdefragmentowa\u0107 dysk, fragmentacja wolnego miejsca wynosi 19% ",
            "B3": "C. Dysk wymaga defragmentacji, fragmentacja ca\u0142kowita wynosi 19%",
            "P": "D. Defragmentacja nie jest konieczna, fragmentacja ca\u0142kowita wynosi 9% "
        },
        {
            "Pytanie": "Apache jest serwerem ",
            "IMG": "",
            "B1": "A. DHCP",
            "B2": "C. DNS",
            "B3": "D. Baz danych",
            "P": "B. WWW"
        },
        {
            "Pytanie": "Na rysunku przedstawiono konfiguracj\u0119 urz\u0105dzenia. Do kt&oacute;rych port&oacute;w nale\u017cy pod\u0142\u0105czy\u0107 serwer o adresie IP 192.168.20.254/24 oraz stacj\u0119 robocz\u0105 o adresie IP 192.168.20.10/24, aby zapewni\u0107 komunikacj\u0119 tych urz\u0105dze\u0144 w sieci?",
            "IMG": "https://egzamin-informatyk.pl/ee08/1918.jpg",
            "B1": "A. Do port&oacute;w 2 i 3",
            "B2": "C. Do port&oacute;w 3 i 4",
            "B3": "D. Do port&oacute;w 1 i 2",
            "P": "B. Do port&oacute;w 1 i 3"
        },
        {
            "Pytanie": "Z\u0142ocenie styk&oacute;w z\u0142\u0105cz HDMI ma na celu",
            "IMG": "",
            "B1": "A. popraw\u0119 przewodno\u015bci oraz \u017cywotno\u015bci z\u0142\u0105cza",
            "B2": "B. umo\u017cliwienie przesy\u0142u obrazu w jako\u015bci 4K",
            "B3": "C. zwi\u0119kszenie przepustowo\u015bci powy\u017cej warto\u015bci okre\u015blonych standardem",
            "P": "D. stworzenie produktu o charakterze ekskluzywnym, aby uzyska\u0107 wi\u0119ksze wp\u0142ywy ze sprzeda\u017cy"
        },
        {
            "Pytanie": "Ile warstw definiuje model ISO/OSI",
            "IMG": "",
            "B1": "B. 9",
            "B2": "C. 5",
            "B3": "D. 3",
            "P": "A. 7"
        },
        {
            "Pytanie": "Kt&oacute;ry procesor jest kompatybilny z p\u0142yt\u0105 g\u0142&oacute;wn\u0105 o przedstawionej specyfikacji?",
            "IMG": "https://egzamin-informatyk.pl/e12/887.jpg",
            "B1": "B. B",
            "B2": "C. C",
            "B3": "D. D",
            "P": "A. A"
        },
        {
            "Pytanie": "Komunikat tekstowy BIOS POST firmy Award o tre\u015bci &quot;Display switch is set incorrectly&quot; wskazuje na",
            "IMG": "",
            "B1": "B. b\u0142\u0105d inicjalizacji dysku twardego",
            "B2": "C. brak urz\u0105dzenia rozruchowego",
            "B3": "D. usterk\u0119 pami\u0119ci operacyjnej",
            "P": "A. nieprawid\u0142owy tryb wy\u015bwietlania obrazu"
        },
        {
            "Pytanie": "Widoczne na schemacie procesora rejestry pe\u0142ni\u0105 funkcj\u0119 przechowywania adresu do ",
            "IMG": "https://egzamin-informatyk.pl/e12/609.jpg",
            "B1": "A. sterowania wykonywanym programem",
            "B2": "B. wykonywania dzia\u0142a\u0144 arytmetycznych",
            "B3": "C. nast\u0119pnej instrukcji programu",
            "P": "D. przechowywania argument&oacute;w oblicze\u0144"
        },
        {
            "Pytanie": "Pierwsz\u0105 czynno\u015bci\u0105 niezb\u0119dn\u0105 do zabezpieczenia rutera przed dost\u0119pem do jego panelu konfiguracyjnego\nprzez osoby niepowo\u0142ane jest",
            "IMG": "",
            "B1": "B. zmiana domy\u015blnej nazwy sieci (SSID) na unikatow\u0105",
            "B2": "C. w\u0142\u0105czenie szyfrowania kluczem WEP",
            "B3": "D. w\u0142\u0105czenie filtrowania adres&oacute;w MAC",
            "P": "A. zmiana nazwy login i has\u0142a wbudowanego konta administratora"
        },
        {
            "Pytanie": "Na wy\u015bwietlaczu drukarki pojawi\u0142 si\u0119 komunikat &quot;PAPER JAM&quot;. Aby usun\u0105\u0107 usterk\u0119, nale\u017cy w pierwszej kolejno\u015bci",
            "IMG": "",
            "B1": "A. zainstalowa\u0107 podajnik papieru w drukarce",
            "B2": "C. wymieni\u0107 pojemnik z materia\u0142em drukuj\u0105cym",
            "B3": "D. za\u0142adowa\u0107 papier do podajnika",
            "P": "B. zlokalizowa\u0107 miejsce zaci\u0119cia papieru w drukarce"
        },
        {
            "Pytanie": "Liczba 51(10) zapisana w systemie dw&oacute;jkowym ma posta\u0107",
            "IMG": "",
            "B1": "A. 101001",
            "B2": "C. 110111",
            "B3": "D. 101011",
            "P": "B. 110011"
        },
        {
            "Pytanie": "Zadaniem serwera plik&oacute;w w sieciach komputerowych LAN jest",
            "IMG": "",
            "B1": "B. sterowanie danymi na komputerach lokalnych",
            "B2": "C. zarz\u0105dzanie prac\u0105 prze\u0142\u0105cznik&oacute;w i ruter&oacute;w",
            "B3": "D. wykonywanie proces&oacute;w obliczeniowych na komputerach lokalnych",
            "P": "A. wsp&oacute;lne u\u017cytkowanie tych samych zasob&oacute;w"
        },
        {
            "Pytanie": "Jednym z narz\u0119dzi u\u017cywanych do tworzenia kopii partycji i dysk&oacute;w jest",
            "IMG": "",
            "B1": "A. Gparted",
            "B2": "B. Diskpart",
            "B3": "D. CrystalDiskInfo",
            "P": "C. Norton Ghost"
        },
        {
            "Pytanie": "Do utworzenia woluminu RAID 5 w serwerze potrzeba minimum",
            "IMG": "",
            "B1": "A. 4 dyski",
            "B2": "B. 2 dyski",
            "B3": "C. 5 dysk&oacute;w",
            "P": "D. 3 dyski"
        },
        {
            "Pytanie": "Jaki pierwszy znak w nazwie pliku w systemie Windows oznacza plik tymczasowy?",
            "IMG": "",
            "B1": "A. *",
            "B2": "B. #",
            "B3": "C. &amp;",
            "P": "D. ~"
        },
        {
            "Pytanie": "Do instalacji oraz deinstalacji oprogramowania w systemie Ubuntu s\u0142u\u017cy menad\u017cer",
            "IMG": "",
            "B1": "A. ls",
            "B2": "C. tar",
            "B3": "D. yast",
            "P": "B. apt"
        },
        {
            "Pytanie": "Liczby 1001 oraz 100 w wierszu pliku /etc/passwd oznaczaj\u0105",
            "IMG": "https://egzamin-informatyk.pl/e12/733.jpg",
            "B1": "A. liczb\u0119 dni od ostatniej zmiany has\u0142a i liczb\u0119 dni do wyga\u015bni\u0119cia has\u0142a",
            "B2": "B. numer koloru czcionki i numer koloru t\u0142a w terminalu",
            "B3": "C. liczb\u0119 udanych i nieudanych pr&oacute;b logowania",
            "P": "D. identyfikatory u\u017cytkownika i grupy w systemie"
        },
        {
            "Pytanie": "Na nowym komputerze program antywirusowy nale\u017cy zainstalowa\u0107",
            "IMG": "",
            "B1": "B. w trakcie instalacji systemu operacyjnego",
            "B2": "C. po zainstalowaniu pobranych z Internetu program&oacute;w",
            "B3": "D. przed zainstalowaniem systemu operacyjnego",
            "P": "A. zaraz po zainstalowaniu systemu operacyjnego"
        },
        {
            "Pytanie": "Kt&oacute;re polecenie systemu Linux wy\u015bwietla czas pracy systemu oraz jego \u015brednie obci\u0105\u017cenie?",
            "IMG": "",
            "B1": "B. dmidecode",
            "B2": "C. uname -a",
            "B3": "D. lastreboot",
            "P": "A. uptime"
        },
        {
            "Pytanie": "Switch jako element centralny wyst\u0119puje w sieci o topologii",
            "IMG": "",
            "B1": "B. pier\u015bcienia",
            "B2": "C. magistrali",
            "B3": "D. pe\u0142nej siatki",
            "P": "A. gwiazdy"
        },
        {
            "Pytanie": "Kt&oacute;ry z typ&oacute;w rekord&oacute;w DNS w rodzinie system&oacute;w Windows Server definiuje alias (alternatywn\u0105 nazw\u0119) rekordu A dla kanonicznej (rzeczywistej) nazwy hosta?",
            "IMG": "",
            "B1": "A. PTR",
            "B2": "B. NS",
            "B3": "D. AAAA",
            "P": "C. CNAME"
        },
        {
            "Pytanie": "Monitor wydajno\u015bci i niezawodno\u015bci w systemie Windows jest uruchamiany za pomoc\u0105 przystawki",
            "IMG": "",
            "B1": "A. taskschd.msc",
            "B2": "C. diskmgmt.msc",
            "B3": "D. fsmgmt.msc",
            "P": "B. perfmon.msc"
        },
        {
            "Pytanie": "U\u017cytkownik wpisuj\u0105c w wierszu polece\u0144 polecenie ping www.onet.pl otrzymuje nast\u0119puj\u0105cy komunikat: \u017b\u0105danie polecenia ping nie mo\u017ce znale\u017a\u0107 hosta www.onet.pl Sprawd\u017a nazwe i pon&oacute;w pr&oacute;b\u0119. Natomiast wpisuj\u0105c w wierszu polece\u0144 polecenie ping 213.180.141.140 (adres IP serwera www.onet.pl), u\u017cytkownik dostaje odpowied\u017a z serwera. Co mo\u017ce by\u0107 przyczyn\u0105 takiego stanu?",
            "IMG": "",
            "B1": "A. niepoprawnie skonfigurowana maska podsieci",
            "B2": "C. niepoprawnie skonfigurowana brama domy\u015blna",
            "B3": "D. niepoprawny adres IP hosta",
            "P": "B. niepoprawny adres IP serwera DNS"
        },
        {
            "Pytanie": "Kt&oacute;ry przyrz\u0105d jest narz\u0119dziem stosowanym do \u015bci\u0105gania izolacji?",
            "IMG": "https://egzamin-informatyk.pl/e13/781.jpg",
            "B1": "A. A",
            "B2": "B. B",
            "B3": "D. D",
            "P": "C. C"
        },
        {
            "Pytanie": "Firma otrzyma\u0142a pul\u0119 adres&oacute;w 10.10.10.0/16. Po wyodr\u0119bnieniu podsieci maj\u0105cych po 510 host&oacute;w otrzymano adresy podsieci z mask\u0105",
            "IMG": "",
            "B1": "A. 255.255.0.0",
            "B2": "B. 255.255.253.0",
            "B3": "C. 255.255.240.0",
            "P": "D. 255.255.254.0"
        },
        {
            "Pytanie": "Kt&oacute;re protoko\u0142y s\u0105 protoko\u0142ami warstwy transportowej modelu ISO/OSI?",
            "IMG": "",
            "B1": "A. FTP, POP",
            "B2": "C. ARP, DNS",
            "B3": "D. ICMP, IP",
            "P": "B. TCP, UDP"
        },
        {
            "Pytanie": "W systemie Linux plik ma ustawione uprawnienia na 765. Grupa przypisana do tego pliku mo\u017ce go",
            "IMG": "",
            "B1": "A. tylko odczyta\u0107",
            "B2": "C. odczyta\u0107 i wykona\u0107",
            "B3": "D. odczyta\u0107, zapisa\u0107, wykona\u0107",
            "P": "B. odczyta\u0107 i zapisa\u0107"
        },
        {
            "Pytanie": "Konwerter RAMDAC przetwarza sygna\u0142",
            "IMG": "",
            "B1": "A. analogowy na cyfrowy",
            "B2": "B. zmienny na sta\u0142y",
            "B3": "C. sta\u0142y na zmienny",
            "P": "D. cyfrowy na analogowy"
        },
        {
            "Pytanie": "Ile symboli prze\u0142\u0105cznik&oacute;w i ruter&oacute;w jest na schemacie?",
            "IMG": "https://egzamin-informatyk.pl/e13/656.jpg",
            "B1": "A. 3 prze\u0142\u0105czniki i 4 rutery",
            "B2": "B. 4 prze\u0142\u0105czniki i 8 ruter&oacute;w",
            "B3": "D. 8 prze\u0142\u0105cznik&oacute;w i 3 rutery",
            "P": "C. 4 prze\u0142\u0105czniki i 3 rutery"
        },
        {
            "Pytanie": "Plik messages w systemie Linux przechowuje",
            "IMG": "",
            "B1": "A. dane dotycz\u0105ce uwierzytelniania",
            "B2": "B. kody b\u0142\u0119d&oacute;w systemowych",
            "B3": "D. komunikaty zwi\u0105zane z inicjacj\u0105 systemu",
            "P": "C. og&oacute;lne informacje o zdarzeniach systemowych"
        },
        {
            "Pytanie": "W systemie Windows u\u017cytkownik oraz wszystkie grupy, do kt&oacute;rych on nale\u017cy maj\u0105 uprawnienia &quot;odczyt&quot; do folderu XYZ. U\u017cytkownik ten b\u0119dzie m&oacute;g\u0142 wykonywa\u0107 operacje",
            "IMG": "",
            "B1": "A. kopiowania plik&oacute;w do folderu XYZ",
            "B2": "B. zmiany nazwy folderu XYZ",
            "B3": "C. usuni\u0119cia folderu XYZ",
            "P": "D. odczytu uprawnie\u0144 do folderu XYZ"
        },
        {
            "Pytanie": "Przedstawiony wydruk w systemie rodziny Linux pojawi si\u0119 po wydaniu komendy",
            "IMG": "https://egzamin-informatyk.pl/e12/548.jpg",
            "B1": "A. pwd",
            "B2": "B. ps",
            "B3": "D. free",
            "P": "C. ls -la"
        },
        {
            "Pytanie": "Kt&oacute;ry protok&oacute;\u0142 jest stosowany do sprawdzenia poprawno\u015bci po\u0142\u0105czenia pomi\u0119dzy dwoma hostami?",
            "IMG": "",
            "B1": "A. UDP (User DatagramProtocol)",
            "B2": "B. RARP (ReverseA ddress Resolution Protocol)",
            "B3": "D. RIP (Routing Information Protocol)",
            "P": "C. ICMP (Internet Control Message Protocol)"
        },
        {
            "Pytanie": "System Windows 8, w kt&oacute;rym wcze\u015bniej utworzono punkt przywracania systemu, uleg\u0142 awarii. Kt&oacute;re polecenie nale\u017cy wyda\u0107, aby przywr&oacute;ci\u0107 pliki i ustawienia systemu?",
            "IMG": "",
            "B1": "A. reload",
            "B2": "B. replace",
            "B3": "C. rootkey",
            "P": "D. rstrui"
        },
        {
            "Pytanie": "Kt&oacute;re urz\u0105dzenie sieciowe dzia\u0142a w warstwie fizycznej modelu ISO/OSI, przesy\u0142aj\u0105c sygna\u0142 z jednego portu na wszystkie pozosta\u0142e porty?",
            "IMG": "",
            "B1": "B. Karta sieciowa",
            "B2": "C. Prze\u0142\u0105cznik",
            "B3": "D. Modem",
            "P": "A. Koncentrator"
        },
        {
            "Pytanie": "Aby w budowanej sieci komputerowej zapewni\u0107 najmniejszy wp\u0142yw zak\u0142&oacute;ce\u0144 elektromagnetycznych na przesy\u0142any sygna\u0142 nale\u017cy zastosowa\u0107",
            "IMG": "",
            "B1": "A. ekranowan\u0105 skr\u0119tk\u0119",
            "B2": "C. gruby przew&oacute;d koncentryczny",
            "B3": "D. cienki przew&oacute;d koncentryczny",
            "P": "B. \u015bwiat\u0142ow&oacute;d"
        },
        {
            "Pytanie": "Symbol graficzny przedstawiony na rysunku oznacza",
            "IMG": "https://egzamin-informatyk.pl/e13/159.jpg",
            "B1": "A. bram\u0119",
            "B2": "C. most",
            "B3": "D. koncentrator",
            "P": "B. prze\u0142\u0105cznik"
        },
        {
            "Pytanie": "Aby wyczy\u015bci\u0107 z kurzu wn\u0119trze obudowy drukarki fotograficznej, nale\u017cy u\u017cy\u0107",
            "IMG": "",
            "B1": "B. szczotki z twardym w\u0142osiem",
            "B2": "C. \u015brodka smaruj\u0105cego",
            "B3": "D. opaski antystatycznej",
            "P": "A. spr\u0119\u017conego powietrza w pojemniku z wyd\u0142u\u017con\u0105 rurk\u0105"
        },
        {
            "Pytanie": "Przynale\u017cno\u015b\u0107 komputera do konkretnej sieci wirtualnej NIE mo\u017ce by\u0107 okre\u015blona na podstawie",
            "IMG": "",
            "B1": "A. znacznika ramki Ethernet 802.1Q",
            "B2": "B. numer portu prze\u0142\u0105cznika",
            "B3": "C. adresu MAC karty sieciowej komputera",
            "P": "D. nazwy komputera w sieci lokalnej"
        },
        {
            "Pytanie": "Jaki jest adres sieci, w kt&oacute;rej pracuje host o adresie IP 10.10.10.6 klasy A?",
            "IMG": "",
            "B1": "A. 10.10.0.0",
            "B2": "B. 10.10.10.255",
            "B3": "C. 10.255.255.255",
            "P": "D. 10.0.0.0"
        },
        {
            "Pytanie": "Interfejs u\u017cywany do komunikacji mi\u0119dzy urz\u0105dzeniami przeno\u015bnymi, wykorzystuj\u0105cy cyfrow\u0105 transmisj\u0119 optyczn\u0105 bezprzewodow\u0105 do przesy\u0142ania danych na stosunkowo kr&oacute;tkim odcinku, to",
            "IMG": "",
            "B1": "A. IEEE 1394a",
            "B2": "B. Bluetooth",
            "B3": "D. IEEE 1394c",
            "P": "C. IrDA"
        },
        {
            "Pytanie": "Ile adres&oacute;w IP jest potrzebnych do zaadresowania 4 komputer&oacute;w pod\u0142\u0105czonych do prze\u0142\u0105cznika tak, aby mog\u0142y si\u0119 komunikowa\u0107 ze sob\u0105?",
            "IMG": "",
            "B1": "A. 2",
            "B2": "B. 5",
            "B3": "C. 3",
            "P": "D. 4"
        },
        {
            "Pytanie": "Suma liczb binarnych 1010 + 111 zapisana w systemie dziesi\u0119tnym wyniesie",
            "IMG": "",
            "B1": "B. 19",
            "B2": "C. 16",
            "B3": "D. 18",
            "P": "A. 17"
        },
        {
            "Pytanie": "Liczba BACA zapisana w systemie heksadecymalnym odpowiada liczbie",
            "IMG": "",
            "B1": "A. 47821 (10)",
            "B2": "C. 1100101010111010 (2)",
            "B3": "D. 135316 (8)",
            "P": "B. 1011101011001010 (2)"
        },
        {
            "Pytanie": "Ile maksymalnie kana\u0142&oacute;w, z dost\u0119pnego spectrum kana\u0142&oacute;w standardu 802.11b, mo\u017cna wykorzystywa\u0107 na terenie Polski?",
            "IMG": "",
            "B1": "A. 11 kana\u0142&oacute;w",
            "B2": "C. 9 kana\u0142&oacute;w",
            "B3": "D. 10 kana\u0142&oacute;w",
            "P": "B. 13 kana\u0142&oacute;w"
        },
        {
            "Pytanie": "Jaki zestaw kolor&oacute;w zawiera tryb CMYK?",
            "IMG": "",
            "B1": "A. Czerwony, purpurowy, \u017c&oacute;\u0142ty i karmelowy",
            "B2": "B. Czerwony, zielony, niebieski i czarny",
            "B3": "D. Czerwony, zielony, \u017c&oacute;\u0142ty i granatowy",
            "P": "C. B\u0142\u0119kitny, purpurowy, \u017c&oacute;\u0142ty i czarny"
        },
        {
            "Pytanie": "Kt&oacute;ry port na przedstawionej p\u0142ycie umo\u017cliwia pod\u0142\u0105czenie zewn\u0119trznego dysku poprzez interfejs e-SATA?",
            "IMG": "https://egzamin-informatyk.pl/e12/686.jpg",
            "B1": "A. 4",
            "B2": "B. 1",
            "B3": "D. 3",
            "P": "C. 2"
        },
        {
            "Pytanie": "Je\u015bli jednostka alokacji ma 1024 bajty, to pliki zamieszczone w tabeli zajm\u0105 na dysku:",
            "IMG": "https://egzamin-informatyk.pl/e12/298.jpg",
            "B1": "A. 6 klastr&oacute;w",
            "B2": "B. 3 klastry",
            "B3": "C. 4 klastry",
            "P": "D. 5 klastr&oacute;w"
        },
        {
            "Pytanie": "FDDI (ang. Fiber Distributed Data Interface) to standard transmisji danych oparty na technologii \u015bwiat\u0142owodowej. Jak\u0105 topologi\u0119 stosujemy w sieciach wykonanych wg tej technologii?",
            "IMG": "",
            "B1": "A. rozszerzonej gwiazdy",
            "B2": "C. gwiazdy",
            "B3": "D. pier\u015bcienia",
            "P": "B. podw&oacute;jnego pier\u015bcienia"
        },
        {
            "Pytanie": "Je\u017celi w systemie operacyjnym komputera zainstaluje si\u0119 program nazywany Trojanem, to spowoduje on",
            "IMG": "",
            "B1": "B. ochron\u0119 systemu operacyjnego przed dzia\u0142aniem wirus&oacute;w",
            "B2": "C. wspomaganie dzia\u0142ania u\u017cytkownika",
            "B3": "D. optymalizacj\u0119 dzia\u0142ania systemu operacyjnego",
            "P": "A. wykonywanie niepo\u017c\u0105danych dzia\u0142a\u0144 poza kontrol\u0105 u\u017cytkownika"
        },
        {
            "Pytanie": "Prawo do modyfikowania kodu oprogramowania przez jego u\u017cytkownika daje licencja typu",
            "IMG": "",
            "B1": "A. MOLP",
            "B2": "B. BOX",
            "B3": "D. FREEWARE",
            "P": "C. GNU GPL"
        },
        {
            "Pytanie": "Jaka jest standardowa warto\u015b\u0107 maksymalnej odleg\u0142o\u015bci pomi\u0119dzy urz\u0105dzeniami sieciowymi, po\u0142\u0105czonymi bezpo\u015brednio przewodem UTP kat.5e?",
            "IMG": "",
            "B1": "A. 1000 m",
            "B2": "C. 500 m",
            "B3": "D. 10 m",
            "P": "B. 100 m"
        },
        {
            "Pytanie": "Kt&oacute;ry interfejs pozwala przesy\u0142a\u0107 dane w postaci cyfrowej i analogowej pomi\u0119dzy komputerem a monitorem?",
            "IMG": "",
            "B1": "B. HDMI",
            "B2": "C. DFP",
            "B3": "D. DISPLAY PORT",
            "P": "A. DVI-I"
        },
        {
            "Pytanie": "Po wydaniu polecenia net accounts /MINPWLEN:11 systemu Windows, warto\u015b\u0107 11 zostanie ustawiona dla",
            "IMG": "",
            "B1": "A. maksymalnej liczby dni wa\u017cno\u015bci konta",
            "B2": "B. maksymalnej liczby dni mi\u0119dzy zmianami hase\u0142 u\u017cytkownik&oacute;w",
            "B3": "D. minimalnej liczby minut, przez kt&oacute;re u\u017cytkownik mo\u017ce by\u0107 zalogowany",
            "P": "C. minimalnej liczby znak&oacute;w w has\u0142ach u\u017cytkownik&oacute;w"
        },
        {
            "Pytanie": "Protoko\u0142em wysy\u0142ania poczty elektronicznej jest",
            "IMG": "",
            "B1": "B. File Transfer Protocol",
            "B2": "C. Post Office Protocol",
            "B3": "D. Internet Message Access Protocol",
            "P": "A. Simple Mail Transfer Protocol"
        },
        {
            "Pytanie": "Aby zmieni\u0107 w\u0142a\u015bciciela pliku w systemie Linux, nale\u017cy u\u017cy\u0107 polecenia",
            "IMG": "",
            "B1": "A. ps",
            "B2": "B. chmod",
            "B3": "C. pwd",
            "P": "D. chown"
        },
        {
            "Pytanie": "W technologii Ethernet 100BaseTX wymagane jest stosowanie skr\u0119tki",
            "IMG": "",
            "B1": "A. kategorii 3",
            "B2": "C. kategorii 2",
            "B3": "D. kategorii 1",
            "P": "B. kategorii 5"
        },
        {
            "Pytanie": "Jak\u0105 funkcj\u0119 pe\u0142ni\u0105 elementy Tr1 i Tr2 widoczne na schemacie przedstawiaj\u0105cym kart\u0119 sieciow\u0105 Ethernet?",
            "IMG": "https://egzamin-informatyk.pl/old/85.jpg",
            "B1": "A. Sygnalizuj\u0105 za pomoc\u0105 d\u017awi\u0119ku aktywno\u015b\u0107 karty sieciowej",
            "B2": "B. Sygnalizuj\u0105 za pomoc\u0105 \u015bwiecenia kolorem zielonym szybko\u015b\u0107 pracy karty sieciowej",
            "B3": "D. Zapewniaj\u0105 szyfrowanie i deszyfrowanie danych przesy\u0142anych przez sie\u0107",
            "P": "C. Zapewniaj\u0105 izolacj\u0119 obwodu elektrycznego sieci LAN od obwodu elektrycznego komputera"
        },
        {
            "Pytanie": "Kt&oacute;ry z rekord&oacute;w DNS nale\u017cy doda\u0107 w strefie wyszukiwania do przodu, aby zmapowa\u0107 nazw\u0119 domeny DNS na adres IP?",
            "IMG": "",
            "B1": "A. SRV lub TXT",
            "B2": "B. NS lub CNAME",
            "B3": "C. MX lub PTR",
            "P": "D. A lub AAAA"
        },
        {
            "Pytanie": "Metoda dost\u0119pu do medium CSMA/CA jest stosowana w sieci o standardzie",
            "IMG": "",
            "B1": "B. IEEE 802.1",
            "B2": "C. IEEE 802.3",
            "B3": "D. IEEE 802.8",
            "P": "A. IEEE 802.11"
        },
        {
            "Pytanie": "Aby unikn\u0105\u0107 uszkodzenia sprz\u0119tu podczas modernizacji komputera przeno\u015bnego polegaj\u0105cej na wymianie modu\u0142&oacute;w pami\u0119ci RAM nale\u017cy",
            "IMG": "",
            "B1": "A. przewietrzy\u0107 pomieszczenie oraz za\u0142o\u017cy\u0107 okulary wyposa\u017cone w pow\u0142ok\u0119 antyrefleksyjn\u0105",
            "B2": "B. przygotowa\u0107 past\u0119 przewodz\u0105c\u0105 oraz na\u0142o\u017cy\u0107 j\u0105 r&oacute;wnomiernie na obudow\u0119 gniazd pami\u0119ci RAM",
            "B3": "D. pod\u0142\u0105czy\u0107 laptop do zasilacza awaryjnego, a nast\u0119pnie rozkr\u0119ci\u0107 jego obudow\u0119 i przej\u015b\u0107 do monta\u017cu",
            "P": "C. roz\u0142o\u017cy\u0107 i uziemi\u0107 mat\u0119 antystatyczn\u0105 oraz za\u0142o\u017cy\u0107 na nadgarstek opask\u0119 antystatyczn\u0105"
        },
        {
            "Pytanie": "Przy budowie sieci przewodowej o maksymalnej szybko\u015bci transmisji 1 Gb/s, w kt&oacute;rej maksymalna odleg\u0142o\u015b\u0107 pomi\u0119dzy punktami sieci nie przekracza 100m, nale\u017cy wykorzysta\u0107 jako medium transmisyjne",
            "IMG": "",
            "B1": "A. fale radiowe o cz\u0119stotliwo\u015bci 5 GHz",
            "B2": "C. fale radiowe o cz\u0119stotliwo\u015bci 2,4 GHz",
            "B3": "D. kabel koncentryczny o \u015brednicy 1/4 cala",
            "P": "B. kabel UTP kategorii 5e"
        },
        {
            "Pytanie": "Komunikat tekstowy KB/Interface error, wy\u015bwietlony na ekranie komputera z BIOS POST firmy AMI, informuje o b\u0142\u0119dzie",
            "IMG": "",
            "B1": "A. rozdzielczo\u015bci karty graficznej",
            "B2": "B. pami\u0119ci GRAM",
            "B3": "C. baterii CMOS",
            "P": "D. sterownika klawiatury"
        },
        {
            "Pytanie": "Kt&oacute;ry protok&oacute;\u0142 jest wykorzystywany przez polecenie ping?",
            "IMG": "",
            "B1": "B. FTP",
            "B2": "C. IPX",
            "B3": "D. SMTP",
            "P": "A. ICMP"
        },
        {
            "Pytanie": "Licencja wolnego i otwartego oprogramowania, to licencja",
            "IMG": "",
            "B1": "B. OEM",
            "B2": "C. Adware",
            "B3": "D. Trial",
            "P": "A. GNU GPL"
        },
        {
            "Pytanie": "Liczba heksadecymalna 1E2F(16) zapisana w systemie oktalnym ma posta\u0107",
            "IMG": "",
            "B1": "A. 74274",
            "B2": "B. 7277",
            "B3": "D. 7727",
            "P": "C. 17057"
        },
        {
            "Pytanie": "Kt&oacute;rego polecenia nale\u017cy u\u017cy\u0107 w konsoli do naprawy b\u0142\u0119d&oacute;w na dysku?",
            "IMG": "",
            "B1": "A. CHDIR",
            "B2": "B. SUBST",
            "B3": "C. DISKCOMP",
            "P": "D. CHKDSK"
        },
        {
            "Pytanie": "Na p\u0142ycie g\u0142&oacute;wnej wykorzystuj\u0105cej uk\u0142ad Intel 865G",
            "IMG": "",
            "B1": "A. mo\u017cna zainstalowa\u0107 kart\u0119 graficzn\u0105 ze z\u0142\u0105czem PCI-Express",
            "B2": "B. nie mo\u017cna zainstalowa\u0107 karty graficznej",
            "B3": "C. mo\u017cna zainstalowa\u0107 kart\u0119 graficzn\u0105 ze z\u0142\u0105czem ISA",
            "P": "D. mo\u017cna zainstalowa\u0107 kart\u0119 graficzn\u0105 ze z\u0142\u0105czem AGP"
        },
        {
            "Pytanie": "Do sprawdzania rozmiaru katalogu w systemie Linux s\u0142u\u017cy polecenie",
            "IMG": "",
            "B1": "B. ps",
            "B2": "C. cp",
            "B3": "D. rm",
            "P": "A. du"
        },
        {
            "Pytanie": "Na za\u0142\u0105czonym rysunku przedstawiono operacj\u0119",
            "IMG": "https://egzamin-informatyk.pl/e12/530.jpg",
            "B1": "B. fuzji danych",
            "B2": "C. kompilacji danych",
            "B3": "D. kasowania danych",
            "P": "A. kompresji danych"
        },
        {
            "Pytanie": "Kt&oacute;ry z wymienionych adres&oacute;w IP nale\u017cy do klasy C?",
            "IMG": "",
            "B1": "A. 190.15.30.201",
            "B2": "C. 125.12.15.138",
            "B3": "D. 129.175.11.15",
            "P": "B. 198.26.152.10"
        },
        {
            "Pytanie": "Robak komputerowy to program, kt&oacute;ry",
            "IMG": "",
            "B1": "A. potrzebuje programu nosiciela",
            "B2": "C. uruchamia si\u0119, gdy u\u017cytkownik zainfekowanego komputera uruchomi jaki\u015b program",
            "B3": "D. uaktywnia si\u0119, gdy nadejdzie odpowiednia data",
            "P": "B. ma zdolno\u015b\u0107 samoreplikacji"
        },
        {
            "Pytanie": "Aby zapobiec nieautoryzowanym zmianom na koncie u\u017cytkownika w systemie Windows 7, 8 lub 10 wymagaj\u0105cym uprawnie\u0144 administratora, nale\u017cy skonfigurowa\u0107",
            "IMG": "",
            "B1": "A. SUDO",
            "B2": "B. POPD",
            "B3": "D. JOBS",
            "P": "C. UAC"
        },
        {
            "Pytanie": "Programem s\u0142u\u017c\u0105cym do diagnozowania po\u0142\u0105cze\u0144 mi\u0119dzy hostami w systemie Windows jest",
            "IMG": "",
            "B1": "A. route",
            "B2": "B. traceroute",
            "B3": "C. ipconfig",
            "P": "D. ping"
        },
        {
            "Pytanie": "Wska\u017c rysunek przedstawiaj\u0105cy kondensator sta\u0142y",
            "IMG": "https://egzamin-informatyk.pl/ee08/1928.jpg",
            "B1": "A. A",
            "B2": "B. B",
            "B3": "C. C",
            "P": "D. D"
        },
        {
            "Pytanie": "Kt&oacute;ry protok&oacute;\u0142 pocztowy umo\u017cliwia mi\u0119dzy innymi przechowywanie odbieranych wiadomo\u015bci e-mail na serwerze, zarz\u0105dzanie wieloma folderami, usuwanie wiadomo\u015bci i przenoszenie ich pomi\u0119dzy folderami?",
            "IMG": "",
            "B1": "A. Simple Mail Transfer Protocol (SMTP)",
            "B2": "B. Multipurpose Internet Mail Extensions (MIME)",
            "B3": "D. Post Office Protocol (POP)",
            "P": "C. Internet Message Access Protocol (IMAP)"
        },
        {
            "Pytanie": "Zgodnie z przedstawionym w tabeli standardem opisu pami\u0119ci PC-100 wska\u017c\npami\u0119\u0107, kt&oacute;ra ma maksymalny czas dost\u0119pu 6 nanosekund i minimalne op&oacute;\u017anienie mi\u0119dzy sygna\u0142ami CAS i RAS wynosz\u0105ce 2 cykle zegara",
            "IMG": "https://egzamin-informatyk.pl/old/89.jpg",
            "B1": "A. PC100-333-60",
            "B2": "B. PC100-323-70",
            "B3": "D. PC100-332-70",
            "P": "C. PC100-322-60"
        },
        {
            "Pytanie": "Z ilu bit&oacute;w sk\u0142ada si\u0119 adres fizyczny MAC karty sieciowej?",
            "IMG": "",
            "B1": "A. 32",
            "B2": "B. 16",
            "B3": "D. 64",
            "P": "C. 48"
        },
        {
            "Pytanie": "Kt&oacute;re urz\u0105dzenie zwi\u0119kszy zasi\u0119g sieci bezprzewodowej?",
            "IMG": "",
            "B1": "A. Prze\u0142\u0105cznik zarz\u0105dzalny",
            "B2": "B. Modem VDSL",
            "B3": "C. Konwerter medi&oacute;w",
            "P": "D. Wzmacniacz sygna\u0142u"
        },
        {
            "Pytanie": "U\u017cytkownik systemu operacyjnego Linux chce przypisa\u0107 adres IP 152.168.1.200 255.255.0.0 interfejsowi sieciowemu. Kt&oacute;re polecenie powinien wyda\u0107, maj\u0105c uprawnienia root?",
            "IMG": "",
            "B1": "A. netsh interface IP 152.168.1.200/16 /add",
            "B2": "B. ip addr add 152.168.1.200 255.255.0.0 dev eth1",
            "B3": "C. netsh interface IP 152.168.1.200 255.255.0.0 /add",
            "P": "D. ip addr add 152.168.1.200/16 dev eth1"
        },
        {
            "Pytanie": "DB-25 jest wykorzystywane jako z\u0142\u0105cze",
            "IMG": "",
            "B1": "A. portu RS-422A",
            "B2": "B. VGA, SVGA i XGA",
            "B3": "C. GamePort",
            "P": "D. portu r&oacute;wnoleg\u0142ego LPT"
        },
        {
            "Pytanie": "Kt&oacute;ry zapis jest oznaczeniem adresu strony internetowej i przypisanego go niej portu?",
            "IMG": "",
            "B1": "A. 100.168.0.1:AH1",
            "B2": "C. 100.168.0.1-AH1",
            "B3": "D. 100.168.0.1-8080",
            "P": "B. 100.168.0.1:8080"
        },
        {
            "Pytanie": "ACPI jest interfejsem umo\u017cliwiaj\u0105cym",
            "IMG": "",
            "B1": "A. transfer danych pomi\u0119dzy dyskiem twardym a nap\u0119dem optycznym",
            "B2": "C. przeprowadzenie testu poprawno\u015bci dzia\u0142ania podstawowych podzespo\u0142&oacute;w komputera, np. procesora.",
            "B3": "D. konwersj\u0119 sygna\u0142u analogowego na cyfrowy",
            "P": "B. zarz\u0105dzanie konfiguracj\u0105 i energi\u0105 dostarczan\u0105 do poszczeg&oacute;lnych urz\u0105dze\u0144 komputera"
        },
        {
            "Pytanie": "Dokumentacja powykonawcza projektowanej sieci LAN powinna mi\u0119dzy innymi zawiera\u0107 ",
            "IMG": "",
            "B1": "A. spis rysunk&oacute;w wykonawczych",
            "B2": "B. za\u0142o\u017cenia projektowe sieci lokalnej",
            "B3": "D. kosztorys rob&oacute;t instalatorskich",
            "P": "C. raport pomiarowy tor&oacute;w transmisyjnych"
        },
        {
            "Pytanie": "Przydzielaniem czasu procesora do okre\u015blonych zada\u0144 zajmuje si\u0119",
            "IMG": "",
            "B1": "A. pami\u0119\u0107 RAM",
            "B2": "B. cache procesora",
            "B3": "D. chipset",
            "P": "C. system operacyjny"
        },
        {
            "Pytanie": "Dysk zewn\u0119trzny 3,5 cala o pojemno\u015bci 5 TB, s\u0142u\u017c\u0105cy do przechowywania lub tworzenia kopii zapasowych, posiada obudow\u0119 z czterema interfejsami komunikacyjnymi do wyboru. Kt&oacute;ry z tych interfejs&oacute;w nale\u017cy wykorzysta\u0107 do po\u0142\u0105czenia z komputerem, aby uzyska\u0107 najwi\u0119ksz\u0105 pr\u0119dko\u015b\u0107 transmisji?",
            "IMG": "",
            "B1": "A. FireWire80",
            "B2": "B. WiFi 802.11n",
            "B3": "C. eSATA 6G",
            "P": "D. USB 3.1 gen 2"
        },
        {
            "Pytanie": "Aby usun\u0105\u0107 opisan\u0105 usterk\u0119, nale\u017cy",
            "IMG": "https://egzamin-informatyk.pl/old/120.jpg",
            "B1": "B. wy\u0142\u0105czy\u0107 system NetBIOS NWLink we w\u0142a\u015bciwo\u015bciach po\u0142\u0105cze\u0144 LAN komputer&oacute;w",
            "B2": "C. wy\u0142\u0105czy\u0107 system NetBIOS przez TCP/IP w zaawansowanych ustawieniach TCP/IP kart sieciowych",
            "B3": "D. sprawdzi\u0107 w\u0142\u0105czenie PROXY i ewentualnie w\u0142\u0105czy\u0107",
            "P": "A. zmieni\u0107 konfiguracje adres&oacute;w IP i/lub masek podsieci im odpowiadaj\u0105cych w taki spos&oacute;b, aby oba komputery znalaz\u0142y si\u0119 w tej samej podsieci"
        },
        {
            "Pytanie": "Czynno\u015bci samokontroluj\u0105ce komputer po w\u0142\u0105czeniu zasilania oznaczone s\u0105 skr&oacute;tem",
            "IMG": "",
            "B1": "A. MBR",
            "B2": "B. BIOS",
            "B3": "D. CPU",
            "P": "C. POST"
        },
        {
            "Pytanie": "Ataki maj\u0105ce na celu zatrzymanie dzia\u0142ania aplikacji i proces&oacute;w zachodz\u0105cych w urz\u0105dzeniu sieciowym to ataki typu",
            "IMG": "",
            "B1": "A. spoofing",
            "B2": "B. smurf",
            "B3": "C. zero-day",
            "P": "D. DoS"
        },
        {
            "Pytanie": "Program s\u0142u\u017c\u0105cy do diagnozy komputera wy\u015bwietli\u0142 komunikat NIC ERROR. Komunikat ten oznacza awari\u0119 karty",
            "IMG": "",
            "B1": "B. d\u017awi\u0119kowej",
            "B2": "C. graficznej",
            "B3": "D. wideo",
            "P": "A. sieciowej"
        },
        {
            "Pytanie": "W kt&oacute;rej topologii sieci fizycznej ka\u017cdy komputer jest po\u0142\u0105czony z dok\u0142adnie dwoma s\u0105siednimi komputerami, bez dodatkowych urz\u0105dze\u0144 aktywnych?",
            "IMG": "",
            "B1": "B. Gwiazdy",
            "B2": "C. Magistrali",
            "B3": "D. Siatki",
            "P": "A. Pier\u015bcienia"
        },
        {
            "Pytanie": "Kt&oacute;ry protok&oacute;\u0142 zapewnia szyfrowane po\u0142\u0105czenia?",
            "IMG": "",
            "B1": "B. TELNET",
            "B2": "C. DNS",
            "B3": "D. DHCP",
            "P": "A. SSH"
        },
        {
            "Pytanie": "Kopia r&oacute;\u017cnicowa polega na",
            "IMG": "",
            "B1": "A. kopiowaniu tylko tej cz\u0119\u015bci plik&oacute;w, kt&oacute;ra zosta\u0142a dopisana od czasu utworzenia ostatniej kopii pe\u0142nej",
            "B2": "C. kopiowaniu tylko plik&oacute;w, kt&oacute;re zosta\u0142y zmienione od czasu utworzenia ostatniej kopii pe\u0142nej",
            "B3": "D. kopiowaniu tylko plik&oacute;w, kt&oacute;re zosta\u0142y utworzone od czasu ostatniej kopii pe\u0142nej",
            "P": "B. kopiowaniu tylko plik&oacute;w, kt&oacute;re zosta\u0142y utworzone lub zmienione od czasu utworzenia ostatniej kopii pe\u0142nej"
        },
        {
            "Pytanie": "Elementem s\u0142u\u017c\u0105cym do utrwalania tonera na papierze podczas wydruku z drukarki laserowej jest",
            "IMG": "",
            "B1": "A. elektroda \u0142aduj\u0105ca",
            "B2": "C. b\u0119ben \u015bwiat\u0142oczu\u0142y",
            "B3": "D. listwa czyszcz\u0105ca",
            "P": "B. wa\u0142ek grzewczy"
        },
        {
            "Pytanie": "Aby umo\u017cliwi\u0107 wymian\u0119 danych pomi\u0119dzy sieci\u0105 w pracowni, a sieci\u0105 og&oacute;lnoszkoln\u0105 o innej adresacji IP, nale\u017cy wykorzysta\u0107",
            "IMG": "",
            "B1": "A. prze\u0142\u0105cznik",
            "B2": "B. koncentrator",
            "B3": "D. punkt dost\u0119powy",
            "P": "C. ruter"
        },
        {
            "Pytanie": "Jednoczesne zwi\u0119kszenie szybko\u015bci operacji (zapis/odczyt) i bezpiecze\u0144stwa przechowywania danych umo\u017cliwia macierz dyskowa",
            "IMG": "",
            "B1": "A. RAID 0",
            "B2": "B. RAID 3",
            "B3": "D. RAID 1",
            "P": "C. RAID 50"
        },
        {
            "Pytanie": "Przy wymianie kt&oacute;rego podzespo\u0142&oacute;w komputera nie wymaga si\u0119 wy\u0142\u0105czenia \u017ar&oacute;d\u0142a zasilania?",
            "IMG": "",
            "B1": "B. zasilacza ",
            "B2": "C. p\u0142yty g\u0142&oacute;wnej",
            "B3": "D. pami\u0119ci RAM",
            "P": "A. urz\u0105dzenia typu hot-swap"
        },
        {
            "Pytanie": "Adres kom&oacute;rki pami\u0119ci podano w postaci binarnej 1110001110010100. W systemie szesnastkowym adres zapisuje si\u0119 w postaci",
            "IMG": "",
            "B1": "A. D281",
            "B2": "B. 493",
            "B3": "C. 7E+092",
            "P": "D. E394"
        },
        {
            "Pytanie": "Protok&oacute;\u0142, kt&oacute;ry t\u0142umaczy nazwy domenowe na adresy IP, to",
            "IMG": "",
            "B1": "A. ICMP (Internet Control Message Protocol)",
            "B2": "B. DHCP (Dynamic Host Configuration Protocol)",
            "B3": "D. ARP (Address Resolution Protocol)",
            "P": "C. DNS (Domain Name System)"
        },
        {
            "Pytanie": "U\u017cytkownik systemu Windows otrzymuje komunikaty o zbyt ma\u0142ej pami\u0119ci wirtualnej. Problem ten mo\u017cna rozwi\u0105za\u0107 przez",
            "IMG": "",
            "B1": "A. zwi\u0119kszenie rozmiaru pliku virtualfile.sys",
            "B2": "C. zamontowanie dodatkowego dysku",
            "B3": "D. zamontowanie dodatkowej pami\u0119ci cache procesora",
            "P": "B. zwi\u0119kszenie pami\u0119ci RAM"
        },
        {
            "Pytanie": "Aby sprawdzi\u0107 adres fizyczny karty sieciowej, w wierszu polece\u0144 systemu operacyjnego Microsoft Windows nale\u017cy wpisa\u0107 polecenie",
            "IMG": "",
            "B1": "A. get mac",
            "B2": "B. ifconfig -a",
            "B3": "C. show mac",
            "P": "D. ipconfig /all"
        },
        {
            "Pytanie": "W jednostce ALU do akumulatora zosta\u0142a wpisana liczba dziesi\u0119tna 240. Jaka jest jej binarna reprezentacja?",
            "IMG": "",
            "B1": "B. 11111100",
            "B2": "C. 11111110",
            "B3": "D. 11111000",
            "P": "A. 11110000"
        },
        {
            "Pytanie": "Programem antywirusowym nie jest",
            "IMG": "",
            "B1": "A. AVG",
            "B2": "C. NOD32",
            "B3": "D. AVAST",
            "P": "B. PacketFilter"
        },
        {
            "Pytanie": "Po uruchomieniu komputera pojawi\u0142 si\u0119 komunikat: Non-system disk or disk error. Replace and strike any key when ready. Przyczyn\u0105 mo\u017ce by\u0107",
            "IMG": "",
            "B1": "A. uszkodzony kontroler DMA",
            "B2": "B. brak pliku NTLDR",
            "B3": "C. skasowany BIOS komputera",
            "P": "D. dyskietka w\u0142o\u017cona do nap\u0119du"
        },
        {
            "Pytanie": "Niepoprawna posta\u0107 zapisu liczby 77(8) to",
            "IMG": "",
            "B1": "A. 111111(2)",
            "B2": "C. 3F(16)",
            "B3": "D. 63(10)",
            "P": "B. 11010(ZM)"
        },
        {
            "Pytanie": "Technika transmisji danych pomi\u0119dzy urz\u0105dzeniami CD/DVD a pami\u0119ci\u0105 komputera w trybie bezpo\u015bredniego dost\u0119pu do pami\u0119ci to",
            "IMG": "",
            "B1": "A. IDE ",
            "B2": "C. PIO",
            "B3": "D. SATA",
            "P": "B. DMA"
        },
        {
            "Pytanie": "Kt&oacute;r\u0105 fizyczn\u0105 topologi\u0119 sieci przedstawia rysunek?",
            "IMG": "https://egzamin-informatyk.pl/e13/449.jpg",
            "B1": "A. Magistrali",
            "B2": "B. Pe\u0142nej siatki",
            "B3": "D. Podw&oacute;jnego pier\u015bcienia",
            "P": "C. Gwiazdy"
        },
        {
            "Pytanie": "Kt&oacute;r\u0105 konfiguracje sieciow\u0105 mo\u017ce mie\u0107 komputer nale\u017c\u0105cy do tej samej sieci LAN, co komputer o adresie 10.8.1.10/24?",
            "IMG": "",
            "B1": "A. 10.8.0.101 i 255.255.0.0",
            "B2": "B. 10.8.0.101 i 255.255.255.0",
            "B3": "D. 10.8.1.101 i 255.255.0.0\t",
            "P": "C. 10.8.1.101 i 255.255.255.0"
        },
        {
            "Pytanie": "Serwer DHCP przydziela adresy z sieci o adresie 192.168.0.0. Kt&oacute;r\u0105 mask\u0119 nale\u017cy przypisa\u0107 sieci, aby serwer m&oacute;g\u0142 nada\u0107 510 urz\u0105dzeniom pracuj\u0105cym w sieci po jednym adresie IP?",
            "IMG": "",
            "B1": "A. 255.255.255.128",
            "B2": "C. 255.255.255.192",
            "B3": "D. 255.255.252.0",
            "P": "B. 255.255.254.0"
        },
        {
            "Pytanie": "Jakie polecenie umo\u017cliwia mapowanie zasob&oacute;w sieciowych w Windows Serwer?",
            "IMG": "",
            "B1": "B. network",
            "B2": "C. net add",
            "B3": "D. net map",
            "P": "A. net use"
        },
        {
            "Pytanie": "Je\u017celi adres IP stacji roboczej ma posta\u0107 176.16.50.10/26to adres rozg\u0142oszeniowy oraz maksymalna liczba host&oacute;w w sieci wynosz\u0105 odpowiednio",
            "IMG": "",
            "B1": "B. 176.16.50.36; 6 host&oacute;w",
            "B2": "C. 176.16.50.1; 26 host&oacute;w",
            "B3": "D. 176.16.50.62; 63 hosty",
            "P": "A. 176.16.50.63; 62 hosty"
        },
        {
            "Pytanie": "Jaki b\u0119dzie koszt wymiany karty sieciowej w komputerze, je\u015bli karta kosztuje 40 z\u0142, jej wymiana zajmie pracownikowi serwisu 90 minut, a ka\u017cda rozpocz\u0119ta roboczogodzina kosztuje 60 z\u0142?",
            "IMG": "",
            "B1": "A. 40 z\u0142",
            "B2": "B. 130 z\u0142",
            "B3": "D. 200 z\u0142",
            "P": "C. 160 z\u0142"
        },
        {
            "Pytanie": "Kt&oacute;ry przyrz\u0105d jest stosowany do pomiar&oacute;w d\u0142ugo\u015bci i t\u0142umienno\u015bci przewod&oacute;w miedzianych?",
            "IMG": "",
            "B1": "A. Miernik mocy",
            "B2": "C. Omomierz",
            "B3": "D. Woltomierz",
            "P": "B. Reflektometr TDR"
        },
        {
            "Pytanie": "Kt&oacute;ry typ licencji uprawnia do dowolnych modyfikacji, kopiowania oraz rozpowszechniania po uiszczeniu dowolnej op\u0142aty na rzecz autora?",
            "IMG": "",
            "B1": "A. postcardware",
            "B2": "C. shareware",
            "B3": "D. adware",
            "P": "B. donationware"
        },
        {
            "Pytanie": "Konfiguracj\u0119 interfejsu sieciowego w systemie Linux mo\u017cna wykona\u0107, edytuj\u0105c plik ",
            "IMG": "",
            "B1": "B. /etc/host.conf",
            "B2": "C. /etc/hosts",
            "B3": "D. /etc/resolv.conf",
            "P": "A. /etc/network/interfaces"
        },
        {
            "Pytanie": "Kt&oacute;ry typ kabla nale\u017cy zastosowa\u0107 do pod\u0142\u0105czenia komputera w pomieszczeniu z zak\u0142&oacute;ceniami elektromagnetycznymi?",
            "IMG": "",
            "B1": "A. UTP Cat 5e",
            "B2": "B. UTP Cat 5",
            "B3": "C. UTP Cat 6",
            "P": "D. FTP Cat 5e"
        },
        {
            "Pytanie": "Je\u017celi w kom&oacute;rce arkusza kalkulacyjnego MS Excel, zamiast cyfr pojawiaj\u0105 si\u0119 znaki ########, to nale\u017cy przede wszystkim sprawdzi\u0107, czy",
            "IMG": "",
            "B1": "B. pojawi\u0142 si\u0119 b\u0142\u0105d w obliczeniach",
            "B2": "C. wprowadzone zosta\u0142y znaki tekstowe, a nie liczby",
            "B3": "D. wpisana formu\u0142a zawiera b\u0142\u0105d",
            "P": "A. liczba nie mie\u015bci si\u0119 w kom&oacute;rce i nie mo\u017cna jej prawid\u0142owo wy\u015bwietli\u0107"
        },
        {
            "Pytanie": "Interfejs SATA 2 (3Gb/s) zapewnia przepustowo\u015b\u0107",
            "IMG": "",
            "B1": "A. 300 MB/s",
            "B2": "B. 150 MB/s",
            "B3": "D. 750 MB/s",
            "P": "C. 375 MB/s"
        },
        {
            "Pytanie": "Przedstawiony symbol graficzny oznacza",
            "IMG": "https://egzamin-informatyk.pl/old/705.jpg",
            "B1": "A. przetwornik cyfrowo-analogowy",
            "B2": "B. generator d\u017awi\u0119ku",
            "B3": "D. filtr dolnoprzepustowy",
            "P": "C. przetwornik analogowo-cyfrowy"
        },
        {
            "Pytanie": "Kt&oacute;re narz\u0119dzie nale\u017cy u\u017cy\u0107 w systemie Windows do wy\u015bwietlenia informacji na temat problem&oacute;w systemowych?",
            "IMG": "",
            "B1": "A. Harmonogram zada\u0144",
            "B2": "B. Foldery udost\u0119pnione",
            "B3": "C. Zasady grupy",
            "P": "D. Podgl\u0105d zdarze\u0144"
        },
        {
            "Pytanie": "W systemie Linux, aby wy\u015bwietli\u0107 informacj\u0119 o nazwie bie\u017c\u0105cego katalogu roboczego, nale\u017cy zastosowa\u0107 polecenie",
            "IMG": "",
            "B1": "A. cat",
            "B2": "B. finger",
            "B3": "D. echo",
            "P": "C. pwd"
        },
        {
            "Pytanie": "Przed instalacj\u0105 sterownika urz\u0105dzenia peryferyjnego system operacyjny Windows powinien sprawdza\u0107, czy sterownik posiada podpis",
            "IMG": "",
            "B1": "A. elektroniczny",
            "B2": "C. kryptograficzny",
            "B3": "D. zaufany",
            "P": "B. cyfrowy"
        },
        {
            "Pytanie": "Uruchamianie programu w dowolnym celu, analizowanie dzia\u0142ania programu oraz jego modyfikowanie wraz z mo\u017cliwo\u015bci\u0105 publicznego rozpowszechniania tych zmian jest cech\u0105 licencji typu",
            "IMG": "",
            "B1": "A. MOLP",
            "B2": "C. FREEWARE",
            "B3": "D. ADWARE",
            "P": "B. GNU GPL"
        },
        {
            "Pytanie": "Programem s\u0142u\u017c\u0105cym do archiwizacji danych w systemie Linux jest",
            "IMG": "",
            "B1": "B. lzma",
            "B2": "C. gzip",
            "B3": "D. compress",
            "P": "A. tar"
        },
        {
            "Pytanie": "W us\u0142udze Active Directory, struktur\u0119 sk\u0142adaj\u0105c\u0105 si\u0119 z jednej lub wi\u0119kszej liczby domen, kt&oacute;re maj\u0105 wsp&oacute;lny schemat i wykaz globalny, nale\u017cy nazwa\u0107",
            "IMG": "",
            "B1": "B. li\u015bciem",
            "B2": "C. gwiazd\u0105",
            "B3": "D. siatk\u0105",
            "P": "A. lasem"
        },
        {
            "Pytanie": "U\u017cytkownik uszkodzi\u0142 p\u0142yt\u0119 g\u0142&oacute;wn\u0105 z gniazdem procesora AM2. Uszkodzon\u0105 p\u0142yt\u0119 mo\u017cna zast\u0105pi\u0107, bez konieczno\u015bci wymiany procesora i pami\u0119ci, modelem z gniazdem",
            "IMG": "",
            "B1": "A. AM1",
            "B2": "B. FM2+",
            "B3": "D. FM2",
            "P": "C. AM2+"
        },
        {
            "Pytanie": "Zerowanie rejestr&oacute;w procesora odbywa si\u0119 poprzez",
            "IMG": "",
            "B1": "A. ustawienie licznika rozkaz&oacute;w na adresie zerowym",
            "B2": "C. ustawienie parametru w BIOS-ie",
            "B3": "D. wyzerowanie bit&oacute;w rejestru flag",
            "P": "B. u\u017cycie sygna\u0142u RESET"
        },
        {
            "Pytanie": "Kt&oacute;ry protok&oacute;\u0142 jest stosowany do pobierania wiadomo\u015bci e-mail z serwera poczty na komputer u\u017cytkownika",
            "IMG": "",
            "B1": "A. FTP",
            "B2": "C. SMTP",
            "B3": "D. HTTP",
            "P": "B. POP3"
        },
        {
            "Pytanie": "Program wykorzystywany do przechwytywania analizy ruchu sieciowego, to",
            "IMG": "",
            "B1": "A. viewer",
            "B2": "C. keylogger",
            "B3": "D. spywer",
            "P": "B. sniffer"
        },
        {
            "Pytanie": "Rysunek przedstawia konfiguracj\u0119 urz\u0105dzenia WiFi. Wska\u017c, kt&oacute;re stwierdzenie dotycz\u0105ce konfiguracji jest prawdziwe:",
            "IMG": "https://egzamin-informatyk.pl/e13/299.jpg",
            "B1": "A. Urz\u0105dzenia w sieci maj\u0105 adresy klasy A",
            "B2": "B. Dost\u0119p do sieci bezprzewodowej jest dozwolony wy\u0142\u0105cznie dla siedmiu urz\u0105dze\u0144",
            "B3": "C. W tym momencie w sieci WiFi pracuje 7 urz\u0105dze\u0144",
            "P": "D. Filtrowanie adres&oacute;w MAC jest wy\u0142\u0105czone"
        },
        {
            "Pytanie": "Sum\u0105 dw&oacute;ch liczb binarnych 1101011 i 1001001 jest liczba dziesi\u0119tna",
            "IMG": "",
            "B1": "A. 402",
            "B2": "B. 170",
            "B3": "D. 201",
            "P": "C. 180"
        },
        {
            "Pytanie": "Jakie narz\u0119dzie s\u0142u\u017cy do mocowania pojedynczych \u017cy\u0142 kabla miedzianego w z\u0142\u0105czach?",
            "IMG": "https://egzamin-informatyk.pl/ee08/1579.jpg",
            "B1": "A. szukacz kabli",
            "B2": "B. obcinacz izolacji",
            "B3": "C. zaciskarka RJ45",
            "P": "D. n&oacute;\u017c KRONE"
        },
        {
            "Pytanie": "W nowoczesnych ekranach dotykowych poprawno\u015b\u0107 dzia\u0142ania ekranu zapewnia mechanizm wykrywaj\u0105cy zmian\u0119",
            "IMG": "",
            "B1": "A. oporu mi\u0119dzy przezroczystymi diodami wtopionymi w ekran",
            "B2": "B. po\u0142o\u017cenia r\u0119ki dotykaj\u0105cej ekran poprzez zastosowanie kamery",
            "B3": "C. pola elektromagnetycznego",
            "P": "D. pola elektrostatycznego"
        },
        {
            "Pytanie": "Ile host&oacute;w maksymalnie mo\u017cna zaadresowa\u0107 w sieci o adresie IP klasy B?",
            "IMG": "",
            "B1": "A. 1022",
            "B2": "B. 254",
            "B3": "C. 16777214",
            "P": "D. 65534"
        },
        {
            "Pytanie": "Wydaj\u0105c w wierszu polece\u0144 systemu Windows Server polecenie convert, mo\u017cna przeprowadzi\u0107",
            "IMG": "",
            "B1": "A. defragmentacj\u0119 dysku",
            "B2": "B. napraw\u0119 systemu plik&oacute;w",
            "B3": "D. napraw\u0119 logicznej struktury dysku",
            "P": "C. zmian\u0119 systemu plik&oacute;w"
        },
        {
            "Pytanie": "Urz\u0105dzeniem wskazuj\u0105cym, kt&oacute;re reaguje na zmiany pojemno\u015bci elektrycznej, jest",
            "IMG": "",
            "B1": "A. trackpoint",
            "B2": "B. mysz",
            "B3": "D. d\u017cojstik",
            "P": "C. touchpad"
        },
        {
            "Pytanie": "U\u017cytkownik chce tak zmodernizowa\u0107 komputer, aby dzia\u0142a\u0142y na nim gry wymagaj\u0105ce DirectX12. Jaki system operacyjny powinien zakupi\u0107 do modernizowanego komputera, aby wspiera\u0142 DX12?",
            "IMG": "",
            "B1": "A. Windows XP",
            "B2": "C. Windows 8",
            "B3": "D. Windows 8.1",
            "P": "B. Windows 10"
        },
        {
            "Pytanie": "Je\u015bli wydanie komendy ping 127.0.0.1 skutkuje brakiem odpowiedzi, to",
            "IMG": "",
            "B1": "A. komputer o adresie 127.0.0.1 z sieci lokalnej, aktualnie jest wy\u0142\u0105czony.",
            "B2": "B. w sieci nie dzia\u0142a serwer DHCP.",
            "B3": "D. w sieci nie dzia\u0142a system DNS lub podano jego b\u0142\u0119dny adres.",
            "P": "C. karta sieciowa komputera, z kt&oacute;rego ping zosta\u0142 wys\u0142any nie dzia\u0142a i wyst\u0105pi\u0142 b\u0142\u0105d w konfiguracji stosu TCP/IP"
        },
        {
            "Pytanie": "Pami\u0119\u0107 nieulotna, elektrycznie kasowana i programowana okre\u015blana jest skr&oacute;tem",
            "IMG": "",
            "B1": "B. ROM",
            "B2": "C. IDE",
            "B3": "D. RAM",
            "P": "A. EEPROM"
        },
        {
            "Pytanie": "Wynik dzia\u0142ania polecenia ls -l u\u017cytego w systemie Linux przedstawia rysunek",
            "IMG": "https://egzamin-informatyk.pl/e12/648.jpg",
            "B1": "A. A",
            "B2": "B. B",
            "B3": "C. C",
            "P": "D. D"
        },
        {
            "Pytanie": "Najwi\u0119ksz\u0105 szybko\u015b\u0107 transmisji danych w sieci bezprzewodowej uzyska si\u0119 stosuj\u0105c urz\u0105dzenia standardu",
            "IMG": "",
            "B1": "A. 802.11 g",
            "B2": "B. 802.11 b",
            "B3": "C. 802.11 a",
            "P": "D. 802.11 n"
        },
        {
            "Pytanie": "Aby w systemie Windows Server wykona\u0107 rezerwacj\u0119 adres&oacute;w IP na podstawie adres&oacute;w fizycznych MAC urz\u0105dze\u0144, nale\u017cy skonfigurowa\u0107 us\u0142ug\u0119",
            "IMG": "",
            "B1": "A. DNS",
            "B2": "C. RRAS",
            "B3": "D. NAT",
            "P": "B. DHCP"
        },
        {
            "Pytanie": "Kt&oacute;ry z adres&oacute;w jest adresem rozg\u0142oszeniowym dla hosta o adresie IP 171.25.172.29 i masce sieci 255.255.0.0?",
            "IMG": "",
            "B1": "A. 171.25.0.0",
            "B2": "B. 171.25.172.255",
            "B3": "C. 171.25.255.0",
            "P": "D. 171.25.255.255"
        },
        {
            "Pytanie": "Skaner antywirusowy wykry\u0142 niepo\u017c\u0105dane oprogramowanie. Z opisu wynika, \u017ce jest to dialer, kt&oacute;ry pozostawiony w systemie",
            "IMG": "",
            "B1": "A. zaatakuje rekord startowy dysku",
            "B2": "B. zainfekuje za\u0142\u0105czniki poczty internetowej",
            "B3": "D. przejmie pe\u0142n\u0105 kontrol\u0119 nad komputerem",
            "P": "C. po\u0142\u0105czy si\u0119 z p\u0142atnymi numerami telefonicznymi przy u\u017cyciu modemu"
        },
        {
            "Pytanie": "Do monta\u017cu zestawu komputerowego z p\u0142yt\u0105 g\u0142&oacute;wn\u0105 zawieraj\u0105c\u0105 gniazdo procesora typu Socket AM3 mo\u017cna zastosowa\u0107 procesor",
            "IMG": "",
            "B1": "A. Pentium D",
            "B2": "C. Core i7",
            "B3": "D. Itanium",
            "P": "B. Phenom II"
        },
        {
            "Pytanie": "Wykonuj\u0105c projekt sieci LAN, wykorzystano medium transmisyjne standardu Ethernet 1000Base-T. Kt&oacute;re stwierdzenie jest prawdziwe?",
            "IMG": "",
            "B1": "A. Jest to standard sieci optycznych, kt&oacute;rej maksymalny zasi\u0119g to 1000 metr&oacute;w",
            "B2": "C. Standard ten umo\u017cliwia transmisj\u0119 typu half-duplex przy maksymalnym zasi\u0119gu 1000 metr&oacute;w",
            "B3": "D. Jest to standard sieci optycznych pracuj\u0105cych na wielomodowych \u015bwiat\u0142owodach",
            "P": "B. Standard ten umo\u017cliwia transmisj\u0119 typu full-duplex przy maksymalnym zasiegu 100 metr&oacute;w"
        },
        {
            "Pytanie": "Procedura POST (Power-On Self Test) uruchamiana przez BIOS komputera odpowiada za ",
            "IMG": "",
            "B1": "A. kolejno\u015b\u0107 przeszukiwania zainstalowanych urz\u0105dze\u0144 w celu znalezienia sektora startowego podczas uruchamiania komputera",
            "B2": "B. predefiniowane typy schemat&oacute;w zarz\u0105dzania energi\u0105 oraz daje mo\u017cliwo\u015b\u0107 zdefiniowania w\u0142asnych ustawie\u0144",
            "B3": "D. w\u0142\u0105czenie lub wy\u0142\u0105czenie automatycznego rozpoznawania urz\u0105dze\u0144 pracuj\u0105cych w standardzie P&amp;P",
            "P": "C. przeprowadzenie testu poprawno\u015bci dzia\u0142ania podstawowych podzespo\u0142&oacute;w komputera, wykonywanego przy ka\u017cdym uruchomieniu lub restarcie"
        },
        {
            "Pytanie": "Aby w adresie IPv4 wyznaczy\u0107 d\u0142ugo\u015b\u0107 prefiksu adresu sieci, nale\u017cy sprawdzi\u0107",
            "IMG": "",
            "B1": "A. liczb\u0119 bit&oacute;w maj\u0105cych warto\u015b\u0107 1 w cz\u0119\u015bci hosta adresu IPv4",
            "B2": "C. liczb\u0119 bit&oacute;w maj\u0105cych warto\u015b\u0107 0 w dw&oacute;ch pierwszych oktetach adresu IPv4",
            "B3": "D. liczb\u0119 bit&oacute;w maj\u0105cych warto\u015b\u0107 0 w trzech pierwszych oktetach adresu IPv4",
            "P": "B. liczb\u0119 pocz\u0105tkowych bit&oacute;w maj\u0105cych warto\u015b\u0107 1 w masce adresu IPv4"
        },
        {
            "Pytanie": "Kt&oacute;ry z wymienionych protoko\u0142&oacute;w jest protoko\u0142em dzia\u0142aj\u0105cym w warstwie aplikacji?",
            "IMG": "",
            "B1": "A. TCP",
            "B2": "B. UDP",
            "B3": "C. ARP",
            "P": "D. FTP"
        },
        {
            "Pytanie": "Aby dane pliku znajduj\u0105cego si\u0119 na dysku twardym, zapisane na nies\u0105siaduj\u0105cych ze sob\u0105 klastrach, zosta\u0142y u\u0142o\u017cone tak, by zajmowa\u0142y s\u0105siaduj\u0105ce klastry, nale\u017cy uruchomi\u0107",
            "IMG": "",
            "B1": "A. oczyszczanie dysku",
            "B2": "B. program chkdsk",
            "B3": "D. program scandisk",
            "P": "C. defragmentacj\u0119 dysku"
        },
        {
            "Pytanie": "System umo\u017cliwiaj\u0105cy przet\u0142umaczenie nazwy komputera na adres IP w sieci to",
            "IMG": "",
            "B1": "B. NetBEUI",
            "B2": "C. ARP",
            "B3": "D. ICMP",
            "P": "A. DNS"
        },
        {
            "Pytanie": "Jak\u0105 nazw\u0119 nosi rodzina procesor&oacute;w firmy Intel, o niewielkich rozmiarach i ma\u0142ym poborze pr\u0105du, dedykowanych do zastosowa\u0144 mobilnych?",
            "IMG": "",
            "B1": "A. Alpha",
            "B2": "B. Radeon",
            "B3": "D. Athlon",
            "P": "C. Atom"
        },
        {
            "Pytanie": "Jakiego programu wbudowanego w system Windows 8 Pro mo\u017cna u\u017cy\u0107, aby zaszyfrowa\u0107 dane?",
            "IMG": "",
            "B1": "A. WinLocker",
            "B2": "B. OneLocker",
            "B3": "C. AppLocker",
            "P": "D. BitLocker"
        },
        {
            "Pytanie": "W systemie Windows Server udost\u0119pnienie folderu jako zasobu sieciowego, widocznego na stacji roboczej w postaci dysku oznaczonego liter\u0105, jest mo\u017cliwe dzi\u0119ki wykonaniu operacji",
            "IMG": "",
            "B1": "A. zerowania",
            "B2": "C. defragmentacji",
            "B3": "D. oczyszczania",
            "P": "B. mapowania"
        },
        {
            "Pytanie": "Kt&oacute;re z polece\u0144 nale\u017cy wyda\u0107 w systemie Windows 7, aby bezpo\u015brednio z wiersza polece\u0144 uruchomi\u0107 program Zapora systemu Windows z zabezpieczeniami zaawansowanymi?",
            "IMG": "",
            "B1": "A. compmgmt.msc",
            "B2": "B. services.msc",
            "B3": "D. perfmon.msc",
            "P": "C. wf.msc"
        },
        {
            "Pytanie": "Na przedstawionej p\u0142ycie g\u0142&oacute;wnej mo\u017cliwy jest monta\u017c procesora z obudow\u0105 typu",
            "IMG": "https://egzamin-informatyk.pl/ee08/1569.png",
            "B1": "A. PGA",
            "B2": "B. SECC",
            "B3": "D. SPGA",
            "P": "C. LGA"
        },
        {
            "Pytanie": "Wska\u017c z\u0142\u0105cze, kt&oacute;re NIE wyst\u0119puje w zasilaczach ATX",
            "IMG": "",
            "B1": "B. PCI-E",
            "B2": "C. MPC",
            "B3": "D. SATA Connector",
            "P": "A. DE-15/HD-15"
        },
        {
            "Pytanie": "Adresem IP hosta skonfigurowanym na karcie sieciowej eth0 jest",
            "IMG": "https://egzamin-informatyk.pl/e13/432.jpg",
            "B1": "A. 255.255.255.0",
            "B2": "B. 00:A0:c9:89:02:F8",
            "B3": "C. 128.171.104.255",
            "P": "D. 128.171.104.26"
        },
        {
            "Pytanie": "W drukarce ig\u0142owej materia\u0142em eksploatacyjnym jest",
            "IMG": "",
            "B1": "A. toner",
            "B2": "B. pigment",
            "B3": "C. tusz",
            "P": "D. ta\u015bma barwi\u0105ca"
        },
        {
            "Pytanie": "W celu dokonania aktualizacji zainstalowanego systemu operacyjnego Linux Ubuntu nale\u017cy u\u017cy\u0107 polecenia ",
            "IMG": "",
            "B1": "B. kernel update",
            "B2": "C. system update",
            "B3": "D. yum upgrade",
            "P": "A. apt-get upgrade"
        },
        {
            "Pytanie": "W systemie Linux plik ma ustawione uprawnienia na 541. W\u0142a\u015bciciel mo\u017ce plik",
            "IMG": "",
            "B1": "A. modyfikowa\u0107",
            "B2": "B. tylko wykona\u0107",
            "B3": "C. odczyta\u0107, zapisa\u0107 i wykona\u0107",
            "P": "D. odczyta\u0107 i wykona\u0107"
        },
        {
            "Pytanie": "Aby wy\u015bwietli\u0107 przedstawion\u0105 informacj\u0119 o systemie Linux w terminalu, male\u017cy u\u017cy\u0107 polecenia",
            "IMG": "https://egzamin-informatyk.pl/e12/852.jpg",
            "B1": "B. uptime",
            "B2": "C. factor 22",
            "B3": "D. hostname",
            "P": "A. uname -a"
        },
        {
            "Pytanie": "Do aktualizacji system&oacute;w Linux mo\u017cna wykorzysta\u0107 programy",
            "IMG": "",
            "B1": "B. aptitude i amarok",
            "B2": "C. defrag i YaST",
            "B3": "D. cron i mount\n",
            "P": "A. apt-get i zypper"
        },
        {
            "Pytanie": "Na zdj\u0119ciu przedstawiono",
            "IMG": "https://egzamin-informatyk.pl/e13/398.jpg",
            "B1": "A. za\u015blepk\u0119 gniazda RJ-45",
            "B2": "B. zast\u0119pczy wtyk RJ-45",
            "B3": "C. za\u015blepk\u0119 kabla \u015bwiat\u0142owodowego",
            "P": "D. terminator BNC"
        },
        {
            "Pytanie": "Do zbudowania programowej macierzy dyskowej RAID-1 nale\u017cy u\u017cy\u0107 minimum",
            "IMG": "",
            "B1": "A. 4 dysk&oacute;w",
            "B2": "C. 1 dysku podzielonego na dwie partycje",
            "B3": "D. 3 dysk&oacute;w",
            "P": "B. 2 dysk&oacute;w"
        },
        {
            "Pytanie": "Adres IP urz\u0105dzenia umo\u017cliwiaj\u0105cego innym komputerom w sieci lokalnej dost\u0119p do Internetu, to adres",
            "IMG": "",
            "B1": "A. WINS",
            "B2": "C. proxy",
            "B3": "D. DNS",
            "P": "B. bramy (routera)"
        },
        {
            "Pytanie": "Do interfejs&oacute;w r&oacute;wnoleg\u0142ych zaliczany jest interfejs",
            "IMG": "",
            "B1": "A. FireWire",
            "B2": "B. DVI",
            "B3": "D. RS-232",
            "P": "C. AGP"
        },
        {
            "Pytanie": "Us\u0142uga, kt&oacute;ra pozwala na pobieranie i przesy\u0142anie plik&oacute;w na serwer, to",
            "IMG": "",
            "B1": "A. CP",
            "B2": "B. DNS",
            "B3": "D. ICMP",
            "P": "C. FTP"
        },
        {
            "Pytanie": "Kt&oacute;re polecenie systemu Linux wy\u015bwietla i umo\u017cliwia zmiany tablicy trasowania pakiet&oacute;w sieciowych?",
            "IMG": "",
            "B1": "B. netstat",
            "B2": "C. nslookup",
            "B3": "D. ifconfig",
            "P": "A. route"
        },
        {
            "Pytanie": "Zgodnie ze standardem 802.3u sieci FastEthernet 100Base-FX wykorzystuje",
            "IMG": "",
            "B1": "A. przew&oacute;d UTP kat. 5",
            "B2": "B. \u015bwiat\u0142ow&oacute;d jednomodowy",
            "B3": "C. przew&oacute;d UTP kat. 6",
            "P": "D. \u015bwiat\u0142ow&oacute;d wielomodowy"
        },
        {
            "Pytanie": "W okablowaniu strukturalnym opartym na skr\u0119tce UTP kat. 6, nale\u017cy stosowa\u0107 gniazda sieciowe typu",
            "IMG": "",
            "B1": "A. BNC",
            "B2": "B. RJ-11",
            "B3": "D. F",
            "P": "C. 8P8C"
        },
        {
            "Pytanie": "Programem typu wirus, kt&oacute;rego g\u0142&oacute;wnym celem jest rozprzestrzenianie si\u0119 w sieci komputerowej, jest:",
            "IMG": "",
            "B1": "A. backdoor",
            "B2": "B. trojan",
            "B3": "D. keylogger",
            "P": "C. robak"
        },
        {
            "Pytanie": "Spos&oacute;b dzia\u0142ania kt&oacute;rego protoko\u0142u zosta\u0142 przedstawiony na rysunku?",
            "IMG": "https://egzamin-informatyk.pl/e13/645.jpg",
            "B1": "B. Security Shell (SSH)",
            "B2": "C. Domain Name System(DNS)",
            "B3": "D. Telnet",
            "P": "A. Dynamic Host Configuration Protocol (DHCP)"
        },
        {
            "Pytanie": "Zamieszczone parametry charakteryzuj\u0105 pami\u0119\u0107",
            "IMG": "https://egzamin-informatyk.pl/e12/537.jpg",
            "B1": "B. SD",
            "B2": "C. SWAP",
            "B3": "D. flash",
            "P": "A. RAM"
        },
        {
            "Pytanie": "No\u015bniki danych takie jak dysk twardy przechowuj\u0105 informacje w porcjach zwanych sektorami, kt&oacute;re maj\u0105 rozmiar",
            "IMG": "",
            "B1": "A. 512KB",
            "B2": "C. 1024KB",
            "B3": "D. 128B",
            "P": "B. 512B"
        },
        {
            "Pytanie": "Kt&oacute;ry typ zabezpiecze\u0144 w sieci WiFi posiada najlepszy poziom zabezpiecze\u0144?",
            "IMG": "",
            "B1": "A. NTFS",
            "B2": "B. WEP",
            "B3": "C. WPA",
            "P": "D. WPA2"
        },
        {
            "Pytanie": "Jaka jest kolejno\u015b\u0107 we wtyku RJ-45 zgodnie z norm\u0105 TIA/EIA-568 dla zako\u0144czenia typu T568B?",
            "IMG": "",
            "B1": "A. Bia\u0142o-niebieski, niebieski, bia\u0142o-br\u0105zowy, br\u0105zowy, bia\u0142o-zielony, zielony, bia\u0142o-pomara\u0144czowy, pomara\u0144czowy",
            "B2": "B. Bia\u0142o-br\u0105zowy, br\u0105zowy, bia\u0142o-pomara\u0144czowy, pomara\u0144czowy, bia\u0142o-zielony, niebieski, bia\u0142o-niebieski, zielony",
            "B3": "C. Bia\u0142o-zielony, zielony, bia\u0142o-pomara\u0144czowy, pomara\u0144czowy, niebieski, bia\u0142o-niebieski, bia\u0142o-br\u0105zowy, br\u0105zowy",
            "P": "D. Bia\u0142o-pomara\u0144czowy, pomara\u0144czowy, bia\u0142o-zielony, niebieski, bia\u0142o-niebieski, zielony, bia\u0142o-br\u0105zowy, br\u0105zowy"
        },
        {
            "Pytanie": "Transmisj\u0119 danych z maksymaln\u0105 przepustowo\u015bci\u0105 6Gb/s umo\u017cliwia interfejs",
            "IMG": "",
            "B1": "A. USB 2.0",
            "B2": "C. SATA 2",
            "B3": "D. USB 3.0",
            "P": "B. SATA 3 "
        },
        {
            "Pytanie": "Aby wdro\u017cy\u0107 us\u0142ug\u0119 zdalnej instalacji system&oacute;w operacyjnych na stacjach roboczych nale\u017cy w Windows Server zainstalowa\u0107 rol\u0119",
            "IMG": "",
            "B1": "A. IIS (Internet Information Services)",
            "B2": "C. Application Server",
            "B3": "D. Hyper-V",
            "P": "B. WDS (Us\u0142ugi wdra\u017cania systemu Windows)"
        },
        {
            "Pytanie": "Kt&oacute;ry standard z grupy IEEE 802 jest zwi\u0105zany z sieciami bezprzewodowymi, tzw. Wireless LAN?",
            "IMG": "",
            "B1": "A. IEEE 802.15",
            "B2": "C. IEEE 802.5",
            "B3": "D. IEEE 802.3",
            "P": "B. IEEE 802.11"
        },
        {
            "Pytanie": "Standard o nazwie IEEE 802.11 stosowany w lokalnych sieciach komputerowych opisuje sie\u0107:",
            "IMG": "",
            "B1": "A. Ethernet",
            "B2": "B. Fiber Optic FDDI",
            "B3": "C. Token Ring",
            "P": "D. Wireless LAN"
        },
        {
            "Pytanie": "Parametry kt&oacute;rego urz\u0105dzenia mo\u017cna monitorowa\u0107 za pomoc\u0105 S.M.A.R.T.?",
            "IMG": "",
            "B1": "A. Procesora",
            "B2": "B. Chipsetu",
            "B3": "D. P\u0142yty g\u0142&oacute;wnej",
            "P": "C. Dysku twardego"
        },
        {
            "Pytanie": "Oprogramowanie regularnie przerywaj\u0105ce dzia\u0142anie poprzez wy\u015bwietlenie komunikatu \u017c\u0105dania uiszczenia zap\u0142aty, kt&oacute;ra spowoduje usuni\u0119cie tego komunikatu, jest rozpowszechniane na bazie licencji",
            "IMG": "",
            "B1": "B. crippleware",
            "B2": "C. careware",
            "B3": "D. greenware",
            "P": "A. nagware"
        },
        {
            "Pytanie": "Kt&oacute;re polecenie systemu operacyjnego Linux pozwala sprawdzi\u0107 aktualn\u0105 konfiguracj\u0119 interfejsu sieciowego komputera?",
            "IMG": "",
            "B1": "A. ipconfig",
            "B2": "C. tracert",
            "B3": "D. ping",
            "P": "B. ifconfig"
        },
        {
            "Pytanie": "Aby uruchomi\u0107 przedstawione narz\u0119dzie systemu Windows, nale\u017cy u\u017cy\u0107 polecenia",
            "IMG": "https://egzamin-informatyk.pl/e12/929.jpg",
            "B1": "A. show userpasswords",
            "B2": "B. net localgroup",
            "B3": "D. net users",
            "P": "C. control userpasswords2"
        },
        {
            "Pytanie": "Kt&oacute;re polecenie w systemach operacyjnych Windows, jest stosowane do wy\u015bwietlania konfiguracji interfejs&oacute;w sieciowych?",
            "IMG": "",
            "B1": "A. ifconfig",
            "B2": "B. hold",
            "B3": "C. tracert",
            "P": "D. ipconfig"
        },
        {
            "Pytanie": "Za przydzielanie czasu procesora do okre\u015blonych zada\u0144 odpowiada",
            "IMG": "",
            "B1": "A. Pami\u0119\u0107 RAM",
            "B2": "B. Cache procesora",
            "B3": "C. Chipset",
            "P": "D. System operacyjny"
        },
        {
            "Pytanie": "Warunkiem niezb\u0119dnym przy archiwizacji danych jest",
            "IMG": "",
            "B1": "A. kompresja danych",
            "B2": "B. kompresja i kopiowanie danych",
            "B3": "C. kompresja i kopiowanie danych z jednoczesnym ich szyfrowaniem",
            "P": "D. kopiowanie danych"
        },
        {
            "Pytanie": "Zwyk\u0142y u\u017cytkownik systemu Linux, kt&oacute;ry chce usun\u0105\u0107 konto innego u\u017cytkownika razem z jego katalogiem domowym, powinien wyda\u0107 polecenie",
            "IMG": "",
            "B1": "A. userdel -d nazwa_u\u017cytkownika",
            "B2": "C. sudo userdel nazwa_u\u017cytkownika",
            "B3": "D. userdel nazwa_u\u017cytkownika",
            "P": "B. sudo userdel -r nazwa_u\u017cytkowania"
        },
        {
            "Pytanie": "U\u017cytkownik ma problem z rozruchem systemu Windows. Aby to naprawi\u0107, uruchomi\u0142 narz\u0119dzie System Image Recovery, kt&oacute;re",
            "IMG": "",
            "B1": "B. naprawia pliki startowe, wykorzystuj\u0105c p\u0142yt\u0119 Recovery",
            "B2": "C. odzyskuje ustawienia systemu, korzystaj\u0105c z kopii rejestru systemowego backup.reg",
            "B3": "D. odtwarza system wykorzystuj\u0105c w tym celu punkty przywracania",
            "P": "A. przywraca system na podstawie kopii zapasowej"
        },
        {
            "Pytanie": "W kt&oacute;rych no\u015bnikach pami\u0119ci masowej jedn\u0105 z najcz\u0119stszych przyczyn uszkodze\u0144 jest uszkodzenie powierzchni?",
            "IMG": "",
            "B1": "A. W kartach pami\u0119ci SD",
            "B2": "C. W dyskach SSD",
            "B3": "D. W pami\u0119ci zewn\u0119trznej Flash",
            "P": "B. W dyskach HDD"
        },
        {
            "Pytanie": "Dopuszczalny promie\u0144 zgi\u0119cia podczas instalacji kabla U/UTP kat.5E wynosi",
            "IMG": "",
            "B1": "A. cztery \u015brednice kabla",
            "B2": "B. sze\u015b\u0107 \u015brednic kabla ",
            "B3": "D. dwie \u015brednice kabla ",
            "P": "C. osiem \u015brednic kabla "
        },
        {
            "Pytanie": "Plik zaszyfrowany przez u\u017cytkownika za pomoc\u0105 systemu NTFS 5.0 jest ka\u017cdorazowo automatycznie szyfrowany podczas",
            "IMG": "",
            "B1": "A. kopiowania go przez sie\u0107",
            "B2": "B. odczytywania go przez innego u\u017cytkownika",
            "B3": "D. wysy\u0142ania go poczt\u0105 e-mail",
            "P": "C. zapisywania go na dysku"
        },
        {
            "Pytanie": "Liczba 356 zapisana w systemie dw&oacute;jkowym to",
            "IMG": "",
            "B1": "B. 100001100",
            "B2": "C. 110011010",
            "B3": "D. 110011000",
            "P": "A. 101100100"
        },
        {
            "Pytanie": "W systemie Linux polecenie cd ~ s\u0142u\u017cy do",
            "IMG": "",
            "B1": "A. utworzenia katalogu /~",
            "B2": "B. przej\u015bcia do katalogu g\u0142&oacute;wnego",
            "B3": "C. wyszukania znaku ~ w zapisanych danych",
            "P": "D. przej\u015bcia do katalogu domowego u\u017cytkownika"
        },
        {
            "Pytanie": "Program testuj\u0105cy wydajno\u015b\u0107 sprz\u0119tu komputerowego to",
            "IMG": "",
            "B1": "A. checkdisk",
            "B2": "C. exploit",
            "B3": "D. sniffer",
            "P": "B. benchmark"
        },
        {
            "Pytanie": "Je\u015bli u\u017cytkownik wybierze pozycj\u0119 wskazan\u0105 strza\u0142k\u0105, b\u0119dzie m&oacute;g\u0142 zainstalowa\u0107 aktualizacje",
            "IMG": "https://egzamin-informatyk.pl/e12/928.jpg",
            "B1": "A. usuwaj\u0105ce usterk\u0119 krytyczn\u0105, niezwi\u0105zan\u0105 z zabezpieczeniami",
            "B2": "C. dotycz\u0105ce luk w zabezpieczeniach o priorytecie krytycznym",
            "B3": "D. powoduj\u0105ce uaktualnienie Windows 8.1 do systemu Windows 10",
            "P": "B. dotycz\u0105ce sterownik&oacute;w lub nowego oprogramowania firmy Microsoft"
        },
        {
            "Pytanie": "W systemie Linux polecenie chmod 321 start spowoduje nadanie nast\u0119puj\u0105cych uprawnie\u0144 plikowi start:",
            "IMG": "",
            "B1": "B. zapis, odczyt i wykonanie dla u\u017cytkownika root, odczyt i wykonanie dla u\u017cytkownika standardowego, odczyt dla pozosta\u0142ych",
            "B2": "C. pe\u0142na kontrola dla u\u017cytkownika root, zapis i odczyt dla u\u017cytkownika standardowego, odczyt dla pozosta\u0142ych",
            "B3": "D. czytanie, zapis i wykonanie dla w\u0142a\u015bciciela pliku, zapis i wykonanie dla grupy i czytanie dla pozosta\u0142ych",
            "P": "A. wykonanie i zapis dla w\u0142a\u015bciciela pliku, zapis dla grupy, wykonanie dla pozosta\u0142ych"
        },
        {
            "Pytanie": "W drukarce laserowej do utrwalania wydruku na papierze s\u0142u\u017c\u0105",
            "IMG": "",
            "B1": "A. g\u0142owice piezoelektryczne",
            "B2": "B. b\u0119ben transferowy",
            "B3": "C. promienie lasera",
            "P": "D. rozgrzane wa\u0142ki"
        },
        {
            "Pytanie": "Napi\u0119cie dostarczane do poszczeg&oacute;lnych element&oacute;w komputera w zasilaczu komputerowym w standardzie ATX jest zmniejszane z warto\u015bci 230 V mi\u0119dzy innymi do warto\u015bci",
            "IMG": "",
            "B1": "A. 20 V",
            "B2": "C. 130 V",
            "B3": "D. 4 V",
            "P": "B. 12 V"
        },
        {
            "Pytanie": "Kt&oacute;ry z wymienionych protoko\u0142&oacute;w odwzorowuje 48-bitowy fizyczny adres MAC na 32-bitowy adres IP?",
            "IMG": "",
            "B1": "B. ARP",
            "B2": "C. TCP",
            "B3": "D. IP",
            "P": "A. RARP"
        },
        {
            "Pytanie": "Interfejs USB 3.0 umo\u017cliwia transfer danych z pr\u0119dko\u015bci\u0105 do",
            "IMG": "",
            "B1": "A. 400 Mb/s",
            "B2": "B. 120 MB/s",
            "B3": "C. 4 GB/s",
            "P": "D. 5 Gb/s"
        },
        {
            "Pytanie": "Zrzut ekranu przedstawia program",
            "IMG": "https://egzamin-informatyk.pl/e12/655.jpg",
            "B1": "A. antyspamowy",
            "B2": "B. typu recovery",
            "B3": "D. antywirusowy",
            "P": "C. typu firewall"
        },
        {
            "Pytanie": "W systemie Windows u\u017cycie prezentowanego polecenia spowoduje tymczasow\u0105 zmian\u0119 koloru",
            "IMG": "https://egzamin-informatyk.pl/e12/848.jpg",
            "B1": "A. t\u0142a i czcionki okna Windows",
            "B2": "B. paska nazwy okna Windows",
            "B3": "C. t\u0142a okna wiersza polece\u0144",
            "P": "D. czcionki wiersza polece\u0144"
        },
        {
            "Pytanie": "Do wy\u015bwietlania zawarto\u015bci katalogu w systemie Linux s\u0142u\u017cy polecenie:",
            "IMG": "",
            "B1": "B. pwd",
            "B2": "C. rpm",
            "B3": "D. cd",
            "P": "A. ls"
        },
        {
            "Pytanie": "Serwerem DNS w systemie Linux jest",
            "IMG": "",
            "B1": "A. APACHE",
            "B2": "C. ProFTPD",
            "B3": "D. CUPS",
            "P": "B. BIND"
        },
        {
            "Pytanie": "Architektura fizyczna sieci, zwana inaczej topologi\u0105 fizyczn\u0105 sieci komputerowych okre\u015bla",
            "IMG": "",
            "B1": "A. przekaz informacji pomi\u0119dzy protoko\u0142ami sieciowymi modelu OSI",
            "B2": "B. standardy komunikacyjne sieci komputerowych",
            "B3": "D. wzajemn\u0105 komunikacj\u0119 komputer&oacute;w pomi\u0119dzy sob\u0105",
            "P": "C. spos&oacute;b po\u0142\u0105czenia ze sob\u0105 komputer&oacute;w"
        },
        {
            "Pytanie": "Kt&oacute;ry z profili u\u017cytkownika ulega zmianie i jest przechowywany na serwerze dla klienta pracuj\u0105cego w sieci Windows?",
            "IMG": "",
            "B1": "A. Lokalny",
            "B2": "B. Tymczasowy",
            "B3": "D. Obowi\u0105zkowy",
            "P": "C. Mobilny"
        },
        {
            "Pytanie": "Kt&oacute;ry zapis w systemie binarnym odpowiada liczbie 91 zapisanej w systemie szesnastkowym?",
            "IMG": "",
            "B1": "A. 10001011",
            "B2": "B. 10011001",
            "B3": "C. 10001001",
            "P": "D. 10010001"
        },
        {
            "Pytanie": "Warto\u015b\u0107 najstarszych trzech bit&oacute;w adresu IP w systemie binarnym wynosi 010. Jest to adres",
            "IMG": "",
            "B1": "A. klasy C",
            "B2": "C. klasy B",
            "B3": "D. klasy D",
            "P": "B. klasy A"
        },
        {
            "Pytanie": "Kt&oacute;re stwierdzenie NIE dotyczy pami\u0119ci typu cache L1?",
            "IMG": "",
            "B1": "A. Szybko\u015b\u0107 jej pracy jest r&oacute;wna cz\u0119stotliwo\u015bci pracy procesora",
            "B2": "B. Jest pami\u0119ci\u0105 typu SRAM",
            "B3": "D. Jest zlokalizowana we wn\u0119trzu procesora",
            "P": "C. Ma d\u0142u\u017cszy czas dost\u0119pu ni\u017c pami\u0119\u0107 RAM"
        },
        {
            "Pytanie": "Przedstawiona na zdj\u0119ciu wtyczka jest cz\u0119\u015bci\u0105 obwodu elektrycznego zasilaj\u0105cego",
            "IMG": "https://egzamin-informatyk.pl/e12/508.jpg",
            "B1": "B. stacj\u0119 dyskietek",
            "B2": "C. nap\u0119dy CD-ROM",
            "B3": "D. dyski wewn\u0119trzne SATA",
            "P": "A. procesor ATX12V"
        },
        {
            "Pytanie": "Komputer ma adres IP 192.168.0.1, maska podsieci to 255.255.255.0. Kt&oacute;ry adres jest adresem rozg\u0142oszeniowym podsieci, do kt&oacute;rej nale\u017cy ten komputer?",
            "IMG": "",
            "B1": "A. 192.168.0.127",
            "B2": "B. 192.168.0.63",
            "B3": "D. 192.168.0.31",
            "P": "C. 192.168.0.255"
        },
        {
            "Pytanie": "Protoko\u0142em po\u0142\u0105czeniowym warstwy transportowej zapewniaj\u0105cym niezawodno\u015b\u0107 w dostarczaniu pakiet&oacute;w jest protok&oacute;\u0142",
            "IMG": "",
            "B1": "A. ARP (A ddress Resolution Protocol)",
            "B2": "B. IP (Internet Protocol)",
            "B3": "C. UDP (User Datagram Protocol)",
            "P": "D. TCP (Transmission Control Protocol)"
        },
        {
            "Pytanie": "Rysunek przedstawia wej\u015bcie typu",
            "IMG": "https://egzamin-informatyk.pl/old/456.jpg",
            "B1": "A. FireWire",
            "B2": "B. USB",
            "B3": "C. LPT",
            "P": "D. COM"
        },
        {
            "Pytanie": "W kt&oacute;rym typie macierzy, przestrze\u0144 wszystkich dysk&oacute;w fizycznych jest widziana jako jeden dysk logiczny?",
            "IMG": "",
            "B1": "A. RAID 2",
            "B2": "B. RAID 5",
            "B3": "D. RAID 1",
            "P": "C. RAID 0"
        },
        {
            "Pytanie": "Opisana technologia stosowana w systemach rodziny Windows to ",
            "IMG": "https://egzamin-informatyk.pl/e12/542.jpg",
            "B1": "B. File Allocation Table",
            "B2": "C. Hardware Abstraction Layer",
            "B3": "D. Wywo\u0142anie systemowe",
            "P": "A. Plug and Play"
        },
        {
            "Pytanie": "Kt&oacute;re urz\u0105dzenie aktywne umo\u017cliwi po\u0142\u0105czenie z siec\u0105 lokaln\u0105 za pomoc\u0105 kabla UTP 15 komputer&oacute;w, drukarki sieciowej oraz rutera?",
            "IMG": "",
            "B1": "A. Panel krosowniczy 16-portowy",
            "B2": "C. Prze\u0142\u0105cznik 16-portowy",
            "B3": "D. Panel krosowniczy 24-portowy",
            "P": "B. Prze\u0142\u0105cznik 24-portowy"
        },
        {
            "Pytanie": "Manager bootowania, kt&oacute;ry pozwala na wyb&oacute;r systemu operacyjnego Linux do uruchomienia to",
            "IMG": "",
            "B1": "A. Boot Magic",
            "B2": "B. Ranish Partition Manager",
            "B3": "D. Smart Boot Manager",
            "P": "C. Grub"
        },
        {
            "Pytanie": "W zasadach hase\u0142 w systemie Windows Server jest w\u0142\u0105czona opcja has\u0142o musi spe\u0142nia\u0107 wymagania co do z\u0142o\u017cono\u015bci. Z co najmniej ilu znak&oacute;w musi si\u0119 sk\u0142ada\u0107 has\u0142o u\u017cytkownika?",
            "IMG": "",
            "B1": "B. 5 znak&oacute;w",
            "B2": "C. 12 znak&oacute;w",
            "B3": "D. 10 znak&oacute;w",
            "P": "A. 6 znak&oacute;w"
        },
        {
            "Pytanie": "Podczas pracy z drukark\u0105 laserow\u0105 blade wydruki lub nier&oacute;wnomierne nanoszenie medium drukuj\u0105cego mog\u0105 \u015bwiadczy\u0107 o",
            "IMG": "",
            "B1": "A. zgi\u0119ciu kartki papieru wewn\u0105trz urz\u0105dzenia.",
            "B2": "C. uszkodzeniu przewodu \u0142\u0105cz\u0105cego drukark\u0119 z komputerem",
            "B3": "D. b\u0142\u0119dnie zainstalowanych sterownikach drukarki",
            "P": "B. wyczerpywaniu si\u0119 tonera"
        },
        {
            "Pytanie": "Serwisant wykona\u0142 w ramach zlecenia czynno\u015bci wymienione w tabeli. Koszt zlecenia obejmuje cen\u0119 us\u0142ug\nzawartych w tabeli oraz koszt pracy serwisanta, kt&oacute;rego stawka godzinowa wynosi 60,00 z\u0142 netto. Ustal ca\u0142kowity koszt zlecenia brutto. Stawka podatku VAT na us\u0142ugi wynosi 23%.",
            "IMG": "https://egzamin-informatyk.pl/ee08/1598.png",
            "B1": "A. 436,80 z\u0142",
            "B2": "C. 455,20 z\u0142",
            "B3": "D. 400,00 z\u0142",
            "P": "B. 492,00 z\u0142"
        },
        {
            "Pytanie": "Przy uruchamianiu komputera pojawia si\u0119 komunikat &quot;CMOS checksum error press F1 to continue press DEL to setup&quot;. Wci\u015bni\u0119cie klawisza DEL spowoduje",
            "IMG": "",
            "B1": "A. przej\u015bcie do konfiguracji systemu Windows",
            "B2": "B. usuni\u0119cie pliku setup",
            "B3": "C. skanowanie zawarto\u015bci pami\u0119ci CMOS",
            "P": "D. wej\u015bcie do BIOS-u komputera"
        },
        {
            "Pytanie": "Do naprawy uszkodzenia sektora rozruchowego dysku w systemie Windows 7 nale\u017cy wykorzysta\u0107 polecenie",
            "IMG": "",
            "B1": "A. fixboot /renew",
            "B2": "B. fixmbr /all",
            "B3": "D. nircmd /standby",
            "P": "C. bootrec /fixmbr"
        },
        {
            "Pytanie": "Aby odzyska\u0107 utracone dane w systemach rodziny Windows, nale\u017cy zastosowa\u0107 polecenie",
            "IMG": "",
            "B1": "A. reboot",
            "B2": "C. relase",
            "B3": "D. renew",
            "P": "B. recover"
        },
        {
            "Pytanie": "W systemie Linux do monitorowania w czasie rzeczywistym uruchomionych proces&oacute;w s\u0142u\u017cy polecenie:",
            "IMG": "",
            "B1": "A. sysinfo",
            "B2": "B. sed",
            "B3": "C. proc",
            "P": "D. ps"
        },
        {
            "Pytanie": "Liczbie 16 bitowej 0011110010101110 zapisanej w systemie dw&oacute;jkowym odpowiada w systemie szesnastkowym liczba",
            "IMG": "",
            "B1": "A. 3DAE",
            "B2": "B. 3CBE",
            "B3": "C. 3DFE",
            "P": "D. 3CAE"
        },
        {
            "Pytanie": "Akronim okre\u015blaj\u0105cy us\u0142ugi, kt&oacute;rych zadaniem jest mi\u0119dzy innymi nadawanie priorytetu przesy\u0142anym pakietom oraz kszta\u0142towanie przepustowo\u015bci w sieci, to",
            "IMG": "",
            "B1": "A. PoE",
            "B2": "B. ARP",
            "B3": "C. STP",
            "P": "D. QoS"
        },
        {
            "Pytanie": "Protok&oacute;\u0142 pocztowy, za pomoc\u0105 kt&oacute;rego mo\u017cemy odbiera\u0107 poczt\u0119 z serwera, to",
            "IMG": "",
            "B1": "A. FTP",
            "B2": "B. HTTP",
            "B3": "C. SMTP",
            "P": "D. POP3"
        },
        {
            "Pytanie": "W strategii archiwizacji danych zwanej Dziadek &ndash; Ojciec &ndash; Syn na poziomie Dziadek wykonuje si\u0119 kopi\u0119 danych na koniec",
            "IMG": "",
            "B1": "A. roku",
            "B2": "B. tygodnia",
            "B3": "C. dnia",
            "P": "D. miesi\u0105ca"
        },
        {
            "Pytanie": "W sieci Ethernet 100BaseTX dla transmisji danych wykorzystywane s\u0105 \u017cy\u0142y kabla UTP do\u0142\u0105czone do pin&oacute;w",
            "IMG": "https://egzamin-informatyk.pl/e13/118.jpg",
            "B1": "A. 4, 5, 6, 7",
            "B2": "C. 1, 2, 3, 4",
            "B3": "D. 1, 2, 5, 6",
            "P": "B. 1, 2, 3, 6"
        },
        {
            "Pytanie": "Ile jest adres&oacute;w IP dost\u0119pnych do adresowania komputer&oacute;w w sieci o adresie 192.168.100.0 i masce 255.255.255.0?",
            "IMG": "",
            "B1": "A. 256",
            "B2": "C. 253",
            "B3": "D. 255",
            "P": "B. 254"
        },
        {
            "Pytanie": "W systemie Linux polecenie chown umo\u017cliwia",
            "IMG": "",
            "B1": "B. napraw\u0119 systemu plik&oacute;w",
            "B2": "C. przeniesienie pliku",
            "B3": "D. zmian\u0119 parametr&oacute;w pliku",
            "P": "A. zmian\u0119 w\u0142a\u015bciciela pliku"
        },
        {
            "Pytanie": "U\u017cytkownik Go\u015b\u0107 nale\u017cy do grupy Go\u015bcie. Grupa Go\u015bcie nale\u017cy do grupy Wszyscy. Wska\u017c uprawnienia udzia\u0142u u\u017cytkownika Go\u015b\u0107 do folderu test1:",
            "IMG": "https://egzamin-informatyk.pl/e13/315.jpg",
            "B1": "A. u\u017cytkownik Go\u015b\u0107 posiada pe\u0142ne uprawnienia do folderu test1",
            "B2": "B. u\u017cytkownik Go\u015b\u0107 posiada uprawnienia tylko zapisu do folderu test1",
            "B3": "D. u\u017cytkownik Go\u015b\u0107 posiada uprawnienia tylko odczytu do folderu test1",
            "P": "C. u\u017cytkownik Go\u015b\u0107 nie posiada uprawnie\u0144 do folderu test1"
        },
        {
            "Pytanie": "Jak\u0105 nazw\u0119 nosi identyfikator, kt&oacute;ry musi by\u0107 identyczny, aby urz\u0105dzenia sieciowe mog\u0142y pracowa\u0107 w danej sieci bezprzewodowej?\n",
            "IMG": "",
            "B1": "A. IP",
            "B2": "B. URL",
            "B3": "D. MAC",
            "P": "C. SSID"
        },
        {
            "Pytanie": "Programem nie s\u0142u\u017c\u0105cym do diagnostyki podzespo\u0142&oacute;w komputera jest",
            "IMG": "",
            "B1": "A. HD Tune",
            "B2": "B. CPU-Z",
            "B3": "D. Everest",
            "P": "C. Cryptic Disk"
        },
        {
            "Pytanie": "G\u0142&oacute;wnym zadaniem prze\u0142\u0105cznika /renew komendy ipconfig w systemie rodziny Windows jest",
            "IMG": "",
            "B1": "A. wy\u015bwietlanie informacji o adresie MAC karty sieciowej.",
            "B2": "B. \u017c\u0105danie odpowiedzi z podanego IP w celu zdiagnozowania po\u0142\u0105czenia sieciowego.",
            "B3": "C. wy\u015bwietlanie informacji o adresie IP.",
            "P": "D. odnowienie dynamicznego adresu IP przez komunikacj\u0119 z serwerem DHCP."
        },
        {
            "Pytanie": "Administrator musi podzieli\u0107 sie\u0107 o adresie 193.115.95.0 z mask\u0105 255.255.255.0 na 8 podsieci o takiej samej liczbie adres&oacute;w. Kt&oacute;r\u0105 mask\u0119 sieci powinien zastosowa\u0107 administrator?",
            "IMG": "",
            "B1": "B. 255.255.255.248",
            "B2": "C. 255.255.255.192",
            "B3": "D. 255.255.255.240",
            "P": "A. 255.255.255.224"
        },
        {
            "Pytanie": "W systemie Windows wymagania co do z\u0142o\u017cono\u015bci has\u0142a nale\u017cy okre\u015bli\u0107 w",
            "IMG": "",
            "B1": "A. panelu sterowania",
            "B2": "C. BIOS-ie",
            "B3": "D. autostarcie",
            "P": "B. zasadach zabezpiecze\u0144 lokalnych"
        },
        {
            "Pytanie": "Zbi&oacute;r us\u0142ug internetowych dla system&oacute;w rodziny Microsoft Windows jest oznaczony skr&oacute;tem",
            "IMG": "",
            "B1": "A. FTPS",
            "B2": "C. HTTPS",
            "B3": "D. HTTP",
            "P": "B. IIS"
        },
        {
            "Pytanie": "Us\u0142uga Windows XP Professional &quot;Mostek sieciowy&quot; pozwala na \u0142\u0105czenie ze sob\u0105",
            "IMG": "",
            "B1": "B. roboczych stacji bezdyskowych",
            "B2": "C. klienta z serwerem",
            "B3": "D. dw&oacute;ch komputer&oacute;w",
            "P": "A. segment&oacute;w sieci LAN"
        },
        {
            "Pytanie": "Do zako\u0144czenia skr\u0119tki wtykiem 8P8C jest stosowane",
            "IMG": "",
            "B1": "A. zaciskarka do z\u0142\u0105czy typu F",
            "B2": "B. narz\u0119dzie uderzeniowe",
            "B3": "C. spawarka \u015bwiat\u0142owodowa",
            "P": "D. zaciskarka wtyk&oacute;w RJ-45"
        },
        {
            "Pytanie": "Cech\u0105 charakterystyczn\u0105 wirus&oacute;w polimorficznych jest to, \u017ce",
            "IMG": "",
            "B1": "A. atakuj\u0105 rekord startowy dysku",
            "B2": "B. zara\u017caj\u0105 wszystkie komputery w sieci lokalnej",
            "B3": "C. atakuj\u0105 tablic\u0119 FAT",
            "P": "D. maj\u0105 cech\u0119 polegaj\u0105c\u0105 na modyfikowaniu swojego kodu"
        },
        {
            "Pytanie": "Kt&oacute;rej funkcji nale\u017cy u\u017cy\u0107 do wykonania kopii zapasowej rejestru systemowego w edytorze regedit?",
            "IMG": "",
            "B1": "A. Za\u0142aduj ga\u0142\u0105\u017a rejestru",
            "B2": "B. Kopiuj nazw\u0119 klucza",
            "B3": "C. Importuj",
            "P": "D. Eksportuj"
        },
        {
            "Pytanie": "Wykonanie polecenia net use Z:192.168.20.2data /delete spowoduje",
            "IMG": "",
            "B1": "B. przy\u0142\u0105czenie zasob&oacute;w hosta 192.168.20.2 do dysku Z:",
            "B2": "C. przy\u0142\u0105czenie katalogu data do dysku Z:",
            "B3": "D. od\u0142\u0105czenie zasob&oacute;w hosta 192.168.20.2 od dysku Z:",
            "P": "A. od\u0142\u0105czenie katalogu data od dysku Z:"
        },
        {
            "Pytanie": "Komputer wyposa\u017cono w p\u0142yt\u0119 g\u0142&oacute;wn\u0105 przedstawion\u0105 na rysunku. Aby zwi\u0119kszy\u0107 moc obliczeniow\u0105 komputera zaleca si\u0119",
            "IMG": "https://egzamin-informatyk.pl/e12/645.jpg",
            "B1": "A. instalacj\u0119 dysku SAS",
            "B2": "B. instalacj\u0119 kontrolera RAID",
            "B3": "D. zwi\u0119kszy\u0107 pami\u0119ci operacyjne",
            "P": "C. zainstalowanie dw&oacute;ch procesor&oacute;w"
        },
        {
            "Pytanie": "Po\u0142\u0105czenie mi\u0119dzy oddzielnymi sieciami i kontrol\u0119 przep\u0142ywu informacji mi\u0119dzy nimi realizuje urz\u0105dzenie warstwy dystrybucji nazywane",
            "IMG": "",
            "B1": "B. serwerem",
            "B2": "C. prze\u0142\u0105cznikiem",
            "B3": "D. koncentratorem",
            "P": "A. routerem"
        },
        {
            "Pytanie": "Kt&oacute;ry z element&oacute;w oznaczonych numerami od 1 do 4, przedstawionych na schemacie blokowym frame grabbera i opisanym we fragmencie dokumentacji technicznej, s\u0142u\u017cy do wymiany danych z innymi urz\u0105dzeniami przetwarzaj\u0105cymi obraz wideo bez niepotrzebnego obci\u0105\u017cania magistrali PCI?",
            "IMG": "https://egzamin-informatyk.pl/old/716.jpg",
            "B1": "A. 3",
            "B2": "B. 1",
            "B3": "D. 4",
            "P": "C. 2"
        },
        {
            "Pytanie": "Fragment pliku httpd.conf serwera Apache ma posta\u0107 jak na rysunku. Aby sprawdzi\u0107 poprawne dzia\u0142anie strony WWW na serwerze, nale\u017cy w przegl\u0105darce wpisa\u0107",
            "IMG": "https://egzamin-informatyk.pl/e13/805.jpg",
            "B1": "A. http://localhost:apache",
            "B2": "B. http://localhost:8080",
            "B3": "D. http://localhost",
            "P": "C. http://localhost:8012"
        },
        {
            "Pytanie": "W systemie Windows ochrona polegaj\u0105ca na ostrzeganiu przed uruchomieniem nierozpoznanych aplikacji i plik&oacute;w pobranych z Internetu jest realizowana przez",
            "IMG": "",
            "B1": "B. Windows Ink",
            "B2": "C. Windows Update",
            "B3": "D. zapor\u0119 systemu Windows",
            "P": "A. Windows SmartScreen"
        },
        {
            "Pytanie": "W kt&oacute;rej technologii budowy projektor&oacute;w wykorzystywany jest system mikroskopijnych luster, z kt&oacute;rych ka\u017cde odpowiada 1 pikselowi wy\u015bwietlanego obrazu?",
            "IMG": "",
            "B1": "A. LCOS",
            "B2": "B. LCD",
            "B3": "D. LED",
            "P": "C. DLP"
        },
        {
            "Pytanie": "Rysunek przedstawia pami\u0119\u0107",
            "IMG": "https://egzamin-informatyk.pl/old/3.jpg",
            "B1": "A. Compact Flash",
            "B2": "B. DDR DIMM",
            "B3": "C. SIMM",
            "P": "D. SDRAM DIMM"
        },
        {
            "Pytanie": "Przedstawiona na rysunku usterka, widoczna na ekranie komputera, nie mo\u017ce by\u0107 spowodowana przez",
            "IMG": "https://egzamin-informatyk.pl/e12/794.jpg",
            "B1": "A. przegrzewanie si\u0119 karty graficznej",
            "B2": "B. z\u0142e napi\u0119cia podawane przez zasilacz",
            "B3": "C. spalenie rdzenia lub pami\u0119ci karty graficznej po overclockingu",
            "P": "D. uszkodzenie modu\u0142&oacute;w pami\u0119ci operacyjnej"
        },
        {
            "Pytanie": "Na rysunku przedstawiono schemat blokowy karty",
            "IMG": "https://egzamin-informatyk.pl/ee08/1890.jpg",
            "B1": "A. d\u017awi\u0119kowej",
            "B2": "B. sieciowej",
            "B3": "C. graficznej",
            "P": "D. telewizyjnej"
        },
        {
            "Pytanie": "Kt&oacute;r\u0105 mask\u0119 sieci nale\u017cy zastosowa\u0107 dla sieci nr 1 i sieci nr 2, aby urz\u0105dzenia o przedstawionych adresach mog\u0142y si\u0119 komunikowa\u0107 w swoich sieciach?",
            "IMG": "https://egzamin-informatyk.pl/e13/753.jpg",
            "B1": "A. 255.255.255.240",
            "B2": "C. 255.255.240.0",
            "B3": "D. 255.255.255.128",
            "P": "B. 255.255.128.0"
        },
        {
            "Pytanie": "R&oacute;wnowa\u017cnym zapisem 2^32 bajt&oacute;w jest zapis:",
            "IMG": "",
            "B1": "A. 2 GB",
            "B2": "B. 1 GiB",
            "B3": "D. 8 GB",
            "P": "C. 4 GiB"
        },
        {
            "Pytanie": "Jednym z zalece\u0144 dotycz\u0105cych ochrony antywirusowej jest skanowanie ca\u0142ego komputera.\nZgodnie z tym zaleceniem komputer nale\u017cy skanowa\u0107",
            "IMG": "",
            "B1": "A. tylko wtedy, gdy nie dzia\u0142a w systemie monitor antywirusowy",
            "B2": "C. jedynie w sytuacji, gdy podejrzewamy zainfekowanie wirusem",
            "B3": "D. jedynie po aktualizacji baz programu antywirusowego",
            "P": "B. systematycznie, na przyk\u0142ad raz w tygodniu"
        },
        {
            "Pytanie": "Kt&oacute;r\u0105 konfiguracj\u0119 sieciow\u0105 mo\u017ce mie\u0107 komputer nale\u017c\u0105cy do tej samej sieci LAN, co komputer o adresie 192.168.1.10/24?",
            "IMG": "",
            "B1": "B. 192.168.0.11 i 255.255.0.0",
            "B2": "C. 192.168.1.11 i 255.255.0.0",
            "B3": "D. 192.168.0.11 i 255.255.255.0",
            "P": "A. 192.168.1.11 i 255.255.255.0"
        },
        {
            "Pytanie": "Kt&oacute;ry ze standard&oacute;w Gigabit Ethernet umo\u017cliwia budow\u0119 segment&oacute;w sieci o d\u0142ugo\u015bci 550 m/5000 m\nz pr\u0119dko\u015bci\u0105 transmisji 1 Gb/s?",
            "IMG": "",
            "B1": "A. 1000Base-SX",
            "B2": "C. 1000Base-FX",
            "B3": "D. 1000Base-T",
            "P": "B. 1000Base-LX"
        },
        {
            "Pytanie": "Wska\u017c w\u0142a\u015bciw\u0105 kolejno\u015b\u0107 operacji przygotowuj\u0105cych nowy laptop do pracy.",
            "IMG": "",
            "B1": "B. Pod\u0142\u0105czenie zewn\u0119trznego zasilania sieciowego, w\u0142\u0105czenie laptopa, instalacja systemu operacyjnego, monta\u017c baterii, wy\u0142\u0105czenie laptopa po instalacji systemu operacyjnego",
            "B2": "C. Pod\u0142\u0105czenie zewn\u0119trznego zasilania sieciowego, w\u0142\u0105czenie laptopa, monta\u017c baterii, instalacja systemu operacyjnego, wy\u0142\u0105czenie laptopa po instalacji systemu operacyjnego",
            "B3": "D. W\u0142\u0105czenie laptopa, monta\u017c baterii, instalacja systemu operacyjnego, pod\u0142\u0105czenie zewn\u0119trznego zasilania sieciowego, wy\u0142\u0105czenie laptopa po instalacji systemu operacyjnego",
            "P": "A. Monta\u017c baterii, pod\u0142\u0105czenie zewn\u0119trznego zasilania sieciowego, w\u0142\u0105czenie laptopa, instalacja systemu operacyjnego, wy\u0142\u0105czenie laptopa po instalacji systemu operacyjnego\n"
        },
        {
            "Pytanie": "Instalowanie system&oacute;w Linux oraz Windows 7 przebiega\u0142o bez \u017cadnych utrudnie\u0144. Systemy zainstalowa\u0142y si\u0119 poprawnie z domy\u015blnymi ustawieniami. Na tym samym komputerze, przy identycznej konfiguracji, podczas instalowania systemu Windows XP wy\u015bwietlony zosta\u0142 komunikat o braku dysk&oacute;w twardych, co mo\u017ce \u015bwiadczy\u0107 o ",
            "IMG": "",
            "B1": "A. \u017ale ustawionym bootowaniu nap\u0119d&oacute;w.",
            "B2": "B. z\u0142ym u\u0142o\u017ceniu zworek w dysku twardym.",
            "B3": "C. uszkodzeniu logicznym dysku twardego.",
            "P": "D. braku sterownik&oacute;w."
        },
        {
            "Pytanie": "Do kt&oacute;rej klasy nale\u017cy przedstawiony w postaci binarnej adres IPv4 00101000 11000000 00000000 00000001?",
            "IMG": "",
            "B1": "B. Klasy D",
            "B2": "C. Klasy B",
            "B3": "D. Klasy C",
            "P": "A. Klasy A"
        },
        {
            "Pytanie": "Dynamiczne konfigurowanie parametr&oacute;w TCP/IP hosta na podstawie adresu MAC karty sieciowej jest zadaniem protoko\u0142u",
            "IMG": "",
            "B1": "A. FTP",
            "B2": "B. HTTP",
            "B3": "C. DNS",
            "P": "D. DHCP"
        },
        {
            "Pytanie": "Kt&oacute;ra funkcja prze\u0142\u0105cznika zarz\u0105dzalnego umo\u017cliwia \u0142\u0105czenie prze\u0142\u0105cznik&oacute;w r&oacute;wnocze\u015bnie kilkoma po\u0142\u0105czeniami fizycznymi w jedno po\u0142\u0105czenie logiczne w celu uzyskania wi\u0119kszej przepustowo\u015bci \u0142\u0105cza?",
            "IMG": "",
            "B1": "A. Zarz\u0105dzanie pasmem",
            "B2": "C. Port mirroring",
            "B3": "D. Port trunk",
            "P": "B. Agregacja \u0142\u0105czy"
        },
        {
            "Pytanie": "Okablowanie pionowe w sieci strukturalnej \u0142\u0105czy si\u0119",
            "IMG": "",
            "B1": "A. w g\u0142&oacute;wnym punkcie rozdzielczym z gniazdem abonenckim",
            "B2": "B. w gnie\u017adzie abonenckim",
            "B3": "C. w po\u015brednim punkcie rozdzielczym z gniazdem abonenckim",
            "P": "D. w g\u0142&oacute;wnym punkcie rozdzielczym w po\u015brednimi punktami rozdzielczymi"
        },
        {
            "Pytanie": "W systemie Linux dla uzyskania uprawnie\u0144 administratora nale\u017cy w oknie terminala u\u017cy\u0107 polecenia",
            "IMG": "",
            "B1": "B. uname -s",
            "B2": "C. $HOME",
            "B3": "D. df",
            "P": "A. su root"
        },
        {
            "Pytanie": "Odpowiednikiem Linuksowego programu fsck w systemach rodziny Windows jest program",
            "IMG": "",
            "B1": "B. erase",
            "B2": "C. icacls",
            "B3": "D. tasklist",
            "P": "A. chkdsk"
        },
        {
            "Pytanie": "Aby pod\u0142\u0105czy\u0107 kas\u0119 fiskaln\u0105 wyposa\u017con\u0105 w z\u0142\u0105cze komunikacyjne DB-9M do komputera stacjonarnego, nale\u017cy zastosowa\u0107 przew&oacute;d",
            "IMG": "",
            "B1": "A. DB-9F/M",
            "B2": "B. DB-9M/M",
            "B3": "C. DB-9M/F",
            "P": "D. DB-9F/F"
        },
        {
            "Pytanie": "Jak nale\u017cy wpisa\u0107 w formule arkusza kalkulacyjnego adres kom&oacute;rki B3, \u017ceby przy kopiowaniu tej formu\u0142y w dowolne miejsce arkusza adres kom&oacute;rki B3 pozosta\u0142 niezmieniony?",
            "IMG": "",
            "B1": "A. B$3",
            "B2": "C. $B3",
            "B3": "D. B3",
            "P": "B. $B$3"
        },
        {
            "Pytanie": "\u0141\u0105cze \u015bwiat\u0142owodowe wykorzystywane do transmisji danych w standardzie 10GBASE-SR mo\u017ce mie\u0107 d\u0142ugo\u015b\u0107 wynosz\u0105c\u0105 maksymalnie",
            "IMG": "",
            "B1": "A. 200 m",
            "B2": "B. 2 km",
            "B3": "D. 4 km",
            "P": "C. 400 m"
        },
        {
            "Pytanie": "Wyznaczanie optymalnej trasy dla po\u0142\u0105czenia sieciowego to",
            "IMG": "",
            "B1": "A. conntrack",
            "B2": "B. tracking",
            "B3": "D. sniffing",
            "P": "C. routing"
        },
        {
            "Pytanie": "Polecenie systemu Windows stosowane do sprawdzenia trasy, po kt&oacute;rej s\u0105 przesy\u0142ane pakiety w sieci, to ",
            "IMG": "",
            "B1": "A. ipconfig",
            "B2": "C. netstat",
            "B3": "D. route",
            "P": "B. tracert"
        },
        {
            "Pytanie": "Najwy\u017cszy poziom bezpiecze\u0144stwa sieci bezprzewodowej zapewni szyfrowanie",
            "IMG": "",
            "B1": "A. WEP",
            "B2": "B. ROT13",
            "B3": "D. WPA",
            "P": "C. WPA2"
        },
        {
            "Pytanie": "W systemie Windows przeprowadzenie analizy wp\u0142ywu uruchamianych program&oacute;w na wydajno\u015b\u0107 komputera jest mi\u0119dzy innymi mo\u017cliwe po u\u017cyciu polecenia",
            "IMG": "",
            "B1": "A. dfrgui.exe",
            "B2": "C. iscsicpl.exe",
            "B3": "D. taskschd.msc",
            "P": "B. perfmon.msc"
        },
        {
            "Pytanie": "Narz\u0119dzie iptables w systemie Linux s\u0142u\u017cy do",
            "IMG": "",
            "B1": "A. konfiguracji serwera pocztowego",
            "B2": "B. konfiguracji karty sieciowej",
            "B3": "C. konfiguracji zdalnego dost\u0119pu do serwera",
            "P": "D. konfiguracji zapory sieciowej"
        },
        {
            "Pytanie": "W systemach Windows w celu ustalenia, gdzie w sieci zatrzyma\u0142 si\u0119 pakiet u\u017cywa si\u0119 komendy",
            "IMG": "",
            "B1": "A. ipconfig",
            "B2": "C. ping",
            "B3": "D. nslookup",
            "P": "B. tracert"
        },
        {
            "Pytanie": "W jakiej fizycznej topologii uszkodzenie jednej stacji roboczej zatrzyma dzia\u0142anie ca\u0142ej sieci?",
            "IMG": "",
            "B1": "B. Drzewa",
            "B2": "C. Magistrali",
            "B3": "D. Siatki",
            "P": "A. Pier\u015bcienia"
        },
        {
            "Pytanie": "Urz\u0105dzenie ADSL s\u0142u\u017cy do uzyskania po\u0142\u0105czenia",
            "IMG": "",
            "B1": "B. satelitarnego",
            "B2": "C. cyfrowego symetrycznego",
            "B3": "D. radiowego",
            "P": "A. cyfrowego asymetrycznego"
        },
        {
            "Pytanie": "W systemie Windows XP do zmiany typu systemu plik&oacute;w z FAT32 na NTFS nale\u017cy wykorzysta\u0107 program\n",
            "IMG": "",
            "B1": "A. subst.exe",
            "B2": "B. attrib.exe",
            "B3": "D. replace.exe",
            "P": "C. convert.exe"
        },
        {
            "Pytanie": "Komunikat &quot;BIOS checksum error&quot; wy\u015bwietlany podczas uruchomienia komputera oznacza najcz\u0119\u015bciej",
            "IMG": "",
            "B1": "A. B\u0142\u0105d pami\u0119ci operacyjnej",
            "B2": "B. Brak no\u015bnika z systemem operacyjnym",
            "B3": "C. Uszkodzony wentylator procesora",
            "P": "D. Uszkodzon\u0105 lub roz\u0142adowan\u0105 bateri\u0119 na p\u0142ycie g\u0142&oacute;wnej"
        },
        {
            "Pytanie": "Program firewall stosuje si\u0119 w celu zabezpieczenia",
            "IMG": "",
            "B1": "A. systemu przed b\u0142\u0119dnymi programami",
            "B2": "C. dysku przed przepe\u0142nieniem",
            "B3": "D. procesora przed przeci\u0105\u017ceniem ze strony systemu",
            "P": "B. sieci LAN i system&oacute;w przed intruzami"
        },
        {
            "Pytanie": "Miar\u0105 podawan\u0105 w decybelach, b\u0119d\u0105c\u0105 r&oacute;\u017cnic\u0105 mocy sygna\u0142u przesy\u0142anego w parze zak\u0142&oacute;caj\u0105cej i sygna\u0142u wytworzonego w parze zak\u0142&oacute;canej jest",
            "IMG": "",
            "B1": "A. rezystancja p\u0119tli",
            "B2": "B. poziomu mocy wyj\u015bciowej",
            "B3": "D. przes\u0142uch zdalny",
            "P": "C. przes\u0142uch zbli\u017cny"
        },
        {
            "Pytanie": "Jeden d\u0142ugi i dwa kr&oacute;tkie sygna\u0142y d\u017awi\u0119kowe BIOS POST firmy AMI oraz AWARD oznaczaj\u0105 b\u0142\u0105d",
            "IMG": "",
            "B1": "B. zegara systemowego",
            "B2": "C. mikroprocesora",
            "B3": "D. karty sieciowej",
            "P": "A. karty graficznej"
        },
        {
            "Pytanie": "Brak odporno\u015bci na utrat\u0119 danych z uwagi na fizyczn\u0105 awari\u0119 jednego z dysk&oacute;w jest cech\u0105",
            "IMG": "",
            "B1": "A. RAID 1",
            "B2": "B. RAID 3",
            "B3": "D. RAID 2",
            "P": "C. RAID 0"
        },
        {
            "Pytanie": "Podczas normalnego dzia\u0142ania systemu operacyjnego w laptopie pojawi\u0142 si\u0119 komunikat o konieczno\u015bci formatowania wewn\u0119trznego dysku twardego. Wskazuje on na:",
            "IMG": "",
            "B1": "A. uszkodzon\u0105 pami\u0119\u0107 RAM",
            "B2": "C. b\u0142\u0119dy systemu operacyjnego spowodowane szkodliwym oprogramowaniem",
            "B3": "D. przegrzewanie si\u0119 procesora",
            "P": "B. niezainicjowany lub nieprzygotowany do pracy no\u015bnik"
        },
        {
            "Pytanie": "Do kt&oacute;rego wyprowadzenia nale\u017cy pod\u0142\u0105czy\u0107 g\u0142o\u015bniki aktywne w karcie d\u017awi\u0119kowej, kt&oacute;rej schemat funkcjonalny przedstawia rysunek?",
            "IMG": "https://egzamin-informatyk.pl/old/12.jpg",
            "B1": "A. Speaker out",
            "B2": "B. Line in",
            "B3": "D. Mic in",
            "P": "C. Line out"
        },
        {
            "Pytanie": "Standard Transport Layer Security (TLS) to rozwini\u0119cie protoko\u0142u",
            "IMG": "",
            "B1": "A. Network Terminal Protocol (telnet)",
            "B2": "B. Security Shell (SSH)",
            "B3": "D. Session Initiation Protocol (SIP)",
            "P": "C. Security Socket Layer (SSL)"
        },
        {
            "Pytanie": "Przedstawiony zestaw komputerowy jest niekompletny. Kt&oacute;ry element nie zosta\u0142 uwzgl\u0119dniony w tabeli, a jest niezb\u0119dny do prawid\u0142owego dzia\u0142ania zestawu i nale\u017cy go doda\u0107?",
            "IMG": "https://egzamin-informatyk.pl/e12/968.jpg",
            "B1": "A. Zasilacz",
            "B2": "B. Pami\u0119\u0107 RAM",
            "B3": "C. Karta graficzna",
            "P": "D. Wentylator procesora"
        },
        {
            "Pytanie": "Kt&oacute;ry zestaw protoko\u0142&oacute;w jest stosowany w procesie komunikacji hosta z serwerem WWW po wpisaniu adresu strony w przegl\u0105darce internetowej hosta?",
            "IMG": "",
            "B1": "A. HTTP, UDP, IP",
            "B2": "B. HTTP, ICMP, IP",
            "B3": "D. FTP, UDP, IP",
            "P": "C. HTTP, TCP, IP"
        },
        {
            "Pytanie": "Kt&oacute;rego kodu numerycznego nale\u017cy u\u017cy\u0107 w poleceniu zmiany uprawnie\u0144 do folderu w systemie Linux, aby w\u0142a\u015bciciel folderu mia\u0142 uprawnienia zapisu i odczytu, grupa mia\u0142a uprawnienia odczytu i wykonania, a pozostali u\u017cytkownicy tylko uprawnienia odczytu?",
            "IMG": "",
            "B1": "A. 751",
            "B2": "C. 765",
            "B3": "D. 123",
            "P": "B. 654"
        },
        {
            "Pytanie": "Kt&oacute;ra z topologii fizycznych sieci komputerowej jest przedstawiona na rysunku?",
            "IMG": "https://egzamin-informatyk.pl/e13/529.jpg",
            "B1": "A. Magistrali",
            "B2": "B. Gwiazdy rozszerzonej",
            "B3": "C. Siatki",
            "P": "D. Podw&oacute;jnego pier\u015bcienia"
        },
        {
            "Pytanie": "Norma EN 50167 dotyczy okablowania",
            "IMG": "",
            "B1": "B. pionowego",
            "B2": "C. szkieletowego",
            "B3": "D. kampusowego",
            "P": "A. poziomego"
        },
        {
            "Pytanie": "W dokumentacji powykonawczej fizycznej i logicznej struktury sieci lokalnej musi znajdowa\u0107 si\u0119",
            "IMG": "",
            "B1": "A. umowa zlecaj\u0105cego prac\u0119 z wykonawc\u0105",
            "B2": "B. wst\u0119pny kosztorys materia\u0142&oacute;w i robocizny",
            "B3": "C. harmonogram prac wykonawczych",
            "P": "D. schemat sieci z oznaczonymi punktami dystrybucyjnymi i gniazdami"
        },
        {
            "Pytanie": "Urz\u0105dzeniem stosowanym do przekszta\u0142cania otrzymanych ramek w sygna\u0142y, kt&oacute;re p&oacute;\u017aniej s\u0105 przesy\u0142ane w obr\u0119bie sieci komputerowej, jest",
            "IMG": "",
            "B1": "A. konwerter medi&oacute;w",
            "B2": "C. regenerator",
            "B3": "D. punkt dost\u0119pu",
            "P": "B. karta sieciowa"
        },
        {
            "Pytanie": "Protoko\u0142em sieciowym definiuj\u0105cym mechanizmy stosowane do zarz\u0105dzania urz\u0105dzeniami sieciowymi jest",
            "IMG": "",
            "B1": "B. Intenet Control Message Protocol (ICMP)",
            "B2": "C. Simple Mail Transfer Protocol (SMTP)",
            "B3": "D. Internet Group Management Protocol (IGMP)",
            "P": "A. Simple Network Management Protocol (SNMP)"
        },
        {
            "Pytanie": "Na podstawie oznaczenia pami\u0119ci DDR3 PC3-16000 mo\u017cna stwierdzi\u0107, \u017ce pami\u0119\u0107 ta:",
            "IMG": "",
            "B1": "A. ma przepustowo\u015b\u0107 160 GB/s",
            "B2": "C. pracuje z cz\u0119stotliwo\u015bci\u0105 16000 MHz",
            "B3": "D. pracuje z cz\u0119stotliwo\u015bci\u0105 160 MHz",
            "P": "B. ma przepustowo\u015b\u0107 16 GB/s"
        },
        {
            "Pytanie": "Do por&oacute;wnywania liczb binarnych s\u0142u\u017c\u0105",
            "IMG": "",
            "B1": "A. multipleksery",
            "B2": "B. sumatory",
            "B3": "C. demultipleksery",
            "P": "D. komparatory"
        },
        {
            "Pytanie": "W celu zwi\u0119kszenia niezawodno\u015bci oraz wydajno\u015bci transmisji danych na serwerze nale\u017cy",
            "IMG": "",
            "B1": "A. utworzy\u0107 punkt przywracania systemu",
            "B2": "B. przechowywa\u0107 dane na innym dysku ni\u017c systemowy",
            "B3": "C. skonfigurowa\u0107 automatyczne wykonywania kopii zapasowej",
            "P": "D. zainstalowa\u0107 macierz dyskow\u0105 RAID1"
        },
        {
            "Pytanie": "Administrator sieci LAN zauwa\u017cy\u0142 przej\u015bcie w tryb awaryjny urz\u0105dzenia typu UPS. \u015awiadczy to o awarii systemu",
            "IMG": "",
            "B1": "A. okablowania",
            "B2": "C. okablowania",
            "B3": "D. okablowania",
            "P": "B. zasilania"
        },
        {
            "Pytanie": "Na fotografii przedstawiono",
            "IMG": "https://egzamin-informatyk.pl/e12/312.jpg",
            "B1": "A. reflektometr",
            "B2": "B. tester sieciowy",
            "B3": "C. zaciskark\u0119 do tulejek",
            "P": "D. zaciskark\u0119 wtyk&oacute;w RJ45"
        },
        {
            "Pytanie": "Kt&oacute;re zadanie spe\u0142nia system informatyczny?",
            "IMG": "",
            "B1": "A. Kontrola pracy oprogramowania diagnostycznego",
            "B2": "C. Zabezpieczanie przed wirusami",
            "B3": "D. Sterowanie monitorem CRT",
            "P": "B. Przetwarzanie danych"
        },
        {
            "Pytanie": "Przedstawione parametry karty sieciowej wskazuj\u0105, \u017ce karta ",
            "IMG": "https://egzamin-informatyk.pl/e13/362.jpg",
            "B1": "A. pracuje w sieciach przewodowych w oparciu o gniazdo USB",
            "B2": "B. pracuje w standardzie c",
            "B3": "C. nie zapewnia szyfrowania danych",
            "P": "D. pracuje w sieciach bezprzewodowych"
        },
        {
            "Pytanie": "Planuj\u0105c wykorzystanie miejsca na dysku komputera do przechowywania i udost\u0119pniania takich informacji jak pliki i aplikacje dost\u0119pne w sieci oraz zarz\u0105dzania nimi, nale\u017cy skonfigurowa\u0107 komputer jako",
            "IMG": "",
            "B1": "A. serwer aplikacji",
            "B2": "B. serwer DHCP",
            "B3": "C. serwer terminali",
            "P": "D. serwer plik&oacute;w"
        },
        {
            "Pytanie": "B\u0142\u0119dy systemu operacyjnego Windows spowodowane przez konflikty zasob&oacute;w sprz\u0119towych, takie jak przydzia\u0142 pami\u0119ci, przydzia\u0142 przerwa\u0144 IRQ i kana\u0142&oacute;w DMA, naj\u0142atwiej jest wykry\u0107 za pomoc\u0105 narz\u0119dzia",
            "IMG": "",
            "B1": "A. chkdsk",
            "B2": "B. edytor rejestru",
            "B3": "D. przystawka Sprawd\u017a dysk",
            "P": "C. mened\u017cer urz\u0105dze\u0144"
        },
        {
            "Pytanie": "Aby poprawi\u0107 wydajno\u015b\u0107 komputera, mo\u017cna w nim zamontowa\u0107 procesor obs\u0142uguj\u0105cy technologi\u0119 Hyper-Threading, umo\u017cliwiaj\u0105c\u0105",
            "IMG": "",
            "B1": "B. zwi\u0119kszenie szybko\u015bci pracy zegara",
            "B2": "C. automatyczn\u0105 regulacj\u0119 cz\u0119stotliwo\u015bci rdzeni procesora w zale\u017cno\u015bci od jego obci\u0105\u017cenia",
            "B3": "D. wymian\u0119 danych pomi\u0119dzy procesorem a dyskiem twardym z pr\u0119dko\u015bci\u0105 pracy procesora",
            "P": "A. wykonywanie przez jeden rdze\u0144 procesora dw&oacute;ch niezale\u017cnych zada\u0144 jednocze\u015bnie"
        },
        {
            "Pytanie": "W\u0142\u0105czenie us\u0142ugi Udost\u0119pnienie po\u0142\u0105czenia internetowego w systemie Windows uruchamia automatyczne nadawanie adres&oacute;w IP dla komputer&oacute;w (host&oacute;w) z niej korzystaj\u0105cych. W tym celu wykorzystywana jest us\u0142uga",
            "IMG": "",
            "B1": "A. DNS",
            "B2": "B. WINS",
            "B3": "D. NFS",
            "P": "C. DHCP"
        },
        {
            "Pytanie": "Przy uruchamianiu komputera pojawia sie komunikat CMOS checksum error press F1 to continue press DEL to setup. Wci\u015bni\u0119cie klawisza DEL spowoduje",
            "IMG": "",
            "B1": "A. skasowanie zawarto\u015bci pami\u0119ci CMOS",
            "B2": "B. usuni\u0119cie pliku setup",
            "B3": "D. przej\u015bcie do konfiguracji systemu Windows",
            "P": "C. wej\u015bcie do BIOS-u komputera"
        },
        {
            "Pytanie": "Rysunek przedstawia topologi\u0119",
            "IMG": "https://egzamin-informatyk.pl/old/452.jpg",
            "B1": "A. siatki",
            "B2": "B. pier\u015bcienia",
            "B3": "C. magistrali",
            "P": "D. gwiazdy"
        },
        {
            "Pytanie": "Ile par przewod&oacute;w jest przeznaczonych w standardzie 100Base-TX do transmisji danych w obu kierunkach?",
            "IMG": "",
            "B1": "A. 8",
            "B2": "B. 4",
            "B3": "C. 1",
            "P": "D. 2"
        },
        {
            "Pytanie": "Kt&oacute;re stwierdzenie dotyczy sieci P2P - peer to peer?",
            "IMG": "",
            "B1": "A. Jest sieci\u0105 hierarchiczn\u0105 ",
            "B2": "B. Udost\u0119pnia wy\u0142\u0105cznie zasoby dyskowe",
            "B3": "C. Wymaga centralnego serwera z dedykowanym oprogramowaniem",
            "P": "D. Komputer w sieci mo\u017ce r&oacute;wnocze\u015bnie pe\u0142ni\u0107 rol\u0119 serwera i klienta"
        },
        {
            "Pytanie": "Parametrem okre\u015blaj\u0105cym o ile zmniejszy si\u0119 moc sygna\u0142u w danej parze przewod&oacute;w po przej\u015bciu przez ca\u0142y tor kablowy, jest",
            "IMG": "",
            "B1": "A. przenik zbli\u017cny",
            "B2": "C. przenik zdalny",
            "B3": "D. d\u0142ugo\u015b\u0107",
            "P": "B. t\u0142umienie"
        },
        {
            "Pytanie": "U\u017cytkownik Jan nie mo\u017ce zmieni\u0107 w\u0142a\u015bciciela drukarki w systemie Windows. Aby mia\u0142 tak\u0105 mo\u017cliwo\u015b\u0107, nale\u017cy przypisa\u0107 mu w opcjach zabezpiecze\u0144 prawo do",
            "IMG": "",
            "B1": "B. zarz\u0105dzania dokumentami",
            "B2": "C. zmiany uprawnie\u0144 drukowania",
            "B3": "D. zarz\u0105dzania drukarkami",
            "P": "A. uprawnie\u0144 specjalnych"
        },
        {
            "Pytanie": "Kt&oacute;ry standard sieci Ethernet nale\u017cy zastosowa\u0107 przy po\u0142\u0105czeniu bezpo\u015brednim urz\u0105dze\u0144 sieciowych oddalonych od siebie o 1 km?",
            "IMG": "",
            "B1": "A. 10GBase-T",
            "B2": "C. 10GBase-SR",
            "B3": "D. 1000Base-SX",
            "P": "B. 1000Base-LX"
        },
        {
            "Pytanie": "Monitor powinien spe\u0142nia\u0107 standard",
            "IMG": "",
            "B1": "A. TN GNS",
            "B2": "C. TCO Energy66.",
            "B3": "D. ISO-9N01",
            "P": "B. EPA Energy Star"
        },
        {
            "Pytanie": "Na komputerze pod\u0142\u0105czonym do Internetu, w programie antywirusowym baz\u0119 wirus&oacute;w nale\u017cy aktualizowa\u0107 co najmniej",
            "IMG": "",
            "B1": "A. raz w miesi\u0105cu",
            "B2": "B. raz w tygodniu",
            "B3": "D. raz do roku",
            "P": "C. raz dziennie"
        },
        {
            "Pytanie": "Standardem komunikacji pomi\u0119dzy skanerem a programem graficznym jest",
            "IMG": "",
            "B1": "A. SCAN",
            "B2": "B. USB",
            "B3": "D. OPC",
            "P": "C. TWAIN"
        },
        {
            "Pytanie": "Dziedziczenie uprawnie\u0144 polega na:",
            "IMG": "",
            "B1": "B. przekazywaniu uprawnie\u0144 jednego u\u017cytkownika drugiemu",
            "B2": "C. nadawaniu uprawnie\u0144 u\u017cytkownikowi przez administratora",
            "B3": "D. przeniesieniu uprawnie\u0144 z obiektu podrz\u0119dnego na obiekt nadrz\u0119dny",
            "P": "A. przeniesieniu uprawnie\u0144 z obiektu nadrz\u0119dnego na obiekt podrz\u0119dny"
        },
        {
            "Pytanie": "Aby zagwarantowa\u0107 u\u017cytkownikom Active Directory mo\u017cliwo\u015b\u0107 logowania si\u0119 i dost\u0119p do zasob&oacute;w tej us\u0142ugi w przypadku awarii kontrolera domeny, nale\u017cy",
            "IMG": "",
            "B1": "A. udost\u0119pni\u0107 wszystkim u\u017cytkownikom numer do Help Desk",
            "B2": "C. doda\u0107 wszystkich u\u017cytkownik&oacute;w do grupy administratorzy",
            "B3": "D. przekopiowa\u0107 wszystkie zasoby sieci na ka\u017cdy komputer w domenie",
            "P": "B. zainstalowa\u0107 drugi kontroler domeny"
        },
        {
            "Pytanie": "Tryb pracy portu r&oacute;wnoleg\u0142ego, bazuj\u0105cy na magistrali ISA, umo\u017cliwiaj\u0105cy transfer danych do 2.4 MB/s, dedykowany dla skaner&oacute;w i urz\u0105dze\u0144 wielofunkcyjnych, to",
            "IMG": "",
            "B1": "A. Nibble Mode",
            "B2": "B. Bi-directional",
            "B3": "C. SPP",
            "P": "D. ECP"
        },
        {
            "Pytanie": "Kt&oacute;re polecenie w systemie operacyjnym Linux jest stosowane do wy\u015bwietlania konfiguracji interfejs&oacute;w sieciowych?",
            "IMG": "",
            "B1": "A. ipconfig",
            "B2": "B. tracert",
            "B3": "C. ping",
            "P": "D. ifconfig"
        },
        {
            "Pytanie": "Kt&oacute;ry z adres&oacute;w IP jest adresem hosta pracuj\u0105cego w sieci o adresie 192.168.160.224/28?",
            "IMG": "",
            "B1": "A. 192.168.160.192",
            "B2": "B. 192.168.160.239",
            "B3": "D. 192.168.160.240",
            "P": "C. 192.168.160.225"
        },
        {
            "Pytanie": "Kt&oacute;remu zapisowi heksadecymalnemu odpowiada zapis binarny adresu kom&oacute;rki pami\u0119ci 0111 1100 1111 0110?",
            "IMG": "",
            "B1": "A. 5AF3",
            "B2": "C. 5DF6",
            "B3": "D. 7BF5",
            "P": "B. 7CF6"
        },
        {
            "Pytanie": "Co jest przyczyn\u0105 pojawienia si\u0119 na ekranie komputera komunikatu, \u017ce system wykry\u0142 konflikt adres&oacute;w IP?",
            "IMG": "",
            "B1": "A. W sieci lokalnej nie dzia\u0142a us\u0142uga DHCP",
            "B2": "C. W ustawieniach protoko\u0142u TCP/IP jest b\u0142\u0119dny adres bramy domy\u015blnej",
            "B3": "D. Adres IP komputera jest spoza zakresu adres&oacute;w sieci lokalnej",
            "P": "B. Inne urz\u0105dzenie sieciowe ma nadany ten sam adres IP co komputer"
        },
        {
            "Pytanie": "Licencja CAL (Client Access License) daje u\u017cytkownikowi prawo",
            "IMG": "",
            "B1": "B. zmiany kodu programu",
            "B2": "C. u\u017cywania programu bezterminowo",
            "B3": "D. kopiowania programu na no\u015bniki zewn\u0119trzne",
            "P": "A. korzystania z us\u0142ug udost\u0119pnionych przez serwer"
        },
        {
            "Pytanie": "Kt&oacute;ry rodzaj medium transmisyjnego jest okre\u015blany jako standard 100BaseTX i jaka jest uzyskiwana w nim maksymalna pr\u0119dko\u015b\u0107 transmisji danych?",
            "IMG": "",
            "B1": "B. \u015awiat\u0142ow&oacute;d wielomodowy o pr\u0119dko\u015bci transmisji do 100 Mb/s",
            "B2": "C. \u015awiat\u0142ow&oacute;d jednomodowy o pr\u0119dko\u015bci transmisji do 1000 Mb/s",
            "B3": "D. Kabel UTP kategorii 5e o pr\u0119dko\u015bci transmisji do 1000 Mb/s",
            "P": "A. Kabel UTP kategorii 5 o pr\u0119dko\u015bci transmisji do 100 Mb/s"
        },
        {
            "Pytanie": "Klaster komputerowy to",
            "IMG": "",
            "B1": "A. komputer zapasowy, na kt&oacute;rym co pewien czas wykonywana jest kopia systemu g\u0142&oacute;wnego",
            "B2": "C. komputer z macierz\u0105 dyskow\u0105",
            "B3": "D. komputer z wieloma procesorami",
            "P": "B. grupa komputer&oacute;w pracuj\u0105cych wsp&oacute;\u0142bie\u017cnie tak, jakby by\u0142 to jeden komputer"
        },
        {
            "Pytanie": "W systemie Linux has\u0142a u\u017cytkownik&oacute;w s\u0105 przechowywane w pliku:",
            "IMG": "",
            "B1": "B. groups",
            "B2": "C. password",
            "B3": "D. users",
            "P": "A. passwd"
        },
        {
            "Pytanie": "Kt&oacute;re polecenie jest wysy\u0142ane do serwera DHCP w celu zwolnienia z dzier\u017cawy wszystkich adres&oacute;w przypisanych do kart sieciowych?",
            "IMG": "",
            "B1": "A. ipconfig /flushdns",
            "B2": "B. ipconfig /displaydns",
            "B3": "C. ipconfig /renew",
            "P": "D. ipconfig /release"
        },
        {
            "Pytanie": "Do sprawdzania statystyk protoko\u0142&oacute;w TCP/IP oraz aktualnych po\u0142\u0105cze\u0144 sieciowych w systemach rodziny Windows jest stosowane polecenie",
            "IMG": "",
            "B1": "A. tracert",
            "B2": "B. route",
            "B3": "D. ping",
            "P": "C. netstat"
        },
        {
            "Pytanie": "Kt&oacute;ry protok&oacute;\u0142 umo\u017cliwia bezpieczne po\u0142\u0105czenie klienta z zachowaniem jego prywatno\u015bci ze stron\u0105 internetow\u0105 banku?",
            "IMG": "",
            "B1": "A. HTTP (Hypertext Transfer Protocol)",
            "B2": "C. FTPS (File Transfer Protocol Secure)",
            "B3": "D. SFTP (SSH File Transfer Protocol)",
            "P": "B. HTTPS (Hypertext Transfer Protocol Secure)"
        },
        {
            "Pytanie": "Kt&oacute;ry zestaw protoko\u0142&oacute;w jest charakterystyczny dla warstwy internetowej modelu TCP/IP?",
            "IMG": "",
            "B1": "A. DHCP, DNS",
            "B2": "B. HTTP, FTP",
            "B3": "C. TCP, UDP",
            "P": "D. IP, ICMP"
        },
        {
            "Pytanie": "Spo\u015br&oacute;d wymienionych p\u0142yt g\u0142&oacute;wnych najmniejsze rozmiary ma format",
            "IMG": "",
            "B1": "B. Micro BTX",
            "B2": "C. Mini ATX",
            "B3": "D. Flex ATX",
            "P": "A. Mini ITX"
        },
        {
            "Pytanie": "Jaki jest maksymalny rozmiar pojedynczego datagramu IPv4, kt&oacute;rego wielko\u015b\u0107 liczona jest wraz z jego nag\u0142&oacute;wkiem?",
            "IMG": "",
            "B1": "A. 128 kB",
            "B2": "B. 32 kB",
            "B3": "D. 256 kB",
            "P": "C. 64 kB"
        },
        {
            "Pytanie": "Liczba dziesi\u0119tna 512 w systemie binarnym ma posta\u0107",
            "IMG": "",
            "B1": "A. 1000000",
            "B2": "C. 100000",
            "B3": "D. 10000000",
            "P": "B. 1000000000"
        },
        {
            "Pytanie": "Diody elektroluminescencyjne RGB s\u0105 \u017ar&oacute;d\u0142em \u015bwiat\u0142a w skanerach",
            "IMG": "",
            "B1": "A. p\u0142askich CCD",
            "B2": "C. kod&oacute;w kreskowych",
            "B3": "D. b\u0119bnowych",
            "P": "B. p\u0142askich CIS"
        },
        {
            "Pytanie": "W sieci lokalnej protoko\u0142em dynamicznej konfiguracji adres&oacute;w IP jest ",
            "IMG": "",
            "B1": "B. TCP/IP",
            "B2": "C. DNS",
            "B3": "D. FTP",
            "P": "A. DHCP"
        },
        {
            "Pytanie": "Aby profil sta\u0142 si\u0119 obowi\u0105zkowym, nale\u017cy zmieni\u0107 rozszerzenie pliku ntuser.datna",
            "IMG": "https://egzamin-informatyk.pl/ee08/1926.jpg",
            "B1": "A. $ntuser.bat",
            "B2": "C. ntuser.sys",
            "B3": "D. $ntuser.exe",
            "P": "B. ntuser.man"
        },
        {
            "Pytanie": "Do wykonania monitoringu stanu dysk&oacute;w twardych w serwerach, komputerach stacjonarnych i laptopach mo\u017cna wykorzysta\u0107 program",
            "IMG": "",
            "B1": "A. Packet Tracer",
            "B2": "C. PRTG Network Monitor",
            "B3": "D. Super Pi",
            "P": "B. Acronis Drive Monitor"
        },
        {
            "Pytanie": "Liczba szesnastkowa: FFFF w systemie dw&oacute;jkowym ma posta\u0107",
            "IMG": "",
            "B1": "A. 0000 0000 0000 0000",
            "B2": "C. 1111 0000 0000 0111",
            "B3": "D. 0010 0000 0000 0111",
            "P": "B. 1111 1111 1111 1111"
        },
        {
            "Pytanie": "Protok&oacute;\u0142 RDP jest wykorzystywany w us\u0142udze",
            "IMG": "",
            "B1": "B. SCP w systemie Windows",
            "B2": "C. poczty elektronicznej w systemie Linux",
            "B3": "D. terminalowej w systemie Linux",
            "P": "A. pulpitu zdalnego w systemie Windows"
        },
        {
            "Pytanie": "Przedstawione w ramce parametry katalogowe dotycz\u0105 dysku twardego",
            "IMG": "https://egzamin-informatyk.pl/old/304.jpg",
            "B1": "A. z pami\u0119ci\u0105 cache 12 MB",
            "B2": "B. posiadaj\u0105cego 4 talerze",
            "B3": "C. o pojemno\u015bci dysku 32 MB",
            "P": "D. o maksymalnym transferze zewn\u0119trznym 300 MB/s"
        },
        {
            "Pytanie": "Adresy IPv6 s\u0105 liczbami",
            "IMG": "",
            "B1": "B. 32 bitowymi wyra\u017canymi w postaci napis&oacute;w binarnych",
            "B2": "C. 256 bitowymi wyra\u017canymi w postaci napis&oacute;w szesnastkowych",
            "B3": "D. 64 bitowymi wyra\u017canymi w postaci napis&oacute;w binarnych",
            "P": "A. 128 bitowymi wyra\u017canymi w postaci napis&oacute;w szesnastkowych"
        },
        {
            "Pytanie": "Aby zainstalowa\u0107 serwer proxy w systemie Linux, nale\u017cy zainstalowa\u0107 program",
            "IMG": "",
            "B1": "B. Postfix",
            "B2": "C. Samba",
            "B3": "D. Webmin",
            "P": "A. Squid"
        },
        {
            "Pytanie": "Kt&oacute;re polecenie wiersza polece\u0144 systemu operacyjnego Microsoft Windows Wy\u015bwietla informacje dotycz\u0105ce wszystkich zasob&oacute;w udost\u0119pnionych na komputerze lokalnym?",
            "IMG": "",
            "B1": "A. net session",
            "B2": "B. net file",
            "B3": "D. net print",
            "P": "C. net share"
        },
        {
            "Pytanie": "Pewn\u0105 liczb\u0119 naturaln\u0105 w systemie szesnastkowym zapisano nast\u0119puj\u0105co: 41. Wska\u017c t\u0119 liczb\u0119 zapisan\u0105 w systemie dziesi\u0119tnym",
            "IMG": "",
            "B1": "A. 91",
            "B2": "C. 81",
            "B3": "D. 75",
            "P": "B. 65"
        },
        {
            "Pytanie": "Protok&oacute;\u0142 odpowiedzialny za przesy\u0142anie dokument&oacute;w hipertekstowych to",
            "IMG": "",
            "B1": "B. FTP",
            "B2": "C. SMTP",
            "B3": "D. POP3",
            "P": "A. HTTP"
        },
        {
            "Pytanie": "Okablowanie pionowe w sieci strukturalnej \u0142\u0105czy",
            "IMG": "",
            "B1": "A. g\u0142&oacute;wny punkt rozdzielczy z gniazdem abonenckim",
            "B2": "B. po\u015bredni punkt rozdzielczy z gniazdem abonenckim",
            "B3": "C. dwa gniazda abonenckie",
            "P": "D. g\u0142&oacute;wny punkt rozdzielczy z po\u015brednimi punktami rozdzielczymi"
        },
        {
            "Pytanie": "Kt&oacute;ra z wymienionych cech kabla koncentrycznego RG-58 spowodowa\u0142a, \u017ce nie jest on obecnie wykorzystywany do budowy lokalnych sieci komputerowych?",
            "IMG": "",
            "B1": "A. Cena narz\u0119dzi do monta\u017cu i \u0142\u0105czenia przewod&oacute;w",
            "B2": "B. Brak mo\u017cliwo\u015bci zakupu dodatkowych urz\u0105dze\u0144 sieciowych",
            "B3": "C. Maksymalna odleg\u0142o\u015b\u0107 pomi\u0119dzy stacjami wynosz\u0105ca 185 m",
            "P": "D. Maksymalna pr\u0119dko\u015b\u0107 transmisji danych 10Mb/s"
        },
        {
            "Pytanie": "Aby umo\u017cliwi\u0107 wymian\u0119 danych pomi\u0119dzy dwoma r&oacute;\u017cnymi sieciami nale\u017cy zastosowa\u0107",
            "IMG": "",
            "B1": "A. koncentrator",
            "B2": "C. most",
            "B3": "D. prze\u0142\u0105cznik",
            "P": "B. router"
        },
        {
            "Pytanie": "Do jakiego rodzaju wtyk&oacute;w jest stosowana przedstawiona na rysunku zaciskarka?",
            "IMG": "https://egzamin-informatyk.pl/e13/627.jpg",
            "B1": "A. SC/PC",
            "B2": "C. RJ45",
            "B3": "D. E2000",
            "P": "B. BNC"
        },
        {
            "Pytanie": "Kt&oacute;ry rodzaj standardu zako\u0144czenia przewodu okablowania strukturalnego przedstawia rysunek?",
            "IMG": "https://egzamin-informatyk.pl/e13/412.jpg",
            "B1": "B. T568B",
            "B2": "C. EIA/TIA 607",
            "B3": "D. EIA/TIA 569",
            "P": "A. T568A"
        },
        {
            "Pytanie": "Kt&oacute;ra us\u0142uga, stworzona przez firm\u0119 Microsoft, umo\u017cliwia t\u0142umaczenie nazw komputer&oacute;w na adresy internetowe?",
            "IMG": "",
            "B1": "A. ARP",
            "B2": "B. DHCP",
            "B3": "D. IMAP",
            "P": "C. WINS"
        },
        {
            "Pytanie": "Wska\u017c, kt&oacute;re zdanie opisuj\u0105ce zapor\u0119 sieciow\u0105 jest fa\u0142szywe",
            "IMG": "",
            "B1": "A. Jest narz\u0119dziem zabezpieczaj\u0105cym sie\u0107 przed w\u0142amaniami",
            "B2": "B. Jest elementem systemu operacyjnego Windows",
            "B3": "D. Jest elementem oprogramowania wi\u0119kszo\u015bci ruter&oacute;w",
            "P": "C. Jest zainstalowana na ka\u017cdym prze\u0142\u0105czniku"
        },
        {
            "Pytanie": "Do przedstawionej na rysunku p\u0142yty g\u0142&oacute;wnej nie mo\u017cna pod\u0142\u0105czy\u0107 urz\u0105dzenia wykorzystuj\u0105cego z\u0142\u0105cze",
            "IMG": "https://egzamin-informatyk.pl/e12/804.jpg",
            "B1": "B. SATA",
            "B2": "C. PCI",
            "B3": "D. IDE",
            "P": "A. AGP"
        },
        {
            "Pytanie": "Wewn\u0119trzny protok&oacute;\u0142 trasowania, kt&oacute;rego metryk\u0105 jest wektor odleg\u0142o\u015bci, to",
            "IMG": "",
            "B1": "A. OSPF",
            "B2": "C. EGP",
            "B3": "D. IS-IS",
            "P": "B. RIP"
        },
        {
            "Pytanie": "Kt&oacute;ry typ pami\u0119ci nale\u017cy umie\u015bci\u0107 na p\u0142ycie g\u0142&oacute;wnej komputera w miejscu wskazanym strza\u0142k\u0105?",
            "IMG": "https://egzamin-informatyk.pl/e12/496.jpg",
            "B1": "A. SIMM",
            "B2": "C. SO-DIMM DDR2",
            "B3": "D. FLASH",
            "P": "B. SD-RAM DDR3"
        },
        {
            "Pytanie": "Sprawdzenie minimalnego okresu wa\u017cno\u015bci has\u0142a w systemie Windows umo\u017cliwia polecenie",
            "IMG": "",
            "B1": "B. net time",
            "B2": "C. net group",
            "B3": "D. net user",
            "P": "A. net accounts"
        },
        {
            "Pytanie": "Interfejs UDMA to interfejs",
            "IMG": "",
            "B1": "A. r&oacute;wnoleg\u0142y, wykorzystywany mi\u0119dzy innymi do pod\u0142\u0105czenia kina domowego do komputera",
            "B2": "B. szeregowy, u\u017cywany do pod\u0142\u0105czania urz\u0105dze\u0144 wej\u015bcia",
            "B3": "D. szeregowy, kt&oacute;ry s\u0142u\u017cy do wymiany danych pomi\u0119dzy pami\u0119ci\u0105 RAM a dyskami twardymi",
            "P": "C. r&oacute;wnoleg\u0142y, kt&oacute;ry zosta\u0142 zast\u0105piony przez interfejs SATA"
        },
        {
            "Pytanie": "B\u0119ben \u015bwiat\u0142oczu\u0142y jest stosowany w drukarkach",
            "IMG": "",
            "B1": "B. atramentowych",
            "B2": "C. termosublimacyjnych",
            "B3": "D. ig\u0142owych",
            "P": "A. laserowych"
        },
        {
            "Pytanie": "W systemie Linux polecenie touch s\u0142u\u017cy do",
            "IMG": "",
            "B1": "A. wyszukania podanego wzorca w tek\u015bcie pliku",
            "B2": "C. przeniesienia lub zmiany nazwy pliku",
            "B3": "D. obliczenia liczby wierszy, s\u0142&oacute;w i znak&oacute;w w pliku",
            "P": "B. utworzenia pliku lub zmiany daty modyfikacji lub daty ostatniego dost\u0119pu"
        },
        {
            "Pytanie": "Zdj\u0119cie przedstawia",
            "IMG": "https://egzamin-informatyk.pl/old/222.jpg",
            "B1": "B. wentylator procesora",
            "B2": "C. ch\u0142odzenie aktywne chipsetu",
            "B3": "D. wentylator karty graficznej",
            "P": "A. ch\u0142odzenie pasywne chipsetu"
        },
        {
            "Pytanie": "Kt&oacute;ra us\u0142uga sieciowa standardowo korzysta z portu 53?",
            "IMG": "",
            "B1": "A. POP3",
            "B2": "B. HTTP",
            "B3": "D. FTP",
            "P": "C. DNS"
        },
        {
            "Pytanie": "Aby mie\u0107 pewno\u015b\u0107, \u017ce komputer otrzyma od serwera DHCP konkretny adres IP trzeba na serwerze zdefiniowa\u0107",
            "IMG": "",
            "B1": "B. wykluczenie adresu IP komputera",
            "B2": "C. dzier\u017caw\u0119 adresu IP",
            "B3": "D. pul\u0119 adres&oacute;w IP",
            "P": "A. zastrze\u017cenie adresu IP komputera"
        },
        {
            "Pytanie": "Z\u0142\u0105cze przedstawione na zdj\u0119ciu umo\u017cliwia pod\u0142\u0105czenie",
            "IMG": "https://egzamin-informatyk.pl/e12/458.jpg",
            "B1": "A. Modemu",
            "B2": "B. Myszy",
            "B3": "C. Drukarki",
            "P": "D. Monitora"
        },
        {
            "Pytanie": "Aby przeprowadzi\u0107 r\u0119czn\u0105 konfiguracj\u0119 interfejsu sieciowego w systemie LINUX nale\u017cy si\u0119 pos\u0142u\u017cy\u0107 poleceniem",
            "IMG": "",
            "B1": "A. eth0",
            "B2": "B. route add",
            "B3": "C. ipconfig",
            "P": "D. ifconfig"
        },
        {
            "Pytanie": "Wska\u017c sygna\u0142 oznaczaj\u0105cy b\u0142\u0105d karty graficznej komputera wyposa\u017conego w BIOS POST firmy AWARD",
            "IMG": "",
            "B1": "A. 1 d\u0142ugi, 5 kr&oacute;tkich",
            "B2": "B. 1 d\u0142ugi, 5 kr&oacute;tkich",
            "B3": "C. 1 d\u0142ugi, 1 kr&oacute;tki",
            "P": "D. 1 d\u0142ugi, 2 kr&oacute;tkie"
        },
        {
            "Pytanie": "Kt&oacute;re z wymienionych urz\u0105dze\u0144 jest elementem jednostki centralnej?",
            "IMG": "",
            "B1": "A. Mysz USB",
            "B2": "B. Klawiatura PS/2",
            "B3": "D. Monitor LCD",
            "P": "C. Modem PCI"
        },
        {
            "Pytanie": "Okresowych kopii zapasowych dysku serwera nie mo\u017cna tworzy\u0107 na wymiennych no\u015bnikach typu",
            "IMG": "",
            "B1": "B. p\u0142yty CD-RW",
            "B2": "C. karty SD",
            "B3": "D. karty MMC",
            "P": "A. p\u0142yty DVD-ROM"
        },
        {
            "Pytanie": "NAT64 (Network Address Translation 64) jest procesem, kt&oacute;ry mapuje adresy",
            "IMG": "",
            "B1": "A. MAC na adresy IPv4",
            "B2": "B. prywatne na adresy publiczne",
            "B3": "C. IPv4 na adresy MAC",
            "P": "D. IPv4 na adresy IPv6"
        },
        {
            "Pytanie": "Jak nazywa si\u0119 wsp&oacute;\u0142pracuj\u0105ce z monitorami CRT urz\u0105dzenie wskazuj\u0105ce z ko\u0144c&oacute;wk\u0105 wyposa\u017con\u0105 w \u015bwiat\u0142oczu\u0142y element, kt&oacute;ra poprzez dotkni\u0119cie ekranu monitora powoduje przes\u0142anie sygna\u0142u do komputera, umo\u017cliwiaj\u0105c w ten spos&oacute;b lokalizacj\u0119 kursora?",
            "IMG": "",
            "B1": "B. Touchpad",
            "B2": "C. Ekran dotykowy",
            "B3": "D. Trackball",
            "P": "A. Pi&oacute;ro \u015bwietlne"
        },
        {
            "Pytanie": "U\u017cytkownik systemu Linux, chc\u0105c przetestowa\u0107 dysk twardy pod k\u0105tem wyst\u0119powania na nim uszkodzonych sektor&oacute;w, mo\u017ce u\u017cy\u0107 programu",
            "IMG": "",
            "B1": "A. scandisk",
            "B2": "B. defrag",
            "B3": "D. chkdisk",
            "P": "C. fsck"
        },
        {
            "Pytanie": "Na rysunku przedstawiono interfejs w komputerze przeznaczony do pod\u0142\u0105czenia",
            "IMG": "https://egzamin-informatyk.pl/ee08/1913.jpg",
            "B1": "A. drukarki laserowej",
            "B2": "B. skanera lustrzanego",
            "B3": "D. plotera tn\u0105cego",
            "P": "C. monitora LCD"
        },
        {
            "Pytanie": "Urz\u0105dzenie typu Plug and Play, pod\u0142\u0105czone do komputera po raz kolejny, jest rozpoznawane na podstawie",
            "IMG": "",
            "B1": "B. lokalizacji sterownika urz\u0105dzenia",
            "B2": "C. specjalnego sterownika programowego",
            "B3": "D. lokalizacji urz\u0105dzenia",
            "P": "A. unikalnego identyfikatora urz\u0105dzenia"
        },
        {
            "Pytanie": "Zapis &quot;10 W&quot; w dokumentacji technicznej g\u0142o\u015bnika komputerowego odnosi si\u0119 do jego",
            "IMG": "",
            "B1": "A. cz\u0119stotliwo\u015bci",
            "B2": "B. napi\u0119cia",
            "B3": "D. zakresu pracy",
            "P": "C. mocy"
        },
        {
            "Pytanie": "Przy pomocy ta\u015bmy 34-pinowej przedstawionej na rysunku pod\u0142\u0105cza si\u0119 do p\u0142yty g\u0142&oacute;wnej komputera",
            "IMG": "https://egzamin-informatyk.pl/old/148.jpg",
            "B1": "B. dyski ATA",
            "B2": "C. nap\u0119dy DVD.",
            "B3": "D. dyski SCSI",
            "P": "A. nap\u0119dy dyskietek 3,5 lub 5,25 cala"
        },
        {
            "Pytanie": "Protoko\u0142em dost\u0119pu do sieci pakietowej z szybko\u015bci\u0105 nie przekraczaj\u0105c\u0105 2 Mbit/s jest protok&oacute;\u0142",
            "IMG": "",
            "B1": "B. VDSL",
            "B2": "C. ATM",
            "B3": "D. Frame Relay",
            "P": "A. X . 25"
        },
        {
            "Pytanie": "Kt&oacute;re polecenie nale\u017cy wyda\u0107 w systemie Windows, aby sprawdzi\u0107 tabel\u0119 translacji adres&oacute;w IP na adresy fizyczne u\u017cywane przez protok&oacute;\u0142 rozr&oacute;\u017cniania adres&oacute;w?",
            "IMG": "",
            "B1": "A. ipconfig",
            "B2": "B. netstat -r",
            "B3": "C. route print",
            "P": "D. arp -a"
        },
        {
            "Pytanie": "Zrzut ekranu przedstawia efekt polecenia arp -a. Jak nale\u017cy zinterpretowa\u0107 t\u0119 informacj\u0119?",
            "IMG": "https://egzamin-informatyk.pl/old/157.jpg",
            "B1": "B. Adres fizyczny hosta jest b\u0142\u0119dny",
            "B2": "C. Host nie ma po\u0142\u0105czenia z Internetem",
            "B3": "D. Komputerowi przypisano b\u0142\u0119dny adres IP",
            "P": "A. Brak bie\u017c\u0105cych wpis&oacute;w protoko\u0142u ARP"
        },
        {
            "Pytanie": "Administrator musi podzieli\u0107 adres 10.0.0.0/16 na 4 r&oacute;wne podsieci o tej samej liczbie host&oacute;w. Jak\u0105 mask\u0119 b\u0119d\u0105 mia\u0142y te podsieci?",
            "IMG": "",
            "B1": "A. 255.255.128.0",
            "B2": "B. 255.255.224.0",
            "B3": "D. 255.255.0.0",
            "P": "C. 255.255.192.0"
        },
        {
            "Pytanie": "Kt&oacute;ra licencja ma charakter grupowy oraz umo\u017cliwia instytucjom komercyjnym lub organizacjom\nedukacyjnym, pa\u0144stwowym, charytatywnym zakup na korzystnych warunkach wi\u0119kszej liczby\noprogramowania firmy Microsoft?",
            "IMG": "",
            "B1": "A. MPL",
            "B2": "B. OEM",
            "B3": "D. APSL",
            "P": "C. MOLP"
        },
        {
            "Pytanie": "Na podstawie nazw sygna\u0142&oacute;w steruj\u0105cych okre\u015bl funkcj\u0119 podzespo\u0142u komputera oznaczonego na rysunku symbolem X",
            "IMG": "https://egzamin-informatyk.pl/old/220.jpg",
            "B1": "B. Uk\u0142ad generator&oacute;w programowalnych",
            "B2": "C. Kontroler DMA",
            "B3": "D. Zegar czasu rzeczywistego",
            "P": "A. Kontroler przerwa\u0144"
        },
        {
            "Pytanie": "W komunikacie o b\u0142\u0119dzie systemu informacja wy\u015bwietlana w postaci heksadecymalnej oznacza",
            "IMG": "",
            "B1": "A. odno\u015bnik do systemu pomocy",
            "B2": "B. nazw\u0119 sterownika",
            "B3": "D. definicj\u0119 b\u0142\u0119du",
            "P": "C. kod b\u0142\u0119du"
        },
        {
            "Pytanie": "Podczas skanowania reprodukcji obrazu z czasopisma, na skanie obrazu pojawi\u0142y si\u0119 regularne wzory, tak zwana mora. Z jakiej funkcji skanera nale\u017cy skorzysta\u0107, aby usun\u0105\u0107 mor\u0119?",
            "IMG": "",
            "B1": "A. Korekcji Gamma",
            "B2": "C. Skanowania wed\u0142ug krzywej tonalnej",
            "B3": "D. Rozdzielczo\u015bci interpolowanej",
            "P": "B. Odrastrowywania"
        },
        {
            "Pytanie": "Kt&oacute;ry z wymienionych program&oacute;w umo\u017cliwi sporz\u0105dzenie rysunku technicznego przedstawiaj\u0105cego plan instalacji logicznej sieci lokalnej budynku?",
            "IMG": "",
            "B1": "A. CommView",
            "B2": "B. WireShark",
            "B3": "C. Packet Tracer",
            "P": "D. AutoCad"
        },
        {
            "Pytanie": "W celu przywr&oacute;cenia prawid\u0142owych wersji plik&oacute;w systemowych, w systemie Windows stosowane jest narz\u0119dzie",
            "IMG": "",
            "B1": "A. replace",
            "B2": "C. verifer",
            "B3": "D. debug",
            "P": "B. sfc"
        },
        {
            "Pytanie": "Do przywracania struktury kluczy rejestru z kopii zapasowej w systemie Windows stosowane jest polecenie",
            "IMG": "",
            "B1": "B. reg import",
            "B2": "C. reg load",
            "B3": "D. reg add",
            "P": "A. reg restore"
        },
        {
            "Pytanie": "Kt&oacute;ry adres jest adresem publicznym?",
            "IMG": "",
            "B1": "B. 10.0.0.1",
            "B2": "C. 172.31.0.1",
            "B3": "D. 192.168.255.1",
            "P": "A. 11.0.0.1"
        },
        {
            "Pytanie": "G\u0142&oacute;wnym celem mechanizmu Plug and Play jest:",
            "IMG": "",
            "B1": "B. automatyczne tworzenie kopii danych na nowo pod\u0142\u0105czonym no\u015bniku pami\u0119ci",
            "B2": "C. automatyczne uruchomienie ostatnio otwartej gry",
            "B3": "D. automatyczne odinstalowanie sterownik&oacute;w, kt&oacute;re przez d\u0142u\u017cszy czas nie by\u0142y u\u017cywane",
            "P": "A. wykrycie nowo pod\u0142\u0105czonego sprz\u0119tu i automatycznie przydzielenie mu zasob&oacute;w"
        },
        {
            "Pytanie": "Kt&oacute;r\u0105 mask\u0119 nale\u017cy zastosowa\u0107, aby sie\u0107 o adresie 192.168.1.0 podzieli\u0107 na 4 podsieci?",
            "IMG": "",
            "B1": "A. 255.255.255.128",
            "B2": "B. 255.255.255.0",
            "B3": "C. 255.255.255.224",
            "P": "D. 255.255.255.192"
        },
        {
            "Pytanie": "Poprawno\u015b\u0107 dzia\u0142ania pami\u0119ci operacyjnej RAM mo\u017cna sprawdzi\u0107 za pomoc\u0105 programu diagnostycznego",
            "IMG": "",
            "B1": "A. CPU-Z",
            "B2": "B. S.M.A.R.T",
            "B3": "D. GPU-Z",
            "P": "C. Memtest86+"
        },
        {
            "Pytanie": "MFT w systemie plik&oacute;w NTFS to",
            "IMG": "",
            "B1": "A. g\u0142&oacute;wny rekord rozruchowy dysku",
            "B2": "B. tablica partycji na dysku twardym",
            "B3": "C. g\u0142&oacute;wny plik indeksowy partycji",
            "P": "D. plik zawieraj\u0105cy informacje dotycz\u0105ce poszczeg&oacute;lnych plik&oacute;w i folder&oacute;w na danym woluminie"
        },
        {
            "Pytanie": "Og&oacute;lne informacje o zdarzeniach systemowych w systemie Linux s\u0105 przechowywane w",
            "IMG": "",
            "B1": "A. programie perfmon",
            "B2": "B. rejestrze systemowym",
            "B3": "D. bibliotece RemoteApp",
            "P": "C. pliku messages"
        },
        {
            "Pytanie": "Do zabezpieczenia system&oacute;w sieciowych przed atakami z zewn\u0105trz nale\u017cy u\u017cy\u0107",
            "IMG": "",
            "B1": "A. protoko\u0142u SSH",
            "B2": "C. menad\u017cera po\u0142\u0105cze\u0144",
            "B3": "D. serwera DHCP",
            "P": "B. zapory sieciowej"
        },
        {
            "Pytanie": "W wyniku u\u017cycia narz\u0119dzia diagnostycznego chkdsk otrzymano informacje widoczne na zrzucie ekranu. Jak\u0105 wielko\u015b\u0107 posiada pojedynczy klaster dysku?",
            "IMG": "https://egzamin-informatyk.pl/old/186.jpg",
            "B1": "A. 2 140 kB",
            "B2": "C. 8 kB",
            "B3": "D. 1 972 kB",
            "P": "B. 4 kB"
        },
        {
            "Pytanie": "Liczba szesnastkowa 29A zapisana w systemie binarnym b\u0119dzie mia\u0142a posta\u0107:",
            "IMG": "",
            "B1": "A. 1010010110",
            "B2": "B. 1000011010",
            "B3": "C. 1001011010",
            "P": "D. 1010011010"
        },
        {
            "Pytanie": "Co \u0142\u0105czy okablowanie pionowe w projekcie sieci LAN?",
            "IMG": "",
            "B1": "B. Dwa s\u0105siednie punkty abonenckie",
            "B2": "C. G\u0142&oacute;wny punkt rozdzielczy z gniazdem abonenckim",
            "B3": "D. Gniazdo abonenckie z po\u015brednim punktem rozdzielczym",
            "P": "A. G\u0142&oacute;wny punkt rozdzielczy z po\u015brednimi punktami rozdzielczymi"
        },
        {
            "Pytanie": "Na rysunku przedstawiono fragment dokumentacji technicznej p\u0142yty g\u0142&oacute;wnej GA-K8NF-9-RH rev. 2.x. Wynika z niej, \u017ce maksymalna liczba mo\u017cliwych do zamontowania kart rozszerze\u0144 (pomijaj\u0105c interfejs USB) wynosi",
            "IMG": "https://egzamin-informatyk.pl/ee08/1891.jpg",
            "B1": "A. 5",
            "B2": "C. 3",
            "B3": "D. 2",
            "P": "B. 6"
        },
        {
            "Pytanie": "Aby sprawdzi\u0107 statystyki u\u017cycia pami\u0119ci wirtualnej w systemie Linux, nale\u017cy sprawdzi\u0107 zawarto\u015b\u0107 pliku",
            "IMG": "",
            "B1": "B. xload",
            "B2": "C. pagefile.sys",
            "B3": "D. /etc/inittab",
            "P": "A. /proc/vmstat"
        },
        {
            "Pytanie": "Rysunek przedstawia symbol graficzny",
            "IMG": "https://egzamin-informatyk.pl/e13/375.jpg",
            "B1": "A. rutera",
            "B2": "B. mostu",
            "B3": "C. punktu dost\u0119powego",
            "P": "D. prze\u0142\u0105cznika"
        },
        {
            "Pytanie": "Urz\u0105dzenie sieciowe przedstawione na rysunku, to",
            "IMG": "https://egzamin-informatyk.pl/e13/245.jpg",
            "B1": "A. firewall",
            "B2": "C. prze\u0142\u0105cznik",
            "B3": "D. konwerter medi&oacute;w",
            "P": "B. router"
        },
        {
            "Pytanie": "Atak komputerowy przeprowadzony r&oacute;wnocze\u015bnie z wielu komputer&oacute;w w sieci, polegaj\u0105cy na uniemo\u017cliwieniu dzia\u0142ania systemu komputerowego poprzez zaj\u0119cie wszystkich wolnych zasob&oacute;w, nosi nazw\u0119",
            "IMG": "",
            "B1": "A. Spoofing",
            "B2": "B. Atak s\u0142ownikowy",
            "B3": "C. Brute force",
            "P": "D. DDoS"
        },
        {
            "Pytanie": "Aby utworzy\u0107 las w strukturze katalogowej AD DS (Active Directory Domain Services), nale\u017cy utworzy\u0107 co najmniej",
            "IMG": "",
            "B1": "A. dwa drzewa domeny",
            "B2": "B. cztery drzewa domeny",
            "B3": "D. trzy drzewa domeny",
            "P": "C. jedno drzewo domeny"
        },
        {
            "Pytanie": "Aby stworzy\u0107 katalog za pomoc\u0105 wiersza polece\u0144 systemu Windows, nale\u017cy zastosowa\u0107 komend\u0119",
            "IMG": "",
            "B1": "B. mv",
            "B2": "C. rmdir",
            "B3": "D. dir",
            "P": "A. md"
        },
        {
            "Pytanie": "W czterech sklepach sprzedawany jest ten sam komputer w r&oacute;\u017cnych cenach. Najtaniej mo\u017cna go naby\u0107 w sklepie:",
            "IMG": "https://egzamin-informatyk.pl/e12/300.jpg",
            "B1": "A. A",
            "B2": "B. B",
            "B3": "D. D",
            "P": "C. C"
        },
        {
            "Pytanie": "Kt&oacute;ry port jest domy\u015blnym portem serwera us\u0142ugi WWW?",
            "IMG": "",
            "B1": "B. 800",
            "B2": "C. 8081",
            "B3": "D. 8080",
            "P": "A. 80"
        },
        {
            "Pytanie": "Oznakowanie CE informuje, \u017ce",
            "IMG": "",
            "B1": "A. wyr&oacute;b jest zgodny z normami ISO",
            "B2": "B. producent sprawdzi\u0142 produkt pod wzgl\u0119dem wydajno\u015bci i ergonomii",
            "B3": "D. wyr&oacute;b jest wyprodukowany na terenie Unii Europejskiej",
            "P": "C. wyr&oacute;b spe\u0142nia wymagania pod wzgl\u0119dem bezpiecze\u0144stwa u\u017cytkowania, ochrony zdrowia i ochrony \u015brodowiska"
        },
        {
            "Pytanie": "Bezp\u0142atnym programem antywirusowym dostarczanym przez Microsoft dla u\u017cytkownik&oacute;w legalnych wersji systemu operacyjnego Windows jest",
            "IMG": "",
            "B1": "A. Windows Antywirus",
            "B2": "B. Microsoft Free Antywirus",
            "B3": "D. Windows Defender",
            "P": "C. Microsoft Security Essentials"
        },
        {
            "Pytanie": "Autorskie prawo osobiste tw&oacute;rcy do programu komputerowego",
            "IMG": "",
            "B1": "A. trwa 70 lat od daty pierwszej publikacji",
            "B2": "B. trwa wy\u0142\u0105cznie przez czas \u017cycia jego tw&oacute;rcy",
            "B3": "C. trwa 50 lat od daty pierwszej publikacji",
            "P": "D. nigdy nie wygasa"
        },
        {
            "Pytanie": "Protok&oacute;\u0142 umo\u017cliwiaj\u0105cy bezpieczn\u0105, zdaln\u0105 prac\u0119 na serwerze to",
            "IMG": "",
            "B1": "A. SMTP",
            "B2": "C. POP3",
            "B3": "D. TELNET",
            "P": "B. SSH"
        },
        {
            "Pytanie": "Kt&oacute;re medium transmisyjne zapewnia separacj\u0119 galwaniczn\u0105 pomi\u0119dzy systemami transmisji danych?",
            "IMG": "",
            "B1": "A. Skr\u0119tka ekranowana",
            "B2": "C. Przew&oacute;d koncentryczny",
            "B3": "D. Skr\u0119tka nieekranowana",
            "P": "B. \u015awiat\u0142ow&oacute;d"
        },
        {
            "Pytanie": "Na rysunku przedstawiono fragment wyniku dzia\u0142ania programu do testowania sieci. Wskazuje to na zastosowanie sieciowego polecenia testuj\u0105cego",
            "IMG": "https://egzamin-informatyk.pl/ee08/1910.jpg",
            "B1": "B. arp",
            "B2": "C. tracert",
            "B3": "D. route",
            "P": "A. netstat"
        },
        {
            "Pytanie": "Kt&oacute;re urz\u0105dzenie nale\u017cy wybra\u0107 do pomiar&oacute;w mapy po\u0142\u0105cze\u0144 okablowania strukturalnego sieci lokalnej?",
            "IMG": "",
            "B1": "A. Monitor sieciowy",
            "B2": "C. Reflektometr OTDR",
            "B3": "D. Analizator protoko\u0142&oacute;w",
            "P": "B. Analizator sieci LAN"
        },
        {
            "Pytanie": "Interfejsem wewn\u0119trznym komputera jest",
            "IMG": "",
            "B1": "A. RJ-45",
            "B2": "B. DVI",
            "B3": "C. IrDA",
            "P": "D. AGP"
        },
        {
            "Pytanie": "Kt&oacute;rego zadania NIE realizuj\u0105 serwery plik&oacute;w?",
            "IMG": "",
            "B1": "B. Odczytu i zapisu danych na dyskach twardych",
            "B2": "C. Wymiany danych pomi\u0119dzy u\u017cytkownikami sieci",
            "B3": "D. Udost\u0119pniania plik&oacute;w w Internecie",
            "P": "A. Zarz\u0105dzania bazami danych"
        },
        {
            "Pytanie": "Kt&oacute;ra us\u0142uga polega na scentralizowanym zarz\u0105dzaniu to\u017csamo\u015bciami, uprawnieniami oraz obiektami w sieci?",
            "IMG": "",
            "B1": "A. NFS (Network File System).",
            "B2": "B. WDS (Windows Deployment Services)",
            "B3": "D. DHCP (Dynamic Host Configuration Protocol)",
            "P": "C. AD (Active Directory)"
        },
        {
            "Pytanie": "Aby umo\u017cliwi\u0107 komunikacj\u0119 urz\u0105dzenia mobilnego z komputerem przez interfejs Bluetooth, nale\u017cy",
            "IMG": "",
            "B1": "A. utworzy\u0107 sie\u0107 WAN dla urz\u0105dze\u0144",
            "B2": "B. po\u0142\u0105czy\u0107 urz\u0105dzenia kablem krosowym",
            "B3": "D. skonfigurowa\u0107 urz\u0105dzenie mobilne przez przegl\u0105dark\u0119",
            "P": "C. wykona\u0107 parowanie urz\u0105dze\u0144"
        },
        {
            "Pytanie": "W sieci LAN do zabezpieczenia urz\u0105dze\u0144 sieciowych przed przepi\u0119ciami oraz r&oacute;\u017cnicami potencja\u0142&oacute;w, kt&oacute;re mog\u0105 wyst\u0105pi\u0107 podczas burzy lub innych wy\u0142adowa\u0144 atmosferycznych, nale\u017cy wykorzysta\u0107",
            "IMG": "",
            "B1": "A. sprz\u0119tow\u0105 zapor\u0119 sieciow\u0105",
            "B2": "C. ruter",
            "B3": "D. prze\u0142\u0105cznik",
            "P": "B. urz\u0105dzenie typu NetProtector"
        },
        {
            "Pytanie": "W biurze rachunkowym znajduje si\u0119 w jednym pomieszczeniu sze\u015b\u0107 komputer&oacute;w pod\u0142\u0105czonych do koncentratora kablem UTP Cat 5e. Pracownicy u\u017cytkuj\u0105cy te komputery musz\u0105 mie\u0107 mo\u017cliwo\u015b\u0107 drukowania bardzo du\u017cej ilo\u015bci (powy\u017cej 5 tys. stron miesi\u0119cznie) dokument&oacute;w monochromatycznych. Aby koszty zakupu sprz\u0119tu i eksploatacji by\u0142y jak najni\u017csze nale\u017cy wybra\u0107:",
            "IMG": "",
            "B1": "A. drukark\u0119 atramentow\u0105 pod\u0142\u0105czon\u0105 do jednego z komputer&oacute;w i udost\u0119pnian\u0105 w sieci",
            "B2": "C. atramentowe urz\u0105dzenie wielofunkcyjne ze skanerem i faksem",
            "B3": "D. laserowe drukarki lokalne pod\u0142\u0105czone do ka\u017cdego z komputer&oacute;w",
            "P": "B. laserow\u0105 drukark\u0119 sieciow\u0105 z portem RJ45"
        },
        {
            "Pytanie": "Maksymalny transfer danych nap\u0119du CD dla pr\u0119dko\u015bci przesy\u0142u x42 wynosi",
            "IMG": "",
            "B1": "A. 3600 KiB/s",
            "B2": "B. 6000 KiB/s",
            "B3": "D. 2400 KiB/s",
            "P": "C. 6300 KiB/s"
        },
        {
            "Pytanie": "Co s\u0142u\u017cy do zabezpieczenia komputera przed niepo\u017c\u0105danym oprogramowaniem pochodz\u0105cym z Internetu?",
            "IMG": "",
            "B1": "A. Program sniffer",
            "B2": "B. Protok&oacute;\u0142 SSL",
            "B3": "D. Protok&oacute;\u0142 HTTPS",
            "P": "C. Program antywirusowy"
        },
        {
            "Pytanie": "Ile host&oacute;w mo\u017cna zaadresowa\u0107 w podsieci o adresie 192.168.10.0/25?",
            "IMG": "",
            "B1": "B. 64",
            "B2": "C. 62",
            "B3": "D. 128",
            "P": "A. 126"
        },
        {
            "Pytanie": "Kt&oacute;ry z adres&oacute;w IPv4 jest odpowiednikiem adresu IPv6 ::1?",
            "IMG": "",
            "B1": "A. 128.0.0.1",
            "B2": "C. 10.0.0.1",
            "B3": "D. 1.1.1.1",
            "P": "B. 127.0.0.1"
        },
        {
            "Pytanie": "Kt&oacute;ry z tryb&oacute;w nie jest dost\u0119pny dla narz\u0119dzia lupa w systemie Windows?",
            "IMG": "",
            "B1": "A. Zadokowany",
            "B2": "B. Lupy",
            "B3": "D. Pe\u0142noekranowy",
            "P": "C. P\u0142ynny"
        },
        {
            "Pytanie": "Kt&oacute;rego oprogramowania nie mo\u017cna u\u017cywa\u0107 na urz\u0105dzeniach nale\u017c\u0105cych do instytucji rz\u0105dowych lub edukacyjnych?",
            "IMG": "",
            "B1": "A. AbiWord",
            "B2": "C. Windows Defender",
            "B3": "D. Microsoft Word",
            "P": "B. Microsoft Security Essentials"
        },
        {
            "Pytanie": "Za pomoc\u0105 narz\u0119dzia diagnostycznego Tracert mo\u017cna ustali\u0107 tras\u0119 do punktu docelowego. Przez ile router&oacute;w przeszed\u0142 pakiet wys\u0142any do hosta 172.16.0.99?",
            "IMG": "https://egzamin-informatyk.pl/e13/266.jpg",
            "B1": "A. 5",
            "B2": "B. 2",
            "B3": "C. 24",
            "P": "D. 4"
        },
        {
            "Pytanie": "W jaki spos&oacute;b skonfigurowa\u0107 w systemie Windows Server 2008 ustawienia protoko\u0142u TCP/IP karty sieciowej, by komputer nale\u017ca\u0142 r&oacute;wnocze\u015bnie do dw&oacute;ch sieci lokalnych o r&oacute;\u017cnych adresach IP?",
            "IMG": "",
            "B1": "A. Zaznaczy\u0107 opcj\u0119 &quot;Uzyskaj adres IP automatycznie&quot;.",
            "B2": "C. Wpisa\u0107 dwa adresy bramy, korzystaj\u0105c z zak\u0142adki &quot;Zaawansowane&quot;",
            "B3": "D. Wpisa\u0107 dwa adresy serwer&oacute;w DNS",
            "P": "B. Wpisa\u0107 dwa adresy IP, korzystaj\u0105c z zak\u0142adki &quot;Zaawansowane&quot;"
        },
        {
            "Pytanie": "Kt&oacute;ry z podanych adres&oacute;w IP nie jest adresem prywatnym?",
            "IMG": "",
            "B1": "A. 172.16.45.123",
            "B2": "C. 10.0.105.12",
            "B3": "D. 192.168.199.223",
            "P": "B. 127.231.5.67"
        },
        {
            "Pytanie": "Szkodliwe samoreplikuj\u0105ce si\u0119 programy komputerowe wykorzystuj\u0105ce luki w systemie operacyjnym, kt&oacute;re potrafi\u0105 uzupe\u0142nia\u0107 i zmienia\u0107 swoj\u0105 funkcjonalno\u015b\u0107 to",
            "IMG": "",
            "B1": "A. rootkity",
            "B2": "B. wirusy",
            "B3": "D. trojany",
            "P": "C. robaki"
        },
        {
            "Pytanie": "W topologii fizycznej gwiazdy, wszystkie urz\u0105dzenia pracuj\u0105ce w sieci, s\u0105",
            "IMG": "",
            "B1": "A. po\u0142\u0105czone z dwoma s\u0105siaduj\u0105cymi komputerami",
            "B2": "B. po\u0142\u0105czone mi\u0119dzy sob\u0105 odcinkami kabla tworz\u0105c zamkni\u0119ty pier\u015bcie\u0144",
            "B3": "C. pod\u0142\u0105czone do jednej magistrali",
            "P": "D. pod\u0142\u0105czone do w\u0119z\u0142a sieci"
        },
        {
            "Pytanie": "Program tar umo\u017cliwia",
            "IMG": "",
            "B1": "B. konfigurowanie karty sieciowej",
            "B2": "C. wy\u015bwietlanie listy aktywnych proces&oacute;w",
            "B3": "D. zarz\u0105dzanie pakietami",
            "P": "A. archiwizowanie plik&oacute;w"
        },
        {
            "Pytanie": "W modelu RGB, w systemie szesnastkowym, kolor jest zapisany nast\u0119puj\u0105co: ABCDEF. Nat\u0119\u017cenie koloru niebieskiego w tym zapisie ma warto\u015b\u0107 dziesi\u0119tn\u0105",
            "IMG": "",
            "B1": "B. 171",
            "B2": "C. 205",
            "B3": "D. 186",
            "P": "A. 239"
        },
        {
            "Pytanie": "Koszt wydrukowania jednej strony tekstu wynosi 95 gr, natomiast koszt przygotowania jednej p\u0142yty CD to 1,54 z\u0142. Jakie koszty poniesie firma, przygotowuj\u0105ca p\u0142yt\u0119 z prezentacjami oraz 120 stronicowy poradnik?",
            "IMG": "",
            "B1": "A. 154,95 z\u0142",
            "B2": "B. 120,95 z\u0142",
            "B3": "D. 145,54 z\u0142",
            "P": "C. 115,54 z\u0142"
        },
        {
            "Pytanie": "Jaki b\u0119dzie ca\u0142kowity koszt robocizny monta\u017cu 20 modu\u0142&oacute;w RJ45 ze z\u0142\u0105czem kraw\u0119dziowym narz\u0119dziowym na przewodach 4-parowych, je\u017celi stawka godzinowa montera wynosi 15 z\u0142/h, a wed\u0142ug tabeli KNR czas monta\u017cu jednego modu\u0142u to 0,10 r-g?",
            "IMG": "",
            "B1": "A. 7,50 z\u0142",
            "B2": "C. 50,00 z\u0142",
            "B3": "D. 15,00 z\u0142",
            "P": "B. 30,00 z\u0142"
        },
        {
            "Pytanie": "Interfejs HDMI komputera pozwala na przesy\u0142anie sygna\u0142u",
            "IMG": "",
            "B1": "A. cyfrowego audio",
            "B2": "C. analogowego audio i video",
            "B3": "D. cyfrowego video",
            "P": "B. cyfrowego video i audio"
        },
        {
            "Pytanie": "Metoda dost\u0119pu do medium transmisyjnego z wykrywaniem kolizji w sieciach LAN jest",
            "IMG": "",
            "B1": "A. IPX/SPX",
            "B2": "C. NetBEUI",
            "B3": "D. WINS",
            "P": "B. CSMA/CD"
        },
        {
            "Pytanie": "W systemie operacyjnym Ubuntu do utworzenia archiwum danych nale\u017cy wykorzysta\u0107 program ",
            "IMG": "",
            "B1": "A. set",
            "B2": "C. sed",
            "B3": "D. awk",
            "P": "B. tar"
        },
        {
            "Pytanie": "Kt&oacute;re porty nale\u017cy odblokowa\u0107 w ustawieniach zapory sieciowej na komputerze z zainstalowan\u0105 us\u0142ug\u0105 serwera sieci Web?",
            "IMG": "",
            "B1": "A. 80 i 1024",
            "B2": "C. 20 i 1024",
            "B3": "D. 20 i 21",
            "P": "B. 80 i 443"
        },
        {
            "Pytanie": "Materia\u0142em eksploatacyjnym dla kolorowej drukarki laserowej jest",
            "IMG": "",
            "B1": "A. pami\u0119\u0107 wydruku",
            "B2": "B. podajnik papieru",
            "B3": "D. przetwornik CMOS",
            "P": "C. kartrid\u017c z tonerem"
        },
        {
            "Pytanie": "Jakim kolorem jest oznaczona izolacja \u017cy\u0142y skr\u0119tki w pierwszym pinie wtyku RJ45 w sekwencji po\u0142\u0105cze\u0144 T568A?",
            "IMG": "",
            "B1": "A. Bia\u0142o-niebieskim",
            "B2": "C. Bia\u0142o-pomara\u0144czowym",
            "B3": "D. Bia\u0142o-br\u0105zowym",
            "P": "B. Bia\u0142o-zielonym"
        },
        {
            "Pytanie": "Program df dzia\u0142aj\u0105cy w systemach rodziny Linux umo\u017cliwia wy\u015bwietlenie",
            "IMG": "",
            "B1": "A. nazwy bie\u017c\u0105cego katalogu",
            "B2": "B. zawarto\u015bci ukrytego katalogu",
            "B3": "C. tekstu pasuj\u0105cego do wzorca",
            "P": "D. informacji o wolnej przestrzeni dyskowej"
        },
        {
            "Pytanie": "Okablowanie strukturalne nale\u017cy zaliczy\u0107 do infrastruktury ",
            "IMG": "",
            "B1": "B. terytorialnej",
            "B2": "C. aktywnej",
            "B3": "D. dalekosi\u0119\u017cnej",
            "P": "A. pasywnej"
        },
        {
            "Pytanie": "Atak DDoS (ang. Disributed Denial of Service) na serwer spowoduje",
            "IMG": "",
            "B1": "A. zbieranie informacji na temat atakowanej sieci",
            "B2": "B. przechwycenie pakiet&oacute;w sieciowych",
            "B3": "D. podmian\u0119 pakiet&oacute;w przesy\u0142anych przez sie\u0107",
            "P": "C. przeci\u0105\u017cenie aplikacji serwuj\u0105cej okre\u015blone dane"
        },
        {
            "Pytanie": "Ile maksymalnie partycji podstawowych mo\u017cemy utworzy\u0107 na dysku twardym z MBR?",
            "IMG": "",
            "B1": "A. 26",
            "B2": "B. 8",
            "B3": "D. 24",
            "P": "C. 4"
        },
        {
            "Pytanie": "Je\u017celi sie\u0107 172.16.6.0 podzieli si\u0119 z u\u017cyciem maski /27 na maksymaln\u0105 ilo\u015b\u0107 podsieci, to ile host&oacute;w b\u0119dzie mo\u017cna zaadresowa\u0107 w ka\u017cdej z nich?",
            "IMG": "",
            "B1": "A. 32 hosty",
            "B2": "B. 28 host&oacute;w",
            "B3": "C. 29 host&oacute;w",
            "P": "D. 30 host&oacute;w"
        },
        {
            "Pytanie": "W przedstawionej na schemacie p\u0142ycie g\u0142&oacute;wnej zasilanie nale\u017cy pod\u0142\u0105czy\u0107 do z\u0142\u0105cza oznaczonego numerem",
            "IMG": "https://egzamin-informatyk.pl/old/4.jpg",
            "B1": "A. 3",
            "B2": "B. 7",
            "B3": "C. 5",
            "P": "D. 6"
        },
        {
            "Pytanie": "Jaki jest najwi\u0119kszy adres IP w podsieci 196.10.20.0/26?",
            "IMG": "",
            "B1": "B. 196.10.20.64",
            "B2": "C. 196.10.20.0",
            "B3": "D. 196.10.20.1",
            "P": "A. 196.10.20.63"
        },
        {
            "Pytanie": "Do kt&oacute;rej warstwy modelu ISO/OSI nale\u017cy segmentowanie danych, komunikacja w trybie po\u0142\u0105czeniowym z wykorzystaniem protoko\u0142u TCP oraz komunikacja w trybie bezpo\u0142\u0105czeniowym z wykorzystaniem protoko\u0142u UDP?",
            "IMG": "",
            "B1": "A. Sieciowej",
            "B2": "C. Fizycznej",
            "B3": "D. \u0141\u0105cza danych",
            "P": "B. Transportowej"
        },
        {
            "Pytanie": "W systemie Linux do monitorowania u\u017cycia procesora, pami\u0119ci, proces&oacute;w i obci\u0105\u017cenia systemu s\u0142u\u017cy polecenie",
            "IMG": "",
            "B1": "A. ifconfig",
            "B2": "B. rev",
            "B3": "C. grep",
            "P": "D. top"
        },
        {
            "Pytanie": "Analizuj\u0105c rysunek zauwa\u017camy, \u017ce limit zadeklarowanej pami\u0119ci wynosi 620976 KB. Wida\u0107 jednocze\u015bnie, \u017ce zainstalowanej pami\u0119ci fizycznej w analizowanym systemie jest mniej ni\u017c pami\u0119ci zadeklarowanej. Jaki typ pami\u0119ci decyduje w tym wypadku o zwi\u0119kszeniu limitu pami\u0119ci zadeklarowanej ponad wielko\u015b\u0107 zainstalowanej pami\u0119ci fizycznej?",
            "IMG": "https://egzamin-informatyk.pl/old/33.jpg",
            "B1": "A. Pami\u0119\u0107 RAM",
            "B2": "B. Pami\u0119\u0107 j\u0105dra",
            "B3": "D. Pami\u0119\u0107 cache procesora",
            "P": "C. Pami\u0119\u0107 pliku stron"
        },
        {
            "Pytanie": "Kt&oacute;ry z wymienionych adres&oacute;w protoko\u0142u IPv4 jest adresem klasy D?",
            "IMG": "",
            "B1": "A. 191.12.0.18",
            "B2": "B. 10.0.3.5",
            "B3": "D. 128.1.0.8",
            "P": "C. 239.255.203.1"
        },
        {
            "Pytanie": "Wska\u017c niepoprawny podzia\u0142 dysk&oacute;w MBR na partycje",
            "IMG": "",
            "B1": "A. 2 partycje podstawowe i 1 rozszerzona",
            "B2": "B. 3 partycje podstawowe i 1 rozszerzona",
            "B3": "D. 1 partycja podstawowa i 1 rozszerzona",
            "P": "C. 1 partycja podstawowa i 2 rozszerzone"
        },
        {
            "Pytanie": "U\u017cycie polecenia fsck w systemie Linux spowoduje",
            "IMG": "",
            "B1": "B. zmian\u0119 praw dost\u0119pu do pliku",
            "B2": "C. odszukanie pliku",
            "B3": "D. wy\u015bwietlenie parametr&oacute;w plik&oacute;w",
            "P": "A. sprawdzenie integralno\u015bci systemu plik&oacute;w"
        },
        {
            "Pytanie": "Wska\u017c prawid\u0142ow\u0105 posta\u0107 maski podsieci",
            "IMG": "",
            "B1": "A. 255.252.252.255",
            "B2": "B. 0.0.0.0",
            "B3": "C. 255.255.0.128",
            "P": "D. 255.255.255.255"
        },
        {
            "Pytanie": "W schemacie logicznym okablowania strukturalnego, zgodnie z terminologi\u0105 polsk\u0105 zawart\u0105 w normie PN-EN 50174, w\u0142a\u015bciwo\u015bci\u0105 kondygnacyjnego punktu dystrybucyjnego jest to, \u017ce",
            "IMG": "",
            "B1": "A. obejmuje zasi\u0119giem ca\u0142y budynek",
            "B2": "B. \u0142\u0105czy okablowanie pionowe i mi\u0119dzybudynkowe",
            "B3": "D. \u0142\u0105czy okablowanie budynku i centralny punkt dystrybucyjny",
            "P": "C. obejmuje zasi\u0119giem ca\u0142e pi\u0119tro budynku"
        },
        {
            "Pytanie": "System S.M.A.R.T. przeznaczony jest do monitorowania pracy i wykrywania b\u0142\u0119d&oacute;w",
            "IMG": "",
            "B1": "A. nap\u0119d&oacute;w p\u0142yt CD/DVD",
            "B2": "B. kart rozszerze\u0144",
            "B3": "C. p\u0142yty g\u0142&oacute;wnej",
            "P": "D. dysk&oacute;w twardych"
        },
        {
            "Pytanie": "Szeroko\u015b\u0107 magistrali pami\u0119ci DDR SDRAM wynosi",
            "IMG": "",
            "B1": "B. 32 bity",
            "B2": "C. 36 bit&oacute;w",
            "B3": "D. 72 bity",
            "P": "A. 64 bity"
        },
        {
            "Pytanie": "Sie\u0107 o adresie 192.168.1.128/29 pozwala na pod\u0142\u0105czenie",
            "IMG": "",
            "B1": "A. 16 host&oacute;w",
            "B2": "C. 8 host&oacute;w",
            "B3": "D. 12 host&oacute;w",
            "P": "B. 6 host&oacute;w"
        },
        {
            "Pytanie": "W celu zdalnego i przy tym bezpiecznego administrowania systemem Linux nale\u017cy wykorzysta\u0107 protok&oacute;\u0142",
            "IMG": "",
            "B1": "A. Telnet",
            "B2": "B. FTP",
            "B3": "C. SMTP",
            "P": "D. SSH2"
        },
        {
            "Pytanie": "Okresowych kopii zapasowych dysk&oacute;w serwera nie mo\u017cna tworzy\u0107 na wymiennych no\u015bnikach typu ",
            "IMG": "",
            "B1": "A. p\u0142yty CD-RW",
            "B2": "B. karty MMC",
            "B3": "C. karty SD",
            "P": "D. p\u0142yty DVD-ROM"
        },
        {
            "Pytanie": "Po w\u0142\u0105czeniu komputera procedura POST pokazuje 512 MB RAM. Na karcie w\u0142a\u015bciwo\u015bci og&oacute;lnych systemu operacyjnego Windows widnieje warto\u015b\u0107 480 MB RAM. Co jest przyczyn\u0105 tej r&oacute;\u017cnicy?",
            "IMG": "",
            "B1": "A. Jest \u017ale przydzielony rozmiar pliku stronicowania w ustawieniach pami\u0119ci wirtualnej",
            "B2": "B. System operacyjny jest \u017ale zainstalowany i nie obs\u0142uguje ca\u0142ego obszaru pami\u0119ci",
            "B3": "D. Jedna z ko\u015bci pami\u0119ci jest uszkodzona lub jest uszkodzone jedno z gniazd pami\u0119ci RAM na p\u0142ycie g\u0142&oacute;wnej",
            "P": "C. W komputerze znajduje si\u0119 karta graficzna zintegrowana z p\u0142yt\u0105 g\u0142&oacute;wn\u0105 wykorzystuj\u0105ca cz\u0119\u015b\u0107 pami\u0119ci RAM"
        },
        {
            "Pytanie": "Kt&oacute;ry interfejs umo\u017cliwia korzystanie ze sterownik&oacute;w i oprogramowania systemu operacyjnego, zapewniaj\u0105c m.in. przep\u0142yw danych mi\u0119dzy pami\u0119ci\u0105 systemow\u0105 a dyskiem SATA?",
            "IMG": "",
            "B1": "A. OHCI",
            "B2": "C. EHCI",
            "B3": "D. UHCI",
            "P": "B. AHCI"
        },
        {
            "Pytanie": "Ile maksymalnie komputer&oacute;w mo\u017ce by\u0107 zaadresowanych w podsieci o adresie 192.168.1.0/25?",
            "IMG": "",
            "B1": "B. 254",
            "B2": "C. 62",
            "B3": "D. 510",
            "P": "A. 126"
        },
        {
            "Pytanie": "Komponentem p\u0142yty g\u0142&oacute;wnej odpowiedzialnym za komunikacj\u0119 pomi\u0119dzy procesorem a pozosta\u0142ymi elementami p\u0142yty jest",
            "IMG": "",
            "B1": "A. BIOS ROM",
            "B2": "B. pami\u0119\u0107 RAM",
            "B3": "C. uk\u0142ad ch\u0142odzenia",
            "P": "D. chipset"
        },
        {
            "Pytanie": "Oblicz koszt brutto kabla UTP Cat 6 u\u017cytego do po\u0142\u0105czenia 5 punkt&oacute;w abonenckich z punktem dystrybucyjnym, wiedz\u0105c, \u017ce \u015brednia d\u0142ugo\u015b\u0107 pomi\u0119dzy punktem abonenckim a punktem dystrybucyjnym wynosi 8 m oraz \u017ce cena brutto 1 m kabla wynosi 1 z\u0142. Przy obliczeniach nale\u017cy uwzgl\u0119dni\u0107 zapas 2m kabla na ka\u017cdy punkt abonencki.",
            "IMG": "",
            "B1": "A. 40 z\u0142",
            "B2": "B. 45 z\u0142",
            "B3": "D. 32 z\u0142",
            "P": "C. 50 z\u0142"
        },
        {
            "Pytanie": "Jak skonfigurowa\u0107 zapor\u0119 Windows, zachowuj\u0105c zasady bezpiecze\u0144stwa, aby za pomoc\u0105 polecenia ping by\u0142o mo\u017cliwe sprawdzenie poprawno\u015bci komunikacji z innymi urz\u0105dzeniami pracuj\u0105cymi w sieci?",
            "IMG": "",
            "B1": "A. Skonfigurowa\u0107 regu\u0142y dotycz\u0105ce protoko\u0142u TCP",
            "B2": "B. Skonfigurowa\u0107 regu\u0142y dotycz\u0105ce protoko\u0142u IP",
            "B3": "D. Skonfigurowa\u0107 regu\u0142y dotycz\u0105ce protoko\u0142u IGMP",
            "P": "C. Skonfigurowa\u0107 regu\u0142y dotycz\u0105ce protoko\u0142u ICMP"
        },
        {
            "Pytanie": "Router na interfejsie LAN ma przypisany adres IP 192.168.50.1. Zosta\u0142 on tak skonfigurowany, \u017ce komputerom przydziela si\u0119 wszystkie dost\u0119pne adresy IP w sieci 192.168.50.0 z mask\u0105 255.255.255.0. Ile maksymalnie komputer&oacute;w mo\u017ce pracowa\u0107 w takiej sieci?",
            "IMG": "",
            "B1": "B. 254",
            "B2": "C. 256",
            "B3": "D. 255",
            "P": "A. 253"
        },
        {
            "Pytanie": "Jak\u0105 ilo\u015b\u0107 rzeczywistych danych mo\u017cna przes\u0142a\u0107 w czasie 1 s przez \u0142\u0105cze synchroniczne o przepustowo\u015bci 512 kbps, bez sprz\u0119towej i programowej kompresji?",
            "IMG": "",
            "B1": "A. Ponad 64 kB",
            "B2": "C. Ponad 500 kB",
            "B3": "D. Oko\u0142o 5 kB",
            "P": "B. Oko\u0142o 55 kB"
        },
        {
            "Pytanie": "Adres IP serwera, na kt&oacute;rym jest zainstalowana domena www.wp.pl to 212.77.98.9. Co jest przyczyn\u0105 sytuacji przedstawionej na zrzucie ekranowym?",
            "IMG": "https://egzamin-informatyk.pl/e13/646.jpg",
            "B1": "A. Nie ma w sieci serwera o adresie IP 212.77.98.9",
            "B2": "C. Domena o nazwie www.wp.pl jest niedost\u0119pna w sieci",
            "B3": "D. Stacja robocza i domena www.wp.pl nie pracuj\u0105 w tej samej sieci",
            "P": "B. B\u0142\u0119dny adres serwera DNS lub brak po\u0142\u0105czenia z serwerem DNS"
        },
        {
            "Pytanie": "Kt&oacute;ra czynno\u015b\u0107 zabezpieczy dane przesy\u0142ane w sieci przed dzia\u0142aniem sniffera?",
            "IMG": "",
            "B1": "A. korzystanie z antydialera",
            "B2": "B. zmiana has\u0142a u\u017cytkownika",
            "B3": "C. skanowanie programem antywirusowym",
            "P": "D. szyfrowanie danych w sieci"
        },
        {
            "Pytanie": "Narz\u0119dzie na zdj\u0119ciu s\u0142u\u017cy do",
            "IMG": "https://egzamin-informatyk.pl/e13/419.jpg",
            "B1": "B. Zaciskania wtyk&oacute;w RJ45",
            "B2": "C. \u015aci\u0105gania izolacji",
            "B3": "D. Monta\u017cu modu\u0142u Krone w gniazdach",
            "P": "A. Wykonania zako\u0144cze\u0144 kablowych w z\u0142\u0105czach LSA"
        },
        {
            "Pytanie": "Je\u017celi w konfiguracji karty graficznej zostanie wybrane od\u015bwie\u017canie obrazu wi\u0119ksze od zalecanego, monitor CRT spe\u0142niaj\u0105cy normy TCO 99",
            "IMG": "",
            "B1": "B. nie wy\u0142\u0105czy si\u0119, b\u0119dzie wy\u015bwietla\u0142 jedynie cz\u0119\u015b\u0107 obrazu",
            "B2": "C. ulegnie uszkodzeniu",
            "B3": "D. nie wy\u0142\u0105czy si\u0119, b\u0119dzie wy\u015bwietla\u0142 czarny obraz",
            "P": "A. przejdzie w stan u\u015bpienia lub pojawi si\u0119 okno informacyjne z komunikatem"
        },
        {
            "Pytanie": "Protoko\u0142em pakiet&oacute;w u\u017cytkownika wykonuj\u0105cym us\u0142ug\u0119 bezpo\u0142\u0105czeniowego dostarczania datagram&oacute;w jest",
            "IMG": "",
            "B1": "B. IP",
            "B2": "C. ARP",
            "B3": "D. TCP",
            "P": "A. UDP"
        },
        {
            "Pytanie": "Kt&oacute;ry adres IP w systemie dziesi\u0119tnym odpowiada adresowi IP 10101010.00001111.10100000.11111100 zapisanemu w systemie binarnym?",
            "IMG": "",
            "B1": "A. 170.14.160.252",
            "B2": "B. 171.15.159.252",
            "B3": "C. 171.14.159.252",
            "P": "D. 170.15.160.252"
        },
        {
            "Pytanie": "Poprawny adres komputera dla maski 255.255.255.0, to adres",
            "IMG": "",
            "B1": "A. 192.168.1.255",
            "B2": "B. 122.168.1.0",
            "B3": "D. 122.0.0.255",
            "P": "C. 192.168.1.1"
        },
        {
            "Pytanie": "Wska\u017c adres sieci, do kt&oacute;rej nale\u017cy host o adresie 172.16.0.123/27",
            "IMG": "",
            "B1": "A. 172.16.0.16",
            "B2": "B. 172.16.0.224",
            "B3": "D. 172.16.0.112",
            "P": "C. 172.16.0.96"
        },
        {
            "Pytanie": "Grupowa licencja oprogramowania Microsoft to licencja typu",
            "IMG": "",
            "B1": "A. GNU",
            "B2": "B. OEM",
            "B3": "D. EULA",
            "P": "C. MOLP"
        },
        {
            "Pytanie": "Centralny punkt, z kt&oacute;rego rozprowadzane jest okablowanie szkieletowe, to punkt",
            "IMG": "",
            "B1": "A. dost\u0119powy",
            "B2": "B. abonencki",
            "B3": "D. po\u015bredni",
            "P": "C. dystrybucyjny"
        },
        {
            "Pytanie": "Aby zaktualizowa\u0107 zmiany w konfiguracji systemu operacyjnego Windows wykonane za pomoc\u0105 edytora zasad grup, mo\u017cna pos\u0142u\u017cy\u0107 si\u0119 poleceniem",
            "IMG": "",
            "B1": "A. dompol",
            "B2": "B. restore\n",
            "B3": "C. services",
            "P": "D. gpupdate"
        },
        {
            "Pytanie": "Procesory CISC charakteryzuj\u0105 si\u0119",
            "IMG": "",
            "B1": "A. ograniczan\u0105 komunikacj\u0105 pomi\u0119dzy pami\u0119ci\u0105 a procesorem",
            "B2": "C. prost\u0105 i szybk\u0105 jednostk\u0105 steruj\u0105c\u0105",
            "B3": "D. niewielk\u0105 liczb\u0105 tryb&oacute;w adresowania",
            "P": "B. du\u017c\u0105 liczb\u0105 rozkaz&oacute;w"
        },
        {
            "Pytanie": "Najbardziej zaawansowany tryb pracy portu r&oacute;wnoleg\u0142ego standardu IEEE-1284 tworz\u0105cy dwukierunkow\u0105 magistral\u0119 8-bitow\u0105 mog\u0105c\u0105 przesy\u0142a\u0107 zar&oacute;wno dane, jak i adresy z maksymaln\u0105 szybko\u015bci\u0105 transmisji do 2,3 MB/s, pozwalaj\u0105cy na pod\u0142\u0105czenie do 64 urz\u0105dze\u0144, to",
            "IMG": "",
            "B1": "B. Compatilibility Mode",
            "B2": "C. Byte Mode",
            "B3": "D. Nibble Mode",
            "P": "A. EPP Mode"
        },
        {
            "Pytanie": "Narz\u0119dziem wiersza polece\u0144 w systemie Windows, s\u0142u\u017c\u0105cym do kompresji oraz dekompresji plik&oacute;w i folder&oacute;w, jest program",
            "IMG": "",
            "B1": "B. Expand.exe",
            "B2": "C. CleanMgr.exe",
            "B3": "D. DiskPart.exe",
            "P": "A. Compact.exe"
        },
        {
            "Pytanie": "Komputer utraci\u0142 po\u0142\u0105czenie z sieci\u0105 komputerow\u0105. Jakie dzia\u0142anie nale\u017cy wykona\u0107 w pierwszej kolejno\u015bci, aby rozwi\u0105za\u0107 problem?",
            "IMG": "",
            "B1": "A. Zaktualizowa\u0107 sterownik karty sieciowej",
            "B2": "B. Przelogowa\u0107 si\u0119 na innego u\u017cytkownika",
            "B3": "C. Zaktualizowa\u0107 system operacyjny",
            "P": "D. Sprawdzi\u0107 adres IP przypisany do karty sieciowej"
        },
        {
            "Pytanie": "Aby zwi\u0119kszy\u0107 bezpiecze\u0144stwo zasob&oacute;w sieciowych administrator sieci komputerowej w firmie otrzyma\u0142 polecenie podzielenia istniej\u0105cej lokalnej sieci komputerowej na 16 podsieci. Dotychczasowa sie\u0107 mia\u0142a adres IP 192.168.20.0 z mask\u0105 255.255.255.0. Kt&oacute;r\u0105 mask\u0119 sieci powinien zastosowa\u0107 administrator?",
            "IMG": "",
            "B1": "A. 255.255.255.224",
            "B2": "C. 255.255.255.192",
            "B3": "D. 255.255.255.248",
            "P": "B. 255.255.255.240"
        },
        {
            "Pytanie": "Protoko\u0142em po\u0142\u0105czeniowym warstwy transportowej modelu ISO/OSI jest",
            "IMG": "",
            "B1": "B. UDP",
            "B2": "C. SMTP",
            "B3": "D. ICMP",
            "P": "A. TCP"
        },
        {
            "Pytanie": "Kabel typu skr\u0119tka, w kt&oacute;rej pojedyncza para \u017cy\u0142 jest foliowana oraz ca\u0142o\u015b\u0107 kabla jest w ekranie z folii i siatki, oznacza si\u0119 symbolem",
            "IMG": "",
            "B1": "A. SF/UTP",
            "B2": "B. U/UTP",
            "B3": "C. U/FTP",
            "P": "D. SF/FTP"
        },
        {
            "Pytanie": "Protok&oacute;\u0142 SNMP (Simple Network Management Protocol) jest stosowany do",
            "IMG": "",
            "B1": "B. odbioru poczty elektronicznej",
            "B2": "C. szyfrowania terminalowego po\u0142\u0105czenia z komputerami zdalnymi",
            "B3": "D. przydzielania adres&oacute;w IP oraz adresu bramy i DNS-a",
            "P": "A. konfiguracji urz\u0105dze\u0144 sieciowych i gromadzenia informacji na ich temat"
        },
        {
            "Pytanie": "Ile domen kolizyjnych i rozg\u0142oszeniowych jest widocznych na schemacie?",
            "IMG": "https://egzamin-informatyk.pl/e13/411.jpg",
            "B1": "B. 9 domen kolizyjnych i 1 domena rozg\u0142oszeniowa",
            "B2": "C. 1 domena kolizyjna i 9 domen rozg\u0142oszeniowych",
            "B3": "D. 4 domeny kolizyjne i 9 domen rozg\u0142oszeniowych",
            "P": "A. 9 domen kolizyjnych i 4 domeny rozg\u0142oszeniowe"
        },
        {
            "Pytanie": "Drukark\u0119 zainstalowano w systemie z rodziny Windows. Aby ustawi\u0107 mi\u0119dzy innymi domy\u015bln\u0105 orientacj\u0119 wydruku, liczb\u0119 stron na arkusz oraz dostosowanie kolor&oacute;w, podczas jej konfiguracji nale\u017cy wykorzysta\u0107 opcj\u0119",
            "IMG": "",
            "B1": "B. zabezpieczenia drukarki",
            "B2": "C. udost\u0119pniania drukarki",
            "B3": "D. prawa drukowania",
            "P": "A. preferencji drukowania"
        },
        {
            "Pytanie": "Toner jest materia\u0142em eksploatacyjnym drukarki",
            "IMG": "",
            "B1": "A. sublimacyjnej",
            "B2": "B. atramentowej",
            "B3": "D. ig\u0142owej",
            "P": "C. laserowej"
        },
        {
            "Pytanie": "Do po\u0142\u0105czenia kilku komputer&oacute;w w sie\u0107 lokaln\u0105 mo\u017cna u\u017cy\u0107",
            "IMG": "",
            "B1": "A. RAMDAC",
            "B2": "B. modem",
            "B3": "D. most",
            "P": "C. router"
        },
        {
            "Pytanie": "Administrator sieci komputerowej chce sprawdzi\u0107 na komputerze z systemem operacyjnym Windows, kt&oacute;re po\u0142\u0105czenia s\u0105 obecnie zestawiane oraz porty, na kt&oacute;rych komputer nas\u0142uchuje. W tym celu powinien zastosowa\u0107 polecenie ",
            "IMG": "",
            "B1": "A. tracert",
            "B2": "C. ping",
            "B3": "D. arp",
            "P": "B. netstat"
        },
        {
            "Pytanie": "Zu\u017cyte urz\u0105dzenie elektryczne lub elektroniczne, na kt&oacute;rym umieszczony jest znak przedstawiony na rysunku, nale\u017cy",
            "IMG": "https://egzamin-informatyk.pl/e12/485.jpg",
            "B1": "A. Wyrzuci\u0107 do pojemnik&oacute;w na \u015bmieci bytowe",
            "B2": "B. Przekaza\u0107 do punktu skupu z\u0142omu",
            "B3": "C. Wyrzuci\u0107 do pojemnik&oacute;w oznaczonych tym znakiem",
            "P": "D. Przekaza\u0107 do punktu odbioru zu\u017cytej elektroniki"
        },
        {
            "Pytanie": "Kt&oacute;ra polska norma okre\u015bla standardy okablowania strukturalnego?",
            "IMG": "",
            "B1": "B. TSB-67",
            "B2": "C. ISO/IEC 11801",
            "B3": "D. EIA/TIA 568-A",
            "P": "A. PN-EN 50173"
        },
        {
            "Pytanie": "Typem pami\u0119ci operacyjnej o mo\u017cliwie najmniejszym poborze mocy jest",
            "IMG": "",
            "B1": "A. SDR",
            "B2": "B. DDR2",
            "B3": "D. DDR",
            "P": "C. DDR3"
        },
        {
            "Pytanie": "Okre\u015bl przyczyn\u0119 wyst\u0105pienia komunikatu, kt&oacute;ry jest przedstawiony na rysunku",
            "IMG": "https://egzamin-informatyk.pl/e13/806.jpg",
            "B1": "B. Brak zainstalowanego programu antywirusowego",
            "B2": "C. Wy\u0142\u0105czony Firewall",
            "B3": "D. Niew\u0142a\u015bciwa przegl\u0105darka",
            "P": "A. Problem z weryfikacj\u0105 certyfikatu bezpiecze\u0144stwa"
        },
        {
            "Pytanie": "Na zdj\u0119ciu przedstawiono p\u0142yt\u0119 g\u0142&oacute;wn\u0105 komputera. Strza\u0142k\u0105 oznaczono",
            "IMG": "https://egzamin-informatyk.pl/old/74.jpg",
            "B1": "A. chip wbudowanej karty graficznej",
            "B2": "C. procesor z umocowanym\nradiatorem",
            "B3": "D. kontroler mostka po\u0142udniowego",
            "P": "B. kontroler mostka p&oacute;\u0142nocnego\nz umocowanym radiatorem"
        },
        {
            "Pytanie": "Us\u0142uga o nazwie: &quot;Pulpit zdalny&quot; domy\u015blnie dzia\u0142a na porcie",
            "IMG": "",
            "B1": "B. 3390",
            "B2": "C. 3369",
            "B3": "D. 3379",
            "P": "A. 3389"
        },
        {
            "Pytanie": "Kt&oacute;ry z protoko\u0142&oacute;w przesy\u0142a datagramy u\u017cytkownika NIE GWARANTUJ\u0104C ich dostarczenia?",
            "IMG": "",
            "B1": "A. ICMP",
            "B2": "B. TCP",
            "B3": "C. HTTP",
            "P": "D. UDP"
        },
        {
            "Pytanie": "Kt&oacute;re polecenie w systemie Linux umo\u017cliwia przydzielanie praw do plik&oacute;w i katalog&oacute;w?",
            "IMG": "",
            "B1": "A. mkdir",
            "B2": "B. gedit",
            "B3": "D. adduser",
            "P": "C. chmod"
        },
        {
            "Pytanie": "U\u017cytkownik chce zabezpieczy\u0107 mechanicznie dane na karcie pami\u0119ci przed przypadkowym skasowaniem. Takie zabezpieczenie umo\u017cliwia karta",
            "IMG": "",
            "B1": "A. CF",
            "B2": "B. MMC",
            "B3": "C. MS",
            "P": "D. SD"
        },
        {
            "Pytanie": "Niezale\u017cn\u0105 struktur\u0105 sieci WLAN jest",
            "IMG": "",
            "B1": "A. ESS",
            "B2": "B. BSS1",
            "B3": "D. BSS",
            "P": "C. IBSS"
        },
        {
            "Pytanie": "Kt&oacute;re z polece\u0144 systemu Linux powoduje zako\u0144czenie procesu?",
            "IMG": "",
            "B1": "A. null",
            "B2": "B. end",
            "B3": "C. dead",
            "P": "D. kill"
        },
        {
            "Pytanie": "Na rysunku przedstawiono kabel z wtyczkami",
            "IMG": "https://egzamin-informatyk.pl/e12/538.jpg",
            "B1": "A. Berg",
            "B2": "B. ATA",
            "B3": "C. Molex",
            "P": "D. SATA"
        },
        {
            "Pytanie": "SuperPi to program wykorzystywany do sprawdzenia",
            "IMG": "",
            "B1": "A. ilo\u015bci niewykorzystanej pami\u0119ci operacyjnej RAM",
            "B2": "C. wydajno\u015bci dysk&oacute;w twardych",
            "B3": "D. obci\u0105\u017cenia i wydajno\u015bci kart graficznych",
            "P": "B. wydajno\u015bci procesor&oacute;w o zwi\u0119kszonej cz\u0119stotliwo\u015bci"
        },
        {
            "Pytanie": "Na rysunku przedstawiono wynik testu okablowania. Zinterpretuj wynik pomiaru.",
            "IMG": "https://egzamin-informatyk.pl/ee08/1909.jpg",
            "B1": "A. Rozdzielenie pary",
            "B2": "C. Odwr&oacute;cenie pary",
            "B3": "D. B\u0142\u0105d rozwarcia",
            "P": "B. B\u0142\u0105d zwarcia"
        },
        {
            "Pytanie": "Co oznacza zwrot &quot;wykonanie backupu systemu&quot;?",
            "IMG": "",
            "B1": "B. Ponowne uruchomienie systemu",
            "B2": "C. Wykonanie aktualizacji systemu",
            "B3": "D. Zamkni\u0119cie systemu",
            "P": "A. Wykonanie kopii zapasowej systemu"
        },
        {
            "Pytanie": "Blok funkcjonalny RAMDAC na schemacie blokowym przedstawia",
            "IMG": "https://egzamin-informatyk.pl/old/168.jpg",
            "B1": "A. pami\u0119\u0107 ROM karty graficznej",
            "B2": "B. przetwornik analogowo-cyfrowy z pami\u0119ci\u0105 RAM",
            "B3": "C. pami\u0119\u0107 RAM karty graficznej",
            "P": "D. przetwornik cyfrowo-analogowy z pami\u0119ci\u0105 RAM"
        },
        {
            "Pytanie": "Kt&oacute;ra antena charakteryzuje si\u0119 najwi\u0119kszym zyskiem energetycznym oraz umo\u017cliwia zestawienie po\u0142\u0105czenia na du\u017c\u0105 odleg\u0142o\u015b\u0107?",
            "IMG": "",
            "B1": "A. Dipolowa",
            "B2": "B. Izotropowa",
            "B3": "C. Mikropaskowa",
            "P": "D. Paraboliczna"
        },
        {
            "Pytanie": "Kt&oacute;ra licencja umo\u017cliwia bezp\u0142atne wykorzystywanie programu, pod warunkiem, \u017ce u\u017cytkownik zatroszczy si\u0119 o \u015brodowisko naturalne?",
            "IMG": "",
            "B1": "A. OEM",
            "B2": "C. Adware",
            "B3": "D. Donationware",
            "P": "B. Greenware"
        },
        {
            "Pytanie": "W celu uzyskania w sieci lokalnej pr\u0119dko\u015bci przesy\u0142ania danych 100 Mbps zastosowano karty sieciowe pracuj\u0105ce w standardzie Fast Ethernet, kabel standardu UTP w odpowiedniej kategorii oraz prze\u0142\u0105cznik (switch) pracuj\u0105cy w standardzie Fast Ethernet. Sie\u0107 taka jest wykonana w topologii",
            "IMG": "",
            "B1": "A. BUS",
            "B2": "B. RING",
            "B3": "C. IEEE",
            "P": "D. STAR"
        },
        {
            "Pytanie": "W tabeli zamieszczono dane katalogowe procesora AMD Athlon 1333 Model 4 Thunderbird. Z jak\u0105 cz\u0119stotliwo\u015bci\u0105 realizowane s\u0105 przes\u0142ania mi\u0119dzyrejestrowe?",
            "IMG": "https://egzamin-informatyk.pl/old/582.jpg",
            "B1": "A. 133 MHz",
            "B2": "C. 2666 MHz",
            "B3": "D. 266 MHz",
            "P": "B. 1333 MHz"
        },
        {
            "Pytanie": "W ramce zamieszczono zawarto\u015b\u0107 jednego z plik&oacute;w systemu operacyjnego MS Windows. Jest to plik",
            "IMG": "https://egzamin-informatyk.pl/old/717.jpg",
            "B1": "A. wykonywalny, uruchamiaj\u0105cy edytor rejestru systemu",
            "B2": "C. wsadowy, s\u0142u\u017c\u0105cy do uruchamiania instalatora",
            "B3": "D. dziennika, zawieraj\u0105cy informacje o zainstalowanych urz\u0105dzeniach",
            "P": "B. tekstowy, zawieraj\u0105cy list\u0119 zainstalowanych system&oacute;w operacyjnych"
        },
        {
            "Pytanie": "W systemie Linux informacje o okresie wa\u017cno\u015bci has\u0142a s\u0105 zapisane w pliku",
            "IMG": "",
            "B1": "A. bash",
            "B2": "B. grub",
            "B3": "C. passwd",
            "P": "D. shadow"
        },
        {
            "Pytanie": "Przed wykonaniem prac serwisowych zwi\u0105zanych z modyfikacj\u0105 rejestru systemu Windows nale\u017cy wykona\u0107",
            "IMG": "",
            "B1": "A. oczyszczanie dysku",
            "B2": "C. czyszczenie rejestru",
            "B3": "D. defragmentacj\u0119 dysku",
            "P": "B. kopi\u0119 rejestru"
        },
        {
            "Pytanie": "Serwer Windows z zainstalowan\u0105 us\u0142ug\u0105 Active Directory nazywa si\u0119",
            "IMG": "",
            "B1": "A. serwerem plik&oacute;w",
            "B2": "C. serwerem DHCP",
            "B3": "D. serwerem WWW",
            "P": "B. kontrolerem domeny"
        },
        {
            "Pytanie": "Dostarczanie nieprawid\u0142owych napi\u0119\u0107 do p\u0142yty g\u0142&oacute;wnej mo\u017ce prowadzi\u0107 do",
            "IMG": "",
            "B1": "B. wyst\u0105pienia b\u0142\u0119d&oacute;w pami\u0119ci RAM",
            "B2": "C. braku mo\u017cliwo\u015bci instalacji oprogramowania",
            "B3": "D. uruchomienia si\u0119 jednostki centralnej z kolorowymi pasami i kreskami na ekranie",
            "P": "A. puchni\u0119cia kondensator&oacute;w, zawieszania si\u0119 jednostki centralnej oraz niespodziewanych restart&oacute;w"
        },
        {
            "Pytanie": "W systemie operacyjnym Linux archiwizacj\u0119 danych wykonuje si\u0119 poleceniem",
            "IMG": "",
            "B1": "B. rpm",
            "B2": "C. cmd",
            "B3": "D. chmod",
            "P": "A. tar"
        },
        {
            "Pytanie": "Kt&oacute;ry protok&oacute;\u0142 s\u0142u\u017cy do szyfrowanego terminalowego \u0142\u0105czenia si\u0119 ze zdalnym komputerem?",
            "IMG": "",
            "B1": "A. SSL",
            "B2": "B. SIP",
            "B3": "C. Telnet",
            "P": "D. SSH"
        },
        {
            "Pytanie": "Narz\u0119dzie przedstawione na rysunku jest stosowane do",
            "IMG": "https://egzamin-informatyk.pl/e13/749.jpg",
            "B1": "A. \u015bci\u0105gania izolacji z kabla",
            "B2": "B. zaciskania wtyk&oacute;w RJ45",
            "B3": "D. sprawdzania poprawno\u015bci po\u0142\u0105czenia",
            "P": "C. instalacji przewod&oacute;w w z\u0142\u0105czach LSA"
        },
        {
            "Pytanie": "W cenniku us\u0142ug komputerowych znajduj\u0105 si\u0119 przedstawione ni\u017cej zapisy. Ile b\u0119dzie wynosi\u0142 koszt dojazdu serwisanta do klienta mieszkaj\u0105cego poza miastem, w odleg\u0142o\u015bci 15km od siedziby firmy?",
            "IMG": "https://egzamin-informatyk.pl/e12/758.jpg",
            "B1": "B. 30 z\u0142 + VAT",
            "B2": "C. 25 z\u0142 + 2 z\u0142 za ka\u017cdy km poza granicami miasta",
            "B3": "D. 30 z\u0142",
            "P": "A. 60 z\u0142 + VAT"
        },
        {
            "Pytanie": "Najszybsz\u0105 mo\u017cliw\u0105 transmisj\u0119 danych w sieci bezprzewodowej umo\u017cliwia standard",
            "IMG": "",
            "B1": "B. 802.11b",
            "B2": "C. 802.11g",
            "B3": "D. 802.11a",
            "P": "A. 802.11n"
        },
        {
            "Pytanie": "Komputer A, kt&oacute;ry musi przes\u0142a\u0107 dane do komputera B pracuj\u0105cego w sieci o innym adresie IP, w pierwszej kolejno\u015bci przesy\u0142a pakiety na adres IP",
            "IMG": "",
            "B1": "A. komputera docelowego",
            "B2": "B. alternatywnego serwera DNS",
            "B3": "C. serwera DNS",
            "P": "D. bramy domy\u015blnej"
        },
        {
            "Pytanie": "Schemat blokowy przedstawia",
            "IMG": "https://egzamin-informatyk.pl/old/86.jpg",
            "B1": "A. nap\u0119d DVD-ROM",
            "B2": "B. nap\u0119d dyskietek",
            "B3": "D. streamer",
            "P": "C. dysk twardy"
        },
        {
            "Pytanie": "Kt&oacute;ry z symboli oznacza prze\u0142\u0105cznik?",
            "IMG": "https://egzamin-informatyk.pl/e13/614.jpg",
            "B1": "A. A",
            "B2": "B. B",
            "B3": "C. C",
            "P": "D. D"
        },
        {
            "Pytanie": "W hurtowni materia\u0142&oacute;w budowlanych istnieje konieczno\u015b\u0107 jednoczesnego drukowania faktur w kilku egzemplarzach. Nale\u017cy u\u017cy\u0107 drukarki",
            "IMG": "",
            "B1": "A. termosublimacyjnej",
            "B2": "B. laserowej",
            "B3": "C. atramentowej",
            "P": "D. ig\u0142owej"
        },
        {
            "Pytanie": "Zgodnie ze specyfikacj\u0105 JEDEC typowe napi\u0119cie zasilania modu\u0142&oacute;w niskonapi\u0119ciowych pami\u0119ci RAM DDR3L wynosi",
            "IMG": "",
            "B1": "B. 1.20 V",
            "B2": "C. 1.50 V",
            "B3": "D. 1.65 V",
            "P": "A. 1.35 V"
        },
        {
            "Pytanie": "Do zdalnego zarz\u0105dzania stacjami roboczymi nie jest stosowany ",
            "IMG": "",
            "B1": "B. pulpit zdalny",
            "B2": "C. program TeamViewer",
            "B3": "D. program Ultra VNC",
            "P": "A. program Wireshark"
        },
        {
            "Pytanie": "Ile maksymalnie dysk&oacute;w twardych mo\u017cna pod\u0142\u0105czy\u0107 bezpo\u015brednio do p\u0142yty g\u0142&oacute;wnej, kt&oacute;rej fragment specyfikacji przedstawiono w ramce?",
            "IMG": "https://egzamin-informatyk.pl/old/722.jpg",
            "B1": "A. 2",
            "B2": "C. 4",
            "B3": "D. 8",
            "P": "B. 5"
        },
        {
            "Pytanie": "Kt&oacute;re urz\u0105dzenie s\u0142u\u017cy do po\u0142\u0105czenia sieci lokalnej z sieci\u0105 rozleg\u0142\u0105?",
            "IMG": "",
            "B1": "A. Prze\u0142\u0105cznik",
            "B2": "B. Koncentrator",
            "B3": "D. Most",
            "P": "C. Router"
        },
        {
            "Pytanie": "Zdj\u0119cie przedstawia 168-stykow\u0105 pami\u0119\u0107\n",
            "IMG": "https://egzamin-informatyk.pl/old/633.jpg",
            "B1": "A. SIPP",
            "B2": "B. RIMM",
            "B3": "D. SIMM",
            "P": "C. SDRAM"
        },
        {
            "Pytanie": "Aby po\u0142\u0105czy\u0107 komputer z sieci\u0105 LAN, nale\u017cy wykorzysta\u0107 interfejs",
            "IMG": "",
            "B1": "A. D-SUB",
            "B2": "B. S/PDIF",
            "B3": "D. LPT",
            "P": "C. RJ-45"
        },
        {
            "Pytanie": "Wymieniaj\u0105c uszkodzon\u0105 kart\u0119 graficzn\u0105, kt&oacute;ra wsp&oacute;\u0142pracowa\u0142a z monitorem wyposa\u017conym tylko w wej\u015bcie analogowe, nale\u017cy wybra\u0107 kart\u0119",
            "IMG": "",
            "B1": "A. ZOTAC GeForce GT 730 Synergy Edition, 4GB DDR3 (128 Bit), 2xDVI, miniHDMI",
            "B2": "B. Sapphire Radeon R7 250, 1GB GDDR5 (128 Bit), microHDMI, DVI, miniDP LP, BULK",
            "B3": "D. Sapphire Radeon R7 250X FLEX, 1GB GDDR5 (128 Bit), HDMI, 2xDVI, DP, LITE",
            "P": "C. Gigabyte GeForce GT 740 OC, 1GB GDDR5 (128 Bit), HDMI, DVI, D-Sub"
        },
        {
            "Pytanie": "Kt&oacute;re urz\u0105dzenie w sieci lokalnej NIE DZIELI obszaru sieci komputerowej na domeny kolizyjne?",
            "IMG": "",
            "B1": "A. Most",
            "B2": "B. Router",
            "B3": "C. Prze\u0142\u0105cznik",
            "P": "D. Koncentrator"
        },
        {
            "Pytanie": "Urz\u0105dzenie sieciowe pracuj\u0105ce w trzeciej warstwie modelu ISO/OSI, operuj\u0105cej na adresach IP, to",
            "IMG": "",
            "B1": "A. hub",
            "B2": "B. repeater",
            "B3": "C. bridge",
            "P": "D. router"
        },
        {
            "Pytanie": "Oznaczenie przedstawionego procesora informuje o",
            "IMG": "https://egzamin-informatyk.pl/ee08/1930.jpg",
            "B1": "A. jego ma\u0142ej obudowie",
            "B2": "B. wersji mobilnej procesora",
            "B3": "D. bardzo niskim zu\u017cyciu energii przez procesor",
            "P": "C. braku blokady mno\u017cnika (unlocked)"
        },
        {
            "Pytanie": "Jest to najnowsza wersja klienta wieloplatformowego, cenionego przez u\u017cytkownik&oacute;w na ca\u0142ym \u015bwiecie, serwera wirtualnej sieci prywatnej, pozwalaj\u0105cego na zestawienie pomi\u0119dzy hostem a komputerem lokalnym po\u0142\u0105czenia, obs\u0142uguj\u0105cego uwierzytelnianie z u\u017cyciem kluczy, jak r&oacute;wnie\u017c certyfikat&oacute;w, nazwy u\u017cytkownika i has\u0142a, a tak\u017ce, w wersji dla Windows, dodatkowych kart. Kt&oacute;ry z program&oacute;w zosta\u0142 opisany przed chwil\u0105?",
            "IMG": "",
            "B1": "A. TinghtVNC",
            "B2": "B. Ethereal",
            "B3": "C. Putty",
            "P": "D. OpenVPN"
        },
        {
            "Pytanie": "Do zarz\u0105dzania programami i us\u0142ugami uruchamianymi wraz ze startem systemu operacyjnego w Windows 7 nale\u017cy wykorzysta\u0107 program",
            "IMG": "",
            "B1": "B. autoexec.bat",
            "B2": "C. autorun.inf",
            "B3": "D. config.sys",
            "P": "A. msconfig.exe"
        },
        {
            "Pytanie": "Bezprzewodowy dost\u0119p komputera do sieci Internet poprzez tzw hotspot b\u0119dzie mo\u017cliwy po zainstalowaniu w nim karty sieciowej wyposa\u017conej w",
            "IMG": "",
            "B1": "A. gniazdo RJ-45",
            "B2": "C. z\u0142\u0105cze USB",
            "B3": "D. interfejs RS-232C",
            "P": "B. modu\u0142 WiFi"
        },
        {
            "Pytanie": "Aby uporz\u0105dkowa\u0107 pliki na dysku w celu przyspieszenia pracy systemu, nale\u017cy:",
            "IMG": "",
            "B1": "A. przeskanowa\u0107 dysk programem antywirusowym",
            "B2": "B. odinstalowa\u0107 nieu\u017cywane programy",
            "B3": "D. usun\u0105\u0107 pliki tymczasowe",
            "P": "C. wykona\u0107 defragmentacj\u0119"
        },
        {
            "Pytanie": "System S.M.A.R.T. s\u0142u\u017cy do monitorowania pracy i wykrywania b\u0142\u0119d&oacute;w",
            "IMG": "",
            "B1": "B. p\u0142yty g\u0142&oacute;wnej",
            "B2": "C. kart rozszerze\u0144",
            "B3": "D. nap\u0119d&oacute;w p\u0142yt CD/DVD",
            "P": "A. dysk&oacute;w twardych"
        },
        {
            "Pytanie": "Zasilanie dostarczane przez p\u0142yt\u0119 g\u0142&oacute;wn\u0105 dla pami\u0119ci typu SDRAM DDR3 mo\u017ce mie\u0107 warto\u015b\u0107",
            "IMG": "",
            "B1": "B. 3,3 V",
            "B2": "C. 2,5 V",
            "B3": "D. 1,2 V",
            "P": "A. 1,5 V"
        },
        {
            "Pytanie": "W celu odseparowania od siebie komputer&oacute;w pracuj\u0105cych w sieci o tym samym adresie IPv4 pod\u0142\u0105czonych do prze\u0142\u0105cznika zarz\u0105dzalnego nale\u017cy przypisa\u0107",
            "IMG": "",
            "B1": "A. statyczne adresy MAC komputer&oacute;w do nieu\u017cywanych interfejs&oacute;w",
            "B2": "C. nieu\u017cywane interfejsy do r&oacute;\u017cnych VLAN-&oacute;w",
            "B3": "D. statyczne adresy MAC komputer&oacute;w do u\u017cywanych interfejs&oacute;w",
            "P": "B. u\u017cywane interfejsy do r&oacute;\u017cnych VLAN-&oacute;w"
        },
        {
            "Pytanie": "Kt&oacute;ra us\u0142uga musi by\u0107 uruchomiona w sieci, aby mo\u017cna by\u0142o na stacji roboczej automatycznie uzyska\u0107 adres IP?",
            "IMG": "",
            "B1": "A. DNS",
            "B2": "C. WINS",
            "B3": "D. PROXY",
            "P": "B. DHCP"
        },
        {
            "Pytanie": "Na schemacie blokowym karty d\u017awi\u0119kowej element zmieniaj\u0105cy sygna\u0142 analogowy na sygna\u0142 cyfrowy jest oznaczony cyfr\u0105",
            "IMG": "https://egzamin-informatyk.pl/old/641.jpg",
            "B1": "B. 3",
            "B2": "C. 2",
            "B3": "D. 5",
            "P": "A. 4"
        },
        {
            "Pytanie": "Urz\u0105dzeniem wskazuj\u0105cym jest",
            "IMG": "",
            "B1": "A. skaner",
            "B2": "B. pami\u0119\u0107 USB",
            "B3": "D. drukarka",
            "P": "C. ekran dotykowy"
        },
        {
            "Pytanie": "Wska\u017c 24-pinowe lub 29-pinowe z\u0142\u0105cze \u017censkie, kt&oacute;re mo\u017ce przesy\u0142a\u0107 skompresowany cyfrowy sygna\u0142 na monitor.",
            "IMG": "",
            "B1": "A. RCA",
            "B2": "B. VGA",
            "B3": "C. HDMI",
            "P": "D. DVI"
        },
        {
            "Pytanie": "Adres IP komputera wyra\u017cony sekwencj\u0105 172.16.0.1 jest zapisany w systemie",
            "IMG": "",
            "B1": "A. dw&oacute;jkowym",
            "B2": "B. szesnastkowym",
            "B3": "C. &oacute;semkowym",
            "P": "D. dziesi\u0119tnym"
        },
        {
            "Pytanie": "Na schemacie blokowym procesora blok funkcyjny nazwany SIMD to",
            "IMG": "https://egzamin-informatyk.pl/old/82.jpg",
            "B1": "A. zestaw 256 bitowych rejestr&oacute;w znacznie przyspieszaj\u0105cy obliczenia na liczbach sta\u0142opozycyjnych",
            "B2": "B. modu\u0142 procesora realizuj\u0105cy wy\u0142\u0105cznie operacje graficzne",
            "B3": "C. jednostka zmiennoprzecinkowa procesora (koprocesor)",
            "P": "D. zestaw 128 bitowych rejestr&oacute;w niezb\u0119dny przy wykonywaniu instrukcji SSE procesora na liczbach sta\u0142o- i zmiennoprzecinkowych"
        },
        {
            "Pytanie": "Zapisywanie kluczy rejestru do pliku nazywamy",
            "IMG": "",
            "B1": "B. kopiowaniem rejestru",
            "B2": "C. modyfikacj\u0105 rejestru",
            "B3": "D. edycj\u0105 rejestru",
            "P": "A. eksportowaniem rejestru"
        },
        {
            "Pytanie": "Aby m&oacute;c tworzy\u0107 konta u\u017cytkownik&oacute;w, komputer&oacute;w i innych obiekt&oacute;w oraz przechowywa\u0107 centralnie informacje o nich, nale\u017cy na serwerze Windows zainstalowa\u0107 rol\u0119",
            "IMG": "",
            "B1": "A. us\u0142ugi Domain Name System w us\u0142udze Active Directory",
            "B2": "B. us\u0142ugi certyfikat&oacute;w Active Directory",
            "B3": "D. Active Directory Federation Service",
            "P": "C. us\u0142ugi domenowe Active Directory"
        },
        {
            "Pytanie": "Ataki na systemy komputerowe polegaj\u0105ce na podst\u0119pnym wy\u0142udzaniu od u\u017cytkownika jego osobistych danych, przy wykorzystaniu zazwyczaj formy fa\u0142szywych powiadomie\u0144 z instytucji czy od dostawc&oacute;w system&oacute;w e-p\u0142atno\u015bci i innych og&oacute;lnie znanych organizacji, to",
            "IMG": "",
            "B1": "A. brute force",
            "B2": "B. DDoS",
            "B3": "D. SYN flooding",
            "P": "C. phishing"
        },
        {
            "Pytanie": "Pierwsze znaki heksadecymalne adresu IPv6 typu link-local to",
            "IMG": "",
            "B1": "A. FF30",
            "B2": "C. 2000",
            "B3": "D. 3000",
            "P": "B. FE80"
        },
        {
            "Pytanie": "Najlepsze zabezpieczenie komputera przed wirusami stanowi zainstalowanie",
            "IMG": "",
            "B1": "B. licencjonowanego systemu operacyjnego",
            "B2": "C. zapory FireWall",
            "B3": "D. has\u0142a dla BIOS-u",
            "P": "A. skanera antywirusowego"
        },
        {
            "Pytanie": "Jak nazywa si\u0119 w systemie Windows profil u\u017cytkownika tworzony podczas pierwszego logowania do komputera i przechowywany na lokalnym dysku twardym komputera, a ka\u017cda jego zmiana dotyczy jedynie komputera, na kt&oacute;rym zosta\u0142a wprowadzona?",
            "IMG": "",
            "B1": "A. Obowi\u0105zkowy",
            "B2": "B. Tymczasowy",
            "B3": "C. Mobilny",
            "P": "D. Lokalny"
        },
        {
            "Pytanie": "Z jakiego systemu plik&oacute;w nale\u017cy skorzysta\u0107 instaluj\u0105c Linuxa, by mie\u0107 mo\u017cliwo\u015b\u0107 definiowania uprawnie\u0144 do plik&oacute;w i folder&oacute;w?",
            "IMG": "",
            "B1": "A. NTFS",
            "B2": "B. ISO9660",
            "B3": "D. FAT32",
            "P": "C. EXT2"
        },
        {
            "Pytanie": "Na rysunku przedstawiono komunikat systemowy. Jakie dzia\u0142anie powinien wykona\u0107 u\u017cytkownik, aby usun\u0105\u0107 b\u0142\u0105d?",
            "IMG": "https://egzamin-informatyk.pl/ee08/1893.jpg",
            "B1": "B. Pod\u0142\u0105czy\u0107 monitor do z\u0142\u0105cza HDMI",
            "B2": "C. Zainstalowa\u0107 sterownik do Karty HD Graphics",
            "B3": "D. Od\u015bwie\u017cy\u0107 okno Mened\u017cer urz\u0105dze\u0144",
            "P": "A. Zainstalowa\u0107 sterownik do karty graficznej"
        },
        {
            "Pytanie": "Kopi\u0119 danych w systemie Linux mo\u017cna wykona\u0107 za pomoc\u0105 polecenia",
            "IMG": "",
            "B1": "A. split",
            "B2": "C. restore",
            "B3": "D. tac",
            "P": "B. dd"
        },
        {
            "Pytanie": "Zadaniem us\u0142ugi DNS jest",
            "IMG": "",
            "B1": "A. translacja adres&oacute;w IP na nazwy domenowe",
            "B2": "C. sprawdzenie poprawno\u015bci adres&oacute;w IP",
            "B3": "D. sprawdzanie poprawno\u015bci adres&oacute;w domenowych",
            "P": "B. translacja nazw domenowych na adresy IP"
        },
        {
            "Pytanie": "Translacja adres&oacute;w sieciowych jest oznaczona skr&oacute;tem",
            "IMG": "",
            "B1": "A. IDS",
            "B2": "B. SPI",
            "B3": "D. DMZ",
            "P": "C. NAT"
        },
        {
            "Pytanie": "W firmie zainstalowano pi\u0119\u0107 komputer&oacute;w o adresach kart sieciowych podanych w tabeli. W zwi\u0105zku z tym mo\u017cna wyr&oacute;\u017cni\u0107",
            "IMG": "https://egzamin-informatyk.pl/old/530.jpg",
            "B1": "A. 5 podsieci",
            "B2": "C. 2 podsieci",
            "B3": "D. 1 sie\u0107",
            "P": "B. 3 podsieci"
        },
        {
            "Pytanie": "Rozdzielczo\u015b\u0107 optyczna to jeden z parametr&oacute;w",
            "IMG": "",
            "B1": "B. monitora",
            "B2": "C. modemu",
            "B3": "D. drukarki",
            "P": "A. skanera"
        },
        {
            "Pytanie": "Kt&oacute;re medium transmisyjne zapewnia najmniejsze nara\u017cenie na zak\u0142&oacute;cenia elektromagnetyczne przesy\u0142anego sygna\u0142u?",
            "IMG": "",
            "B1": "A. Gruby kabel koncentryczny",
            "B2": "B. Cienki kabel koncentryczny",
            "B3": "C. Czteroparowy kabel FTP",
            "P": "D. Kabel \u015bwiat\u0142owodowy"
        },
        {
            "Pytanie": "Co nie powinno by\u0107 miejscem przechowywania kopii bezpiecze\u0144stwa danych znajduj\u0105cych si\u0119 na dysku twardym komputera?",
            "IMG": "",
            "B1": "A. Dysk zewn\u0119trzny",
            "B2": "B. Pami\u0119\u0107 USB",
            "B3": "C. P\u0142yta CD/DVD",
            "P": "D. Inna partycja dysku tego komputera"
        },
        {
            "Pytanie": "Kt&oacute;ry z protoko\u0142&oacute;w jest protoko\u0142em po\u0142\u0105czeniowym?",
            "IMG": "",
            "B1": "B. ARP",
            "B2": "C. IP",
            "B3": "D. UDP",
            "P": "A. TCP"
        },
        {
            "Pytanie": "Przedstawiony schemat obrazuje zasad\u0119 dzia\u0142ania skanera",
            "IMG": "https://egzamin-informatyk.pl/e12/614.jpg",
            "B1": "A. b\u0119bnowego",
            "B2": "B. r\u0119cznego",
            "B3": "D. p\u0142askiego",
            "P": "C. 3D"
        },
        {
            "Pytanie": "Do oprogramowania typu malware (z ang. malicious software) nie nale\u017cy oprogramowanie typu:",
            "IMG": "",
            "B1": "A. scumware",
            "B2": "C. exploit",
            "B3": "D. keylogger",
            "P": "B. computer aided manufacturing"
        },
        {
            "Pytanie": "Kt&oacute;re elementy systemu komputerowego podlegaj\u0105 utylizacji w wyspecjalizowanych zak\u0142adach przetwarzania z uwagi na zawarto\u015b\u0107 niebezpiecznych substancji lub pierwiastk&oacute;w chemicznych?",
            "IMG": "",
            "B1": "A. Przewody",
            "B2": "B. Obudowy komputer&oacute;w",
            "B3": "C. Radiatory",
            "P": "D. Tonery"
        },
        {
            "Pytanie": "Hosty A i B nie komunikuj\u0105 si\u0119 z hostem C. Mi\u0119dzy hostami A i B komunikacja jest prawid\u0142owa. Co jest przyczyn\u0105 braku komunikacji mi\u0119dzy hostami A i C oraz B i C?",
            "IMG": "https://egzamin-informatyk.pl/e13/318.jpg",
            "B1": "A. Switch, do kt&oacute;rego s\u0105 podpi\u0119te hosty, jest wy\u0142\u0105czony",
            "B2": "C. Host C ma \u017ale ustawion\u0105 bram\u0119 domy\u015bln\u0105",
            "B3": "D. Adres IP hosta C jest adresem rozg\u0142oszeniowym",
            "P": "B. Adresy IP nale\u017c\u0105 do r&oacute;\u017cnych podsieci"
        },
        {
            "Pytanie": "W dokumentacji p\u0142yty g\u0142&oacute;wnej jest informacja &bdquo;Wsparcie dla S/PDIF Out&rdquo;. Oznacza to, \u017ce dana p\u0142yta g\u0142&oacute;wna zawiera",
            "IMG": "",
            "B1": "A. analogowe z\u0142\u0105cze sygna\u0142u wej\u015bcia video",
            "B2": "C. cyfrowe z\u0142\u0105cze sygna\u0142u video",
            "B3": "D. analogowe z\u0142\u0105cze sygna\u0142u wyj\u015bcia video",
            "P": "B. cyfrowe z\u0142\u0105cze sygna\u0142u audio"
        },
        {
            "Pytanie": "Kt&oacute;r\u0105 z opcji menu prze\u0142\u0105cznika nale\u017cy wybra\u0107, by przywr&oacute;ci\u0107 mu ustawienia fabryczne?",
            "IMG": "https://egzamin-informatyk.pl/e13/513.jpg",
            "B1": "B. Save Configuration",
            "B2": "C. Firmware Upgrade",
            "B3": "D. Reboot Device",
            "P": "A. Reset System"
        },
        {
            "Pytanie": "Do serwisu komputerowego dostarczono laptopa z matryc\u0105 bardzo s\u0142abo wy\u015bwietlaj\u0105c\u0105 obraz. Ponadto obraz jest bardzo ciemny i widoczny tylko z bliska. Przyczyna usterki to",
            "IMG": "",
            "B1": "A. uszkodzone \u0142\u0105cze mi\u0119dzy procesorem a matryc\u0105",
            "B2": "B. uszkodzone gniazdo HDMI",
            "B3": "D. p\u0119kni\u0119ta matryca",
            "P": "C. uszkodzony inwerter"
        },
        {
            "Pytanie": "Urz\u0105dzeniem sieciowym przedstawionym na schemacie sieci jest",
            "IMG": "https://egzamin-informatyk.pl/e13/615.jpg",
            "B1": "A. prze\u0142\u0105cznik",
            "B2": "B. modem",
            "B3": "C. koncentrator",
            "P": "D. ruter"
        },
        {
            "Pytanie": "Urz\u0105dzenie umo\u017cliwiaj\u0105ce \u0142\u0105czenie host&oacute;w jednej sieci z hostami w innych sieciach to",
            "IMG": "",
            "B1": "A. hub",
            "B2": "B. switch",
            "B3": "C. firewall",
            "P": "D. router"
        },
        {
            "Pytanie": "W systemie Linux narz\u0119dziem, kt&oacute;re pokazuje tras\u0119 jak\u0105 pokonuj\u0105 pakiety od miejsca \u017ar&oacute;d\u0142a do miejsca przeznaczenia, procentowy udzia\u0142 strat oraz informacj\u0119 na temat op&oacute;\u017anie\u0144 pakiet&oacute;w, jest",
            "IMG": "",
            "B1": "B. tracert",
            "B2": "C. ping",
            "B3": "D. route",
            "P": "A. mtr"
        },
        {
            "Pytanie": "W systemie Linux odpowiednikiem programu Windows o nazwie chkdsk jest program",
            "IMG": "",
            "B1": "B. totem",
            "B2": "C. icacls",
            "B3": "D. synaptic",
            "P": "A. fsck"
        },
        {
            "Pytanie": "Pliki specjalne urz\u0105dze\u0144, tworzone podczas instalacji sterownik&oacute;w w systemie Linux, s\u0105 zapisywane w katalogu",
            "IMG": "",
            "B1": "A. /var",
            "B2": "B. /proc",
            "B3": "C. /sbin",
            "P": "D. /dev"
        },
        {
            "Pytanie": "Poni\u017cej przedstawiono fragment pliku konfiguracyjnego us\u0142ugi serwerowej w systemie Linux. Jest to us\u0142uga",
            "IMG": "https://egzamin-informatyk.pl/e13/356.jpg",
            "B1": "A. SSH2",
            "B2": "B. DDNS",
            "B3": "C. TFTP",
            "P": "D. DHCP"
        },
        {
            "Pytanie": "Przedstawione na rysunku ustawienia dotycz\u0105",
            "IMG": "https://egzamin-informatyk.pl/e12/486.jpg",
            "B1": "A. Drukarki",
            "B2": "B. Karty sieciowej",
            "B3": "C. Skanera",
            "P": "D. Modemu"
        },
        {
            "Pytanie": "Partycj\u0105 systemu Linux przechowuj\u0105c\u0105 tymczasowo dane w przypadku braku wolnej pami\u0119ci RAM jest",
            "IMG": "",
            "B1": "A. sys",
            "B2": "B. tmp",
            "B3": "D. var",
            "P": "C. swap"
        },
        {
            "Pytanie": "Kable \u0142\u0105cz\u0105ce kondygnacyjne punkty dystrybucyjne z g\u0142&oacute;wnym punktem dystrybucyjnym nazywa si\u0119",
            "IMG": "",
            "B1": "A. po\u0142\u0105czeniami telekomunikacyjnymi",
            "B2": "B. po\u0142\u0105czeniami systemowymi",
            "B3": "D. okablowaniem poziomym",
            "P": "C. okablowaniem pionowym"
        },
        {
            "Pytanie": "Narz\u0119dzie administracyjne wiersza polecenia umo\u017cliwiaj\u0105ce testowanie i rozwi\u0105zywanie problem&oacute;w z serwerami DNS to:",
            "IMG": "",
            "B1": "A. CMD",
            "B2": "B. DHCP",
            "B3": "D. CHKDSK",
            "P": "C. NSLOOKUP"
        },
        {
            "Pytanie": "Do bezpo\u015bredniego po\u0142\u0105czenia ze sob\u0105 dw&oacute;ch komputer&oacute;w w przewodowej sieci LAN nale\u017cy u\u017cy\u0107",
            "IMG": "",
            "B1": "A. kabla sieciowego patch-cord bez krosowania i kabla Centronics",
            "B2": "C. kabla USB i po jednej karcie sieciowej w ka\u017cdym komputerze",
            "B3": "D. kabla \u015bwiat\u0142owodowego i jedn\u0105 kart\u0119 sieciow\u0105 w jednym komputerze",
            "P": "B. kabla sieciowego cross-over i po jednej karcie sieciowej w ka\u017cdym komputerze"
        },
        {
            "Pytanie": "Funkcj\u0119 S.M.A.R.T. dysku twardego odpowiadaj\u0105c\u0105 za aktywno\u015b\u0107 mechanizmu monitoringu i wczesnego ostrzegania przed usterkami mo\u017cna aktywowa\u0107 poprzez",
            "IMG": "",
            "B1": "A. rejestr systemu",
            "B2": "C. panel sterowania",
            "B3": "D. opcj\u0119 polecenia chkdsk",
            "P": "B. BIOS p\u0142yty g\u0142&oacute;wnej"
        },
        {
            "Pytanie": "Jaka jest kolejno\u015b\u0107 cz\u0119\u015bci adresu globalnego IPv6 typu unicast przedstawionego na rysunku?",
            "IMG": "https://egzamin-informatyk.pl/e13/654.jpg",
            "B1": "A. 1 - identyfikator interfejsu, 2 - globalny prefiks, 3 - identyfikator podsieci",
            "B2": "B. 1 - globalny prefiks, 2 - identyfikator interfejsu, 3 - identyfikator podsieci",
            "B3": "C. 1 - identyfikator podsieci, 2 - globalny prefiks, 3 - identyfikator interfejsu",
            "P": "D. 1 - globalny prefiks, 2 - identyfikator podsieci, 3 - identyfikator interfejsu"
        },
        {
            "Pytanie": "Kt&oacute;ry protok&oacute;\u0142 sygnalizuj\u0105cy jest stosowany w telefonii VoIP?",
            "IMG": "",
            "B1": "A. DHCP (Dynamic Host Configuration Protocol)",
            "B2": "B. POP (Post Office Protocol)",
            "B3": "D. SNMP (Simple Network Management Protocol)",
            "P": "C. SIP (Session Initiation Protocol)"
        },
        {
            "Pytanie": "Kt&oacute;ra z cech charakteryzuje prze\u0142\u0105cznik sieciowy?",
            "IMG": "",
            "B1": "A. Operuje na porcjach danych zwanych segmentami",
            "B2": "C. Z przesy\u0142anych pakiet&oacute;w odczytuje docelowe adresy IP",
            "B3": "D. U\u017cywa protoko\u0142u EIGRP",
            "P": "B. Z otrzymanych ramek odczytuje adresy MAC"
        },
        {
            "Pytanie": "Kt&oacute;ry z protoko\u0142&oacute;w wykorzystuje porty 20 i 21?",
            "IMG": "",
            "B1": "A. WWW",
            "B2": "B. DHCP",
            "B3": "D. Telnet",
            "P": "C. FTP"
        },
        {
            "Pytanie": "Asynchronicznym interfejsem szeregowym zgodnym ze standardem RS-232 jest port",
            "IMG": "",
            "B1": "B. EPP",
            "B2": "C. ECP",
            "B3": "D. LPT",
            "P": "A. COM"
        },
        {
            "Pytanie": "Domy\u015blnie, w systemie Linux, twardy dysk w standardzie SATA oznaczony jest",
            "IMG": "",
            "B1": "B. ida",
            "B2": "C. ide",
            "B3": "D. fda",
            "P": "A. sda"
        },
        {
            "Pytanie": "Kt&oacute;re z\u0142\u0105cze na tylnym panelu komputera oznaczane jest przedstawionym symbolem graficznym?",
            "IMG": "https://egzamin-informatyk.pl/old/704.jpg",
            "B1": "A. HDMI",
            "B2": "C. PS/2",
            "B3": "D. USB",
            "P": "B. 8P8C"
        },
        {
            "Pytanie": "Zadaniem programu Wireshark jest",
            "IMG": "",
            "B1": "B. sprawdzanie wydajno\u015bci element&oacute;w komputera",
            "B2": "C. zabezpieczenie komputera przed wirusami",
            "B3": "D. zapobieganie dost\u0119powi do komputera przez sie\u0107",
            "P": "A. monitorowanie dzia\u0142ania u\u017cytkownik&oacute;w sieci "
        },
        {
            "Pytanie": "Na zdj\u0119ciu przedstawiono z\u0142\u0105cza karty graficznej. Z\u0142\u0105cze cyfrowe to",
            "IMG": "https://egzamin-informatyk.pl/old/703.jpg",
            "B1": "B. wy\u0142\u0105cznie z\u0142\u0105cze 1",
            "B2": "C. wy\u0142\u0105cznie z\u0142\u0105cze 2",
            "B3": "D. z\u0142\u0105cze 1 i 2",
            "P": "A. wy\u0142\u0105cznie z\u0142\u0105cze 3"
        },
        {
            "Pytanie": "W systemie operacyjnym Linux ilo\u015b\u0107 wolnego miejsca na dyskach mo\u017cna sprawdzi\u0107 poleceniem",
            "IMG": "",
            "B1": "A. du",
            "B2": "B. fstab",
            "B3": "C. mkfs",
            "P": "D. df"
        },
        {
            "Pytanie": "Kt&oacute;re cyfry nale\u017cy wprowadzi\u0107 na klawiaturze telefonu pod\u0142\u0105czonego do bramki VoIP po uprzednim wpisaniu *** by wprowadzi\u0107 adres bramy domy\u015blnej sieci?",
            "IMG": "https://egzamin-informatyk.pl/e13/518.jpg",
            "B1": "A. 03",
            "B2": "B. 01",
            "B3": "D. 02",
            "P": "C. 04"
        },
        {
            "Pytanie": "Na rysunku przedstawiono tylny panel",
            "IMG": "https://egzamin-informatyk.pl/e13/158.jpg",
            "B1": "A. modemu",
            "B2": "C. mostu",
            "B3": "D. koncentratora",
            "P": "B. routera"
        },
        {
            "Pytanie": "Kt&oacute;re medium transmisyjne nale\u017cy zastosowa\u0107, aby po\u0142\u0105czy\u0107 dwa punkty dystrybucyjne odleg\u0142e od siebie o 600m?",
            "IMG": "",
            "B1": "A. skr\u0119tke UTP",
            "B2": "B. przew&oacute;d koncentryczny",
            "B3": "D. skr\u0119tk\u0119 STP",
            "P": "C. \u015bwiat\u0142ow&oacute;d"
        },
        {
            "Pytanie": "Bezpo\u0142\u0105czeniowy protok&oacute;\u0142 warstwy transportowej modelu ISO/OSI to",
            "IMG": "",
            "B1": "B. FTP",
            "B2": "C. TCP",
            "B3": "D. STP",
            "P": "A. UDP"
        },
        {
            "Pytanie": "Dla zmiany zeskanowanego obrazu na tekst nale\u017cy zastosowa\u0107 oprogramowanie wykorzystuj\u0105ce techniki",
            "IMG": "",
            "B1": "A. DPI",
            "B2": "B. DTP",
            "B3": "C. OMR",
            "P": "D. OCR"
        },
        {
            "Pytanie": "Kt&oacute;re stwierdzenie dotycz\u0105ce protoko\u0142u DHCP jest prawid\u0142owe?",
            "IMG": "",
            "B1": "A. Jest to protok&oacute;\u0142 przesy\u0142ania plik&oacute;w",
            "B2": "C. Jest to protok&oacute;\u0142 dost\u0119pu do bazy danych",
            "B3": "D. Jest to protok&oacute;\u0142 routingu",
            "P": "B. Jest to protok&oacute;\u0142 konfiguracji hosta"
        },
        {
            "Pytanie": "Trzech u\u017cytkownik&oacute;w komputera z zainstalowanym systemem operacyjnym Windows XP Pro ma swoje foldery z dokumentami w katalogu g\u0142&oacute;wnym dysku C:. Na dysku jest zainstalowany system plik&oacute;w NTFS. U\u017cytkownicy maj\u0105 za\u0142o\u017cone w systemie konta z ograniczeniami. W jaki spos&oacute;b nale\u017cy zabezpieczy\u0107 folder ka\u017cdego z u\u017cytkownik&oacute;w, by pozostali nie mogli modyfikowa\u0107 zawarto\u015bci folderu?",
            "IMG": "",
            "B1": "A. Nie udost\u0119pnia\u0107 dokument&oacute;w w zak\u0142adce Udost\u0119pnianie we w\u0142a\u015bciwo\u015bciach folderu",
            "B2": "B. Ka\u017cdemu z u\u017cytkownik&oacute;w zmieni\u0107 typ konta na konto z ograniczeniami",
            "B3": "C. Nada\u0107 dokumentom atrybut Ukryty we w\u0142a\u015bciwo\u015bciach folder&oacute;w",
            "P": "D. Przypisa\u0107 uprawnienia NTFS do modyfikacji folderu tylko w\u0142a\u015bciwemu u\u017cytkownikowi"
        },
        {
            "Pytanie": "Kt&oacute;re \u015brodowisko powinien wybra\u0107 administrator sieci, aby zainstalowa\u0107 serwer stron WWW w systemie Linux?",
            "IMG": "",
            "B1": "B. proftpd",
            "B2": "C. vsftpd",
            "B3": "D. MySQL",
            "P": "A. Apache"
        },
        {
            "Pytanie": "Do sprawdzenia indeksu stabilno\u015bci systemu Windows Server nale\u017cy wykorzysta\u0107 narz\u0119dzie",
            "IMG": "",
            "B1": "B. Dziennik zdarze\u0144",
            "B2": "C. Mened\u017cer zada\u0144",
            "B3": "D. Zasady grupy",
            "P": "A. Monitor niezawodno\u015bci"
        },
        {
            "Pytanie": "Kt&oacute;ry typ fizycznej topologii sieci komputerowej przedstawia rysunek?",
            "IMG": "https://egzamin-informatyk.pl/e13/409.jpg",
            "B1": "A. Punkt-Punkt",
            "B2": "C. Cz\u0119\u015bciowej siatki",
            "B3": "D. Gwiazdy",
            "P": "B. Pe\u0142nej siatki"
        },
        {
            "Pytanie": "Kt&oacute;ry z protoko\u0142&oacute;w jest u\u017cywany do wymiany informacji o trasach oraz dost\u0119pno\u015bci sieci pomi\u0119dzy ruterami nale\u017c\u0105cymi do tego samego systemu autonomicznego?",
            "IMG": "",
            "B1": "A. TCP",
            "B2": "C. RARP",
            "B3": "D. HTTP",
            "P": "B. RIP"
        },
        {
            "Pytanie": "Numer IP zapisuje si\u0119 w postaci czterech, oddzielonych od siebie kropkami",
            "IMG": "",
            "B1": "B. bit&oacute;w",
            "B2": "C. hel&oacute;w",
            "B3": "D. dekad",
            "P": "A. oktet&oacute;w"
        },
        {
            "Pytanie": "Na schemacie, przedstawiaj\u0105cym budow\u0119 modemu, za funkcj\u0119 modulacji i demodulacji odpowiada podzesp&oacute;\u0142 oznaczony cyfr\u0105",
            "IMG": "https://egzamin-informatyk.pl/new/304.jpg",
            "B1": "B. 2",
            "B2": "C. 1",
            "B3": "D. 4",
            "P": "A. 3"
        },
        {
            "Pytanie": "Adres IP (ang. Internet Protocol Address) jest",
            "IMG": "",
            "B1": "B. unikatow\u0105 nazw\u0105 symboliczn\u0105 urz\u0105dzenia",
            "B2": "C. unikatowym numerem fabrycznym urz\u0105dzenia",
            "B3": "D. adresem fizycznym komputera",
            "P": "A. adresem logicznym komputera"
        },
        {
            "Pytanie": "Wynikiem sumowania liczb binarnych 1001101 i 11001 jest",
            "IMG": "",
            "B1": "A. 1000111",
            "B2": "B. 1000110",
            "B3": "C. 1100111",
            "P": "D. 1100110"
        },
        {
            "Pytanie": "Zakres we/wy kontrolera DMA zapisany w postaci heksadecymalnej wynosi 0094-009F, a w systemie dziesi\u0119tnym",
            "IMG": "",
            "B1": "A. 2368-2544",
            "B2": "B. 73-249",
            "B3": "C. 1168-3984",
            "P": "D. 148-159"
        },
        {
            "Pytanie": "Za pomoc\u0105 programu Acrylic Wi-Fi Home wykonano test, kt&oacute;rego wyniki przedstawiono na zrzucie. Na ich\npodstawie mo\u017cna stwierdzi\u0107, \u017ce dost\u0119pna sie\u0107 bezprzewodowa",
            "IMG": "https://egzamin-informatyk.pl/ee08/1580.png",
            "B1": "A. korzysta z kana\u0142&oacute;w 10 &divide; 12",
            "B2": "B. ma bardzo dobr\u0105 jako\u015b\u0107 sygna\u0142u",
            "B3": "D. osi\u0105ga maksymaln\u0105 szybko\u015b\u0107 transferu 72 Mbps",
            "P": "C. jest nieszyfrowana"
        },
        {
            "Pytanie": "Narz\u0119dzie System Image Recovery dost\u0119pne w zaawansowanych opcjach rozruchu systemu Windows 7 umo\u017cliwia",
            "IMG": "",
            "B1": "A. napraw\u0119 dzia\u0142ania systemu wykorzystuj\u0105c punkty przywracania",
            "B2": "B. uruchomienie systemu w specjalnym trybie rozwi\u0105zywania problem&oacute;w",
            "B3": "D. napraw\u0119 uszkodzonych plik&oacute;w startowych",
            "P": "C. przywr&oacute;cenie dzia\u0142ania systemu wykorzystuj\u0105c jego kopi\u0119 zapasow\u0105"
        },
        {
            "Pytanie": "Zastosowanie kt&oacute;rego urz\u0105dzenia mo\u017ce by\u0107 przyczyn\u0105 zwi\u0119kszenia liczby kolizji pakiet&oacute;w w sieci?",
            "IMG": "",
            "B1": "B. Mostu",
            "B2": "C. Rutera",
            "B3": "D. Prze\u0142\u0105cznika",
            "P": "A. Koncentratora"
        },
        {
            "Pytanie": "W systemie operacyjnym Ubuntu konto u\u017cytkownika student mo\u017cna usun\u0105\u0107 za pomoc\u0105 polecenia",
            "IMG": "",
            "B1": "A. user net student /del",
            "B2": "B. del user student",
            "B3": "C. net user student /del",
            "P": "D. userdel student"
        },
        {
            "Pytanie": "Typowym objawem wskazuj\u0105cym na zbli\u017caj\u0105c\u0105 si\u0119 awari\u0119 dysku twardego jest pojawienie si\u0119",
            "IMG": "",
            "B1": "B. komunikatu Diskette drive A error",
            "B2": "C. trzech kr&oacute;tkich sygna\u0142&oacute;w d\u017awi\u0119kowych",
            "B3": "D. komunikatu CMOS checksum error",
            "P": "A. b\u0142\u0119d&oacute;w zapisu i odczytu dysku"
        },
        {
            "Pytanie": "Przerywaj\u0105c prac\u0119 na komputerze zachowujemy mo\u017cliwo\u015bci szybkiego powrotu do pracy po wybraniu w systemie Windows opcji:",
            "IMG": "",
            "B1": "A. zamkni\u0119cia systemu",
            "B2": "B. wylogowania",
            "B3": "D. ponownego uruchomienia",
            "P": "C. stanu wstrzymania"
        },
        {
            "Pytanie": "Minimaln\u0105 d\u0142ugo\u015b\u0107 has\u0142a u\u017cytkownika w systemie Windows mo\u017cna ustawi\u0107 za pomoc\u0105 polecenia",
            "IMG": "",
            "B1": "A. net user",
            "B2": "B. net computer",
            "B3": "D. net config",
            "P": "C. net accounts"
        },
        {
            "Pytanie": "Na rysunku przedstawiono gniazdo",
            "IMG": "https://egzamin-informatyk.pl/new/296.jpg",
            "B1": "B. HDMI",
            "B2": "C. DVI",
            "B3": "D. FIRE WIRE",
            "P": "A. D-SUB"
        },
        {
            "Pytanie": "Kt&oacute;ry adres IPv6 jest prawid\u0142owy?",
            "IMG": "",
            "B1": "A. 1234:9ABC::123::DEF4",
            "B2": "B. 1234.9ABC.123.DEF4",
            "B3": "D. 1234-9ABC-123-DEF4",
            "P": "C. 1234:9ABC::123:DEF4"
        },
        {
            "Pytanie": "W celu odzyskania danych usuni\u0119tych przy pomocy kombinacji klawiszy Shift + Delete, nale\u017cy",
            "IMG": "",
            "B1": "B. odzyska\u0107 je z kosza systemowego",
            "B2": "C. odzyska\u0107 je z katalogu plik&oacute;w tymczasowych",
            "B3": "D. u\u017cy\u0107 kombinacji klawiszy Shift+Insert",
            "P": "A. skorzysta\u0107 z oprogramowania do odzyskiwania danych"
        },
        {
            "Pytanie": "Kt&oacute;ry z rodzaj&oacute;w macierzy RAID oferuje tzw. mirroring dysk&oacute;w?",
            "IMG": "",
            "B1": "A. RAID-0",
            "B2": "B. RAID-5",
            "B3": "C. RAID-2",
            "P": "D. RAID-1"
        },
        {
            "Pytanie": "Proces, w wyniku kt&oacute;rego pliki zgromadzone na dysku twardym s\u0105 zapisywane na nies\u0105siaduj\u0105cych ze sob\u0105 klastrach, jest nazywany",
            "IMG": "",
            "B1": "A. kodowaniem danych",
            "B2": "B. defragmentacj\u0105 danych",
            "B3": "C. konsolidacj\u0105 danych",
            "P": "D. fragmentacj\u0105 danych"
        },
        {
            "Pytanie": "Kt&oacute;ry protok&oacute;\u0142 opracowany przez IBM jest stosowany do udost\u0119pniania plik&oacute;w w trybie klient-serwer oraz do wsp&oacute;\u0142dzielenia zasob&oacute;w z sieciami Microsoft przez systemy operacyjne LINUX, UNIX?",
            "IMG": "",
            "B1": "A. SMTP (Simple Mail Transfer Protocol)",
            "B2": "B. HTTP (Hypertext Transfer Protocol)",
            "B3": "D. POP (Post Office Protocol)",
            "P": "C. SMB (Server Message Block)"
        },
        {
            "Pytanie": "W wyniku wykonania przedstawionego skryptu",
            "IMG": "https://egzamin-informatyk.pl/e12/692.jpg",
            "B1": "A. zawarto\u015b\u0107 pliku ola.txt zostanie skopiowana do pliku ala.txt",
            "B2": "C. zostanie wpisany tekst ala.txt do pliku ola.txt",
            "B3": "D. zawarto\u015b\u0107 pliku ala.txt zostanie skopiowana do pliku ola.txt",
            "P": "B. zostanie wpisany tekst ola.txt do pliku ala.txt"
        },
        {
            "Pytanie": "Kt&oacute;ry z przedstawionych parametr&oacute;w procesora AMD APU A10 5700 3400 nie wp\u0142ywa w spos&oacute;b bezpo\u015bredni na pr\u0119dko\u015b\u0107 jego dzia\u0142ania?",
            "IMG": "https://egzamin-informatyk.pl/e12/544.jpg",
            "B1": "A. Ilo\u015b\u0107 rdzeni",
            "B2": "B. Pojemno\u015b\u0107 pami\u0119ci",
            "B3": "C. Cz\u0119stotliwo\u015b\u0107",
            "P": "D. Proces technologiczny"
        },
        {
            "Pytanie": "Oblicz koszt wykonania okablowania strukturalnego od 5 punkt&oacute;w abonenckich do panelu krosowego wraz z wykonaniem kabli po\u0142\u0105czeniowych dla stacji roboczych. W tym celu wykorzystano 50 m skr\u0119tki UTP. Punkt abonencki sk\u0142ada si\u0119 z 2 gniazd typu RJ45.",
            "IMG": "https://egzamin-informatyk.pl/e13/541.jpg",
            "B1": "A. 345,00 z\u0142",
            "B2": "B. 350,00 z\u0142",
            "B3": "C. 152,00 z\u0142",
            "P": "D. 255,00 z\u0142"
        },
        {
            "Pytanie": "Klawiatura QWERTY umo\u017cliwiaj\u0105ca wprowadzenie znak&oacute;w charakterystycznych dla j\u0119zyka polskiego nazywana jest r&oacute;wnie\u017c klawiatur\u0105",
            "IMG": "",
            "B1": "A. maszynistki",
            "B2": "C. polsk\u0105",
            "B3": "D. diakrytyczn\u0105",
            "P": "B. programisty"
        },
        {
            "Pytanie": "Na p\u0142ycie g\u0142&oacute;wnej uleg\u0142a uszkodzeniu zintegrowana karta sieciowa. Komputer nie posiada\ndysku twardego ani \u017cadnych innych nap\u0119d&oacute;w takich jak stacja dysk&oacute;w czy CD-ROM. Klient \ntwierdzi, \u017ce w sieci firmowej komputery nie posiadaj\u0105 \u017cadnych nap\u0119d&oacute;w i wszystko &quot;czyta&quot;\nsi\u0119 z serwera. W celu zapewnienia utraconej funkcjonalno\u015bci nale\u017cy zamontowa\u0107",
            "IMG": "",
            "B1": "A. w komputerze dysk twardy",
            "B2": "B. w gnie\u017adzie rozszerze\u0144 kart\u0119 sieciow\u0105 samodzielnie wspieraj\u0105c\u0105 funkcj\u0119 Postboot Execution Enumeration",
            "B3": "D. w komputerze nap\u0119d CD-ROM",
            "P": "C. w gnie\u017adzie rozszerze\u0144 kart\u0119 sieciow\u0105 samodzielnie wspieraj\u0105c\u0105 funkcj\u0119 Preboot Execution Environment"
        },
        {
            "Pytanie": "Jaki protok&oacute;\u0142 s\u0142u\u017cy do translacji pomi\u0119dzy publicznymi i prywatnymi adresami IP?",
            "IMG": "",
            "B1": "B. ARP",
            "B2": "C. RARP",
            "B3": "D. SNMP",
            "P": "A. NAT"
        },
        {
            "Pytanie": "Kt&oacute;ry z wymienionych element&oacute;w stanowi cz\u0119\u015b\u0107 mechanizmu drukarki ig\u0142owej?",
            "IMG": "",
            "B1": "A. Soczewka",
            "B2": "C. Lustro",
            "B3": "D. Filtr ozonowy",
            "P": "B. Traktor"
        },
        {
            "Pytanie": "Aby zapisa\u0107 dane na p\u0142ycie pokazanej na rysunku, jest potrzebny nap\u0119d ",
            "IMG": "https://egzamin-informatyk.pl/e12/643.jpg",
            "B1": "A. DVD-R/RW",
            "B2": "C. HD-DVD",
            "B3": "D. CD-R/RW",
            "P": "B. Blu-ray"
        },
        {
            "Pytanie": "Do pomiaru t\u0142umienia \u0142\u0105cza \u015bwiat\u0142owodowego w dw&oacute;ch oknach transmisyjnych 1310 nm i 1550 nm nale\u017cy u\u017cy\u0107",
            "IMG": "",
            "B1": "A. reflektometru TDR",
            "B2": "B. testera UTP",
            "B3": "D. rejestratora cyfrowego",
            "P": "C. miernika mocy optycznej"
        },
        {
            "Pytanie": "Kt&oacute;ry protok&oacute;\u0142 dzia\u0142a w warstwie aplikacji modelu ISO/OSI umo\u017cliwiaj\u0105c wymian\u0119 informacji kontrolnych pomi\u0119dzy urz\u0105dzeniami sieciowymi?",
            "IMG": "",
            "B1": "B. SMTP",
            "B2": "C. DNS",
            "B3": "D. POP3",
            "P": "A. SNMP"
        },
        {
            "Pytanie": "Na rysunku przedstawiono schemat zasady dzia\u0142ania",
            "IMG": "https://egzamin-informatyk.pl/e12/665.jpg",
            "B1": "B. karty graficznej",
            "B2": "C. kontrolera USB",
            "B3": "D. modemu",
            "P": "A. karty d\u017awi\u0119kowej"
        },
        {
            "Pytanie": "Kt&oacute;ry zapis jest mask\u0105 podsieci dla adresu IP 217.152.128.100/25?",
            "IMG": "",
            "B1": "A. 255.255.255.0",
            "B2": "B. 255.255.255.224",
            "B3": "C. 255.255.255.192",
            "P": "D. 255.255.255.128"
        },
        {
            "Pytanie": "Przedstawione na rysunku narz\u0119dzie s\u0142u\u017cy do testowania",
            "IMG": "https://egzamin-informatyk.pl/ee08/1712.png",
            "B1": "A. p\u0142yty g\u0142&oacute;wnej",
            "B2": "C. karty sieciowej",
            "B3": "D. zasilacza",
            "P": "B. okablowania LAN"
        },
        {
            "Pytanie": "Aby pod\u0142\u0105czy\u0107 do Internetu sie\u0107 lokaln\u0105, dzia\u0142aj\u0105c\u0105 w oparciu o adresy prywatne, nale\u017cy zastosowa\u0107",
            "IMG": "",
            "B1": "B. regenerator",
            "B2": "C. koncentrator",
            "B3": "D. prze\u0142\u0105cznik",
            "P": "A. router"
        },
        {
            "Pytanie": "Mechanizm zasilacza komputerowego chroni\u0105cy przed przegrzaniem zasilacza jest oznaczony w dokumentacji technicznej jako zabezpieczenie typu",
            "IMG": "",
            "B1": "A. SCP",
            "B2": "B. OPP",
            "B3": "D. UVP",
            "P": "C. OTP"
        },
        {
            "Pytanie": "Ko\u015bci pami\u0119ci DDR3 SDRAM zasilane s\u0105 napi\u0119ciem",
            "IMG": "https://egzamin-informatyk.pl/e12/406.jpg",
            "B1": "A. 1,8 V",
            "B2": "B. 2,5 V",
            "B3": "C. 3 V",
            "P": "D. 1,5 V"
        },
        {
            "Pytanie": "Na schemacie element odpowiedzialny za dekodowanie instrukcji jest oznaczony cyfr\u0105",
            "IMG": "https://egzamin-informatyk.pl/old/640.jpg",
            "B1": "A. 2",
            "B2": "B. 1",
            "B3": "D. 6",
            "P": "C. 3"
        },
        {
            "Pytanie": "Kt&oacute;ry z wymienionych system&oacute;w operacyjnych nie jest obs\u0142ugiwany przez system plik&oacute;w ext4?",
            "IMG": "",
            "B1": "A. Mandriva",
            "B2": "C. Fedora",
            "B3": "D. Gentoo",
            "P": "B. Windows"
        },
        {
            "Pytanie": "Karta d\u017awi\u0119kowa umo\u017cliwiaj\u0105ca odtworzenie pliku zapisanego w formacie MP3 powinna by\u0107 wyposa\u017cona w uk\u0142ad",
            "IMG": "",
            "B1": "A. GPU",
            "B2": "B. ALU",
            "B3": "C. RTC",
            "P": "D. DAC"
        },
        {
            "Pytanie": "Kt&oacute;ry wymieniony protok&oacute;\u0142 zapewnia korzystanie z szyfrowanego po\u0142\u0105czenia ze stron\u0105 internetow\u0105?",
            "IMG": "",
            "B1": "A. NetBEUI",
            "B2": "C. SPX",
            "B3": "D. TCP",
            "P": "B. HTTPS"
        },
        {
            "Pytanie": "Zgodnie z modelem TCP/IP protoko\u0142y DNS, FTP oraz SMTP, nale\u017c\u0105 do warstwy",
            "IMG": "",
            "B1": "A. dost\u0119pu do sieci",
            "B2": "B. internetowej",
            "B3": "C. transportowej",
            "P": "D. aplikacji"
        },
        {
            "Pytanie": "W ilu podsieciach pracuj\u0105 komputery o adresach: 192.168.5.12/25, 192.168.5.200/25 i 192.158.5.250/25?",
            "IMG": "",
            "B1": "A. 4",
            "B2": "B. 1",
            "B3": "C. 2",
            "P": "D. 3"
        },
        {
            "Pytanie": "Rysunek przedstawia konfiguracj\u0119 karty sieciowej dla urz\u0105dzenia o adresie IP 10.15.89.104/25. Wynika z niego, \u017ce",
            "IMG": "https://egzamin-informatyk.pl/e13/568.jpg",
            "B1": "A. adres IP jest nieprawid\u0142owy",
            "B2": "B. adres maski jest nieprawid\u0142owy",
            "B3": "D. serwer DNS jest w tej samej podsieci co urz\u0105dzenie",
            "P": "C. adres domy\u015blnej bramy jest z innej podsieci ni\u017c adres hosta"
        },
        {
            "Pytanie": "Identyfikowanie adres&oacute;w fizycznych MAC na podstawie adres&oacute;w logicznych IP jest wynikiem dzia\u0142ania protoko\u0142u",
            "IMG": "",
            "B1": "A. DHCP",
            "B2": "C. DNS",
            "B3": "D. HTTP",
            "P": "B. ARP"
        },
        {
            "Pytanie": "Na schemacie obrazuj\u0105cym zasad\u0119 dzia\u0142ania monitora plazmowego numerem 6 oznaczono",
            "IMG": "https://egzamin-informatyk.pl/ee08/1584.png",
            "B1": "A. warstw\u0119 dielektryka",
            "B2": "B. elektrody wy\u015bwietlacza",
            "B3": "D. warstw\u0119 fosforow\u0105",
            "P": "C. elektrody adresuj\u0105ce"
        },
        {
            "Pytanie": "W Windows 7 konfiguracj\u0119 interfejsu sieciowego mo\u017cna wykona\u0107, stosuj\u0105c rozwini\u0119cie polecenia",
            "IMG": "",
            "B1": "A. telnet",
            "B2": "B. nslookup",
            "B3": "D. tracert",
            "P": "C. netsh"
        },
        {
            "Pytanie": "Dystrybucje systemu Linux Ubuntu rozpowszechniane s\u0105 na licencjach",
            "IMG": "",
            "B1": "A. MOLP",
            "B2": "B. Freeware",
            "B3": "C. Public Domain",
            "P": "D. GNU GPL"
        },
        {
            "Pytanie": "Licencj\u0105 wolnego i otwartego oprogramowania jest",
            "IMG": "",
            "B1": "A. ADWARE",
            "B2": "B. BOX",
            "B3": "C. FREEWARE",
            "P": "D. GNU GPL"
        },
        {
            "Pytanie": "Kt&oacute;ry rodzaj macierzy dyskowych oferuje tzw. mirroring dysk&oacute;w?",
            "IMG": "",
            "B1": "B. RAID-5",
            "B2": "C. RAID-3",
            "B3": "D. RAID-0",
            "P": "A. RAID-1"
        },
        {
            "Pytanie": "Ustawienie zworek na dyskach z interfejsem IDE odpowiada za",
            "IMG": "",
            "B1": "A. rodzaj interfejsu dyskowego",
            "B2": "B. napi\u0119cie zasilania silnika",
            "B3": "D. pr\u0119dko\u015b\u0107 obrotow\u0105 dysku",
            "P": "C. tryb pracy dysku"
        },
        {
            "Pytanie": "Program, kt&oacute;ry umo\u017cliwia komunikacj\u0119 mi\u0119dzy kart\u0105 sieciow\u0105 a systemem operacyjnym, to",
            "IMG": "",
            "B1": "A. komunikator",
            "B2": "B. sniffer",
            "B3": "C. middleware",
            "P": "D. sterownik"
        },
        {
            "Pytanie": "We wtyczce zasilania SATA zosta\u0142 uszkodzony \u017c&oacute;\u0142ty przew&oacute;d. Oznacza to, \u017ce z\u0142\u0105cze nie podaje napi\u0119cia o warto\u015bci",
            "IMG": "",
            "B1": "B. 3,3V",
            "B2": "C. 8,5V",
            "B3": "D. 5V",
            "P": "A. 12V"
        },
        {
            "Pytanie": "Wska\u017c prawdziwe przyporz\u0105dkowanie us\u0142ugi warstwy aplikacji z domy\u015blnym numerem portu, na kt&oacute;rym ona pracuje.",
            "IMG": "",
            "B1": "A. DHCP - 161",
            "B2": "C. SMTP - 80",
            "B3": "D. IMAP - 8080",
            "P": "B. DNS - 53"
        },
        {
            "Pytanie": "Aby zainstalowa\u0107 serwer plik&oacute;w FTP na systemach rodziny Windows Server, nale\u017cy zainstalowa\u0107 rol\u0119 serwer",
            "IMG": "",
            "B1": "A. DHCP",
            "B2": "B. aplikacji",
            "B3": "C. DNS",
            "P": "D. sieci Web"
        },
        {
            "Pytanie": "W dokumentacji systemu operacyjnego Windows XP opisane s\u0105 pliki z rozszerzeniem .dll. Rozszerzenie to dotyczy pliku",
            "IMG": "",
            "B1": "A. uruchamialnego",
            "B2": "B. dziennika zdarze\u0144",
            "B3": "C. inicjalizacyjnego",
            "P": "D. biblioteki"
        },
        {
            "Pytanie": "Warto\u015b\u0107 liczby 1101 0100 0111 w kodzie szesnastkowym wynosi",
            "IMG": "",
            "B1": "A. D43",
            "B2": "C. C47",
            "B3": "D. C27",
            "P": "B. D47"
        },
        {
            "Pytanie": "Kt&oacute;ry z podzespo\u0142&oacute;w komputera przy wy\u0142\u0105czonym zasilaniu przechowuje program rozpoczynaj\u0105cy \u0142adowanie systemu operacyjnego?",
            "IMG": "https://egzamin-informatyk.pl/old/221.jpg",
            "B1": "A. CPU",
            "B2": "B. RAM",
            "B3": "D. I/O",
            "P": "C. ROM"
        },
        {
            "Pytanie": "Ile podw&oacute;jnych gniazd RJ45 powinno by\u0107 zamontowanych w pomieszczeniu o wymiarach 8 x 5 m, aby by\u0142y spe\u0142nione zalecenia normy PN-EN 50173?",
            "IMG": "",
            "B1": "A. 5 gniazd",
            "B2": "B. 10 gniazd",
            "B3": "D. 8 gniazd",
            "P": "C. 4 gniazda"
        },
        {
            "Pytanie": "Kt&oacute;re karty sieciowe o podanych adresach MAC zosta\u0142y wyprodukowane przez tego samego producenta?",
            "IMG": "",
            "B1": "B. 00:17:B9:00:1F:FE oraz 00:16:B9:00:2F:FE",
            "B2": "C. 00:17:B9:00:1F:FE oraz 00:16:B9:00:1F:FE",
            "B3": "D. 00:16:B9:00:1F:FE oraz 00:16:B8:00:2F:FE",
            "P": "A. 00:16:B9:00:1F:FE oraz 00:16:B9:00:2F:FE"
        },
        {
            "Pytanie": "Przedstawiony stan ekranu terminala uzyskano w wyniku testu przeprowadzonego w systemie Windows. Pracownik serwisu uzyska\u0142 w ten spos&oacute;b informacj\u0119 o:",
            "IMG": "https://egzamin-informatyk.pl/old/590.jpg",
            "B1": "A. poprawno\u015bci konfiguracji protoko\u0142u TCP/IP",
            "B2": "B. sprawno\u015bci po\u0142\u0105czenia przy u\u017cyciu protoko\u0142u IPX/SPX",
            "B3": "C. mo\u017cliwo\u015bci diagnozowania infrastruktury systemu DNS",
            "P": "D. \u015bcie\u017cce do lokalizacji docelowej"
        },
        {
            "Pytanie": "Kt&oacute;ry protok&oacute;\u0142 jest wykorzystywany tylko w sieciach lokalnych, w kt&oacute;rych pracuj\u0105 komputery z systemami operacyjnymi firmy Microsoft?",
            "IMG": "",
            "B1": "A. TCP/IP",
            "B2": "B. AppleTalk",
            "B3": "D. IPX/SPX",
            "P": "C. NetBEUI"
        },
        {
            "Pytanie": "System plik&oacute;w, kt&oacute;ry umo\u017cliwia w systemie Windows kompresj\u0119 danych i nadawanie uprawnie\u0144 do folder&oacute;w i plik&oacute;w, to",
            "IMG": "",
            "B1": "B. FAT",
            "B2": "C. EXT",
            "B3": "D. FAT32",
            "P": "A. NTFS"
        },
        {
            "Pytanie": "Jakie systemy operacyjne infekuje wirus MS Blaster?",
            "IMG": "",
            "B1": "A. DOS",
            "B2": "B. MS Windows 9x",
            "B3": "C. Linux",
            "P": "D. MS Windows 2000/NT/XP"
        },
        {
            "Pytanie": "Po pod\u0142\u0105czeniu sprawnej klawiatury do dowolnego z port&oacute;w USB nie mo\u017cna wybra\u0107 awaryjnego trybu uruchomienia systemu Windows. Mimo to, klawiatura po uruchomieniu systemu w normalnym trybie, dzia\u0142a prawid\u0142owo. Wskazuje to na:",
            "IMG": "",
            "B1": "B. uszkodzony zasilacz",
            "B2": "C. uszkodzony kontroler klawiatury",
            "B3": "D. uszkodzone porty USB",
            "P": "A. niepoprawne ustawienia BIOS-u"
        },
        {
            "Pytanie": "Blok funkcjonalny oznaczony DSP w zamieszczonym schemacie blokowym to",
            "IMG": "https://egzamin-informatyk.pl/old/183.jpg",
            "B1": "A. przetwornik cyfrowo-analogowy z pami\u0119ci\u0105 RAM",
            "B2": "B. przetwornik analogowo-cyfrowy z pami\u0119ci\u0105 RAM",
            "B3": "C. bufor RAM",
            "P": "D. mikroprocesor karty d\u017awi\u0119kowej"
        },
        {
            "Pytanie": "Kt&oacute;ry z element&oacute;w pokazanych na schemacie karty d\u017awi\u0119kowej na rysunku s\u0142u\u017cy do cyfrowego przetwarzania sygna\u0142&oacute;w?",
            "IMG": "https://egzamin-informatyk.pl/old/13.jpg",
            "B1": "A. Mikser",
            "B2": "C. Syntezator",
            "B3": "D. Przetwornik A/D",
            "P": "B. Procesor DSP"
        },
        {
            "Pytanie": "W systemie Windows, zainstalowanym w wersji obs\u0142uguj\u0105cej przydzia\u0142y dyskowe, u\u017cytkownik o nazwie Go\u015b\u0107 ",
            "IMG": "",
            "B1": "B. mo\u017ce nale\u017ce\u0107 tylko do grupy o nazwie Go\u015bcie",
            "B2": "C. nie mo\u017ce nale\u017ce\u0107 do \u017cadnej grupy",
            "B3": "D. mo\u017ce nale\u017ce\u0107 tylko do grupy globalnej",
            "P": "A. mo\u017ce nale\u017ce\u0107 do grup lokalnych i do grup globalnych "
        },
        {
            "Pytanie": "Na kt&oacute;ry z no\u015bnik&oacute;w pami\u0119ci zewn\u0119trznej, nie przedostanie si\u0119 wirus podczas odczytywania jego zawarto\u015bci?",
            "IMG": "",
            "B1": "A. na pami\u0119\u0107 Flash",
            "B2": "C. na kart\u0119 SD",
            "B3": "D. na dysk zewn\u0119trzny",
            "P": "B. na p\u0142yt\u0119 DVD-ROM"
        },
        {
            "Pytanie": "Zgodnie ze specyfikacj\u0105 JEDEC napi\u0119cie zasilania modu\u0142&oacute;w pami\u0119ci RAM DDR3L wynosi",
            "IMG": "",
            "B1": "A. 1,5 V",
            "B2": "B. 1,9 V",
            "B3": "C. 1,85 V",
            "P": "D. 1,35 V"
        },
        {
            "Pytanie": "Router Wi-Fi pracuj\u0105cy w standardzie 802.11n pozwala uzyska\u0107 maksymaln\u0105 pr\u0119dko\u015b\u0107 transmisji",
            "IMG": "",
            "B1": "A. 54 Mb/s",
            "B2": "B. 1000 Mb/s",
            "B3": "D. 11 Mb/s",
            "P": "C. 600 Mb/s"
        },
        {
            "Pytanie": "Zapis na dyskach BD-R odbywa si\u0119 za pomoc\u0105",
            "IMG": "",
            "B1": "A. g\u0142owicy magnetycznej",
            "B2": "B. \u015bwiat\u0142a UV",
            "B3": "D. lasera czerwonego",
            "P": "C. lasera niebieskiego"
        },
        {
            "Pytanie": "W adresowaniu klasowym adres IP 74.100.7.8 nale\u017cy do",
            "IMG": "",
            "B1": "A. klasy B",
            "B2": "B. klasy C",
            "B3": "D. klasy D",
            "P": "C. klasy A"
        },
        {
            "Pytanie": "Kt&oacute;ry protok&oacute;\u0142 wykorzystuj\u0105 komputery do powiadomienia rutera o cz\u0142onkostwie w danej grupie rozg\u0142oszeniowej?",
            "IMG": "",
            "B1": "A. RIP",
            "B2": "B. UDP",
            "B3": "D. OSPF",
            "P": "C. IGMP"
        },
        {
            "Pytanie": "U\u017cytkownicy z grupy Pracownicy nie mog\u0105 drukowa\u0107 dokument&oacute;w przy u\u017cyciu serwera wydruku na systemie operacyjnym Windows Server. Maj\u0105 oni przydzielone uprawnienia tylko &quot;Zarz\u0105dzanie dokumentami&quot;. Co nale\u017cy zrobi\u0107, aby rozwi\u0105za\u0107 opisany problem?",
            "IMG": "",
            "B1": "A. Dla grupy Administratorzy nale\u017cy usun\u0105\u0107 uprawnienia &quot;Drukuj&quot;",
            "B2": "B. Dla grupy Administratorzy nale\u017cy usun\u0105\u0107 uprawnienia &quot;Zarz\u0105dzanie dokumentami&quot;",
            "B3": "C. Dla grupy Pracownicy nale\u017cy usun\u0105\u0107 uprawnienia &quot;Zarz\u0105dzanie dokumentami&quot;",
            "P": "D. Dla grupy Pracownicy nale\u017cy nada\u0107 uprawnienia &quot;Drukuj&quot;"
        },
        {
            "Pytanie": "Procesor RISC to procesor",
            "IMG": "",
            "B1": "A. z g\u0142&oacute;wn\u0105 list\u0105 rozkaz&oacute;w",
            "B2": "B. z kompleksow\u0105 list\u0105 rozkaz&oacute;w",
            "B3": "C. z pe\u0142n\u0105 list\u0105 rozkaz&oacute;w",
            "P": "D. ze zredukowan\u0105 list\u0105 rozkaz&oacute;w"
        },
        {
            "Pytanie": "Kt&oacute;ra funkcja punktu dost\u0119powego pozwala zabezpieczy\u0107 sie\u0107 bezprzewodow\u0105 tak, aby tylko urz\u0105dzenia o okre\u015blonych adresach fizycznych mog\u0142y si\u0119 do niej pod\u0142\u0105czy\u0107?",
            "IMG": "",
            "B1": "A. Nadanie SSID",
            "B2": "B. Uwierzytelnianie",
            "B3": "D. Radius (Remote Authentication Dial In User Service)",
            "P": "C. Filtrowanie adres&oacute;w MAC"
        },
        {
            "Pytanie": "Komputer ma pe\u0142ni\u0107 rol\u0119 serwera sieci lokalnej, udost\u0119pniaj\u0105cego innym komputerom po\u0142\u0105czenie z Internetem przez pod\u0142\u0105czenie do gniazda sieci rozleg\u0142ej za pomoc\u0105 kabla UTP Cat 5e. Obecnie komputer jest jedynie pod\u0142\u0105czony do switcha sieci lokalnej r&oacute;wnie\u017c kablem UTP Cat 5e, nie posiada innych gniazd 8P8C. O jaki element musi by\u0107 on koniecznie rozbudowany?",
            "IMG": "",
            "B1": "A. O dodatkowy dysk twardy",
            "B2": "B. O wi\u0119ksz\u0105 pami\u0119\u0107 RAM",
            "B3": "C. O szybszy procesor",
            "P": "D. O drug\u0105 kart\u0119 sieciow\u0105"
        },
        {
            "Pytanie": "Tabela przedstawia parametry trzech dysk&oacute;w twardych standardu Ultra320 SCSI. Dyski te mog\u0105 pracowa\u0107 z maksymalnym transferem wewn\u0119trznym",
            "IMG": "https://egzamin-informatyk.pl/old/162.jpg",
            "B1": "A. 200MB/S",
            "B2": "B. 320MB/S",
            "B3": "D. 320 GB/s",
            "P": "C. 132 MB/s"
        },
        {
            "Pytanie": "Kt&oacute;ra z wymienionych pami\u0119ci RAM wykorzystuje do przesy\u0142ania danych wznosz\u0105ce i opadaj\u0105ce zbocze sygna\u0142u zegarowego?",
            "IMG": "",
            "B1": "B. SIMM",
            "B2": "C. SDR",
            "B3": "D. SIPP",
            "P": "A. DDR"
        },
        {
            "Pytanie": "Do monitorowania transmisji danych w sieci komputerowej nale\u017cy zastosowa\u0107 program typu",
            "IMG": "",
            "B1": "A. firmware",
            "B2": "B. kompilator",
            "B3": "D. debugger",
            "P": "C. sniffer"
        },
        {
            "Pytanie": "Aby blokowa\u0107 i usuwa\u0107 szkodliwe oprogramowanie typu exploit, robaki oraz trojany, nale\u017cy zainstalowa\u0107 oprogramowanie",
            "IMG": "",
            "B1": "A. antyspam",
            "B2": "C. adblock",
            "B3": "D. antyspyware",
            "P": "B. antymalware"
        },
        {
            "Pytanie": "Najskuteczniejsz\u0105 metod\u0105 zabezpieczenia domowej sieci Wi-Fi jest",
            "IMG": "",
            "B1": "A. zmiana identyfikatora SSID",
            "B2": "C. stosowanie szyfrowania WEP",
            "B3": "D. zmiana adresu MAC rutera",
            "P": "B. stosowanie szyfrowania WPA-PSK"
        },
        {
            "Pytanie": "Kt&oacute;ry sterownik drukarki jest niezale\u017cny od urz\u0105dzenia i systemu operacyjnego oraz jest standardem w urz\u0105dzeniach poligraficznych?",
            "IMG": "",
            "B1": "A. Graphics Device Interface",
            "B2": "B. PCL6",
            "B3": "C. PCL5",
            "P": "D. PostScript"
        },
        {
            "Pytanie": "Kt&oacute;ry ze standard&oacute;w Gigabit Ethernet umo\u017cliwia budow\u0119 segment&oacute;w sieci o d\u0142ugo\u015bci 550 m/5000 m z pr\u0119dko\u015bci\u0105 transmisji 1 Gb/s?",
            "IMG": "",
            "B1": "B. 1000Base-FX",
            "B2": "C. 1000Base-SX",
            "B3": "D. 1000Base-T",
            "P": "A. 1000Base-LX"
        },
        {
            "Pytanie": "Narz\u0119dziem do monitorowania wydajno\u015bci i niezawodno\u015bci w systemach Windows 7, Windows Server 2008 R2 oraz Windows Vista jest",
            "IMG": "",
            "B1": "B. tsmmc.msc",
            "B2": "C. dfrg.msc",
            "B3": "D. devmgmt.msc",
            "P": "A. perfmon.msc"
        },
        {
            "Pytanie": "CommView i WireShark to programy stosowane do",
            "IMG": "",
            "B1": "A. zabezpieczenia transmisji danych w sieci",
            "B2": "C. okre\u015blania wielko\u015bci t\u0142umienia w torze transmisyjnym",
            "B3": "D. sprawdzania zasi\u0119gu sieci bezprzewodowej",
            "P": "B. analizowania pakiet&oacute;w transmitowanych w sieci"
        },
        {
            "Pytanie": "Element oznaczony cyfr\u0105 1 na schemacie karty d\u017awi\u0119kowej",
            "IMG": "https://egzamin-informatyk.pl/new/302.jpg",
            "B1": "A. usuwa d\u017awi\u0119k pochodz\u0105cy z kilku \u017ar&oacute;de\u0142",
            "B2": "B. eliminuje szumy na linii, wykorzystuj\u0105c kr&oacute;tkie pr&oacute;bki szumu.",
            "B3": "D. zamienia sygna\u0142 audio na sygna\u0142 wideo",
            "P": "C. tworzy d\u017awi\u0119k o odpowiednim czasie trwania, wykorzystuj\u0105c kr&oacute;tkie pr&oacute;bki d\u017awi\u0119ku"
        },
        {
            "Pytanie": "Do realizacji iloczynu logicznego z negacj\u0105 nale\u017cy u\u017cy\u0107 funktora",
            "IMG": "",
            "B1": "A. EX-OR",
            "B2": "B. NOT",
            "B3": "D. AND",
            "P": "C. NAND"
        },
        {
            "Pytanie": "Dodatkowe cechy wyniku operacji wykonywanej przez jednostk\u0119 arytmetyczno - logiczn\u0105 ALU zawiera",
            "IMG": "",
            "B1": "A. wska\u017anik stosu",
            "B2": "C. akumulator",
            "B3": "D. licznik rozkaz&oacute;w",
            "P": "B. rejestr flagowy"
        },
        {
            "Pytanie": "Kt&oacute;ry z adres&oacute;w jest adresem rozg\u0142oszeniowym sieci 172.16.64.0/26?",
            "IMG": "",
            "B1": "A. 172.16.64.0",
            "B2": "C. 172.16.64.192",
            "B3": "D. 172.16.64.255",
            "P": "B. 172.16.64.63"
        },
        {
            "Pytanie": "Do zarobienia ko\u0144c&oacute;wek kabla UTP jest stosowany wtyk",
            "IMG": "",
            "B1": "A. RS232",
            "B2": "B. BNC",
            "B3": "D. DVI",
            "P": "C. 8P8C"
        },
        {
            "Pytanie": "Aby mo\u017cliwe by\u0142o wykorzystanie macierzy RAID 1, potrzeba minimum",
            "IMG": "",
            "B1": "A. 5 dysk&oacute;w",
            "B2": "B. 3 dysk&oacute;w",
            "B3": "C. 4 dysk&oacute;w",
            "P": "D. 2 dysk&oacute;w"
        },
        {
            "Pytanie": "Magistrala PCI-Express wykorzystuje do transmisji danych metod\u0119 komunikacji",
            "IMG": "",
            "B1": "B. asynchronicznej Simplex",
            "B2": "C. synchronicznej Half duplex",
            "B3": "D. synchronicznej Full duplex",
            "P": "A. asynchronicznej Full duplex"
        },
        {
            "Pytanie": "Wska\u017c rysunek przedstawiaj\u0105cy materia\u0142 eksploatacyjny typowy dla drukarek \u017celowych",
            "IMG": "https://egzamin-informatyk.pl/e12/784.jpg",
            "B1": "A. A",
            "B2": "B. B",
            "B3": "D. D",
            "P": "C. C"
        },
        {
            "Pytanie": "Aby pod\u0142\u0105czy\u0107 projektor multimedialny do komputera, nie nale\u017cy u\u017cywa\u0107 z\u0142\u0105cza",
            "IMG": "",
            "B1": "A. D-SUB",
            "B2": "C. USB",
            "B3": "D. HDMI",
            "P": "B. SATA"
        },
        {
            "Pytanie": "Partycja, na kt&oacute;rej zainstalowany jest system operacyjny, nazywana jest partycj\u0105",
            "IMG": "",
            "B1": "B. folderow\u0105",
            "B2": "C. wymiany",
            "B3": "D. rozszerzon\u0105",
            "P": "A. systemow\u0105"
        },
        {
            "Pytanie": "Na rysunku przedstawiono sie\u0107 komputerow\u0105 w topologii",
            "IMG": "https://egzamin-informatyk.pl/e13/76.jpg",
            "B1": "B. magistrali",
            "B2": "C. gwiazdy",
            "B3": "D. mieszanej",
            "P": "A. pier\u015bcienia"
        },
        {
            "Pytanie": "Watomierz jest stosowany do pomiaru",
            "IMG": "",
            "B1": "A. napi\u0119cia pr\u0105du elektrycznego",
            "B2": "B. nat\u0119\u017cenia pr\u0105du elektrycznego",
            "B3": "C. rezystancji",
            "P": "D. mocy czynnej"
        },
        {
            "Pytanie": "Bezprzewodow\u0105 transmisj\u0119 danych zapewnia standard, kt&oacute;rego elementem jest interfejs",
            "IMG": "",
            "B1": "A. HDMI",
            "B2": "B. DVI",
            "B3": "C. LFH60",
            "P": "D. IrDA"
        },
        {
            "Pytanie": "Najkr&oacute;tszy czas dost\u0119pu posiada",
            "IMG": "",
            "B1": "A. dysk twardy",
            "B2": "B. pami\u0119\u0107 RAM",
            "B3": "C. pami\u0119\u0107 USB",
            "P": "D. pami\u0119\u0107 cache procesora"
        },
        {
            "Pytanie": "Jakie mog\u0105 by\u0107 typy partycji dyskowych w systemie operacyjnym Windows?",
            "IMG": "",
            "B1": "A. Dodatkowa, rozszerzona, wymiany oraz dysk logiczny",
            "B2": "B. Podstawowa, rozszerzona, wymiany, dodatkowa",
            "B3": "C. Dodatkowa, podstawowa, rozszerzona, wymiany oraz dysk logiczny",
            "P": "D. Podstawowa, rozszerzona oraz dysk logiczny"
        },
        {
            "Pytanie": "Funkcje r&oacute;\u017cnych kategorii (daty i czasu, finansowe, tekstowe, matematyczne, statystyczne) s\u0105 elementem sk\u0142adowym",
            "IMG": "",
            "B1": "B. program&oacute;w do tworzenia prezentacji multimedialnych",
            "B2": "C. przegl\u0105darki internetowej",
            "B3": "D. edytora tekstu",
            "P": "A. arkusza kalkulacyjnego"
        },
        {
            "Pytanie": "Kt&oacute;ry parametr w konfiguracji punktu dost\u0119powego pe\u0142ni rol\u0119 loginu wykorzystywanego podczas pr&oacute;by nawi\u0105zywania po\u0142\u0105czenia z punktem dost\u0119powym sieci bezprzewodowej?",
            "IMG": "https://egzamin-informatyk.pl/e13/427.jpg",
            "B1": "A. Channel Width",
            "B2": "B. Wireless Channel",
            "B3": "D. Transmission Rate",
            "P": "C. Wireless Network Name"
        },
        {
            "Pytanie": "Na podstawie analizy ruchu sieciowego, wska\u017c adres IP i numer portu, z kt&oacute;rego host otrzymuje odpowied\u017a",
            "IMG": "https://egzamin-informatyk.pl/e13/428.jpg",
            "B1": "B. 192.168.0.13:51383",
            "B2": "C. 46.28.247.123:51383",
            "B3": "D. 192.168.0.13:80",
            "P": "A. 46.28.247.123:80"
        },
        {
            "Pytanie": "Przedstawiona na rysunku topologia sieci to",
            "IMG": "https://egzamin-informatyk.pl/ee08/1695.png",
            "B1": "A. ring",
            "B2": "B. bus",
            "B3": "C. star",
            "P": "D. mesh"
        },
        {
            "Pytanie": "Program typu firewall nie chroni przed",
            "IMG": "",
            "B1": "B. Atakami generuj\u0105cymi wzmo\u017cony ruch w sieci",
            "B2": "C. Uzyskaniem dost\u0119pu do komputera przez haker&oacute;w",
            "B3": "D. Szpiegowaniem i wykradaniem poufnych danych u\u017cytkownika",
            "P": "A. Wirusami rozprzestrzeniaj\u0105cymi si\u0119 poczt\u0105 e-mail"
        },
        {
            "Pytanie": "Jednym z efekt&oacute;w wykonania przedstawionego polecenia jest",
            "IMG": "https://egzamin-informatyk.pl/e12/893.jpg",
            "B1": "A. automatyczna blokada konta u\u017cytkownika test po pi\u0119ciokrotnym b\u0142\u0119dnym podaniu has\u0142a",
            "B2": "B. zmiana has\u0142a bie\u017c\u0105cego u\u017cytkownika na test",
            "B3": "C. wymuszenie konieczno\u015bci tworzenia hase\u0142 minimum pi\u0119cioznakowych",
            "P": "D. ustawienie mo\u017cliwo\u015bci zmiany has\u0142a po up\u0142ywie jednego dnia"
        },
        {
            "Pytanie": "Przyrz\u0105d przedstawiony na rysunku jest stosowany do zaciskania wtyk&oacute;w",
            "IMG": "https://egzamin-informatyk.pl/e13/208.jpg",
            "B1": "A. BNC",
            "B2": "C. E 2000",
            "B3": "D. SC",
            "P": "B. RJ 45"
        },
        {
            "Pytanie": "Kt&oacute;re medium transmisyjne wykorzystuj\u0105 myszki bluetooth do komunikacji z komputerem?",
            "IMG": "",
            "B1": "A. Fale radiowe w pa\u015bmie 800/900 MHz",
            "B2": "C. Promieniowanie ultrafioletowe",
            "B3": "D. Promieniowanie podczerwone",
            "P": "B. Fale radiowe w pa\u015bmie 2,4 GHz"
        },
        {
            "Pytanie": "Zarz\u0105dzanie pasmem (ang. bandwidth control) w prze\u0142\u0105czniku to us\u0142uga",
            "IMG": "",
            "B1": "B. umo\u017cliwiaj\u0105ca zdalny dost\u0119p do urz\u0105dzenia",
            "B2": "C. umo\u017cliwiaj\u0105ca \u0142\u0105czenie prze\u0142\u0105cznik&oacute;w r&oacute;wnocze\u015bnie kilkoma \u0142\u0105czami",
            "B3": "D. pozwalaj\u0105ca na przesy\u0142anie danych z wybranego portu r&oacute;wnocze\u015bnie do innego portu",
            "P": "A. pozwalaj\u0105ca ograniczy\u0107 przepustowo\u015b\u0107 na wybranym porcie"
        },
        {
            "Pytanie": "Aby zwolni\u0107 miejsce na dysku bez utraty danych, nale\u017cy wykona\u0107",
            "IMG": "",
            "B1": "A. sprawdzanie dysku",
            "B2": "B. defragmentacj\u0119 dysku",
            "B3": "D. backup dysku",
            "P": "C. oczyszczanie dysku"
        },
        {
            "Pytanie": "Firma zajmuj\u0105ca si\u0119 sprz\u0105taniem musi drukowa\u0107 faktury tekstowe w czterech egzemplarzach jednocze\u015bnie, na papierze samokopiuj\u0105cym. Jak\u0105 drukark\u0119 powinna wybra\u0107?",
            "IMG": "",
            "B1": "B. Laserow\u0105",
            "B2": "C. Termosublimacyjn\u0105",
            "B3": "D. Atramentow\u0105",
            "P": "A. Ig\u0142ow\u0105"
        },
        {
            "Pytanie": "Utworzenie kontrolera domeny w rodzinie system&oacute;w Windows Server na lokalnym serwerze wymaga zainstalowania roli",
            "IMG": "",
            "B1": "A. us\u0142ugi zarz\u0105dzania prawami dost\u0119pu w us\u0142udze Active Directory",
            "B2": "C. us\u0142ugi LDS w us\u0142udze Active Directory",
            "B3": "D. us\u0142ugi certyfikat&oacute;w w us\u0142udze Active Directory",
            "P": "B. us\u0142ugi domenowej w us\u0142udze Active Directory"
        },
        {
            "Pytanie": "Element zamontowany na sta\u0142e u abonenta, w kt&oacute;rym znajduje si\u0119 zako\u0144czenie okablowania strukturalnego poziomego, to",
            "IMG": "",
            "B1": "B. punkt konsolidacyjny",
            "B2": "C. gniazdo energetyczne",
            "B3": "D. punkt rozdzielczy",
            "P": "A. gniazdo teleinformatyczne"
        },
        {
            "Pytanie": "Translacj\u0105 nazw domenowych na adresy sieciowe zajmuje si\u0119 us\u0142uga",
            "IMG": "",
            "B1": "A. SMTP",
            "B2": "B. SNMP",
            "B3": "D. DHCP",
            "P": "C. DNS"
        },
        {
            "Pytanie": "W sieci Ethernet 100Base-TX do transmisji danych wykorzystywane s\u0105 \u017cy\u0142y kabla UTP do\u0142\u0105czone do pin&oacute;w",
            "IMG": "",
            "B1": "A. 1,2,3,4",
            "B2": "B. 4,5,6,7",
            "B3": "C. 1,2,5,6",
            "P": "D. 1,2,3,6"
        },
        {
            "Pytanie": "Aby w systemie Windows zmieni\u0107 parametry konfiguracyjne Menu Start i paska zada\u0144 nale\u017cy wykorzysta\u0107 przystawk\u0119",
            "IMG": "",
            "B1": "B. azman.msc",
            "B2": "C. dcpol.msc",
            "B3": "D. fsmgmt.msc",
            "P": "A. gpedit.msc"
        },
        {
            "Pytanie": "Licencja oprogramowania umo\u017cliwiaj\u0105ca darmowe rozpowszechnianie aplikacji to",
            "IMG": "",
            "B1": "A. shareware",
            "B2": "B. MOLP",
            "B3": "D. OEM",
            "P": "C. freeware"
        },
        {
            "Pytanie": "Rysunek przedstawia schemat",
            "IMG": "https://egzamin-informatyk.pl/e12/773.jpg",
            "B1": "A. prze\u0142\u0105cznika kopu\u0142kowego",
            "B2": "C. przetwornika DAC",
            "B3": "D. karty graficznej",
            "P": "B. zasilacza impulsowego"
        },
        {
            "Pytanie": "Element oznaczony numerem 1 na schemacie blokowym karty graficznej",
            "IMG": "https://egzamin-informatyk.pl/old/715.jpg",
            "B1": "B. przechowuje dane wy\u015bwietlane, w trybie graficznym",
            "B2": "C. zamienia sygna\u0142 cyfrowy na sygna\u0142 analogowy",
            "B3": "D. generuje sygna\u0142 RGB na wyj\u015bcie karty graficznej",
            "P": "A. zawiera matryc\u0119 znak&oacute;w trybu tekstowego"
        },
        {
            "Pytanie": "Rysunek przedstawia schemat ethernetowego po\u0142\u0105czenia niekrosowanych, o\u015bmiopinowych z\u0142\u0105cz 8P8C. Schemat ten nosi nazw\u0119:",
            "IMG": "https://egzamin-informatyk.pl/e13/189.jpg",
            "B1": "A. T568A",
            "B2": "B. T568C",
            "B3": "C. T568D",
            "P": "D. T568B"
        },
        {
            "Pytanie": "Topologia fizyczna sieci, w kt&oacute;rej jako medium transmisyjne stosuje si\u0119 fale radiowe, jest nazywana\ntopologi\u0105",
            "IMG": "",
            "B1": "A. CSMA/CD",
            "B2": "B. pier\u015bcienia",
            "B3": "C. magistrali",
            "P": "D. ad-hoc"
        },
        {
            "Pytanie": "W systemie Windows modu\u0142 odpowiedzialny za internetowe us\u0142ugi informacyjne to",
            "IMG": "",
            "B1": "A. IIU",
            "B2": "B. ISA",
            "B3": "C. OSI",
            "P": "D. IIS"
        },
        {
            "Pytanie": "Kt&oacute;ry port jest wykorzystywany przez protok&oacute;\u0142 FTP (File transfer Protocol)",
            "IMG": "",
            "B1": "B. 69",
            "B2": "C. 25",
            "B3": "D. 53",
            "P": "A. 20"
        },
        {
            "Pytanie": "Jaki b\u0119dzie koszt wymiany karty graficznej w komputerze, je\u015bli karta kosztuje 250 z\u0142, jej wymiana zajmie pracownikowi serwisu 80 min, a ka\u017cda rozpocz\u0119ta roboczo godzina kosztuje 50 z\u0142?",
            "IMG": "",
            "B1": "A. 400 z\u0142",
            "B2": "C. 250 z\u0142",
            "B3": "D. 300 z\u0142",
            "P": "B. 350 z\u0142"
        },
        {
            "Pytanie": "Protoko\u0142em wykorzystywanym przy rozg\u0142aszaniu grupowym, za pomoc\u0105 kt&oacute;rego hosty zg\u0142aszaj\u0105 swoje cz\u0142onkostwo, jest",
            "IMG": "",
            "B1": "A. EIGRP",
            "B2": "C. IGRP",
            "B3": "D. ICMP",
            "P": "B. IGMP"
        },
        {
            "Pytanie": "Aby chroni\u0107 komputery w sieci lokalnej przed nieautoryzowanym dost\u0119pem oraz atakami typu DoS nale\u017cy zainstalowa\u0107 i skonfigurowa\u0107",
            "IMG": "",
            "B1": "A. blokad\u0119 okienek pop-up",
            "B2": "B. program antywirusowy",
            "B3": "D. filtr antyspamowy",
            "P": "C. zapor\u0119 ogniow\u0105"
        },
        {
            "Pytanie": "Udost\u0119pnienie linuksowych us\u0142ug drukowania oraz serwera plik&oacute;w stacjom roboczym Windows, OS X, Linux umo\u017cliwia serwer",
            "IMG": "",
            "B1": "A. SQUID",
            "B2": "C. POSTFIX",
            "B3": "D. APACHE",
            "P": "B. SAMBA"
        },
        {
            "Pytanie": "Termin SLI dotyczy",
            "IMG": "",
            "B1": "A. kart sieciowych",
            "B2": "B. modem&oacute;w",
            "B3": "D. dysk&oacute;w twardych",
            "P": "C. kart graficznych"
        },
        {
            "Pytanie": "Bezpo\u0142\u0105czeniowy protok&oacute;\u0142 warstwy transportowej to",
            "IMG": "",
            "B1": "A. TCP",
            "B2": "B. SSH",
            "B3": "D. ARP",
            "P": "C. UDP"
        },
        {
            "Pytanie": "Kt&oacute;ry standard szyfrowania nale\u017cy wybra\u0107 podczas konfiguracji karty sieciowej, aby zabezpieczy\u0107 transmisj\u0119 bezprzewodow\u0105?",
            "IMG": "",
            "B1": "A. MAC",
            "B2": "B. EAP",
            "B3": "C. PPP",
            "P": "D. WPA"
        },
        {
            "Pytanie": "Procesor Athlon 2800+ to",
            "IMG": "",
            "B1": "A. procesor firmy AMD taktowany cz\u0119stotliwo\u015bci\u0105 2,8 GB",
            "B2": "C. procesor firmy Intel taktowany cz\u0119stotliwo\u015bci\u0105 2,8 GB",
            "B3": "D. procesor firmy Intel o wydajno\u015bci podobnej do procesora Pentium 4 taktowanego cz\u0119stotliwo\u015bci\u0105 2,8 GHz",
            "P": "B. procesor firmy AMD o wydajno\u015bci podobnej do procesora Pentium 4 taktowanego cz\u0119stotliwo\u015bci\u0105 2,8 GHz"
        },
        {
            "Pytanie": "Kt&oacute;ry adres IP nale\u017cy do klasy A?\n",
            "IMG": "",
            "B1": "A. 217.12.45.1",
            "B2": "B. 129.10.0.17",
            "B3": "D. 239.0.255.15\n",
            "P": "C. 125.11.0.7"
        },
        {
            "Pytanie": "Pod\u0142\u0105czaj\u0105c drukark\u0119 wyposa\u017con\u0105 w z\u0142\u0105cze r&oacute;wnoleg\u0142e do komputera, kt&oacute;ry posiada tylko porty USB nale\u017cy zainstalowa\u0107 adapter",
            "IMG": "",
            "B1": "A. USB na RS-232",
            "B2": "B. USB na PS/2",
            "B3": "D. USB na COM",
            "P": "C. USB na LPT"
        },
        {
            "Pytanie": "Na rysunku przedstawiono sie\u0107 o topologii",
            "IMG": "https://egzamin-informatyk.pl/e13/149.jpg",
            "B1": "A. drzewa",
            "B2": "B. siatki",
            "B3": "C. gwiazdy",
            "P": "D. magistrali"
        },
        {
            "Pytanie": "Jakiego typu rekord jest tworzony automatycznie w momencie utworzenia strefy wyszukiwania do przodu w konfiguracji serwera DNS w systemach Windows Server?",
            "IMG": "",
            "B1": "A. PTR",
            "B2": "B. MX",
            "B3": "C. A",
            "P": "D. NS"
        },
        {
            "Pytanie": "Wska\u017c tryb pracy, w kt&oacute;rym komputer zu\u017cywa najmniejsz\u0105 ilo\u015b\u0107 energii",
            "IMG": "",
            "B1": "A. u\u015bpienie ",
            "B2": "C. wstrzymanie",
            "B3": "D. gotowo\u015b\u0107 (pracy)",
            "P": "B. hibernacja"
        },
        {
            "Pytanie": "Jaka jest liczba pin&oacute;w we wtyczce SATA?",
            "IMG": "",
            "B1": "A. 5",
            "B2": "B. 4",
            "B3": "C. 9",
            "P": "D. 7"
        },
        {
            "Pytanie": "Kt&oacute;ry protok&oacute;\u0142 warstwy aplikacji definiuje wysy\u0142anie poczty elektronicznej?",
            "IMG": "",
            "B1": "B. FTP (File Transfer Protocol)",
            "B2": "C. DNS (Domain Name System)",
            "B3": "D. HTTP (Hypertext Transfer Protocol)",
            "P": "A. SMTP (Simple Mail Transfer Protocol)"
        },
        {
            "Pytanie": "Jak\u0105 rol\u0119 serwera z rodziny Windows Server nale\u017cy doda\u0107, aby serwer realizowa\u0142 us\u0142ugi rutingu?",
            "IMG": "",
            "B1": "A. Us\u0142ugi domenowe w us\u0142udze Active Directory",
            "B2": "B. Serwer sieci Web (IIS)",
            "B3": "C. Us\u0142ugi zarz\u0105dzania dost\u0119pu w us\u0142udze Active Directory",
            "P": "D. Us\u0142ugi zasad i dost\u0119pu sieciowego"
        },
        {
            "Pytanie": "Wykonanie polecenia NET USER GRACZ * /ADD zapisanego w wierszu polece\u0144 Windows spowoduje",
            "IMG": "",
            "B1": "A. dodanie konta GRACZ bez has\u0142a i przypisanie mu uprawnie\u0144 administratora komputera",
            "B2": "C. dodanie konta GRACZ z has\u0142em *",
            "B3": "D. wy\u015bwietlenie komunikatu o niew\u0142a\u015bciwej sk\u0142adni polecenia",
            "P": "B. wy\u015bwietlenie monitu o podanie has\u0142a"
        },
        {
            "Pytanie": "Jak nazywa si\u0119 klucz rejestru systemu Windows, w kt&oacute;rym s\u0105 zapisane powi\u0105zania typ&oacute;w plik&oacute;w z obs\u0142uguj\u0105cymi je aplikacjami?",
            "IMG": "",
            "B1": "A. HKEY_CURRENT_PROGS",
            "B2": "C. HKEY_LOCAL_RELATIONS",
            "B3": "D. HKEY_USERS",
            "P": "B. HKEY_CLASSES_ROOT"
        },
        {
            "Pytanie": "GRUB, LILO, NTLDR to",
            "IMG": "",
            "B1": "A. wersje g\u0142&oacute;wnego interfejsu sieciowego",
            "B2": "C. aplikacje do aktualizacji BIOS-u",
            "B3": "D. firmware dla dysku twardego",
            "P": "B. programy rozruchowe"
        },
        {
            "Pytanie": "Przycisk umieszczony na obudowie rutera, kt&oacute;rego opis znajduje si\u0119 w ramce, jest stosowany w celu",
            "IMG": "https://egzamin-informatyk.pl/e13/597.jpg",
            "B1": "B. zrestartowania rutera",
            "B2": "C. w\u0142\u0105czenia lub wy\u0142\u0105czenia rutera",
            "B3": "D. w\u0142\u0105czenia lub wy\u0142\u0105czenia sieci Wi-Fi",
            "P": "A. przywr&oacute;cenia ustawie\u0144 fabrycznych rutera"
        },
        {
            "Pytanie": "Na stabilno\u015b\u0107 obrazu w monitorach CRT znacz\u0105cy wp\u0142yw ma",
            "IMG": "",
            "B1": "A. Odwzorowanie kolor&oacute;w",
            "B2": "C. Czas reakcji",
            "B3": "D. Wielocz\u0119stotliwo\u015b\u0107",
            "P": "B. Cz\u0119stotliwo\u015b\u0107 od\u015bwie\u017cania"
        },
        {
            "Pytanie": "Aby uzyska\u0107 przepustowo\u015b\u0107 na poziomie 4 GB/s w ka\u017cd\u0105 stron\u0119, nale\u017cy zamontowa\u0107 w zestawie komputerowym kart\u0119 graficzn\u0105 wykorzystuj\u0105c\u0105 interfejs",
            "IMG": "",
            "B1": "A. PCI-Express x 4 wersja 2.0",
            "B2": "B. PCI-Express x 8 wersja 1.0",
            "B3": "C. PCI-Express x 1 wersja 3.0",
            "P": "D. PCI-Express x 16 wersja 1.0"
        },
        {
            "Pytanie": "Kt&oacute;re \u015brodowisko graficzne przeznaczone dla systemu Linux charakteryzuje si\u0119 najmniejszymi wymaganiami parametr&oacute;w pami\u0119ci RAM?",
            "IMG": "",
            "B1": "A. AERO",
            "B2": "B. GNOME",
            "B3": "C. UNITY",
            "P": "D. XFCE"
        },
        {
            "Pytanie": "Kt&oacute;ra z wymienionych czynno\u015bci konserwacyjnych drukarek dotyczy tylko drukarki laserowej?",
            "IMG": "",
            "B1": "A. Usuni\u0119cie zabrudze\u0144 z zespo\u0142u czyszcz\u0105cego g\u0142owice",
            "B2": "C. Czyszczenie prowadnic karetki",
            "B3": "D. Oczyszczenie traktora",
            "P": "B. Czyszczenie luster i soczewek"
        },
        {
            "Pytanie": "Licencja na Office 365 PL Personal (1 stanowisko, subskrypcja na 1 rok) ESD jest przypisana do",
            "IMG": "",
            "B1": "A. dowolnej liczby u\u017cytkownik&oacute;w, wy\u0142\u0105cznie na jednym komputerze do cel&oacute;w komercyjnych",
            "B2": "B. dowolnej liczby u\u017cytkownik&oacute;w, wy\u0142\u0105cznie na jednym komputerze do cel&oacute;w komercyjnych i niekomercyjnych",
            "B3": "C. wy\u0142\u0105cznie jednego u\u017cytkownika na jednym komputerze i jednym urz\u0105dzeniu mobilnym do cel&oacute;w komercyjnych i niekomercyjnych",
            "P": "D. wy\u0142\u0105cznie jednego u\u017cytkownika, na jednym komputerze, jednym tablecie i jednym telefonie, wy\u0142\u0105cznie do cel&oacute;w niekomercyjnych"
        },
        {
            "Pytanie": "Do ilu maksymalnie GB pami\u0119ci RAM mo\u017ce uzyska\u0107 dost\u0119p 32-bitowa wersja systemu Windows?",
            "IMG": "",
            "B1": "A. 2 GB",
            "B2": "C. 8 GB",
            "B3": "D. 12 GB",
            "P": "B. 4 GB"
        },
        {
            "Pytanie": "Pami\u0119\u0107 podr\u0119czna okre\u015blana jest nazw\u0105",
            "IMG": "",
            "B1": "A. VLB",
            "B2": "B. EIDE",
            "B3": "D. Chipset",
            "P": "C. Cache"
        },
        {
            "Pytanie": "Jeden terabajt jest r&oacute;wny",
            "IMG": "",
            "B1": "A. 10^10 bajt&oacute;w",
            "B2": "B. 10^8 bajt&oacute;w",
            "B3": "D. 10^14 bajt&oacute;w",
            "P": "C. 10^12 bajt&oacute;w"
        },
        {
            "Pytanie": "Adres planowanej sieci nale\u017cy do klasy C. Sie\u0107 zosta\u0142a podzielona na 4 podsieci po 62 urz\u0105dzenia w ka\u017cdej podsieci. Kt&oacute;ra z poni\u017cszych masek jest odpowiednia do planowanego zadania?",
            "IMG": "",
            "B1": "A. 255.255.255.128",
            "B2": "B. 255.255.255.240",
            "B3": "C. 255.255.255.224",
            "P": "D. 255.255.255.192"
        },
        {
            "Pytanie": "Zainstalowanie serwera stron internetowych w rodzinie system&oacute;w Windows Server umo\u017cliwia rola",
            "IMG": "",
            "B1": "A. us\u0142ugi plik&oacute;w",
            "B2": "B. us\u0142ugi pulpitu zdalnego",
            "B3": "D. serwer aplikacji",
            "P": "C. serwer sieci Web"
        },
        {
            "Pytanie": "Ile punkt&oacute;w abonenckich (2 x RJ45), zgodnie z zaleceniami normy PN-EN 50167, powinno znajdowa\u0107 si\u0119 w pomieszczeniu biurowym o powierzchni 49 m2?",
            "IMG": "",
            "B1": "A. 1",
            "B2": "B. 9",
            "B3": "C. 4",
            "P": "D. 5"
        },
        {
            "Pytanie": "Ile maksymalnie urz\u0105dze\u0144 mo\u017cna zaadresowa\u0107 w sieci o adresacji IPv4 klasy C?",
            "IMG": "",
            "B1": "A. 126",
            "B2": "B. 2024",
            "B3": "D. 65534",
            "P": "C. 254"
        },
        {
            "Pytanie": "Kt&oacute;ry element szafy krosowniczej jest przedstawiony na rysunku?",
            "IMG": "https://egzamin-informatyk.pl/e13/698.jpg",
            "B1": "B. Maskownica 1U",
            "B2": "C. Przepust kablowy 2U",
            "B3": "D. Wieszak do kabli 2U",
            "P": "A. Panel krosowy 1U"
        },
        {
            "Pytanie": "Prawid\u0142owo zaprojektowana sie\u0107 komputerowa powinna umo\u017cliwia\u0107 rozbudow\u0119, czyli charakteryzowa\u0107 si\u0119",
            "IMG": "",
            "B1": "A. wydajno\u015bci\u0105",
            "B2": "B. nadmiarowo\u015bci\u0105",
            "B3": "C. redundancj\u0105",
            "P": "D. skalowalno\u015bci\u0105"
        },
        {
            "Pytanie": "Aby system operacyjny mia\u0142 szybszy dost\u0119p do plik&oacute;w znajduj\u0105cych si\u0119 na dysku twardym, nale\u017cy przeprowadzi\u0107",
            "IMG": "",
            "B1": "A. partycjonowanie dysku",
            "B2": "B. fragmentacj\u0119 dysku",
            "B3": "D. szyfrowanie dysku",
            "P": "C. defragmentacj\u0119 dysku"
        },
        {
            "Pytanie": "Kt&oacute;re polecenie w systemie Linux umo\u017cliwia sprawdzenie adresu IP przypisanego do interfejsu sieciowego?",
            "IMG": "",
            "B1": "A. msconfig",
            "B2": "B. ipconfig",
            "B3": "D. tcpconfig",
            "P": "C. ifconfig"
        },
        {
            "Pytanie": "W kt&oacute;rych no\u015bnikach pami\u0119ci masowej uszkodzenia mechaniczne s\u0105 najbardziej prawdopodobne?",
            "IMG": "",
            "B1": "A. W dyskach SSD",
            "B2": "B. W pami\u0119ciach Flash",
            "B3": "C. W kartach pami\u0119ci SD",
            "P": "D. W dyskach HDD"
        },
        {
            "Pytanie": "Na zdj\u0119ciu, strza\u0142k\u0105 wskazano gniazdo interfejsu",
            "IMG": "https://egzamin-informatyk.pl/old/352.jpg",
            "B1": "B. IDE",
            "B2": "C. FDD",
            "B3": "D. COM",
            "P": "A. LPT"
        },
        {
            "Pytanie": "Kt&oacute;r\u0105 z opcji konfiguracji ustawie\u0144 u\u017cytkownika z ograniczonymi uprawnieniami w systemie Windows, umo\u017cliwia przystawka secpol?",
            "IMG": "",
            "B1": "A. Odebranie mo\u017cliwo\u015bci zapisu na p\u0142ytach CD",
            "B2": "B. Czyszczenie historii niedawno otwieranych dokument&oacute;w",
            "B3": "C. Blokad\u0119 okre\u015blonych element&oacute;w w panelu sterowania",
            "P": "D. Zezwolenie na zmian\u0119 czasu systemowego"
        },
        {
            "Pytanie": "Na rysunku zosta\u0142 przedstawiony schemat budowy logicznej",
            "IMG": "https://egzamin-informatyk.pl/ee08/1929.jpg",
            "B1": "B. myszy komputerowej",
            "B2": "C. karty graficznej",
            "B3": "D. klawiatury",
            "P": "A. procesora"
        },
        {
            "Pytanie": "Aby przywr&oacute;ci\u0107 ustawienia domy\u015blne p\u0142yty g\u0142&oacute;wnej w przypadku, gdy nie ma mo\u017cliwo\u015bci uruchomienia programu BIOS Setup, nale\u017cy",
            "IMG": "",
            "B1": "A. uruchomi\u0107 ponownie system",
            "B2": "C. zaktualizowa\u0107 BIOS Setup",
            "B3": "D. do\u0142adowa\u0107 bateri\u0119 na p\u0142ycie g\u0142&oacute;wnej",
            "P": "B. prze\u0142o\u017cy\u0107 zwork\u0119 na p\u0142ycie g\u0142&oacute;wnej"
        },
        {
            "Pytanie": "Podczas monta\u017cu sieci komputerowej, przy wierceniu otwor&oacute;w w \u015bcianach, NIE NALE\u017bY u\u017cywa\u0107",
            "IMG": "",
            "B1": "A. okular&oacute;w ochronnych",
            "B2": "B. obuwia roboczego",
            "B3": "C. ubrania roboczego",
            "P": "D. r\u0119kawic ochronnych"
        },
        {
            "Pytanie": "Polecenie md w wierszu polece\u0144 systemu Windows s\u0142u\u017cy do",
            "IMG": "",
            "B1": "A. zmiany nazwy pliku",
            "B2": "B. tworzenia pliku",
            "B3": "D. przej\u015bcia do katalogu nadrz\u0119dnego",
            "P": "C. tworzenia katalogu"
        },
        {
            "Pytanie": "Jakiego narz\u0119dzia wraz z parametrami, nale\u017cy u\u017cy\u0107 w systemie Windows, aby wy\u015bwietli\u0107 przedstawione informacje o dysku twardym?",
            "IMG": "https://egzamin-informatyk.pl/e12/932.jpg",
            "B1": "B. DiskUtility",
            "B2": "C. hdparm",
            "B3": "D. ScanDisc",
            "P": "A. diskpart"
        },
        {
            "Pytanie": "Do oznaczenia iloczynu logicznego jest stosowany sp&oacute;jnik",
            "IMG": "",
            "B1": "B. OR",
            "B2": "C. XOR",
            "B3": "D. NOT",
            "P": "A. AND"
        },
        {
            "Pytanie": "W systemie binarnym wynikiem sumowania liczb dw&oacute;jkowych 1001101 i 11001 jest",
            "IMG": "",
            "B1": "A. 1101101",
            "B2": "B. 1110001",
            "B3": "D. 1101100",
            "P": "C. 1100110"
        },
        {
            "Pytanie": "Wska\u017c adres rozg\u0142oszeniowy sieci, do kt&oacute;rej nale\u017cy host o adresie 88.89.90.91/6?",
            "IMG": "",
            "B1": "A. 88.89.255.255",
            "B2": "C. 88.255.255.255",
            "B3": "D. 91.89.255.255",
            "P": "B. 91.255.255.255"
        },
        {
            "Pytanie": "Po wydaniu polecenia: net user w wierszu polece\u0144 systemu Windows, zostanie wy\u015bwietlona",
            "IMG": "",
            "B1": "A. nazwa aktualnego u\u017cytkownika i jego has\u0142o",
            "B2": "C. informacja o parametrach konta zalogowanego u\u017cytkownika",
            "B3": "D. pomoc dotycz\u0105ca polecenia net",
            "P": "B. lista kont u\u017cytkownik&oacute;w"
        },
        {
            "Pytanie": "Rezultat wykonania kt&oacute;rego polecenia z systemu Windows przedstawia rysunek?",
            "IMG": "https://egzamin-informatyk.pl/e13/345.jpg",
            "B1": "A. ping www.onet.pl",
            "B2": "C. traceroute www.onet.pl",
            "B3": "D. netstat www.onet.pl",
            "P": "B. tracert www.onet.pl"
        },
        {
            "Pytanie": "Protoko\u0142em kontrolnym rodziny TCP/IP, kt&oacute;rego rol\u0105 jest mi\u0119dzy innymi wykrywanie awarii urz\u0105dze\u0144\nsieciowych, jest",
            "IMG": "",
            "B1": "B. IMAP",
            "B2": "C. SMTP",
            "B3": "D. FDDI",
            "P": "A. ICMP"
        },
        {
            "Pytanie": "G\u0142&oacute;wny ksi\u0119gowy musi mie\u0107 mo\u017cliwo\u015b\u0107 odzyskiwania zawarto\u015bci folder&oacute;w z kopii zapasowej plik&oacute;w. Do jakiej grupy u\u017cytkownik&oacute;w systemu MS Windows XP nale\u017cy go przydzieli\u0107?",
            "IMG": "",
            "B1": "A. U\u017cytkownicy z ograniczeniami",
            "B2": "C. U\u017cytkownicy pulpitu zdalnego",
            "B3": "D. Operatorzy konfiguracji sieci",
            "P": "B. Operatorzy kopii zapasowych"
        },
        {
            "Pytanie": "Symbol kt&oacute;rego urz\u0105dzenia sieci komputerowej zosta\u0142 przedstawiony na rysunku?",
            "IMG": "https://egzamin-informatyk.pl/e13/697.jpg",
            "B1": "A. prze\u0142\u0105cznika",
            "B2": "B. koncentratora",
            "B3": "D. punktu dost\u0119powego",
            "P": "C. rutera"
        },
        {
            "Pytanie": "Jednostk\u0105 szybko\u015bci transmisji danych w sieciach komputerowych jest",
            "IMG": "",
            "B1": "B. dpi\t",
            "B2": "C. ips",
            "B3": "D. byte",
            "P": "A. bps"
        },
        {
            "Pytanie": "Kt&oacute;ry zapis jest postaci\u0105 pe\u0142n\u0105 maski o prefiksie 25?",
            "IMG": "",
            "B1": "A. 255.255.0.0",
            "B2": "B. 255.255.200.192",
            "B3": "D. 255.255.255.0",
            "P": "C. 255.255.255.128"
        },
        {
            "Pytanie": "Zgodnie z norm\u0105 PN-EN 50174 okablowanie poziome w systemie okablowania strukturalnego to cz\u0119\u015b\u0107 okablowania pomi\u0119dzy",
            "IMG": "",
            "B1": "A. serwerem a szkieletem sieci",
            "B2": "C. gniazdkiem u\u017cytkownika a terminalem ko\u0144cowym",
            "B3": "D. punktami rozdzielczymi w g\u0142&oacute;wnych pionach budynku",
            "P": "B. punktem rozdzielczym a gniazdem u\u017cytkownika"
        },
        {
            "Pytanie": "U\u017cycie polecenia attrib +h +s +r przyk\u0142ad.txt w linii polece\u0144 systemu Windows spowoduje",
            "IMG": "",
            "B1": "B. nadanie dla pliku przyk\u0142ad.txt atrybyt&oacute;w: ukryty, skompresowany, tylko do odczytu",
            "B2": "C. zabezpieczenie pliku przyk\u0142ad.txt has\u0142em hsr",
            "B3": "D. zapisanie ci\u0105gu znak&oacute;w hsr w pliku przyk\u0142ad.txt",
            "P": "A. nadanie dla pliku przyk\u0142ad.txt atrybyt&oacute;w: ukryty, systemowy, tylko do odczytu"
        },
        {
            "Pytanie": "Do konserwacji element&oacute;w \u0142o\u017cyskowanych oraz \u015blizgowych w urz\u0105dzeniach peryferyjnych stosuje si\u0119",
            "IMG": "",
            "B1": "A. spr\u0119\u017cone powietrze",
            "B2": "B. pow\u0142ok\u0119 grafitow\u0105",
            "B3": "D. tetrow\u0105 szmatk\u0119",
            "P": "C. smar syntetyczny"
        },
        {
            "Pytanie": "W kt&oacute;rym gnie\u017adzie nale\u017cy zainstalowa\u0107 procesor INTEL CORE i3-4350- 3.60 GHz, x2/4, 4MB, 54W, HD 4600, BOX, s-1150?",
            "IMG": "https://egzamin-informatyk.pl/e12/845.jpg",
            "B1": "A. A",
            "B2": "C. C",
            "B3": "D. D",
            "P": "B. B"
        },
        {
            "Pytanie": "Zalet\u0105 systemu plik&oacute;w NTFS jest",
            "IMG": "",
            "B1": "A. mo\u017cliwo\u015b\u0107 sformatowania no\u015bnika o ma\u0142ej pojemno\u015bci (od 1,44MiB)",
            "B2": "B. zapisywanie plik&oacute;w o nazwie d\u0142u\u017cszej ni\u017c 255 znak&oacute;w",
            "B3": "D. przechowywanie tylko jednej kopi tabeli plik&oacute;w",
            "P": "C. mo\u017cliwo\u015b\u0107 szyfrowania folder&oacute;w i plik&oacute;w "
        },
        {
            "Pytanie": "Specyfika pracy firmy wymaga pos\u0142ugiwania si\u0119 systemami plik&oacute;w charakteryzuj\u0105cych si\u0119 du\u017cym bezpiecze\u0144stwem i mo\u017cliwo\u015bci\u0105 szyfrowania danych.\nW tym celu nale\u017cy zastosowa\u0107 system operacyjny Windows",
            "IMG": "",
            "B1": "A. NTSC",
            "B2": "C. NC",
            "B3": "D. Server",
            "P": "B. 2000/7/XP"
        },
        {
            "Pytanie": "Kt&oacute;ry z wymienionych mechanizm&oacute;w zapewni najwy\u017cszy poziom bezpiecze\u0144stwa sieci bezprzewodowych standardu 802.11n?",
            "IMG": "",
            "B1": "B. WPS (Wi-Fi Protected Setup)",
            "B2": "C. WPA (Wi-Fi Protected Access)",
            "B3": "D. WEP (Wired Equivalent Privacy)",
            "P": "A. WPA2 (Wi-Fi Protected Access II)"
        },
        {
            "Pytanie": "Adresem IPv6 autokonfiguracji \u0142\u0105cza jest:",
            "IMG": "",
            "B1": "B. 2000::/3",
            "B2": "C. FF00::/8",
            "B3": "D. ::/128",
            "P": "A. FE80::/10"
        },
        {
            "Pytanie": "Za pomoc\u0105 polecenia ipconfig /flushdns mo\u017cna wykona\u0107 konserwacj\u0119 urz\u0105dzenia sieciowego\npolegaj\u0105c\u0105 na ",
            "IMG": "",
            "B1": "B. odnowieniu dzier\u017cawy adresu IP",
            "B2": "C. zwolnieniu dzier\u017cawy adresu uzyskanego z DHCP",
            "B3": "D. aktualizacji ustawie\u0144 nazw interfejs&oacute;w sieciowych",
            "P": "A. wyczyszczeniu bufora systemu nazw domenowych"
        },
        {
            "Pytanie": "Kt&oacute;re urz\u0105dzenie nale\u017cy zainstalowa\u0107 w serwerze, by mo\u017cna by\u0142o automatycznie archiwizowa\u0107 dane na ta\u015bmach magnetycznych?",
            "IMG": "",
            "B1": "A. Dysk SSD",
            "B2": "B. Nap\u0119d DVD",
            "B3": "C. Blue Ray",
            "P": "D. Streamer"
        },
        {
            "Pytanie": "Sie\u0107 komputerowa ograniczaj\u0105ca si\u0119 do komputer&oacute;w wy\u0142\u0105cznie jednej organizacji, w kt&oacute;rej mog\u0105 istnie\u0107 us\u0142ugi, realizowane przez serwery w sieci LAN, np. strony WWW, poczta elektroniczna to",
            "IMG": "",
            "B1": "A. Infranet",
            "B2": "C. Internet",
            "B3": "D. Extranet",
            "P": "B. Intranet"
        },
        {
            "Pytanie": "Kt&oacute;ry zapis adresu IPv4 wraz z mask\u0105 jest b\u0142\u0119dny?",
            "IMG": "",
            "B1": "B. 18.4.0.0, maska 255.0.0.0",
            "B2": "C. 100.0.0.0/8",
            "B3": "D. 16.1.1.1/5",
            "P": "A. 192.168.0.1, maska 255.250.255.0"
        },
        {
            "Pytanie": "Podstawow\u0105 metod\u0105 zabezpieczenia sieci komputerowej przed atakiem z zewn\u0105trz jest stosowanie",
            "IMG": "",
            "B1": "A. programu antywirusowego",
            "B2": "B. blokady portu 80",
            "B3": "C. serwera Proxy",
            "P": "D. zapory sieciowej"
        },
        {
            "Pytanie": "Wska\u017c podzesp&oacute;\u0142 niekompatybilny z p\u0142yt\u0105 g\u0142&oacute;wn\u0105 o przedstawionych w tabeli parametrach",
            "IMG": "https://egzamin-informatyk.pl/ee08/1931.jpg",
            "B1": "A. Karta graficzna: Gigabyte GeForce GTX 1050 OC, 2GB, GDDR5, 128 bit, PCI-Express 3.0 x16",
            "B2": "B. Pami\u0119\u0107 RAM: Corsair Vengeance LPX, DDR4, 2x16GB, 3000MHz, CL15 Black",
            "B3": "D. Monitor: Dell, 34&quot;, 1x DisplayPort, 1x miniDP, 2x USB 3.0 Upstream, 4x USB 3.0 Downstream",
            "P": "C. Procesor: INTEL CORE i3-4350, 3.60 GHz, x2/4, 4 MB, 54W, HD 4600, BOX, s-1150"
        },
        {
            "Pytanie": "B\u0142\u0105d systemu Windows typu STOP Error (Blue Screen), polegaj\u0105cy na odwo\u0142ywaniu si\u0119 systemu do nieprawid\u0142owych danych w pami\u0119ci operacyjnej, to",
            "IMG": "",
            "B1": "B. UNEXPECTED_KERNEL_MODE_TRAP",
            "B2": "C. NTFS_FILE_SYSTEM",
            "B3": "D. UNMOUNTABLE_BOOT_VOLUME",
            "P": "A. PAGE_FAULT_IN_NONPAGE_AREA"
        },
        {
            "Pytanie": "Zgodnie z norm\u0105 PN-EN 50174 dopuszczalna \u0142\u0105czna d\u0142ugo\u015b\u0107 kabla po\u0142\u0105czeniowego pomi\u0119dzy punktem abonenckim a komputerem i kabla krosowniczego (A+C) wynosi",
            "IMG": "https://egzamin-informatyk.pl/e13/586.jpg",
            "B1": "A. 3 m",
            "B2": "B. 6 m",
            "B3": "C. 5 m",
            "P": "D. 10 m"
        },
        {
            "Pytanie": "W celu wy\u0142\u0105czenia rozg\u0142aszania nazwy sieci bezprzewodowej nale\u017cy w punkcie dost\u0119powym wy\u0142\u0105czy\u0107 funkcj\u0119",
            "IMG": "",
            "B1": "A. UPnP AV",
            "B2": "B. Wide Channel",
            "B3": "C. Filter IDENT",
            "P": "D. SSID"
        },
        {
            "Pytanie": "Odzyskanie listy kontakt&oacute;w w telefonie kom&oacute;rkowym z zainstalowanym systemem Android jest mo\u017cliwe,\ngdy u\u017cytkownik wcze\u015bniej wykona\u0142 synchronizacj\u0119 danych urz\u0105dzenia z Google Drive za pomoc\u0105",
            "IMG": "",
            "B1": "B. konta Microsoft",
            "B2": "C. dowolnego konta pocztowego z portalu Onet",
            "B3": "D. konta Yahoo",
            "P": "A. konta Google"
        },
        {
            "Pytanie": "U\u017cycie komendy perfmon w wierszu polece\u0144 systemu Windows spowoduje",
            "IMG": "",
            "B1": "A. wykonanie kopii zapasowej systemu",
            "B2": "B. w\u0142\u0105czenie szyfrowania zawarto\u015bci folderu bie\u017c\u0105cego",
            "B3": "C. aktualizacj\u0119 systemu operacyjnego za pomoc\u0105 us\u0142ugi Windows Update",
            "P": "D. uruchomienie narz\u0119dzia Monitor wydajno\u015bci"
        },
        {
            "Pytanie": "Kt&oacute;re zdanie charakteryzuje profil tymczasowy u\u017cytkownika?",
            "IMG": "",
            "B1": "A. Jest tworzony podczas pierwszego logowania do komputera i przechowywany na lokalnym dysku twardym komputera",
            "B2": "C. Umo\u017cliwia korzystanie na dowolnym komputerze w sieci z ustawie\u0144 i danych u\u017cytkownika znajduj\u0105cych si\u0119 na serwerze",
            "B3": "D. Jest tworzony przez administratora systemu i przechowywany na serwerze, tylko administrator systemu mo\u017ce wprowadza\u0107 w nim zmiany",
            "P": "B. Po wylogowaniu si\u0119 u\u017cytkownika, zmiany wprowadzone przez niego w ustawieniach pulpitu i w plikach nie zostan\u0105 zachowane"
        },
        {
            "Pytanie": "Kt&oacute;ra rola systemu Windows Server umo\u017cliwia m.in. uproszczon\u0105, bezpieczn\u0105 i zdaln\u0105 instalacj\u0119 system&oacute;w operacyjnych Windows na komputerach w sieci?",
            "IMG": "",
            "B1": "A. Us\u0142uga aktywacji zbiorczej",
            "B2": "C. Serwer aplikacji",
            "B3": "D. Hyper-V",
            "P": "B. Us\u0142uga wdra\u017cania systemu Windows"
        },
        {
            "Pytanie": "W systemach operacyjnych Windows ograniczenie u\u017cytkownikom dost\u0119pu do poszczeg&oacute;lnych katalog&oacute;w, plik&oacute;w lub dysk&oacute;w umo\u017cliwia system plik&oacute;w",
            "IMG": "",
            "B1": "A. FAT32",
            "B2": "C. FAT16",
            "B3": "D. EXT2",
            "P": "B. NTFS"
        },
        {
            "Pytanie": "Bez zezwolenia posiadacza autorskich praw maj\u0105tkowych do programu komputerowego jego legalny u\u017cytkownik, zgodnie z ustaw\u0105 o prawie autorskim i prawach pokrewnych",
            "IMG": "",
            "B1": "A. nie mo\u017ce wykona\u0107 \u017cadnej kopii programu",
            "B2": "B. mo\u017ce wykona\u0107 dowoln\u0105 liczb\u0119 kopii programu na w\u0142asny u\u017cytek",
            "B3": "C. mo\u017ce rozpowszechnia\u0107 program",
            "P": "D. mo\u017ce wykona\u0107 jedn\u0105 kopi\u0119, je\u015bli jest to niezb\u0119dne do korzystania z programu"
        },
        {
            "Pytanie": "Polecenie netstat -a w systemach Microsoft Windows wy\u015bwietla ",
            "IMG": "",
            "B1": "A. Aktualne parametry konfiguracyjne sieci TCP/IP",
            "B2": "C. Statystyk\u0119 odwiedzin stron internetowych",
            "B3": "D. Tablic\u0119 trasowania",
            "P": "B. Wszystkie aktywne po\u0142\u0105czenia protoko\u0142u TCP"
        },
        {
            "Pytanie": "Kt&oacute;re polecenie rodziny system&oacute;w Windows nale\u017cy zastosowa\u0107, aby skonfigurowa\u0107 statyczny adres IP w wierszu polece\u0144?",
            "IMG": "",
            "B1": "A. telnet",
            "B2": "B. tracert",
            "B3": "D. net use ",
            "P": "C. netsh"
        },
        {
            "Pytanie": "Kt&oacute;re polecenie powinien zastosowa\u0107 root w systemie Ubuntu Linux, aby zaktualizowa\u0107 wszystkie pakiety (ca\u0142y system) do nowej wersji wraz z nowym j\u0105drem?",
            "IMG": "",
            "B1": "B. apt-get install nazwa_pakietu",
            "B2": "C. apt-get update",
            "B3": "D. apt-get upgrade",
            "P": "A. apt-get dist-upgrade"
        },
        {
            "Pytanie": "Kt&oacute;re polecenie systemu operacyjnego Linux jest stosowane do \u015bledzenia komunikacji pakiet&oacute;w TCP/IP lub protoko\u0142&oacute;w transmitowanych lub odbieranych w sieci komputerowej, do komputerowej do kt&oacute;rej pod\u0142\u0105czony jest komputer u\u017cytkownika?",
            "IMG": "",
            "B1": "B. ipconfig",
            "B2": "C. route",
            "B3": "D. ssh",
            "P": "A. tcpdump"
        },
        {
            "Pytanie": "Aby mo\u017cna by\u0142o wykorzysta\u0107 aparat telefoniczny PSTN do wykonywania po\u0142\u0105cze\u0144 za pomoc\u0105 sieci\nkomputerowej, nale\u017cy go pod\u0142\u0105czy\u0107 do",
            "IMG": "",
            "B1": "A. mostka sieciowego",
            "B2": "B. modemu analogowego",
            "B3": "C. repetera sygna\u0142u",
            "P": "D. bramki VoIP"
        },
        {
            "Pytanie": "Kt&oacute;ry z protoko\u0142&oacute;w jest bezpo\u0142\u0105czeniowym protoko\u0142em warstwy transportowej?",
            "IMG": "",
            "B1": "A. TCP",
            "B2": "C. ARP",
            "B3": "D. FTP",
            "P": "B. UDP"
        },
        {
            "Pytanie": "Kt&oacute;ry protok&oacute;\u0142 obs\u0142uguje rozproszone wysy\u0142anie i pobieranie plik&oacute;w?",
            "IMG": "",
            "B1": "A. HTTPS",
            "B2": "B. FTP",
            "B3": "C. Radius",
            "P": "D. BitTorrent"
        },
        {
            "Pytanie": "Na rysunku przedstawiono grot wkr\u0119taka typu",
            "IMG": "https://egzamin-informatyk.pl/e12/907.jpg",
            "B1": "A. krzy\u017cowego",
            "B2": "B. tri-wing",
            "B3": "C. imbus",
            "P": "D. torx"
        },
        {
            "Pytanie": "Zestaw regu\u0142 definiuj\u0105cych spos&oacute;b przesy\u0142ania informacji w sieci opisuje",
            "IMG": "",
            "B1": "A. zasada",
            "B2": "B. standard",
            "B3": "C. regu\u0142a",
            "P": "D. protok&oacute;\u0142"
        },
        {
            "Pytanie": "Firma potrzebuje drukarki s\u0142u\u017c\u0105cej do drukowania trwa\u0142ych kod&oacute;w kreskowych oraz etykiet na folii i powierzchniach z tworzyw sztucznych. Jak\u0105 drukark\u0119 musi zakupi\u0107?",
            "IMG": "",
            "B1": "A. Mozaikow\u0105",
            "B2": "B. Ig\u0142ow\u0105",
            "B3": "C. Termiczn\u0105",
            "P": "D. Termotransferow\u0105"
        },
        {
            "Pytanie": "Jaki jest domy\u015blny port serwera us\u0142ugi WWW?",
            "IMG": "",
            "B1": "A. 8080",
            "B2": "C. 8081",
            "B3": "D. 800",
            "P": "B. 80"
        },
        {
            "Pytanie": "Kt&oacute;re urz\u0105dzenie nale\u017cy zastosowa\u0107 do pod\u0142\u0105czenia komputer&oacute;w w topologii gwiazdy?",
            "IMG": "",
            "B1": "A. Transceiver",
            "B2": "B. Bridge",
            "B3": "D. Repeater",
            "P": "C. Switch"
        },
        {
            "Pytanie": "Wska\u017c zdanie nieprawdziwe:",
            "IMG": "",
            "B1": "A. Stron\u0105 aktywn\u0105 w architekturze klient-serwer jest klient",
            "B2": "C. Zalet\u0105 topologii pier\u015bcienia jest ma\u0142e zu\u017cycie kabla",
            "B3": "D. IEEE 802.11 to nazwa standardu Wireless LAN ",
            "P": "B. Awaria w\u0119z\u0142a w topologii gwiazdy spowoduje parali\u017c sieci"
        },
        {
            "Pytanie": "Do pomiaru warto\u015bci rezystancji s\u0142u\u017cy",
            "IMG": "",
            "B1": "A. amperomierz",
            "B2": "B. woltomierz",
            "B3": "D. watomierz",
            "P": "C. omomierz"
        },
        {
            "Pytanie": "Aby ikony widoczne na przedstawionym obrazie pojawi\u0142y si\u0119 na Pasku zada\u0144, nale\u017cy w systemie Windows skonfigurowa\u0107",
            "IMG": "https://egzamin-informatyk.pl/ee08/1955.jpg",
            "B1": "A. funkcj\u0119 Poka\u017c pulpit",
            "B2": "B. funkcj\u0119 Snap i Peek",
            "B3": "D. obszar Action Center",
            "P": "C. obszar powiadomie\u0144"
        },
        {
            "Pytanie": "Rysunek przedstawia konfiguracj\u0119 protoko\u0142u TCP/IP serwera i stacji roboczej. Na serwerze jest zainstalowana rola serwera DNS. Polecenie ping www.cke.edu.pl uruchomione na serwerze daje wynik pozytywny, a na stacji roboczej negatywny. Aby us\u0142uga DNS na stacji dzia\u0142a\u0142a prawid\u0142owo, nale\u017cy zmieni\u0107 adres",
            "IMG": "https://egzamin-informatyk.pl/e13/647.jpg",
            "B1": "A. bramy na stacji roboczej na 192.168.1.10",
            "B2": "B. bramy na serwerze na 192.168.1.11",
            "B3": "C. serwera DNS na stacji roboczej na 192.168.1.11",
            "P": "D. serwera DNS na stacji roboczej na 192.168.1.10"
        },
        {
            "Pytanie": "Brak informacji o parzysto\u015bci liczby lub o znaku wyniku wykonywanej operacji w ALU, mo\u017ce \u015bwiadczy\u0107 o problemach w dzia\u0142aniu",
            "IMG": "",
            "B1": "A. wska\u017anika stosu",
            "B2": "B. tablicy rozkaz&oacute;w",
            "B3": "D. pami\u0119ci cache",
            "P": "C. rejestru flagowego"
        },
        {
            "Pytanie": "Jaka jest maksymalna pr\u0119dko\u015b\u0107 odczytu p\u0142yt CD-R w nap\u0119dzie oznaczonym x48?",
            "IMG": "",
            "B1": "A. 480 kB/s",
            "B2": "C. 4800 kB/s",
            "B3": "D. 10000 kB/s",
            "P": "B. 7200 kB/s"
        },
        {
            "Pytanie": "Po\u0142\u0105czenie VPN obs\u0142ugiwane przez system Windows Server, w kt&oacute;rym uwierzytelnienie u\u017cytkownik&oacute;w nast\u0119puje przez niezabezpieczone po\u0142\u0105czenia, a dopiero po wymianie uwierzytelnie\u0144 rozpoczyna si\u0119 szyfrowanie po\u0142\u0105czenia, to",
            "IMG": "",
            "B1": "A. SSTP",
            "B2": "C. IPSEC",
            "B3": "D. L2TP",
            "P": "B. PPTP"
        },
        {
            "Pytanie": "Komputer pracuj\u0105cy w domenie Active Directory nie mo\u017ce po\u0142\u0105czy\u0107 si\u0119 z kontrolerem domeny, na kt&oacute;rym jest przechowywany profil u\u017cytkownika. Jaki typ profilu u\u017cytkownika zostanie utworzony na tym komputerze?",
            "IMG": "",
            "B1": "A. lokalny",
            "B2": "C. mobilny",
            "B3": "D. obowi\u0105zkowy",
            "P": "B. tymczasowy"
        },
        {
            "Pytanie": "W celu wyegzekwowania od u\u017cytkownik&oacute;w lokalnych system&oacute;w z rodziny Windows Server okresowej zmiany has\u0142a i stosowania hase\u0142 o odpowiedniej d\u0142ugo\u015bci spe\u0142niaj\u0105cych wymagania co do z\u0142o\u017cono\u015bci, nale\u017cy skonfigurowa\u0107",
            "IMG": "",
            "B1": "B. w\u0142a\u015bciwo\u015bci konta u\u017cytkownika w zarz\u0105dzaniu komputerem",
            "B2": "C. zasady blokady konta w zasadach grup",
            "B3": "D. konta u\u017cytkownik&oacute;w w Panelu Sterowania",
            "P": "A. zasady hase\u0142 w zasadach zabezpiecze\u0144 lokalnych"
        },
        {
            "Pytanie": "Kt&oacute;re z\u0142\u0105cze karty graficznej NIE jest interfejsem cyfrowym?",
            "IMG": "",
            "B1": "A. HDMI",
            "B2": "B. Display Port",
            "B3": "C. DVI-D",
            "P": "D. D-SUB 15pin"
        },
        {
            "Pytanie": "Do przechowywania cz\u0119\u015bci plik&oacute;w program&oacute;w i danych, kt&oacute;re s\u0105 du\u017ce i nie mog\u0105 by\u0107 umieszczone w ca\u0142o\u015bci w pami\u0119ci, s\u0142u\u017cy",
            "IMG": "",
            "B1": "A. schowek systemu",
            "B2": "B. edytor rejestru",
            "B3": "D. menad\u017cer zada\u0144",
            "P": "C. plik stronicowania"
        },
        {
            "Pytanie": "Do prawid\u0142owego dzia\u0142ania procesora jest niezb\u0119dne pod\u0142\u0105czenie 4-stykowego lub 8-stykowego z\u0142\u0105cza zasilania o napi\u0119ciu",
            "IMG": "",
            "B1": "B. 3,3 V",
            "B2": "C. 7 V",
            "B3": "D. 24 V",
            "P": "A. 12 V"
        },
        {
            "Pytanie": "Do zmiany nazwy pliku i jego lokalizacji w systemie Windows s\u0142u\u017cy polecenie",
            "IMG": "",
            "B1": "A. set",
            "B2": "C. mkdir",
            "B3": "D. rename",
            "P": "B. move"
        },
        {
            "Pytanie": "Na rysunku przedstawiono kabel",
            "IMG": "https://egzamin-informatyk.pl/e13/242.jpg",
            "B1": "A. U/FTP",
            "B2": "C. F/STP",
            "B3": "D. U/UTP",
            "P": "B. S/FTP"
        },
        {
            "Pytanie": "Wska\u017c znak umieszczany na urz\u0105dzeniach elektrycznych przeznaczonych do obrotu i sprzeda\u017cy w Unii Europejskiej",
            "IMG": "https://egzamin-informatyk.pl/e12/856.jpg",
            "B1": "A. A",
            "B2": "C. C",
            "B3": "D. D",
            "P": "B. B"
        },
        {
            "Pytanie": "W systemie Windows domy\u015blne konto administratora po jego wy\u0142\u0105czeniu i ponownym uruchomieniu komputera",
            "IMG": "",
            "B1": "A. nie pozwala na zmian\u0119 has\u0142a dost\u0119pu do konta",
            "B2": "C. umo\u017cliwia uruchamianie niekt&oacute;rych us\u0142ug z tego konta",
            "B3": "D. jest niedost\u0119pne, gdy system uruchomi si\u0119 w trybie awaryjnym",
            "P": "B. pozostaje dost\u0119pne po uruchomieniu systemu w trybie awaryjnym"
        },
        {
            "Pytanie": "Aby zainstalowa\u0107 system openSUSE i skonfigurowa\u0107 jego ustawienia, mo\u017cna wykorzysta\u0107 narz\u0119dzie",
            "IMG": "",
            "B1": "A. Brasero",
            "B2": "B. Evolution",
            "B3": "C. GEdit",
            "P": "D. YaST"
        },
        {
            "Pytanie": "Jakie polecenie w systemach Windows/Linux jest zwyczajowo stosowane do \u015bledzenia trasy pakiet&oacute;w w sieciach IP?",
            "IMG": "",
            "B1": "B. router",
            "B2": "C. netstat",
            "B3": "D. ping",
            "P": "A. tracert/traceroute"
        },
        {
            "Pytanie": "Kt&oacute;ry z adres&oacute;w IP nale\u017cy do klasy B?",
            "IMG": "",
            "B1": "B. 96.15.2.4",
            "B2": "C. 100.10.10.2",
            "B3": "D. 198.15.110.112",
            "P": "A. 134.192.16.1"
        },
        {
            "Pytanie": "Us\u0142ug\u0105 katalogow\u0105 nie jest:",
            "IMG": "",
            "B1": "A. Active Directory",
            "B2": "B. OpenLDAP",
            "B3": "C. Novell eDirectory",
            "P": "D. Oracle baseDirectory"
        },
        {
            "Pytanie": "Do prawid\u0142owego dzia\u0142ania telefonu VoIP konieczne jest skonfigurowanie adresu",
            "IMG": "",
            "B1": "A. MAR/MAV",
            "B2": "B. centrali ISDN",
            "B3": "C. rozg\u0142oszeniowego",
            "P": "D. IP"
        },
        {
            "Pytanie": "W dokumentacji technicznej procesora producent umie\u015bci\u0142 wyniki testu przeprowadzonego za pomoc\u0105 programu CPU-Z. Wynika z niego, \u017ce procesor ma",
            "IMG": "https://egzamin-informatyk.pl/e12/822.jpg",
            "B1": "B. 4 rdzenie",
            "B2": "C. 6 rdzeni",
            "B3": "D. 5 rdzeni",
            "P": "A. 2 rdzenie"
        },
        {
            "Pytanie": "Zamontowany w komputerze dysk ma zosta\u0107 podzielony na partycje. Podaj maksymaln\u0105 liczb\u0119 partycji rozszerzonych, mo\u017cliwych do utworzenia na jednym dysku",
            "IMG": "",
            "B1": "A. 4",
            "B2": "B. 3",
            "B3": "C. 2",
            "P": "D. 1"
        },
        {
            "Pytanie": "Norma TIA/EIA-568-B.2 okre\u015bla specyfikacj\u0119 parametr&oacute;w transmisyjnych",
            "IMG": "",
            "B1": "B. fal radiowych",
            "B2": "C. kabli koncentrycznych",
            "B3": "D. \u015bwiat\u0142owod&oacute;w",
            "P": "A. kabli UTP"
        },
        {
            "Pytanie": "Jaka drukarka powinna by\u0107 zastosowana w dziale sprzeda\u017cy hurtowni materia\u0142&oacute;w budowlanych do drukowania faktur na papierze samokopiuj\u0105cym, tak aby uzyska\u0107 na nim kopie wydruku?",
            "IMG": "",
            "B1": "A. Atramentowa",
            "B2": "B. Sublimacyjna",
            "B3": "D. Laserowa",
            "P": "C. Ig\u0142owa"
        },
        {
            "Pytanie": "Kable \u015bwiat\u0142owodowe NIE S\u0104 powszechnie stosowane w lokalnych sieciach komputerowych z powodu",
            "IMG": "",
            "B1": "B. du\u017cych strat sygna\u0142u transmisyjnego",
            "B2": "C. ma\u0142ej odporno\u015bci na zak\u0142&oacute;cenia elektromagnetyczne",
            "B3": "D. niskiej przepustowo\u015bci",
            "P": "A. du\u017cych koszt&oacute;w element&oacute;w po\u015brednicz\u0105cych w transmisji"
        },
        {
            "Pytanie": "Kt&oacute;re medium transmisyjne sieci LAN zaleca si\u0119 do zastosowania w zabytkowych budynkach?",
            "IMG": "",
            "B1": "B. Kabel koncentryczny",
            "B2": "C. \u015awiat\u0142ow&oacute;d",
            "B3": "D. Kabel typu skr\u0119tka",
            "P": "A. Fale radiowe"
        },
        {
            "Pytanie": "Uk\u0142ad elektroniczny RAMDAC wyst\u0119puje w",
            "IMG": "",
            "B1": "A. procesorze",
            "B2": "C. karcie d\u017awi\u0119kowej",
            "B3": "D. zasilaczu",
            "P": "B. karcie graficznej"
        },
        {
            "Pytanie": "Maska dla adresu IP 192.168.1.10/8 ma posta\u0107",
            "IMG": "",
            "B1": "B. 255.255.0.0",
            "B2": "C. 255.255.255.0",
            "B3": "D. 255.0.255.0",
            "P": "A. 255.0.0.0"
        },
        {
            "Pytanie": "Kt&oacute;re urz\u0105dzenie sieciowe zosta\u0142o przedstawione na rysunku?",
            "IMG": "https://egzamin-informatyk.pl/e13/616.jpg",
            "B1": "A. Adapter IrDA",
            "B2": "B. Karta sieciowa WiFi",
            "B3": "D. Adapter Bluetooth",
            "P": "C. Modem USB"
        },
        {
            "Pytanie": "Na rysunku przedstawiona jest karta",
            "IMG": "https://egzamin-informatyk.pl/ee08/1889.jpg",
            "B1": "A. sieciowa Token Ring",
            "B2": "C. kontrolera SCSI",
            "B3": "D. kontrolera RAID",
            "P": "B. sieciowa Fibre Channel"
        },
        {
            "Pytanie": "Na zdj\u0119ciu przedstawiono kart\u0119",
            "IMG": "https://egzamin-informatyk.pl/old/166.jpg",
            "B1": "A. telewizyjn\u0105 PCI Express",
            "B2": "B. telewizyjn\u0105 EISA",
            "B3": "C. graficzn\u0105 AGP",
            "P": "D. graficzn\u0105 PCI"
        },
        {
            "Pytanie": "fps (ang. frames per second) bezpo\u015brednio odnosi si\u0119 do",
            "IMG": "",
            "B1": "B. efektywno\u015bci przep\u0142ywu informacji na magistrali systemowej",
            "B2": "C. pr\u0119dko\u015bci przesy\u0142ania danych do dysku w standardzie SATA",
            "B3": "D. wydajno\u015bci uk\u0142ad&oacute;w pami\u0119ci RAM",
            "P": "A. p\u0142ynno\u015bci wy\u015bwietlania ruchomych obraz&oacute;w"
        },
        {
            "Pytanie": "Odzyskiwanie surowc&oacute;w z odpad&oacute;w w celu ich ponownego wykorzystania to",
            "IMG": "",
            "B1": "B. kataliza",
            "B2": "C. utylizacja",
            "B3": "D. segregacja",
            "P": "A. recykling"
        },
        {
            "Pytanie": "Jaka us\u0142uga umo\u017cliwia zdaln\u0105 instalacj\u0119 systemu operacyjnego?",
            "IMG": "",
            "B1": "A. IIS\n",
            "B2": "B. DNS",
            "B3": "D. IRC",
            "P": "C. WDS"
        },
        {
            "Pytanie": "Kt&oacute;re polecenie systemu Windows wy\u015bwietla tabele routingu hosta?",
            "IMG": "",
            "B1": "A. netstat -n",
            "B2": "B. ipconfig /renew",
            "B3": "D. ipconfig /release",
            "P": "C. netstat -r"
        },
        {
            "Pytanie": "Spuchni\u0119te kondensatory elektrolityczne w sekcji zasilania monitora LCD mog\u0105 spowodowa\u0107 uszkodzenie",
            "IMG": "",
            "B1": "A. uk\u0142adu odchylania poziomego",
            "B2": "B. przewod&oacute;w sygna\u0142owych",
            "B3": "C. przycisk&oacute;w znajduj\u0105cych na panelu monitora",
            "P": "D. inwertera oraz pod\u015bwietlania matrycy"
        },
        {
            "Pytanie": "Na rysunku z\u0142\u0105cze monitora oznaczone ramk\u0105 czerwon\u0105, b\u0119dzie wsp&oacute;\u0142pracowa\u0142o z p\u0142yt\u0105 g\u0142&oacute;wn\u0105 wyposa\u017con\u0105 w interfejs",
            "IMG": "https://egzamin-informatyk.pl/e12/764.jpg",
            "B1": "A. DVI",
            "B2": "B. D-SUB",
            "B3": "C. HDMI",
            "P": "D. DisplayPort"
        },
        {
            "Pytanie": "Przedstawione polecenia, uruchomione w interfejsie CLI rutera firmy CISCO, spowoduj\u0105",
            "IMG": "https://egzamin-informatyk.pl/ee08/1589.png",
            "B1": "A. ustawienie interfejsu zewn\u0119trznego o adresie 10.0.0.1/24 dla technologii NAT",
            "B2": "C. dopuszczenie ruchu pochodz\u0105cego z sieci o adresie 10.0.0.1",
            "B3": "D. okre\u015blenie puli adres&oacute;w wewn\u0119trznych 10.0.0.1 &divide; 255.255.255.0",
            "P": "B. ustawienie interfejsu wewn\u0119trznego o adresie 10.0.0.1/24 dla technologii NAT"
        },
        {
            "Pytanie": "Cecha systemu operacyjnego, pozwalaj\u0105ca uruchomi\u0107 r&oacute;wnocze\u015bnie kilka aplikacji w ramach podzia\u0142u czasu, przy czym podzia\u0142 czasu realizowany jest przez same aplikacje nosi nazw\u0119",
            "IMG": "",
            "B1": "A. wielodost\u0119powo\u015bci",
            "B2": "C. wielozadaniowo\u015bci z wyw\u0142aszczeniem",
            "B3": "D. wieloprogramowo\u015bci",
            "P": "B. wielozadaniowo\u015bci kooperatywnej"
        },
        {
            "Pytanie": "Niekorzystn\u0105 cech\u0105 macierzy RAID 0 jest",
            "IMG": "",
            "B1": "A. replikacja danych na n-dyskach",
            "B2": "B. zmniejszenie szybko\u015bci zapisu/odczytu w por&oacute;wnaniu z pojedynczym dyskiem",
            "B3": "C. konieczno\u015b\u0107 posiadania dodatkowego dysku zapisuj\u0105cego sumy kontrolne",
            "P": "D. brak odporno\u015bci na awari\u0119 cho\u0107by jednego dysku"
        },
        {
            "Pytanie": "W kt&oacute;rym miejscu znajduje si\u0119 nag\u0142&oacute;wek i stopka w dokumencie tekstowym Word?",
            "IMG": "",
            "B1": "A. Nag\u0142&oacute;wek jest drukowany na dolnym marginesie, natomiast stopka jest drukowana na g&oacute;rnym marginesie",
            "B2": "B. Na parzystych stronach dokumentu",
            "B3": "C. Nag\u0142&oacute;wek znajduje si\u0119 na pocz\u0105tku dokumentu, natomiast stopka na ko\u0144cu dokumentu",
            "P": "D. Nag\u0142&oacute;wek jest drukowany na g&oacute;rnym marginesie, natomiast stopka jest drukowana na dolnym marginesie"
        },
        {
            "Pytanie": "Kt&oacute;ra warstwa modelu ISO/OSI jest zwi\u0105zana z protoko\u0142em IP?",
            "IMG": "",
            "B1": "A. Transportowa",
            "B2": "B. \u0141\u0105cza danych",
            "B3": "C. Fizyczna",
            "P": "D. Sieciowa"
        },
        {
            "Pytanie": "Aby w systemach Windows Server wykona\u0107 aktualizacj\u0119 dzier\u017cawy adres&oacute;w DHCP oraz rejestracj\u0119 nazw zwi\u0105zanych z systemem DNS w wierszu polecenia, nale\u017cy wpisa\u0107 polecenie",
            "IMG": "",
            "B1": "A. ipconfig /flushdns",
            "B2": "B. ipconfig /release",
            "B3": "D. ipconfig /renew",
            "P": "C. ipconfig /registerdns"
        },
        {
            "Pytanie": "B\u0119ben \u015bwiat\u0142oczu\u0142y jest niezb\u0119dnym elementem dzia\u0142ania drukarki",
            "IMG": "",
            "B1": "B. Sublimacyjnej",
            "B2": "C. Atramentowej",
            "B3": "D. Ig\u0142owej",
            "P": "A. Laserowej"
        },
        {
            "Pytanie": "Kt&oacute;re porty nale\u017cy odblokowa\u0107 w zaporze sieciowej komputera, aby mo\u017cna by\u0142o korzysta\u0107 z zainstalowanej us\u0142ugi FTP?",
            "IMG": "",
            "B1": "B. 53 i 137",
            "B2": "C. 25 i 110",
            "B3": "D. 80 i 443",
            "P": "A. 20 i 21"
        },
        {
            "Pytanie": "ARP (Adress Resolution Protocol) jest protoko\u0142em realizuj\u0105cym odwzrowanie adresu IP na",
            "IMG": "",
            "B1": "B. nazw\u0119 domenow\u0105",
            "B2": "C. nazw\u0119 komputera",
            "B3": "D. adres poczty e-mail",
            "P": "A. adres sprz\u0119towy."
        },
        {
            "Pytanie": "Z\u0142\u0105cze zasilacza ATX12V s\u0142u\u017cy do zasilania",
            "IMG": "",
            "B1": "B. karty graficznej PCI-e 3.0",
            "B2": "C. urz\u0105dze\u0144 SATA",
            "B3": "D. stacji dyskietek",
            "P": "A. procesora"
        },
        {
            "Pytanie": "Kt&oacute;ry z protoko\u0142&oacute;w jest protoko\u0142em wykorzystywanym do zarz\u0105dzania urz\u0105dzeniami sieciowymi?",
            "IMG": "",
            "B1": "B. DNS",
            "B2": "C. SFTP",
            "B3": "D. SMTP",
            "P": "A. SNMP"
        },
        {
            "Pytanie": "Na p\u0142ycie g\u0142&oacute;wnej uleg\u0142a uszkodzeniu zintegrowana karta sieciowa. Komputer nie mo\u017ce uruchomi\u0107 systemu operacyjnego, gdy\u017c nie ma dysku twardego ani \u017cadnych nap\u0119d&oacute;w optycznych, a system operacyjny uruchamiany jest z sieci lokalnej. Aby przywr&oacute;ci\u0107 utracon\u0105 funkcjonalno\u015b\u0107, nale\u017cy zamontowa\u0107 w komputerze",
            "IMG": "",
            "B1": "A. najprostsz\u0105 kart\u0119 sieciow\u0105 wspieraj\u0105c\u0105 IEEE 802.3",
            "B2": "B. dysk twardy",
            "B3": "C. nap\u0119d CD-ROM",
            "P": "D. kart\u0119 sieciow\u0105 wspieraj\u0105c\u0105 funkcj\u0119 Preboot Execution Environment"
        },
        {
            "Pytanie": "W systemie Windows do uruchomienia przedstawionego narz\u0119dzia nale\u017cy u\u017cy\u0107 polecenia",
            "IMG": "https://egzamin-informatyk.pl/e12/953.jpg",
            "B1": "B. dcomcnfg",
            "B2": "C. secpol",
            "B3": "D. resmon",
            "P": "A. taskmgr"
        },
        {
            "Pytanie": "Jak nazywa si\u0119 port panelu tylnego komputera zamieszczony na rysunku?",
            "IMG": "https://egzamin-informatyk.pl/old/283.jpg",
            "B1": "B. FIRE WIRE",
            "B2": "C. D-SUB",
            "B3": "D. HDMI",
            "P": "A. DVI"
        },
        {
            "Pytanie": "Co oznacza znajduj\u0105cy si\u0119 w dokumentacji technicznej p\u0142yty g\u0142&oacute;wnej parametr LGA 775?",
            "IMG": "",
            "B1": "A. Typ chipsetu p\u0142yty",
            "B2": "B. Rodzaj karty graficznej",
            "B3": "C. Rodzaj obs\u0142ugiwanych pami\u0119ci",
            "P": "D. Typ gniazda procesora"
        },
        {
            "Pytanie": "W tabeli przedstawiono parametry katalogowe czterech twardych dysk&oacute;w. Najwi\u0119ksz\u0105 \u015bredni\u0105 szybko\u015b\u0107 odczytu danych zapewnia dysk",
            "IMG": "https://egzamin-informatyk.pl/old/650.jpg",
            "B1": "B. B",
            "B2": "C. C",
            "B3": "D. D",
            "P": "A. A"
        },
        {
            "Pytanie": "W trybie wielozadaniowo\u015bci z wyw\u0142aszczeniem zawieszony program",
            "IMG": "",
            "B1": "A. mo\u017ce zawiesi\u0107 ca\u0142y system operacyjny",
            "B2": "B. nie pozwoli usun\u0105\u0107 si\u0119 z pami\u0119ci operacyjnej",
            "B3": "D. zablokuje prac\u0119 wszystkich innych program&oacute;w",
            "P": "C. nie mo\u017ce zawiesi\u0107 systemu operacyjnego"
        },
        {
            "Pytanie": "Kt&oacute;re z urz\u0105dze\u0144 wykorzystuje metod\u0119 polegaj\u0105c\u0105 na detekcji zmian pojemno\u015bci elektrycznej przy sterowaniu kursorem na ekranie?",
            "IMG": "",
            "B1": "A. joystik",
            "B2": "B. mysz",
            "B3": "D. trackpoint",
            "P": "C. touchpad"
        },
        {
            "Pytanie": "Kt&oacute;re z\u0142\u0105cze p\u0142yty g\u0142&oacute;wnej komputera s\u0142u\u017cy do zainstalowania przedstawionej na zdj\u0119ciu karty graficznej?",
            "IMG": "https://egzamin-informatyk.pl/old/281.jpg",
            "B1": "A. ISA",
            "B2": "B. AGP",
            "B3": "D. PCI",
            "P": "C. PCI-E"
        },
        {
            "Pytanie": "Urz\u0105dzeniem, kt&oacute;re zapewni ochron\u0119 przed wszelkiego rodzaju atakami z sieci i mo\u017ce pe\u0142ni\u0107 inne dodatkowe funkcje, jak np. szyfrowanie przesy\u0142anych danych czy automatyczne powiadamianie administratora systemu o w\u0142amaniu, jest",
            "IMG": "",
            "B1": "A. punkt dost\u0119powy",
            "B2": "B. regenerator",
            "B3": "C. koncentrator",
            "P": "D. firewall sprz\u0119towy"
        },
        {
            "Pytanie": "Kt&oacute;ry adres protoko\u0142u IP w wersji 4 ma prawid\u0142ow\u0105 struktur\u0119?",
            "IMG": "",
            "B1": "A. 192.0.FF.FF",
            "B2": "B. 192.309.1.255",
            "B3": "C. 192.10.255.3A",
            "P": "D. 192.21.140.16"
        },
        {
            "Pytanie": "Kt&oacute;re okre\u015blenie dotycz\u0105ce konta u\u017cytkownika Active Directory w systemie Windows jest prawdziwe?",
            "IMG": "",
            "B1": "A. Nazwa logowania u\u017cytkownika musi mie\u0107 mniej ni\u017c 20 znak&oacute;w",
            "B2": "B. Nazwa logowania u\u017cytkownika musi mie\u0107 mniej ni\u017c 21 znak&oacute;w",
            "B3": "D. Nazwa logowanie u\u017cytkownika nie mo\u017ce mie\u0107 d\u0142ugo\u015bci wi\u0119kszej ni\u017c 100 bajt&oacute;w",
            "P": "C. Nazwa logowania u\u017cytkownika mo\u017ce mie\u0107 d\u0142ugo\u015b\u0107 wi\u0119ksz\u0105 ni\u017c 100 bajt&oacute;w"
        },
        {
            "Pytanie": "Grupa, w kt&oacute;rej uprawnienia cz\u0142onk&oacute;w mo\u017cna przypisywa\u0107 tylko w obr\u0119bie tej samej domeny, co domena nadrz\u0119dnej grupy lokalnej domeny, to grupa",
            "IMG": "",
            "B1": "A. lokalna komputera",
            "B2": "C. globalna",
            "B3": "D. uniwersalna",
            "P": "B. lokalna domeny"
        },
        {
            "Pytanie": "Atak typu hijacking na serwer sieciowy charakteryzuje si\u0119",
            "IMG": "",
            "B1": "A. przeci\u0105\u017ceniem aplikacji udost\u0119pniaj\u0105cej okre\u015blone dane",
            "B2": "B. zbieraniem informacji na temat atakowanej sieci i szukaniem luk w sieci",
            "B3": "C. \u0142amaniem zabezpiecze\u0144 przed niedozwolonym u\u017cytkowaniem program&oacute;w",
            "P": "D. przej\u0119ciem kontroli nad po\u0142\u0105czeniem mi\u0119dzy komunikuj\u0105cymi si\u0119 komputerami"
        },
        {
            "Pytanie": "Liczba ABBA w kodzie heksadecymalnym ma posta\u0107 dw&oacute;jkow\u0105 o warto\u015bci",
            "IMG": "",
            "B1": "A. 0101 1011 1011 0101",
            "B2": "B. 1010 1111 1111 1010",
            "B3": "C. 1011 1010 1010 1011",
            "P": "D. 1010 1011 1011 1010"
        },
        {
            "Pytanie": "Kt&oacute;ra tablica partycji umo\u017cliwia utworzenie do 128 partycji podstawowych na jednym dysku?",
            "IMG": "",
            "B1": "A. NTLDR",
            "B2": "B. BOOT",
            "B3": "C. MBR",
            "P": "D. GPT"
        },
        {
            "Pytanie": "Koprocesor arytmetyczny, kt&oacute;rego rol\u0105 w mikroprocesorze jest dokonywanie oblicze\u0144 na liczbach zmiennoprzecinkowych zosta\u0142 na schemacie oznaczony cyfr\u0105",
            "IMG": "https://egzamin-informatyk.pl/e12/403.jpg",
            "B1": "A. 1",
            "B2": "C. 3",
            "B3": "D. 2",
            "P": "B. 4"
        },
        {
            "Pytanie": "Kt&oacute;ra us\u0142uga serwerowa zapewnia automatyczn\u0105 konfiguracj\u0119 parametr&oacute;w sieciowych stacji roboczych?",
            "IMG": "",
            "B1": "B. WINS",
            "B2": "C. DNS",
            "B3": "D. NAT",
            "P": "A. DHCP"
        },
        {
            "Pytanie": "Wska\u017c zakres adres&oacute;w IP nale\u017c\u0105cy do klasy A, s\u0142u\u017c\u0105cy do adresacji prywatnej w sieciach komputerowych:",
            "IMG": "",
            "B1": "A. 192.168.0.0 - 192.168.255.255",
            "B2": "B. 172.16.0.0 - 172.31.255.255",
            "B3": "D. 127.0.0.0 - 127.255.255.255",
            "P": "C. 10.0.0.0 - 10.255.255.255"
        },
        {
            "Pytanie": "W kt&oacute;ry rodzaj matrycy powinien by\u0107 wyposa\u017cony monitor w modernizowanym zestawie komputerowym w przypadku konieczno\u015bci zapewnienia wysokiej jako\u015bci obrazu oraz szerokich k\u0105t&oacute;w widzenia w poziomie i pionie?",
            "IMG": "",
            "B1": "B. DLP",
            "B2": "C. TN",
            "B3": "D. CRT",
            "P": "A. IPS"
        },
        {
            "Pytanie": "Serwerem poczty e-mail jest",
            "IMG": "",
            "B1": "A. Firebird",
            "B2": "B. PostgreSQL",
            "B3": "D. MySQL",
            "P": "C. Postfix"
        },
        {
            "Pytanie": "Narz\u0119dziem systemu Windows, s\u0142u\u017c\u0105cym do sprawdzenia wp\u0142ywu poszczeg&oacute;lnych proces&oacute;w i us\u0142g na wydajno\u015b\u0107 procesora oraz tego, w jakim stopniu generuj\u0105 one obci\u0105\u017cenie pami\u0119ci czy dysku, jest",
            "IMG": "",
            "B1": "A. credwiz",
            "B2": "B. dcomcnfg",
            "B3": "C. cleanmgr",
            "P": "D. resmon"
        },
        {
            "Pytanie": "Wska\u017c domy\u015blny port do przekazywania polece\u0144 (command) serwera us\u0142ugi FTP",
            "IMG": "",
            "B1": "B. 25",
            "B2": "C. 20",
            "B3": "D. 110",
            "P": "A. 21"
        },
        {
            "Pytanie": "W komputerach wykonuj\u0105cych zadania serwerowe, wymagaj\u0105ce du\u017cej wydajno\u015bci, nale\u017cy zastosowa\u0107 dysk z interfejsem",
            "IMG": "",
            "B1": "A. ATA",
            "B2": "C. USB",
            "B3": "D. SATA",
            "P": "B. SAS"
        },
        {
            "Pytanie": "Wynikiem wykonania polecenia arp -a 192.168.1.1 systemu MS Windows jest wy\u015bwietlenie",
            "IMG": "",
            "B1": "A. kontroli po\u0142\u0105czenia z komputerem o podanym IP",
            "B2": "C. listy aktywnych po\u0142\u0105cze\u0144 sieciowych",
            "B3": "D. ustawie\u0144 TCP/IP interfejsu sieciowego",
            "P": "B. adresu fizycznego urz\u0105dzenia o podanym IP"
        },
        {
            "Pytanie": "Narz\u0119dzie, kt&oacute;re zabezpiecza przed nieautoryzowanym dost\u0119pem do lokalnej sieci, to",
            "IMG": "",
            "B1": "B. analizator sieci",
            "B2": "C. analizator pakiet&oacute;w",
            "B3": "D. program antywirusowy",
            "P": "A. zapora sieciowa"
        },
        {
            "Pytanie": "Kt&oacute;re z protoko\u0142&oacute;w przekazuj\u0105 okresowe kopie tablic rutingu do s\u0105siedniego rutera i NIE MAJ\u0104 pe\u0142nej informacji o odleg\u0142ych ruterach?",
            "IMG": "",
            "B1": "A. EGP, BGP",
            "B2": "B. OSPF, RIP",
            "B3": "C. RIP, IGRP",
            "P": "D. EIGRP, OSPF"
        },
        {
            "Pytanie": "Zalecana wielko\u015b\u0107 pami\u0119ci RAM dla systemu operacyjnego Windows Server 2008 to co najmniej ",
            "IMG": "",
            "B1": "A. 512 MB",
            "B2": "B. 1 GB",
            "B3": "D. 1,5 GB",
            "P": "C. 2 GB"
        },
        {
            "Pytanie": "Jaka jest warto\u015b\u0107 maksymalnego rozplotu kabla UTP we wtyku RJ45 zgodnie z norm\u0105 PN-EN 50173?",
            "IMG": "",
            "B1": "B. 15 mm",
            "B2": "C. 10 mm",
            "B3": "D. 20 mm",
            "P": "A. 13 mm"
        },
        {
            "Pytanie": "Pe\u0142ny adres logowania do serwera FTP o nazwie ftp.nazwa.pl to",
            "IMG": "",
            "B1": "B. http:ftp.nazwa.pl/",
            "B2": "C. http://ftp.nazwa.pl/",
            "B3": "D. ftp:ftp.nazwa.pl/",
            "P": "A. ftp://ftp.nazwa.pl/"
        },
        {
            "Pytanie": "Kt&oacute;ry protok&oacute;\u0142 jest wykorzystywany do transmisji danych w warstwie transportowej modelu ISO/OSI?",
            "IMG": "",
            "B1": "A. LDAP",
            "B2": "B. HTTP",
            "B3": "C. ARP",
            "P": "D. TCP"
        },
        {
            "Pytanie": "W systemie Windows 7, do modyfikacji konfiguracji rozruchowej komputera za pomoc\u0105 linii polece\u0144, nale\u017cy zastosowa\u0107 polecenie",
            "IMG": "",
            "B1": "A. config",
            "B2": "B. bootfix",
            "B3": "C. bootcfg",
            "P": "D. bcdedit"
        },
        {
            "Pytanie": "Zgodnie z zamieszczonym cennikiem, \u015bredni koszt wyposa\u017cenia stanowiska komputerowego wynosi:",
            "IMG": "https://egzamin-informatyk.pl/e12/341.jpg",
            "B1": "A. 5000,50 z\u0142",
            "B2": "B. 6700,00 z\u0142",
            "B3": "D. 2000,00 z\u0142",
            "P": "C. 4350,00 z\u0142"
        },
        {
            "Pytanie": "Kt&oacute;ry przyrz\u0105d pomiarowy s\u0142u\u017cy do sprawdzenia warto\u015bci napi\u0119\u0107 w zasilaczu?",
            "IMG": "",
            "B1": "A. Watomierz",
            "B2": "B. Omomierz",
            "B3": "D. Amperomierz",
            "P": "C. Woltomierz"
        },
        {
            "Pytanie": "Polecenie systemowe ipconfig umo\u017cliwia konfiguracj\u0119",
            "IMG": "",
            "B1": "A. mapowania dysk&oacute;w sieciowych",
            "B2": "B. atrybut&oacute;w uprawnie\u0144 dost\u0119pu",
            "B3": "C. rejestru systemu",
            "P": "D. interfejs&oacute;w sieciowych"
        },
        {
            "Pytanie": "Kt&oacute;ry poziom macierzy RAID zapisuje dane r&oacute;wnolegle na kilku dyskach jako jedno urz\u0105dzenie",
            "IMG": "",
            "B1": "B. RAID 3",
            "B2": "C. RAID 2",
            "B3": "D. RAID 1",
            "P": "A. RAID 0"
        },
        {
            "Pytanie": "Kt&oacute;ra wersja systemu operacyjnego Windows Server 2008 posiada najbardziej okrojony interfejs graficzny",
            "IMG": "",
            "B1": "A. Standard Edition",
            "B2": "B. Datacenter",
            "B3": "D. Enterprise",
            "P": "C. Server Core"
        },
        {
            "Pytanie": "Ile bit&oacute;w minimum b\u0119dzie wymaganych w systemie binarnym do zapisania liczby heksadecymalnej 110 (h)?",
            "IMG": "",
            "B1": "A. 16 bit&oacute;w",
            "B2": "B. 3 bity",
            "B3": "C. 4 bity",
            "P": "D. 9 bit&oacute;w"
        },
        {
            "Pytanie": "Najmniejszymi k\u0105tami widzenia charakteryzuj\u0105 si\u0119 matryce monitor&oacute;w typu",
            "IMG": "",
            "B1": "A. PVA",
            "B2": "C. IPS/S-IPS",
            "B3": "D. MVA",
            "P": "B. TN"
        },
        {
            "Pytanie": "Na rysunku procesor oznaczony jest numerem",
            "IMG": "https://egzamin-informatyk.pl/old/1.jpg",
            "B1": "A. 8",
            "B2": "C. 3",
            "B3": "D. 5",
            "P": "B. 2"
        },
        {
            "Pytanie": "W celu zwolnienia adresu IP dla danej karty sieciowej w systemie Windows, nale\u017cy zastosowa\u0107 polecenie systemowe",
            "IMG": "",
            "B1": "A. ipconfig /displaydns",
            "B2": "C. ipconfig /flushdns",
            "B3": "D. ipconfig /renew",
            "P": "B. ipconfig /release"
        },
        {
            "Pytanie": "Notacja #102816 oznacza zapis w systemie",
            "IMG": "",
            "B1": "B. &oacute;semkowym",
            "B2": "C. dw&oacute;jkowym",
            "B3": "D. dziesi\u0119tnym",
            "P": "A. szesnastkowym"
        },
        {
            "Pytanie": "W technologii Ethernet protok&oacute;\u0142 dost\u0119pu do no\u015bnika CSMA/CD jest metod\u0105 z ",
            "IMG": "",
            "B1": "B. przekazywaniem \u017cetonu",
            "B2": "C. unikaniem kolizji ",
            "B3": "D. priorytetami \u017c\u0105da\u0144",
            "P": "A. wykrywaniem kolizji"
        },
        {
            "Pytanie": "Przedstawiony rysunek prezentuje z\u0142\u0105cze",
            "IMG": "https://egzamin-informatyk.pl/e12/601.jpg",
            "B1": "A. HDMI",
            "B2": "B. DVI-D",
            "B3": "C. D-SUB",
            "P": "D. DVI-A"
        },
        {
            "Pytanie": "Przedstawione na rysunku urz\u0105dzenie",
            "IMG": "https://egzamin-informatyk.pl/ee08/1902.jpg",
            "B1": "B. odpowiada za przekazywanie ramki mi\u0119dzy segmentami sieci z doborem portu, na kt&oacute;ry jest przekazywana",
            "B2": "C. odpowiada za wytworzenie na wyj\u015bciu sygna\u0142u analogowego, b\u0119d\u0105cego wzmocnionym sygna\u0142em wej\u015bciowym, kosztem zu\u017cycia energii pobieranej ze \u017ar&oacute;d\u0142a pr\u0105du",
            "B3": "D. s\u0142u\u017cy do przechwytywania i nagrywania pakiet&oacute;w danych w sieciach komputerowych",
            "P": "A. umo\u017cliwia zamian\u0119 sygna\u0142u pochodz\u0105cego z okablowania miedzianego na okablowanie \u015bwiat\u0142owodowe"
        },
        {
            "Pytanie": "Na urz\u0105dzeniu zasilanym pr\u0105dem sta\u0142ym znajduje si\u0119 przedstawione oznaczenie. Wynika z niego, \u017ce urz\u0105dzenie pobiera moc oko\u0142o",
            "IMG": "https://egzamin-informatyk.pl/ee08/1689.png",
            "B1": "A. 7,5 W",
            "B2": "B. 11 W",
            "B3": "C. 2,5 W",
            "P": "D. 18,75 W"
        },
        {
            "Pytanie": "Wymiana koncentrator&oacute;w na prze\u0142\u0105czniki w sieci Ethernet spowoduje",
            "IMG": "",
            "B1": "A. konieczno\u015b\u0107 zmiany adres&oacute;w IP",
            "B2": "B. zmian\u0119 topologii sieci",
            "B3": "D. zwi\u0119kszenie domeny rozg\u0142oszeniowej",
            "P": "C. zmniejszenie ilo\u015bci kolizji"
        },
        {
            "Pytanie": "Wyr&oacute;wnanie tekstu do prawego i lewego marginesu nazywa si\u0119",
            "IMG": "",
            "B1": "A. interlini\u0105",
            "B2": "B. wersalikiem",
            "B3": "D. kapitalikiem",
            "P": "C. justowaniem"
        },
        {
            "Pytanie": "Rysunek przedstawia schemat fizycznej topologii b\u0119d\u0105cej po\u0142\u0105czeniem topologii",
            "IMG": "https://egzamin-informatyk.pl/e13/769.jpg",
            "B1": "A. siatki i gwiazdy",
            "B2": "C. pier\u015bcienia i gwiazdy",
            "B3": "D. siatki i magistrali",
            "P": "B. magistrali i gwiazdy"
        },
        {
            "Pytanie": "Rysunek przedstawia wynik testowania sieci komputerowej poleceniem",
            "IMG": "https://egzamin-informatyk.pl/e13/90.jpg",
            "B1": "B. netstat",
            "B2": "C. tracert",
            "B3": "D. ipconfig",
            "P": "A. ping"
        },
        {
            "Pytanie": "Do zamiany kodu \u017ar&oacute;d\u0142owego na program wykonywalny s\u0142u\u017cy",
            "IMG": "",
            "B1": "A. interpreter",
            "B2": "B. debuger",
            "B3": "D. emulator",
            "P": "C. kompilator"
        },
        {
            "Pytanie": "Wsp&oacute;\u0142cze\u015bnie pami\u0119ci podr\u0119czne procesora drugiego poziomu (ang. &quot;L-2 cache&quot;) wykonane s\u0105 z uk\u0142ad&oacute;w pami\u0119ci",
            "IMG": "",
            "B1": "B. EEPROM",
            "B2": "C. DRAM",
            "B3": "D. ROM",
            "P": "A. SRAM"
        },
        {
            "Pytanie": "U\u017cytkownik systemu Windows otrzymuje komunikaty o zbyt ma\u0142ej pami\u0119ci wirtualnej. Problem ten mo\u017cna rozwi\u0105za\u0107 przez:",
            "IMG": "",
            "B1": "B. zamontowanie dodatkowego dysku",
            "B2": "C. zamontowanie dodatkowej pami\u0119ci cache procesora",
            "B3": "D. zwi\u0119kszenie rozmiaru pliku virtualfile.sys",
            "P": "A. zwi\u0119kszenie pami\u0119ci RAM "
        },
        {
            "Pytanie": "Do wykonania sieci komputerowej w pomieszczeniu wykorzystano 25 metr&oacute;w skr\u0119tki UTP, 5 gniazd typu RJ45 oraz odpowiedni\u0105 liczb\u0119 wtyk&oacute;w RJ45 niezb\u0119dnych do zarobienia 5 kabli po\u0142\u0105czeniowych typu patchcord. Jaki jest koszt wykorzystanych materia\u0142&oacute;w do wykonania sieci? Ceny jednostkowe wykorzystanych materia\u0142&oacute;w s\u0105 podane w tabeli.",
            "IMG": "https://egzamin-informatyk.pl/e13/461.jpg",
            "B1": "A. 50 z\u0142",
            "B2": "B. 90 z\u0142",
            "B3": "D. 75 z\u0142",
            "P": "C. 80 z\u0142"
        },
        {
            "Pytanie": "Skr&oacute;t MAN oznacza sie\u0107",
            "IMG": "",
            "B1": "B. bezprzewodow\u0105",
            "B2": "C. lokaln\u0105",
            "B3": "D. rozleg\u0142\u0105",
            "P": "A. miejsk\u0105"
        },
        {
            "Pytanie": "Szerokopasmowy dost\u0119p do Internetu przy r&oacute;\u017cnej pr\u0119dko\u015bci pobierania i wysy\u0142ania danych zapewnia technologia",
            "IMG": "",
            "B1": "B. ISDN",
            "B2": "C. MSK",
            "B3": "D. QAM",
            "P": "A. ADSL"
        },
        {
            "Pytanie": "Aby nadpisa\u0107 b\u0142\u0119dne wpisy w pliku boot.ini w konsoli odzyskiwania systemu Windows, nale\u017cy u\u017cy\u0107 polecenia",
            "IMG": "",
            "B1": "A. fixboot",
            "B2": "B. fixmbr",
            "B3": "D. diskpart /add",
            "P": "C. bootcfg /rebuild"
        },
        {
            "Pytanie": "Cookie nazywa si\u0119 plik",
            "IMG": "",
            "B1": "A. graficzny przechowuj\u0105cy obraz witryny sieci Web",
            "B2": "C. tekstowy, z kt&oacute;rego korzystaj\u0105 wszystkie witryny sieci",
            "B3": "D. graficzny, z kt&oacute;rego korzystaj\u0105 wszystkie witryny sieci",
            "P": "B. tekstowy, przechowuj\u0105cy informacje dla danej witryny sieci Web"
        },
        {
            "Pytanie": "System S.M.A.R.T przeznaczony jest do monitorowania pracy i wykrywania b\u0142\u0119d&oacute;w",
            "IMG": "",
            "B1": "B. p\u0142yty g\u0142&oacute;wnej",
            "B2": "C. nap\u0119d&oacute;w p\u0142yt CD/DVD",
            "B3": "D. kart rozszerze\u0144",
            "P": "A. dysk&oacute;w twardych"
        },
        {
            "Pytanie": "Program &quot;VirtualPC&quot;, kt&oacute;ry mo\u017cna pobra\u0107 z witryny firmy Microsoft s\u0142u\u017cy do korzystania:",
            "IMG": "",
            "B1": "A. z bezp\u0142atnej pomocy technicznej TechNet.Soft firmy Virtual Soft",
            "B2": "C. z konta osobistego o pojemno\u015bci 1 GB w serwerze wirtualnym firmy Microsoft",
            "B3": "D. z bezp\u0142atnego konta o pojemno\u015bci 100 MB w ramach hostingu firmy Microsoft",
            "P": "B. z wirtualnych system&oacute;w operacyjnych na dysku lokalnym"
        },
        {
            "Pytanie": "Rejestr mikroprocesora zwany licznikiem rozkaz&oacute;w zawiera",
            "IMG": "",
            "B1": "A. liczb\u0119 rozkaz&oacute;w pozosta\u0142ych do wykonania do ko\u0144ca programu",
            "B2": "B. liczb\u0119 rozkaz&oacute;w wykonanych przez procesor do danego momentu",
            "B3": "C. liczb\u0119 cykli zegara liczon\u0105 od pocz\u0105tku pracy programu",
            "P": "D. adres rozkazu przeznaczonego do wykonania jako nast\u0119pny"
        },
        {
            "Pytanie": "Ile bit&oacute;w nale\u017cy wyodr\u0119bni\u0107 z cz\u0119\u015bci hosta, aby z sieci o adresie IPv4 170.16.0.0/16 wydzieli\u0107 24 podsieci?",
            "IMG": "",
            "B1": "A. 4 bity",
            "B2": "B. 3 bity",
            "B3": "C. 6 bit&oacute;w",
            "P": "D. 5 bit&oacute;w"
        },
        {
            "Pytanie": "Na komputerze z zainstalowanymi dwoma systemami &ndash; Windows i Linux, po wykonaniu reinstalacji systemu Windows nie uruchamia si\u0119 drugi system. Aby przywr&oacute;ci\u0107 mo\u017cliwo\u015b\u0107 uruchamiania si\u0119 systemu Linux oraz aby nie straci\u0107 danych i ustawie\u0144 w nim zapisanych, nale\u017cy",
            "IMG": "",
            "B1": "B. wykona\u0107 reinstalacj\u0119 systemu Linux",
            "B2": "C. przeprowadzi\u0107 skanowanie dysku programem antywirusowym",
            "B3": "D. wykona\u0107 kolejny raz instalacj\u0119 systemu Windows",
            "P": "A. ponownie zainstalowa\u0107 bootloadera GRUB"
        },
        {
            "Pytanie": "Profil u\u017cytkownika systemu Windows wykorzystany do logowania si\u0119 na dowolnym komputerze w sieci, kt&oacute;ry jest przechowywany na serwerze i mo\u017ce by\u0107 modyfikowany przez u\u017cytkownika, to profil",
            "IMG": "",
            "B1": "A. obowi\u0105zkowy",
            "B2": "B. lokalny",
            "B3": "D. tymczasowy",
            "P": "C. mobilny"
        },
        {
            "Pytanie": "Za pomoc\u0105 ilu liczb szesnastkowych zapisuje si\u0119 pe\u0142n\u0105 posta\u0107 adresu IPv6?",
            "IMG": "",
            "B1": "B. 16",
            "B2": "C. 24",
            "B3": "D. 12",
            "P": "A. 8"
        },
        {
            "Pytanie": "Kondygnacyjny punkt dystrybucyjny jest po\u0142\u0105czony za pomoc\u0105 okablowania poziomego z",
            "IMG": "",
            "B1": "A. budynkowym punktem dystrybucyjnym",
            "B2": "B. centralnym punktem dystrybucyjnym",
            "B3": "C. centralnym punktem sieci",
            "P": "D. gniazdem abonenckim"
        },
        {
            "Pytanie": "Licencja CAL(Client Access License) daje u\u017cytkownikowi prawo",
            "IMG": "",
            "B1": "A. zmiany kodu programu",
            "B2": "C. kopiowanie programu na no\u015bniki zewn\u0119trzne",
            "B3": "D. u\u017cywanie programu bezterminowo",
            "P": "B. korzystanie z us\u0142ug udost\u0119pnionych przez serwer"
        },
        {
            "Pytanie": "G\u0142&oacute;wny rekord rozruchowy dysku twardego komputera to",
            "IMG": "",
            "B1": "A. PT",
            "B2": "B. BOOT",
            "B3": "C. FAT",
            "P": "D. MBR"
        },
        {
            "Pytanie": "Protok&oacute;\u0142, kt&oacute;ry umo\u017cliwia przekszta\u0142canie 32-bitowych adres&oacute;w IP na 48-bitowe fizyczne adresy MAC w komputerowych sieciach typu Ethernet nosi nazw\u0119:",
            "IMG": "",
            "B1": "A. NAT",
            "B2": "B. RARP",
            "B3": "C. DNS",
            "P": "D. ARP"
        },
        {
            "Pytanie": "Jakim poleceniem w systemie Linux, nadamy pe\u0142ny dost\u0119p wszystkim u\u017cytkownikom do zasob&oacute;w?",
            "IMG": "",
            "B1": "A. chmod 666",
            "B2": "B. chmod 533",
            "B3": "C. chmod 000",
            "P": "D. chmod 777"
        },
        {
            "Pytanie": "Zastosowanie polecenia net localgroup w systemie Windows spowoduje",
            "IMG": "",
            "B1": "A. utworzenie dowolnej grupy u\u017cytkownik&oacute;w",
            "B2": "B. skompresowanie wszystkich plik&oacute;w",
            "B3": "D. defragmentacj\u0119 plik&oacute;w",
            "P": "C. wy\u015bwietlanie zdefiniowanych w systemie lokalnych grup u\u017cytkownik&oacute;w"
        },
        {
            "Pytanie": "Zjawisko przes\u0142uchu, wyst\u0119puj\u0105ce w sieciach komputerowych, polega na",
            "IMG": "",
            "B1": "A. niejednorodno\u015bci toru spowodowanej zmian\u0105 geometrii par przewod&oacute;w",
            "B2": "B. op&oacute;\u017anieniach propagacji sygna\u0142u w torze transmisyjnym",
            "B3": "C. stratach sygna\u0142u w torze transmisyjnym",
            "P": "D. przenikaniu sygna\u0142u pomi\u0119dzy s\u0105siaduj\u0105cymi w kablu parami przewod&oacute;w"
        },
        {
            "Pytanie": "Podstawow\u0105 funkcj\u0105 serwera FTP jest",
            "IMG": "",
            "B1": "A. zarz\u0105dzanie kontami poczty",
            "B2": "B. synchronizacja czasu",
            "B3": "C. monitoring sieci",
            "P": "D. udost\u0119pnianie plik&oacute;w"
        },
        {
            "Pytanie": "Jaka przep\u0142ywno\u015b\u0107 definiuje standard sieci Ethernet IEEE 802.3z",
            "IMG": "",
            "B1": "A. 100 Mb/s",
            "B2": "C. 100 Gb/s",
            "B3": "D. 10 Mb/s",
            "P": "B. 1 Gb/s"
        },
        {
            "Pytanie": "Niekt&oacute;re systemy operacyjne s\u0105 wielodost\u0119pne (multiuser). Systemy takie",
            "IMG": "",
            "B1": "A. r&oacute;wnocze\u015bnie wykonuj\u0105 wiele program&oacute;w (zada\u0144)",
            "B2": "B. stosowane s\u0105 g\u0142&oacute;wnie w przemy\u015ble i systemach sterowania",
            "B3": "C. steruj\u0105 uk\u0142adem (klasterem) niezale\u017cnych komputer&oacute;w",
            "P": "D. opr&oacute;cz wielozadaniowo\u015bci z wyw\u0142aszczeniem realizuj\u0105 funkcj\u0119 przydzielania czasu u\u017cytkownikom"
        },
        {
            "Pytanie": "Kt&oacute;ry zakres adres&oacute;w IPv4 jest w\u0142a\u015bciwie przyporz\u0105dkowany do klasy?",
            "IMG": "https://egzamin-informatyk.pl/e13/783.jpg",
            "B1": "A. A",
            "B2": "C. C",
            "B3": "D. D",
            "P": "B. B"
        },
        {
            "Pytanie": "W uk\u0142adzie SI jednostk\u0105 miary napi\u0119cia jest",
            "IMG": "",
            "B1": "A. herc",
            "B2": "C. amper",
            "B3": "D. wat",
            "P": "B. wolt"
        },
        {
            "Pytanie": "Jaka jest szybko\u015b\u0107 transferu danych w sieciach FDDI (ang. Fiber Distributed Data Interface) opartych na technologii \u015bwiat\u0142owodowej?",
            "IMG": "",
            "B1": "A. 1024 kB/s",
            "B2": "B. 100 MB/s",
            "B3": "D. 1024 Mb/s",
            "P": "C. 100 Mb/s"
        },
        {
            "Pytanie": "Protok&oacute;\u0142 u\u017cywany przez WWW to",
            "IMG": "",
            "B1": "A. IPSec",
            "B2": "B. SMTP",
            "B3": "C. FTP",
            "P": "D. HTTP"
        },
        {
            "Pytanie": "Jak\u0105 kart\u0119 rozszerze\u0144 komputera przedstawiono na zdj\u0119ciu?",
            "IMG": "https://egzamin-informatyk.pl/old/567.jpg",
            "B1": "A. telewizyjn\u0105 (TV)",
            "B2": "C. d\u017awi\u0119kow\u0105",
            "B3": "D. graficzn\u0105",
            "P": "B. sieciow\u0105"
        },
        {
            "Pytanie": "Do wykonania obrazu dysku twardego mo\u017cna u\u017cy\u0107 programu",
            "IMG": "",
            "B1": "A. Digital Image Recovery",
            "B2": "C. SpeedFan",
            "B3": "D. HW Monitor",
            "P": "B. Acronis True Image"
        },
        {
            "Pytanie": "W wyniku polecenia ipconfig zosta\u0142a wy\u015bwietlona konfiguracja przedstawiona na rysunku. Adres IP testowanej stacji roboczej ma posta\u0107",
            "IMG": "https://egzamin-informatyk.pl/e13/95.jpg",
            "B1": "A. 62.21.99.95",
            "B2": "B. 192.168.0.1",
            "B3": "C. 255.255.255.0",
            "P": "D. 192.168.0.11"
        },
        {
            "Pytanie": "Jakie narz\u0119dzie nale\u017cy wybra\u0107, aby pod\u0142\u0105czy\u0107 \u017cy\u0142y kablowe skr\u0119tki do gniazda Ethernet?",
            "IMG": "",
            "B1": "A. Zaciskark\u0119 RJ-45",
            "B2": "B. Zaciskark\u0119 BNC",
            "B3": "D. Zaciskark\u0119 RJ-11",
            "P": "C. Wciskacz LSA"
        },
        {
            "Pytanie": "Na rysunku przedstawiono narz\u0119dzie systemu Windows 7 przeznaczone do",
            "IMG": "https://egzamin-informatyk.pl/e12/654.jpg",
            "B1": "B. tworzenia kopii systemu",
            "B2": "C. rozwi\u0105zywania problem&oacute;w z systemem",
            "B3": "D. przeprowadzania migracji systemu",
            "P": "A. konfiguracji ustawie\u0144 u\u017cytkownika"
        },
        {
            "Pytanie": "Norma dotycz\u0105ca okablowania strukturalnego to",
            "IMG": "",
            "B1": "A. IEEE 1394",
            "B2": "C. ISO 9001",
            "B3": "D. IEC 60364",
            "P": "B. TIA/EIA-568-B"
        },
        {
            "Pytanie": "U\u017cytkownik notebooka chce w jego wn\u0119trzu zamontowa\u0107 drugi dysk twardy. Notebook jest wyposa\u017cony tylko w jedn\u0105 zatok\u0119 dla HDD. Rozwi\u0105zaniem tego problemu mo\u017ce by\u0107 wykorzystanie dysku wyposa\u017conego w interfejs",
            "IMG": "",
            "B1": "B. ATAPI",
            "B2": "C. SCSI",
            "B3": "D. USB",
            "P": "A. mSATA"
        },
        {
            "Pytanie": "W dw&oacute;ch przyleg\u0142ych pomieszczeniach pewnej firmy wyst\u0119puj\u0105 bardzo silne zak\u0142&oacute;cenia elektromagnetyczne. Aby zapewni\u0107 mo\u017cliwie najwi\u0119ksz\u0105 przepustowo\u015b\u0107 podczas pracy istniej\u0105cej sieci LAN, jako medium transmisyjne nale\u017cy zastosowa\u0107",
            "IMG": "",
            "B1": "A. fale elektromagnetyczne w zakresie podczerwieni",
            "B2": "B. skr\u0119tk\u0119 nieekranowan\u0105",
            "B3": "D. kabel telefoniczny",
            "P": "C. kabel \u015bwiat\u0142owodowy"
        },
        {
            "Pytanie": "Wynik dzia\u0142ania kt&oacute;rego polecenia systemu Windows przedstawia rysunek?",
            "IMG": "https://egzamin-informatyk.pl/e13/594.jpg",
            "B1": "A. ipconfig",
            "B2": "C. tracert",
            "B3": "D. msconfig",
            "P": "B. netstat"
        },
        {
            "Pytanie": "Pierwsz\u0105 us\u0142ug\u0105 instalowan\u0105 na serwerze jest us\u0142uga domenowa w us\u0142udze Active Directory. Podczas instalacji kreator automatycznie wy\u015bwietli monit o konieczno\u015bci zainstalowania us\u0142ugi serwera",
            "IMG": "",
            "B1": "A. FTP",
            "B2": "B. DHCP",
            "B3": "D. WEB",
            "P": "C. DNS"
        },
        {
            "Pytanie": "Co oznacza jednostka dpi podawana w parametrach katalogowych skaner&oacute;w i drukarek?",
            "IMG": "",
            "B1": "A. Punkty na centymetr",
            "B2": "B. G\u0119sto\u015b\u0107 optyczn\u0105",
            "B3": "C. Punkty na milimetr",
            "P": "D. Punkty na cal"
        },
        {
            "Pytanie": "Wska\u017c nieprawid\u0142owy podzia\u0142 dysku MBR na partycje",
            "IMG": "",
            "B1": "A. 3 partycje podstawowe i 1 rozszerzona",
            "B2": "C. 1 partycja podstawowa i 1 rozszerzona ",
            "B3": "D. 2 partycje podstawowe i 1 rozszerzona",
            "P": "B. 1 partycja podstawowa i 2 rozszerzone"
        },
        {
            "Pytanie": "Chusteczki nas\u0105czone p\u0142ynem o w\u0142a\u015bciwo\u015bciach antystatycznych s\u0105 przeznaczone do czyszczenia",
            "IMG": "",
            "B1": "B. rolek prowadz\u0105cych papier w drukarkach atramentowych",
            "B2": "C. wa\u0142k&oacute;w olejowych w drukarkach laserowych",
            "B3": "D. ekran&oacute;w monitor&oacute;w LCD",
            "P": "A. ekran&oacute;w monitor&oacute;w CRT"
        },
        {
            "Pytanie": "Kt&oacute;ry z protoko\u0142&oacute;w jest protoko\u0142em warstwy transportowej, bezpo\u0142\u0105czeniowym, nieposiadaj\u0105cym mechanizm&oacute;w sprawdzaj\u0105cych poprawno\u015b\u0107 dostarczania danych?",
            "IMG": "",
            "B1": "A. TCP",
            "B2": "C. ICMP",
            "B3": "D. IP",
            "P": "B. UDP"
        },
        {
            "Pytanie": "Jaka jest maksymalna pr\u0119dko\u015b\u0107 transmisji danych w sieci przy zastosowaniu skr\u0119tki kategorii 5e?",
            "IMG": "",
            "B1": "B. 10 Gb/s",
            "B2": "C. 100 Mb/s",
            "B3": "D. 10 Mb/s",
            "P": "A. 1 Gb/s"
        },
        {
            "Pytanie": "Koprocesor (Floating Point Unit) w komputerze s\u0142u\u017cy do wykonywania",
            "IMG": "",
            "B1": "A. operacji na liczbach naturalnych",
            "B2": "B. podprogram&oacute;w",
            "B3": "C. operacji na liczbach ca\u0142kowitych",
            "P": "D. operacji zmiennoprzecinkowych"
        },
        {
            "Pytanie": "Kt&oacute;re polecenie diagnostyczne nale\u017cy zastosowa\u0107 do wy\u015bwietlania informacji o tym, czy miejsce docelowe odpowiada i po jakim czasie zosta\u0142a odebrana odpowied\u017a?",
            "IMG": "",
            "B1": "B. nbtstat",
            "B2": "C. route",
            "B3": "D. ipconfig",
            "P": "A. ping"
        },
        {
            "Pytanie": "Przerzutnik bistabilny przechowuje bit informacji w pami\u0119ci",
            "IMG": "",
            "B1": "A. DRAM",
            "B2": "C. DDR SDRAM",
            "B3": "D. SDRAM",
            "P": "B. SRAM"
        },
        {
            "Pytanie": "Fizyczna topologia sieci komputerowej, kt&oacute;r\u0105 przedstawiono na rysunku, to topologia",
            "IMG": "https://egzamin-informatyk.pl/e13/689.jpg",
            "B1": "A. gwiazdy",
            "B2": "B. magistrali",
            "B3": "C. gwiazdy rozszerzonej",
            "P": "D. hierarchiczna"
        },
        {
            "Pytanie": "Przy pr&oacute;bie zapisu danych na karcie SD pojawia si\u0119 komunikat &bdquo;usu\u0144 ochron\u0119 przed zapisem lub u\u017cyj innego dysku&rdquo;. Przyczyn\u0105 takiego komunikatu jest najcz\u0119\u015bciej",
            "IMG": "",
            "B1": "A. Za du\u017cy rozmiar zapisywanego pliku",
            "B2": "B. Posiadanie uprawnie\u0144 &#039;tylko odczyt&#039; do plik&oacute;w na karcie SD",
            "B3": "D. Brak miejsca na karcie pami\u0119ci",
            "P": "C. Ustawienie mechanicznego prze\u0142\u0105cznika blokady zapisu na karcie w pozycji ON"
        },
        {
            "Pytanie": "Tworzenie zaszyfrowanych po\u0142\u0105cze\u0144 mi\u0119dzy hostami przez sie\u0107 publiczn\u0105 Internet, stosowane w po\u0142\u0105czeniach VPN (V irtual Private Network), to",
            "IMG": "",
            "B1": "A. mostkowanie",
            "B2": "B. mapowanie",
            "B3": "D. trasowanie",
            "P": "C. tunelowanie"
        },
        {
            "Pytanie": "Zasady filtracji ruchu sieciowego firewall s\u0105 definiowane w postaci",
            "IMG": "",
            "B1": "B. plik&oacute;w CLI",
            "B2": "C. serwis&oacute;w",
            "B3": "D. kontroli pasma zaj\u0119to\u015bci",
            "P": "A. regu\u0142"
        },
        {
            "Pytanie": "Przedstawiono wynik uzyskany po uruchomieniu w systemie Windows polecenia IPCONFIG /ALL. Jak zosta\u0142y skonfigurowane w\u0142a\u015bciwo\u015bci protoko\u0142u TCP/IP dla karty sieciowej?",
            "IMG": "https://egzamin-informatyk.pl/old/316.jpg",
            "B1": "A. Karta sieciowa ma przydzielony statyczny adres IP",
            "B2": "B. Karta sieciowa nie ma ustawionego adresu bramy",
            "B3": "D. Karta sieciowa nie ma ustawionego adresu serwera DNS",
            "P": "C. Karta sieciowa uzyska\u0142a adres IP automatycznie"
        },
        {
            "Pytanie": "Do konfiguracji i personalizacji \u015brodowiska graficznego GNOME w r&oacute;\u017cnych systemach Linux nale\u017cy wykorzysta\u0107 program",
            "IMG": "",
            "B1": "A. GNOMON 3D",
            "B2": "B. GNU Compiller Collection",
            "B3": "D. GIGODO Tools",
            "P": "C. GNOME Tweak Tool"
        },
        {
            "Pytanie": "Najbardziej efektywnym sposobem sporz\u0105dzania codziennej archiwizacji pojedynczego pliku o rozmiarze 4,8 GB, na pojedynczym stanowisku komputerowym bez dost\u0119pu do sieci jest",
            "IMG": "",
            "B1": "A. nagranie na p\u0142yt\u0119 DVD-5 w standardzie ISO",
            "B2": "B. spakowanie i przechowywanie w lokalizacji sieciowej",
            "B3": "D. u\u017cycie pami\u0119ci USB z systemem plik&oacute;w FAT32",
            "P": "C. u\u017cycie pami\u0119ci USB z systemem plik&oacute;w NTFS"
        },
        {
            "Pytanie": "Kt&oacute;re polecenie w systemie Linux nada uprawnienia do pisania dla wszystkich obiekt&oacute;w w /usr/share dla wszystkich u\u017cytkownik&oacute;w, nie zmieniaj\u0105c pozosta\u0142ych uprawnie\u0144?",
            "IMG": "",
            "B1": "B. chmod -R o+r /usr/share",
            "B2": "C. chmod a-w /usr/share",
            "B3": "D. chmod ugo+rw /usr/share",
            "P": "A. chmod -R a+w /usr/share"
        },
        {
            "Pytanie": "Z\u0142\u0105cze IrDA do komunikacji bezprzewodowej jest",
            "IMG": "",
            "B1": "A. rozwini\u0119ciem systemu BlueTooth",
            "B2": "C. z\u0142\u0105czem radiowym",
            "B3": "D. z\u0142\u0105czem pozwalaj\u0105cym transmitowa\u0107 dane na odleg\u0142o\u015b\u0107 100m",
            "P": "B. z\u0142\u0105czem szeregowym"
        },
        {
            "Pytanie": "Sie\u0107 lokalna ma adres IP 192.168.0.0/25. Kt&oacute;ry adres IP jest adresem stacji roboczej nale\u017c\u0105cej do tej sieci?",
            "IMG": "",
            "B1": "A. 192.168.0.192",
            "B2": "B. 192.168.1.25",
            "B3": "C. 192.168.1.1",
            "P": "D. 192.168.0.100"
        },
        {
            "Pytanie": "Kt&oacute;re oznaczenie okre\u015bla norm\u0119 dotycz\u0105c\u0105 okablowania strukturalnego?",
            "IMG": "",
            "B1": "A. EN 50173",
            "B2": "B. ISO 11801",
            "B3": "D. PN-EN 50173-1:2004",
            "P": "C. EIA/TIA 568A"
        },
        {
            "Pytanie": "Kt&oacute;ry z adres&oacute;w IP ma przypisan\u0105 mask\u0119 w postaci pe\u0142nej, wynikaj\u0105c\u0105 z klasy adresu?",
            "IMG": "",
            "B1": "A. 140.16.5.18, 255.255.255.0",
            "B2": "B. 118.202.15.6, 255.255.0.0",
            "B3": "D. 169.12.19.6, 255.255.255.0",
            "P": "C. 180.12.56.1, 255.255.0.0"
        },
        {
            "Pytanie": "Kt&oacute;rym programem NIE mo\u017cna si\u0119 pos\u0142u\u017cy\u0107, aby odzyska\u0107 dane w systemie Windows na podstawie wcze\u015bniej utworzonej kopii?",
            "IMG": "",
            "B1": "A. Acronis True Image",
            "B2": "B. Clonezilla",
            "B3": "D. Norton Ghost",
            "P": "C. FileCleaner"
        },
        {
            "Pytanie": "Kt&oacute;ry typ fizycznej topologii sieci komputerowej przedstawiono na rysunku?",
            "IMG": "https://egzamin-informatyk.pl/ee08/1897.jpg",
            "B1": "B. Podw&oacute;jnego pier\u015bcienia",
            "B2": "C. Magistrali",
            "B3": "D. Gwiazdy",
            "P": "A. Siatki"
        },
        {
            "Pytanie": "Na rysunku przedstawiono przekr&oacute;j kabla",
            "IMG": "https://egzamin-informatyk.pl/e13/80.jpg",
            "B1": "A. optycznego",
            "B2": "B. S/UTP",
            "B3": "C. U/UTP",
            "P": "D. koncentrycznego"
        },
        {
            "Pytanie": "Aby wstrzyma\u0107 dzia\u0142anie programu zapisanego w pliku wsadowym Windows, do momentu naci\u015bni\u0119cia dowolnego klawisza nale\u017cy u\u017cy\u0107 komendy",
            "IMG": "",
            "B1": "A. stop",
            "B2": "B. echo on",
            "B3": "C. echo off",
            "P": "D. pause"
        },
        {
            "Pytanie": "W dokumentacji technicznej procesora umieszczonego na p\u0142ycie g\u0142&oacute;wnej komputera szybko\u015b\u0107 zegara podaje si\u0119 w",
            "IMG": "",
            "B1": "A. s",
            "B2": "B. GHz/s",
            "B3": "C. kHz",
            "P": "D. GHz"
        },
        {
            "Pytanie": "Protok&oacute;\u0142 umo\u017cliwiaj\u0105cy hostom uzyskanie od serwera danych konfiguracyjnych, np. adresu IP bramy sieciowej, to",
            "IMG": "",
            "B1": "A. RTP",
            "B2": "C. HTTPS",
            "B3": "D. NFS",
            "P": "B. DHCP"
        },
        {
            "Pytanie": "W przedsi\u0119biorstwie nale\u017cy cyklicznie tworzy\u0107 kopie bezpiecze\u0144stwa du\u017cej ilo\u015bci danych, znajduj\u0105cych si\u0119 na serwerze, rz\u0119du kilkuset GB. Jakie urz\u0105dzenie najlepiej wykorzysta\u0107 do tego celu?",
            "IMG": "",
            "B1": "B. Nagrywark\u0119 DVD",
            "B2": "C. Nagrywark\u0119 CD",
            "B3": "D. Macierz RAID1",
            "P": "A. Streamer"
        },
        {
            "Pytanie": "Schemat przedstawia zasad\u0119 dzia\u0142ania sieci VPN o nazwie\n",
            "IMG": "https://egzamin-informatyk.pl/ee08/1590.png",
            "B1": "A. Gateway",
            "B2": "B. Client - to - Site",
            "B3": "C. L2TP",
            "P": "D. Site - to - Site"
        },
        {
            "Pytanie": "Jak\u0105 nazw\u0119 nosi niepo\u017c\u0105dane oprogramowanie komputerowe instalowane najcz\u0119\u015bciej bez wiedzy u\u017cytkownika?",
            "IMG": "",
            "B1": "B. Slackware",
            "B2": "C. Shareware",
            "B3": "D. Freeware",
            "P": "A. Malware"
        },
        {
            "Pytanie": "Komputer wyposa\u017cony w BIOS firmy Award wygenerowa\u0142 komunikat o tre\u015bci Primary/Secondary master/slave hard disk fail. Komunikat ten mo\u017ce oznacza\u0107 konieczno\u015b\u0107 wymiany",
            "IMG": "",
            "B1": "B. karty graficznej",
            "B2": "C. klawiatury",
            "B3": "D. pami\u0119ci operacyjnej",
            "P": "A. dysku twardego"
        },
        {
            "Pytanie": "Komputer, kt&oacute;rego naprawa ma zosta\u0107 przeprowadzona u klienta, nie reaguje na wci\u015bni\u0119cie przycisku POWER. Pierwsz\u0105 czynno\u015bci\u0105 harmonogramu prac zwi\u0105zanych z lokalizacj\u0105 i usuni\u0119ciem tej usterki powinno by\u0107",
            "IMG": "",
            "B1": "A. sporz\u0105dzenie rewersu serwisowego",
            "B2": "B. od\u0142\u0105czenie wszystkich podzespo\u0142&oacute;w, zb\u0119dnych do dzia\u0142ania komputera",
            "B3": "C. sporz\u0105dzenie kosztorysu naprawy",
            "P": "D. sprawdzenie zasilania w gniazdku sieciowym"
        },
        {
            "Pytanie": "Kt&oacute;ry z adres&oacute;w jest adresem klasy B?",
            "IMG": "",
            "B1": "A. 10.0.0.1",
            "B2": "C. 224.0.0.1",
            "B3": "D. 192.168.0.1",
            "P": "B. 191.168.0.1"
        },
        {
            "Pytanie": "Ile maksymalnie host&oacute;w mo\u017cna zaadresowa\u0107 w sieci lokalnej, maj\u0105c do dyspozycji jedn\u0105 klas\u0119 C adres&oacute;w protoko\u0142u IPv4?",
            "IMG": "",
            "B1": "B. 255",
            "B2": "C. 510",
            "B3": "D. 512",
            "P": "A. 254"
        },
        {
            "Pytanie": "Komputer jest najprawdopodobniej zainfekowany boot wirusem. Jakie dzia\u0142anie spowoduje usuni\u0119cie wirusa w spos&oacute;b najmniej inwazyjny dla systemu operacyjnego?",
            "IMG": "",
            "B1": "A. Uruchomienie systemu w trybie awaryjnym",
            "B2": "B. Restart systemu",
            "B3": "D. Ponowne zainstalowanie systemu operacyjnego",
            "P": "C. Przeskanowanie programem antywirusowym z bootowalnego no\u015bnika"
        },
        {
            "Pytanie": "Technika ADSL umo\u017cliwia uzyskanie po\u0142\u0105czenia DSL",
            "IMG": "",
            "B1": "A. o takiej samej szybko\u015bci w kierunku od i do abonenta",
            "B2": "B. za po\u015brednictwem linii ISDN",
            "B3": "C. o bardzo du\u017cej szybko\u015bci, powy\u017cej 13 Mb/s",
            "P": "D. z r&oacute;\u017cnymi szybko\u015bciami w kierunku od i do abonenta"
        },
        {
            "Pytanie": "Kt&oacute;re konto nie jest wbudowanym w systemie Windows XP ?\n",
            "IMG": "",
            "B1": "A. administrator",
            "B2": "B. go\u015b\u0107",
            "B3": "C. pomocnik",
            "P": "D. admin"
        },
        {
            "Pytanie": "Kt&oacute;ry z adres&oacute;w IPv4 wraz z prefiksem jest adresem sieci?",
            "IMG": "",
            "B1": "A. 127.100.100.67/27",
            "B2": "B. 208.99.255.134/28",
            "B3": "D. 46.18.10.19/30",
            "P": "C. 64.77.199.192/26"
        },
        {
            "Pytanie": "Dla danego u\u017cytkownika w systemie Linux polecenie usermod -s pozwala na",
            "IMG": "",
            "B1": "A. zmian\u0119 jego katalogu domowego",
            "B2": "C. przypisanie go do nowej grupy",
            "B3": "D. zablokowanie jego konta",
            "P": "B. zmian\u0119 jego pow\u0142oki systemowe"
        },
        {
            "Pytanie": "U\u017cytkownik laptopa chce do niego pod\u0142\u0105czy\u0107 przedstawion\u0105 na rysunku kart\u0119 sieciow\u0105. Aby to by\u0142o mo\u017cliwe, laptop musi by\u0107 wyposa\u017cony w gniazdo",
            "IMG": "https://egzamin-informatyk.pl/e12/807.jpg",
            "B1": "A. Slot 3",
            "B2": "C. Mini DIN",
            "B3": "D. BNC",
            "P": "B. PCMCIA"
        },
        {
            "Pytanie": "Aby zapewni\u0107 jako\u015b\u0107 us\u0142ugi QoS, w prze\u0142\u0105cznikach warstwy dost\u0119pu jest stosowany mechanizm",
            "IMG": "",
            "B1": "A. wykorzystywania jednocze\u015bnie kilku port&oacute;w jako jednego \u0142\u0105cza logicznego",
            "B2": "C. zapobiegaj\u0105cy powstawaniu p\u0119tli w sieci",
            "B3": "D. podejmowania decyzji co do liczby urz\u0105dze\u0144 mog\u0105cych si\u0119 \u0142\u0105czy\u0107 z danym prze\u0142\u0105cznikiem",
            "P": "B. nadawania priorytetu okre\u015blonym rodzajom danych"
        },
        {
            "Pytanie": "Kt&oacute;ry parametr polecenia ipconfig w systemie Windows odnawia konfiguracj\u0119 adres&oacute;w IP?",
            "IMG": "",
            "B1": "A. /release",
            "B2": "B. /displaydns",
            "B3": "C. /flushdns",
            "P": "D. /renew"
        },
        {
            "Pytanie": "U\u017cytkownik laptopa z systemu Windows 7 widzi dost\u0119pne sieci bezprzewodowe jak na rysunku. Konfiguruj\u0105c po\u0142\u0105czenie z sieci\u0105 Z1 musi dla tej sieci poda\u0107",
            "IMG": "https://egzamin-informatyk.pl/e13/344.jpg",
            "B1": "A. nazw\u0119 SSID",
            "B2": "B. typ zabezpiecze\u0144",
            "B3": "C. adres MAC",
            "P": "D. klucz zabezpiecze\u0144"
        },
        {
            "Pytanie": "Co pozwala utrzyma\u0107 r&oacute;wnomierny rozk\u0142ad ciep\u0142a mi\u0119dzy procesorem a radiatorem?",
            "IMG": "",
            "B1": "A. Silikonowy spray",
            "B2": "B. Klej",
            "B3": "C. Pasta grafitowa",
            "P": "D. Mieszanka termiczna"
        },
        {
            "Pytanie": "W kt&oacute;rym rodzaju skanera s\u0105 wykorzystywane fotopowielacze?",
            "IMG": "",
            "B1": "A. kod&oacute;w kreskowych",
            "B2": "C. r\u0119cznym",
            "B3": "D. p\u0142askim",
            "P": "B. b\u0119bnowym"
        },
        {
            "Pytanie": "W systemie Windows przypadkowo usuni\u0119to konto u\u017cytkownika bez usuni\u0119cia katalogu domowego. Odzyskanie niezaszyfrowanych danych z katalogu domowego u\u017cytkownika jest",
            "IMG": "",
            "B1": "A. mo\u017cliwe wy\u0142\u0105cznie przy u\u017cyciu programu typu recovery",
            "B2": "C. niemo\u017cliwe, dane s\u0105 bezpowrotnie utracone wraz z kontem",
            "B3": "D. niemo\u017cliwe, poniewa\u017c zabezpieczenia systemowe blokuj\u0105 dane",
            "P": "B. mo\u017cliwe za pomoc\u0105 konta o uprawnieniach administratorskich"
        },
        {
            "Pytanie": "Aby uzupe\u0142ni\u0107 prawid\u0142ow\u0105 sk\u0142adni\u0119 prezentowanego polecenia, kt&oacute;re udost\u0119pnia folder Dane pod nazw\u0105 test, w miejscu kropek nale\u017cy wpisa\u0107 s\u0142owo ",
            "IMG": "https://egzamin-informatyk.pl/ee08/1722.jpg",
            "B1": "A. view",
            "B2": "C. connect",
            "B3": "D. use",
            "P": "B. share"
        },
        {
            "Pytanie": "Zapis koloru RGB(255, 170, 129) odpowiada notacji",
            "IMG": "",
            "B1": "A. #AA18FF",
            "B2": "B. #81AAFF",
            "B3": "D. #18FAAF",
            "P": "C. #FFAA81"
        },
        {
            "Pytanie": "W modelu hierarchicznym sieci, komputery u\u017cytkownik&oacute;w s\u0105 elementami warstwy",
            "IMG": "",
            "B1": "A. rdzenia",
            "B2": "B. dystrybucji",
            "B3": "C. szkieletowej",
            "P": "D. dost\u0119pu"
        },
        {
            "Pytanie": "Co nale\u017cy zrobi\u0107 z wiadomo\u015bci\u0105 pocztow\u0105 od nieznanej osoby, zawieraj\u0105c\u0105 niepewny za\u0142\u0105cznik?",
            "IMG": "",
            "B1": "A. Otworzy\u0107 za\u0142\u0105cznik, je\u015bli jest w nim wirus, natychmiast go zamkn\u0105\u0107",
            "B2": "B. Otworzy\u0107 za\u0142\u0105cznik i zapisa\u0107 go na dysku twardym, a nast\u0119pnie sprawdzi\u0107 plik programem antywirusowym",
            "B3": "D. Otworzy\u0107 wiadomo\u015b\u0107 i odpowiedzie\u0107 na ni\u0105, pytaj\u0105c co zawiera za\u0142\u0105cznik",
            "P": "C. Nie otwiera\u0107 wiadomo\u015bci, natychmiast j\u0105 usun\u0105\u0107"
        },
        {
            "Pytanie": "U\u017cytkownik komputera udost\u0119pnia publicznie posiadane pliki w sieci Internet. Prawa autorskie zostan\u0105 naruszone, gdy udost\u0119pni",
            "IMG": "",
            "B1": "B. w\u0142asne autorskie filmy z demonstracji publicznych",
            "B2": "C. wykonane przez siebie zdj\u0119cia obiekt&oacute;w wojskowych",
            "B3": "D. otrzymany dokument urz\u0119dowy",
            "P": "A. obraz p\u0142yty systemu operacyjnego Windows 7 Home"
        },
        {
            "Pytanie": "Po sprawdzeniu komputera programem diagnostycznym wykryto, \u017ce temperatura pracy karty graficznej\nposiadaj\u0105cej wyj\u015bcia HDMI i D-SUB, osadzonej w gnie\u017adzie PCI Express komputera stacjonarnego, wynosi\n87&deg;C. W takim przypadku serwisant powinien",
            "IMG": "",
            "B1": "B. zainstalowa\u0107 dodatkowy modu\u0142 pami\u0119ci RAM, aby odci\u0105\u017cy\u0107 kart\u0119",
            "B2": "C. wymieni\u0107 dysk twardy na nowy, o podobnej wielko\u015bci i pr\u0119dko\u015bci obrotowej",
            "B3": "D. zamieni\u0107 kabel sygna\u0142owy D-SUB na HDMI",
            "P": "A. sprawdzi\u0107, czy wentylator jest sprawny i czy nie jest zakurzony"
        }
    ]);

    return (
        <div>
            <div className="flex justify-center items-center my-[90px] lg:my[230px]">
                <header className="text-center text-white text-4xl font-extralight relative inline-block">
                    Egzamin E13
                </header>
            </div>
            <div className="flex justify-center items-center flex-col pb-[20px]">
                {
                    questions.map((question, index) => (
                        <QuizQuestion key={index} image={question.IMG} answer={question.P}
                                      question={question.Pytanie} questionNumber={index + 1} wrong_1={question.B1}
                                      wrong_2={question.B2} wrong_3={question.B3}/>
                    ))
                }
            </div>
        </div>
    );
}
