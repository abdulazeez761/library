import './footer.css'
const Footer = () => {
    return (
        <>
            {/* <div className="footer">
                <div className="bubbles">

                    <div className="bubble" style={{ "--size": "3.0386323626551723rem", "--distance": "9.452774330349278rem", "--position": '93.55515756928112%', "--time": '3.861166916430031s', "--delay": '-3.878077740792678s' }}></div>
                    <div className="bubble" style={{ "--size": '4.927271196662559rem ', "--distance": '7.382501161238541rem', "--position": '7.723853523748382%', "--time": '2.0565288689474763s', "--delay": '-2.1834664473832985' }}></div>
                    <div className="bubble" style={{ "--size": "5.0417946929467545rem", "--distance": '7.564016673362062rem', "--position": '85.58243990544734%', "--time": '2.010809115796032s', "--delay": -'3.361928818742522s' }}></div>
                    <div className="bubble" style={{ "--size": '2.6133692421770203rem', "--distance": '8.300490904902443rem', "--position": '30.72428934679055% ', "--time": '3.4157308239303608s', "--delay": -'3.649102737199263' }}></div>
                    <div className="bubble" style={{ "--size": '3.5759363230277366rem', "--distance": '8.380757897334824rem', "--position": '-0.921968733977967% ', "--time": '2.44116369761307s', "--delay": '-3.228526514277567s' }}></div>
                    <div className="bubble" style={{ "--size": '5.650954865975852rem', "--distance": '6.342571916101783rem', "--position": '81.72079599231513%', "--time": '2.945097838319381s', "--delay": '-3.6232737292791244s' }}></div>
                    <div className="bubble" style={{ "--size": '2.2646797444850026rem', "--distance": '7.186566629965199rem', "--position": '25.17257959312755%', "--time": '2.44920139454046s', "--delay": '-3.2439961139910483s' }}></div>
                    <div className="bubble" style={{ "--size": '4.376034375895324rem', "--distance": '8.527845216707796rem', "--position": '84.7546208162458%', "--time": '3.3977462684397s', "--delay": "-2.1724997648242885s" }}> </div>
                    <div className="bubble" style={{ "--size": '2.5993497421062575rem', "--distance": '8.036006782219847rem', "--position": '46.20803961310422% ', "--time": '3.236409048680382s', "--delay": '-3.584110054806354s' }}></div>
                    <div className="bubble" style={{ "--size": '4.358605891343419rem', "--distance": '6.808481087914882rem', "--position": '9.580270885654059%', "--time": '3.647577703651519s', "--delay": '-2.2456924733700543s' }}></div>
                    <div className="bubble" style={{ "--size": '5.428031010478228rem', "--distance": '9.273980180954933rem', "--position": '85.75933976169753% ', "--time": '2.5075834414759646s ', "--delay": '-3.4100470912984595' }}></div>
                    <div className="bubble" style={{ "--size": '4.096011375320025rem', "--distance": '8.664386080317529rem ', "--position": "55.6333886975483%", "--time": '2.2628958283441074s', "--delay": '-3.957742532881862s' }}></div>
                    <div className="bubble" style={{ "--size": '3.6623152221067805rem', "--distance": '8.28074455450319rem', "--position": '-0.29440596964963994%', "--time": '3.725682087152832s', "--delay": '-2.23351926724435' }}></div>
                    <div className="bubble" style={{ "--size": '2.560196345402413rem', "--distance": '8.012464879004774rem', "--position": '92.45688656498766%', "--time": '3.1356778027216183s', "--delay": '-2.6833739624493766' }}></div>
                    <div className="bubble" style={{ "--size": '4.571900074830819rem', "--distance": '8.897136827057913rem ', "--position": '27.89670765632617%', "--time": '3.058057414876717s', "--delay": '-2.1870948933790566s' }}></div>
                    <div className="bubble" style={{ "--size": '3.481069949144641rem', "--distance": '6.099266676939072rem', "--position": '84.32408989364548%', "--time": '2.4924571427526514s', "--delay": '-3.015547619275599s' }}></div>
                    <div className="bubble" style={{ "--size": '2.8612401670212435rem', "--distance": '6.78610683357833rem', "--position": '88.50865541459974%', "--time": '3.5074704095238363s', "--delay": '-2.590742903730441s' }}></div>
                    <div className="bubble" style={{ "--size": '4.1181407215073955rem', "--distance": '8.853885402353637rem', "--position": '89.25133833122732%', "--time": '3.6193291272254364s', "--delay": '-3.448759002087000' }}></div>
                    <div className="bubble" style={{ "--size": '5.658230595454656rem', "--distance": '7.720290775014619rem', "--position": '75.23695789099061%', "--time": '2.496230344428421s', "--delay": -'3.2786674858830827s' }}></div>
                    <div className="bubble" style={{ "--size": '4.538247224627066rem', "--distance": '9.345092221717817rem', "--position": '66.97289002564082%', "--time": '3.5208932638389503s', "--delay": '-2.679503727548905s' }}></div>
                    <div className="bubble" style={{ "--size": '4.850520197738589rem', "--distance": '6.088523338063042rem', "--position": '50.43681047058629%', "--time": '2.690757480233918s', "--delay": '-2.2826211426945875s' }}></div>
                    <div className="bubble" style={{ "--size": '5.034284469612233rem', "--distance": '8.165354454016875rem', "--position": '59.09553112980933% ', "--time": '3.9553270097528825s', "--delay": '-3.937917321064554s' }}></div>
                    <div className="bubble" style={{ "--size": '5.026304606088475rem', "--distance": '8.06744896983118rem', "--position": '0.8141209053175347%', "--time": '2.6029965327775035s ', "--delay": '-3.894753145222839s' }}></div>
                    <div className="bubble" style={{ "--size": '4.203032112386534rem', "--distance": '9.309738005829765rem', "--position": '5.616253705389248% ', "--time": '3.9021997974392955s', "--delay": '-2.9420505942356385' }}></div>
                    <div className="bubble" style={{ "--size": '5.936198920046034rem', "--distance": '8.372821846304827rem', "--position": '100.836374327671%', "--time": '2.5323443763804736s', "--delay": '-2.9335021423761676s' }}></div>
                    <div className="bubble" style={{ "--size": '4.656921195490362rem', "--distance": '7.323312539194638rem', "--position": '21.531246161247278%', "--time": '2.90829089032613s', "--delay": '-2.880105787289255s' }}></div>
                    <div className="bubble" style={{ "--size": '4.743619284496885rem', "--distance": '6.4457610914763865rem', "--position": '38.973926501517035%', "--time": '2.8208484833600305s', "--delay": '-2.60440689521235' }}></div>
                    <div className="bubble" style={{ "--size": '2.339836690482711rem', "--distance": '7.716981986551757rem', "--position": '46.60801531320618% ', "--time": '3.5308045950131817s', "--delay": '-2.6837274845975925' }}></div>
                    <div className="bubble" style={{ "--size": '4.492792151843909rem', "--distance": '8.10429635388685rem', "--position": '-3.566207723017929%', "--time": '2.427301812259901s', "--delay": '-3.6160459474099915s' }}></div>
                    <div className="bubble" style={{ "--size": '4.511934922372863rem', "--distance": '8.935597818301169rem', "--position": '34.073320421328745%', "--time": '2.2516407382001122s', "--delay": '-3.868927856804778' }}></div>
                    <div className="bubble" style={{ "--size": '2.127905262890482rem', "--distance": '8.44602846282464rem', "--position": '57.040643936694764%', "--time": '3.885055539781935s', "--delay": '-2.9334845750984675s' }}></div>
                    <div className="bubble" style={{ "--size": '2.73381264650088rem ', "--distance": '6.316266681469618rem', "--position": '5.488478527568644% ', "--time": '2.5194562209394804s ', "--delay": '-2.4096191958345954s' }}></div>
                    <div className="bubble" style={{ "--size": '4.180035109794708rem ', "--distance": '6.367583588565754rem', "--position": '41.28491478387103%', "--time": '3.4452797815287566s', "--delay": '-2.6062234927141334' }}></div>
                    <div className="bubble" style={{ "--size": '2.8729819110068195rem', "--distance": '6.675939710846739rem ', "--position": '-1.8130097370528775%', "--time": '2.7209089849454866s', "--delay": '-2.5422926231023' }}></div>
                    <div className="bubble" style={{ "--size": '3.588698619062331rem', "--distance": '8.11437256556445rem', "--position": '8.02140099749463%', "--time": '2.386384061497503s', "--delay": '-2.1112720817913306s' }}></div>
                    <div className="bubble" style={{ "--size": '4.537757689377971rem', "--distance": '8.147552082588804rem ', "--position": '58.61695672363026% ', "--time": '3.0165647560585365s', "--delay": '-3.4211005307353752' }}></div>
                    <div className="bubble" style={{ "--size": '3.101017686650189rem ', "--distance": '9.555868178625484rem ', "--position": '59.466135775624906%', "--time": '2.4724584314286377s', "--delay": '-3.3347070223308s' }}></div>
                    <div className="bubble" style={{ "--size": '4.499066847135281rem    ', "--distance": '9.652593070430814rem    ', "--position": '  43.61128366509359%    ', "--time": ' 2.1536892757647874s    ', "--delay": '-2.5649142663551463' }}></div>
                    <div className="bubble" style={{ "--size": '4.942404224912008rem    ', "--distance": '7.135705822499197rem    ', "--position": ' 26.444354243833878%    ', "--time": ' 2.9331875955110465s    ', "--delay": '        -2.33418967258303s        ' }}></div>
                    <div className="bubble" style={{ "--size": '2.5553867784278994rem    ', "--distance": '6.5153518500031895rem    ', "--position": '  37.67685905797651%    ', "--time": '  2.999368246888297s    ', "--delay": '        -3.315020252877041        ' }}></div>
                    <div className="bubble" style={{ "--size": '3.436349176485918rem    ', "--distance": '7.071905954084821rem    ', "--position": '  33.10707460302399%    ', "--time": ' 3.0301205217234726s    ', "--delay": '       -3.2438693682272035        ' }}></div>
                    <div className="bubble" style={{ "--size": '5.302875905412249rem    ', "--distance": '8.037372973174415rem    ', "--position": ' 43.454492629287785%    ', "--time": '  2.191599825536077s    ', "--delay": '       -2.007182695587991s        ' }}></div>
                    <div className="bubble" style={{ "--size": '2.676811313707029rem    ', "--distance": '8.043272810983188rem    ', "--position": '  50.96775637076496%    ', "--time": '  3.419942547817357s    ', "--delay": '      -2.524646390839624s         ' }}></div>
                    <div className="bubble" style={{ "--size": '2.1143182250068406rem    ', "--distance": '9.370688356096935rem    ', "--position": '  4.953590433169442%    ', "--time": ' 2.6229726217516425s    ', "--delay": '        -2.831083583614204        ' }}></div>
                    <div className="bubble" style={{ "--size": '5.455454336445441rem    ', "--distance": '6.052107192715806rem    ', "--position": ' 0.5490220180566041%    ', "--time": '  2.171729589130381s    ', "--delay": '       -2.6228233190836034        ' }}></div>
                    <div className="bubble" style={{ "--size": '2.7812872682926004rem    ', "--distance": '7.678271932184559rem    ', "--position": '  4.371838025795618%    ', "--time": ' 3.0513694213737788s    ', "--delay": '        -2.084664010947951        ' }}></div>
                    <div className="bubble" style={{ "--size": '3.506594620945555rem    ', "--distance": '9.925813469999312rem    ', "--position": ' 102.07939412137969%    ', "--time": ' 3.4117047104584732s    ', "--delay": '        -3.381807801657440        ' }}></div>
                    <div className="bubble" style={{ "--size": '3.490623166871564rem    ', "--distance": '9.882758661683642rem    ', "--position": '  68.36329026642746%    ', "--time": ' 3.1064468950676862s    ', "--delay": '       -3.813030197335177s        ' }}></div>
                    <div className="bubble" style={{ "--size": '  5.7728813081595rem    ', "--distance": '9.487786185580822rem    ', "--position": '  84.81071945213465%    ', "--time": ' 3.3144919038357736s    ', "--delay": '     -2.4853971669347272s         ' }}></div>
                    <div className="bubble" style={{ "--size": '5.505113345015788rem    ', "--distance": '6.650394901304211rem    ', "--position": '  42.94328826538972%    ', "--time": ' 2.8978834644598206s    ', "--delay": '       -2.476346047153182s        ' }}></div>
                    <div className="bubble" style={{ "--size": '4.931996803154185rem    ', "--distance": ' 7.16254034122135rem    ', "--position": '  67.88962816896685%    ', "--time": ' 2.1296729923785875s    ', "--delay": '      -3.508056752569519s         ' }}></div>
                    <div className="bubble" style={{ "--size": '5.7629352235424465rem    ', "--distance": '9.132284629483808rem    ', "--position": '  37.85253395469277%    ', "--time": '   3.58968338437058s    ', "--delay": '      -2.84272569708366s          ' }}></div>
                    <div className="bubble" style={{ "--size": '5.238828867531817rem    ', "--distance": '8.665507342676655rem    ', "--position": '-1.4185527481261828%    ', "--time": ' 2.3641704436126463s    ', "--delay": '         -3.99539252522650        ' }}></div>
                    <div className="bubble" style={{ "--size": '4.689384218149387rem    ', "--distance": '6.3836499675692915rem    ', "--position": ' 16.752674293490536%    ', "--time": ' 3.0936135369482236s    ', "--delay": '         -2.47963178530542        ' }}></div>
                    <div className="bubble" style={{ "--size": '3.551650445569596rem    ', "--distance": ' 6.72302600820374rem    ', "--position": ' 13.189707328557414%    ', "--time": '  2.153007290815964s    ', "--delay": '      -3.9708990506144564s        ' }}></div>
                    <div className="bubble" style={{ "--size": '5.7529316542471145rem    ', "--distance": ' 9.14791573026077rem    ', "--position": ' 14.303601898180414%    ', "--time": ' 3.9507901930801856s    ', "--delay": '        -2.063438383167852        ' }}></div>
                    <div className="bubble" style={{ "--size": '3.3121908350682947rem    ', "--distance": '8.672067614092924rem    ', "--position": '  93.74609143168333%    ', "--time": '  3.117764891935778s    ', "--delay": '       -3.646766834036491s        ' }}></div>
                    <div className="bubble" style={{ "--size": '3.044987259858944rem    ', "--distance": '8.056885278871771rem    ', "--position": '   45.5161425713059%    ', "--time": ' 2.4937383616568503s    ', "--delay": '      -2.4846352233250184s        ' }}></div>
                    <div className="bubble" style={{ "--size": ' 5.72722813429346rem    ', "--distance": '6.564750173411671rem    ', "--position": '  95.03994045539179%    ', "--time": '  3.987852620443697s    ', "--delay": '     -2.818076251157403s          ' }}></div>
                    <div className="bubble" style={{ "--size": '5.581810213591979rem    ', "--distance": '7.281216078364632rem    ', "--position": ' 28.896898922479103%    ', "--time": ' 2.8747800447911684s    ', "--delay": '        -3.569175222660395        ' }}></div>
                    <div className="bubble" style={{ "--size": '5.239945606280521rem    ', "--distance": '9.097231511987395rem    ', "--position": '  53.03655188183533%    ', "--time": ' 3.6956218705821344s    ', "--delay": '       -2.9937961410601743        ' }}></div>
                    <div className="bubble" style={{ "--size": '2.145431368498781rem    ', "--distance": '9.825924162998579rem    ', "--position": ' 22.093178464847846%    ', "--time": '  2.129747118151596s    ', "--delay": '       -2.804462739669012s        ' }}></div>
                    <div className="bubble" style={{ "--size": ' 2.14089274295449rem    ', "--distance": '7.052554690526272rem    ', "--position": '  50.01847349822301%    ', "--time": '  3.501867059077089s    ', "--delay": '     -2.907037306750735s          ' }}></div>
                    <div className="bubble" style={{ "--size": '4.760794171280463rem    ', "--distance": '8.125673436810658rem    ', "--position": '  24.20077836315024%    ', "--time": '  3.865008150484553s    ', "--delay": '      -2.2491575951350917s        ' }}></div>
                    <div className="bubble" style={{ "--size": ' 5.73811155256191rem    ', "--distance": '7.290610615633121rem    ', "--position": '  57.69023883536978%    ', "--time": '  3.657490752012118s    ', "--delay": '     -3.041341484086205s          ' }}></div>
                    <div className="bubble" style={{ "--size": '2.7028057530472367rem    ', "--distance": '7.522443191843428rem    ', "--position": '  19.63684322498398%    ', "--time": '  3.763102704269586s    ', "--delay": '       -3.8548756144866116        ' }}></div>
                    <div className="bubble" style={{ "--size": '2.157938016305004rem    ', "--distance": ' 6.03710312612151rem    ', "--position": '  64.35847910591829%    ', "--time": ' 2.8425533258631606s    ', "--delay": '      -3.1953626458545887s        ' }}></div>
                    <div className="bubble" style={{ "--size": '5.0981927897218515rem    ', "--distance": '8.555427068417789rem    ', "--position": '-0.0565818091807202%    ', "--time": ' 3.3502538249318428s    ', "--delay": '          -2.4748910922690        ' }}></div>
                    <div className="bubble" style={{ "--size": '5.633385882865974rem    ', "--distance": '6.6028375380325945rem    ', "--position": '  46.96433169963386%    ', "--time": '  2.335708249839957s    ', "--delay": '       -2.9419341483389703        ' }}></div>
                    <div className="bubble" style={{ "--size": '3.0180349709582313rem    ', "--distance": ' 6.22202835886568rem    ', "--position": '   5.16325212930893%    ', "--time": '  3.650815437428797s    ', "--delay": '     -2.2241370308696675s         ' }}></div>
                    <div className="bubble" style={{ "--size": '3.1192596114486486rem    ', "--distance": '9.301378504086248rem    ', "--position": ' 27.312490485707436%    ', "--time": ' 2.4588204945906362s    ', "--delay": '         -2.82294132641817        ' }}></div>
                    <div className="bubble" style={{ "--size": '4.891042670078471rem    ', "--distance": '8.855884266248413rem    ', "--position": '  1.956590857982972%    ', "--time": ' 3.9469955859282093s    ', "--delay": '       -3.573082000355704s        ' }}></div>
                    <div className="bubble" style={{ "--size": '4.437816941010613rem    ', "--distance": ' 7.86574370081882rem    ', "--position": '  99.11900768814715%    ', "--time": ' 3.9301441779493045s    ', "--delay": '      -3.033950448992062s         ' }}></div>
                    <div className="bubble" style={{ "--size": '4.343711050001508rem    ', "--distance": ' 9.02012618633237rem    ', "--position": '  71.03038765054008%    ', "--time": ' 3.4444963423202912s    ', "--delay": '      -2.434561788611859s         ' }}></div>
                    <div className="bubble" style={{ "--size": '3.9558653576995004rem    ', "--distance": '6.243953833702344rem    ', "--position": ' 18.877321446498733%    ', "--time": ' 3.8292083313508507s    ', "--delay": '         -3.87578944644843        ' }}></div>
                    <div className="bubble" style={{ "--size": '3.113005811361756rem    ', "--distance": '6.155471203512323rem    ', "--position": '  80.98741506780131%    ', "--time": '  2.472012279104167s    ', "--delay": '      -3.9904346565661344s        ' }}></div>
                    <div className="bubble" style={{ "--size": '4.853351809442882rem    ', "--distance": '9.227769625898075rem    ', "--position": ' 1.7000259626294252%    ', "--time": ' 2.9349917682471873s    ', "--delay": '        -3.045270202628138        ' }}></div>
                    <div className="bubble" style={{ "--size": '2.026985622687743rem    ', "--distance": '6.304375453007453rem    ', "--position": '  91.61619353645868%    ', "--time": ' 2.4103762574068903s    ', "--delay": '       -3.8045926565594095        ' }}></div>
                    <div className="bubble" style={{ "--size": '3.2209651998706423rem    ', "--distance": '6.857839879100598rem    ', "--position": ' 21.811399502580116%    ', "--time": '  3.008296140981584s    ', "--delay": '        -2.613141522805846        ' }}></div>
                    <div className="bubble" style={{ "--size": '3.0987107924125405rem    ', "--distance": '7.243666782408254rem    ', "--position": '   9.75396141338787%    ', "--time": '  2.837483412573508s    ', "--delay": '      -2.943759487627923s         ' }}></div>
                    <div className="bubble" style={{ "--size": '4.734577054135654rem    ', "--distance": '8.850899401550864rem    ', "--position": ' 32.300401241188055%    ', "--time": ' 3.7305737111919997s    ', "--delay": '        -2.571903648298543        ' }}></div>
                    <div className="bubble" style={{ "--size": '5.251710065954206rem    ', "--distance": '7.291072270894978rem    ', "--position": ' 38.286372283789056%    ', "--time": '  2.803449229143125s    ', "--delay": '       -3.899409519004843s        ' }}></div>
                    <div className="bubble" style={{ "--size": ' 4.40033247385837rem    ', "--distance": ' 7.98486952024526rem    ', "--position": '  58.59452953791038%    ', "--time": ' 2.6132017722902123s    ', "--delay": '     -2.5050617706461322s         ' }}></div>
                    <div className="bubble" style={{ "--size": '5.765265461309496rem    ', "--distance": '8.097376924742624rem    ', "--position": '  81.17586514636828%    ', "--time": ' 3.6481756235084966s    ', "--delay": '       -3.968520136088309s        ' }}></div>
                    <div className="bubble" style={{ "--size": '5.194055507690323rem    ', "--distance": '7.4335724938186205rem    ', "--position": '  6.903313437657722%    ', "--time": '3.40759013980153s    ', "--delay": '-2.7519804982898184s              ' }}></div>

                    <div className="bubble" style={{ "--size": '4.8764860265891485rem', "--distance": '7.34635379621228rem', "--position": '42.806347086278976%', "--time": '3.843731361062752s', "--delay": '-2.0236402110385963' }}></div>
                    <div className="bubble" style={{ "--size": '4.9676739227259805rem', "--distance": '7.296865903011974rem ', "--position": '74.05596115730208%', "--time": '2.1769664172512098s', "--delay": '-3.812613078717439' }}></div>
                    <div className="bubble" style={{ "--size": '4.764930870978745rem ', "--distance": '8.959499309998806rem', "--position": '46.43074661468104%', "--time": '2.5248555037832907s ', "--delay": '-3.0570594554968245' }}></div>
                    <div className="bubble" style={{ "--size": '2.6362409235118696rem', "--distance": '9.492828578682907rem ', "--position": '23.945418302021697%', "--time": '2.711891598798196s', "--delay": '-3.238347179024484' }}></div>
                    <div className="bubble" style={{ "--size": '5.3538656592769565rem', "--distance": '7.823986166356958rem', "--position": '28.85298273053921% ', "--time": '2.9640823016665654s ', "--delay": '-2.373094821750692' }}></div>
                    <div className="bubble" style={{ "--size": '2.443731443495735rem', "--distance": '9.485922300713657rem ', "--position": '22.69279436022595%', "--time": '2.176085600521026s', "--delay": '-2.1993909622494234s' }}></div>
                    <div className="bubble" style={{ "--size": '2.5603457331957973rem', "--distance": '6.876382355226607rem', "--position": '77.37560518784211%', "--time": '2.306846768499894s', "--delay": '-2.2235969346283673' }}></div>
                    <div className="bubble" style={{ "--size": '5.46054263157954rem', "--distance": '6.396572516345421rem', "--position": '77.51454254937352%', "--time": '3.4897411836077756s', "--delay": '-2.979371074569993s' }}></div>
                    <div className="bubble" style={{ "--size": '2.714439359107045rem', "--distance": '8.20635026287096rem', "--position": '103.79786852359402%', "--time": '3.1713382954814753s', "--delay": '-2.3526776488619943' }}></div>
                    <div className="bubble" style={{ "--size": '5.534421136553976rem', "--distance": '9.864170656259716rem', "--position": '94.20273717479914%', "--time": '3.262573406150125s', "--delay": '-3.641608377348179s' }}></div>
                    <div className="bubble" style={{ "--size": '2.6717335456173448rem', "--distance": '9.864332704898114rem', "--position": '92.04046916795693% ', "--time": '3.7415928322998373s', "--delay": '-2.340031404733173' }}></div>
                    <div className="bubble" style={{ "--size": '4.551914852522192rem ', "--distance": '9.337606127022084rem ', "--position": '75.66532829750437% ', "--time": '2.0227397501318585s', "--delay": '-2.3464492755443125' }}></div>
                    <div className="bubble" style={{ "--size": "3.1500355734854226rem", "--distance": "8.868539248275132rem ", "--position": "83.52445252424015%", "--time": "2.713684114428751s ", "--delay": "-3.814148304434786s" }}></div>
                    <div className="bubble" style={{ "--size": "5.6232926035908575rem", "--distance": "6.963620279871744rem", "--position": "101.86495364091498%", "--time": "2.6305588283051637s", "--delay": "-2.07560661848415" }}></div>
                    <div className="bubble" style={{ "--size": "3.39753818589236rem", "--distance": "6.163256814112927rem", "--position": "57.1290485905551%", "--time": "3.2281732632002673s ", "--delay": "-3.2396692215076874s" }}></div>
                    <div className="bubble" style={{ "--size": "4.259876525439832rem", "--distance": "6.270252762882566rem ", "--position": "6.794790795956748%", "--time": "2.3860412196409637s", "--delay": "-3.5357961492198s" }}></div>
                    <div className="bubble" style={{ "--size": "3.0198029069666186rem", "--distance": '9.36818519654204rem', "--position": "37.8166646317395%", "--time": "2.7798618896918423s", "--delay": "-2.009202004739228s" }}></div>
                    <div className="bubble" style={{ "--size": "4.46224737058444rem", "--distance": "7.235571778693387rem ", "--position": "27.22163981436924%", "--time": "2.8159419126977903s", "--delay": "-2.7076848671736435s" }}></div>
                    <div className="bubble" style={{ "--size": "4.55915239672039rem", "--distance": "8.570098573577067rem", "--position": "41.94690536998748%", "--time": "3.299857004893741s", "--delay": "-2.742916483621863s" }}></div>
                    <div className="bubble" style={{ "--size": "3.7693097745829585rem", "--distance": "6.058408345265815rem ", "--position": "91.88807411053622%", "--time": "2.457909547128673s ", "--delay": "-2.9725836884356642" }}></div>
                    <div className="bubble" style={{ "--size": "4.616659584616238rem", "--distance": "9.976118157516435rem", "--position": "98.05853945793059%", "--time": "3.007387296597797s", "--delay": "-3.2180502310050096s" }}></div>
                    <div className="bubble" style={{ "--size": "5.010139874627749rem", "--distance": "9.714666230502491rem", "--position": "87.86495152477715% ", "--time": "2.908511223184787s", "--delay": "-3.9354496858200307s" }}></div>
                    <div className="bubble" style={{ "--size": "4.523766581812586rem", "--distance": "6.70370840129957rem ", "--position": "69.55979158835234%", "--time": "3.79206643061113s", "--delay": "-3.889019661744693s" }}> </div>
                    <div className="bubble" style={{ "--size": "3.3156334172988213rem", "--distance": "7.910304009405383rem", "--position": "41.27656578740188% ", "--time": "3.8050577556605023s", "--delay": "-2.719962075910823" }}></div>
                    <div className="bubble" style={{ "--size": "4.7497015387114025rem", "--distance": "6.318624928073731rem", "--position": "54.73372469970791% ", "--time": "3.4166109954960633s", "--delay": "-3.852193075477552" }}></div>
                    <div className="bubble" style={{ "--size": " 2.204866568292779rem", "--distance": "7.7222130562944375rem", "--position": "97.16868774835422% ", "--time": "3.4731639022297958s", "--delay": "-2.290962566072139" }}></div>
                    <div className="bubble" style={{ "--size": '5.184913788886118rem ', "--distance": '9.804754311994122rem ', "--position": '32.72329245248539% ', "--time": '3.9812686485626743s', "--delay": '-3.872199600520696s' }}></div>
                    <div className="bubble" style={{ "--size": '3.7612468647296105rem', "--distance": '9.420366894420946rem', "--position": '28.854450967479046%', "--time": '3.6223464864590644s', "--delay": '-3.40014176288709' }}></div>
                    <div className="bubble" style={{ "--size": '4.343270736563209rem ', "--distance": '9.51785697028025rem', "--position": '-1.5772987023244434% ', "--time": '3.8753192637586005s', "--delay": '-2.748465217826696' }}></div>
                    <div className="bubble" style={{ "--size": '4.90268997477121rem', "--distance": '8.836404002386613rem', "--position": '77.62996049905738%', "--time": '3.7748652909803404s', "--delay": '-2.713355414731492s' }}></div>
                    <div className="bubble" style={{ "--size": '2.4625862352162553rem ', "--distance": '7.992823707627128rem ', "--position": '46.86128156734334%', "--time": '2.2892520746622083s', "--delay": '-3.839781216148961' }}></div>
                    <div className="bubble" style={{ "--size": '2.3251432677827664rem', "--distance": '8.487221420946632rem ', "--position": '73.26597887767272%', "--time": '3.642138238277111s', "--delay": '-2.2480443675712998' }}></div>
                    <div className="bubble" style={{ "--size": '5.661299302916732rem ', "--distance": '8.30754013036195rem ', "--position": '20.683154875783124%', "--time": '2.483327051358392s', "--delay": '-3.119941839258526s' }}></div>
                    <div className="bubble" style={{ "--size": '3.0099501351702633rem', "--distance": '9.307774596467173rem', "--position": '17.564162254782666%', "--time": '3.6040070451624144s', "--delay": '-2.66817871884937' }}></div>
                    <div className="bubble" style={{ "--size": '3.6513399807243605rem', "--distance": '6.7147527068732575rem', "--position": '77.56886325037773%', "--time": '2.6112515066435913s', "--delay": '-2.07404745317169' }}></div>
                    <div className="bubble" style={{ "--size": '5.710882980785036rem ', "--distance": '7.938539788272559rem ', "--position": '7.800703100190699%', "--time": '3.7945057194775953s', "--delay": '-3.4348445681996584' }}></div>
                    <div className="bubble" style={{ "--size": '4.431717771540523rem', "--distance": '8.138698885056112rem ', "--position": '-0.6365095479124623% ', "--time": '2.50642818406464s', "--delay": '-3.8738400090252805' }}></div>
                    <div className="bubble" style={{ "--size": '5.120773987275573rem', "--distance": '8.926015174256428rem ', "--position": '90.75075622670138%', "--time": '2.153572907893909s', "--delay": '-2.127271142980201s' }}></div>
                    <div className="bubble" style={{ "--size": '5.600029896048437rem', "--distance": '7.330792253889743rem', "--position": '47.06771575943273%', "--time": '2.1170120565115345s', "--delay": '-2.5599649403972413' }}></div>
                    <div className="bubble" style={{ "--size": '3.9596711178149615rem', "--distance": '8.369747304315187rem', "--position": '0.3852684860095801%', "--time": '2.750297065040159s', "--delay": '-2.615875276114764' }}></div>
                    <div className="bubble" style={{ "--size": '2.5927705973397464rem ', "--distance": '7.95931486482493rem', "--position": '26.192549100415246% ', "--time": '2.3520105117792527s', "--delay": '-2.752071862904086' }}></div>
                    <div className="bubble" style={{ "--size": '5.362310220469103rem ', "--distance": '7.025951845299271rem', "--position": '56.705528586651226', "--time": '3.7821572219832644s', "--delay": '-2.0029552987773696s' }}></div>
                    <div className="bubble" style={{ "--size": '4.163673128965467rem', "--distance": '9.436700496676494rem', "--position": '8.410560349882182%', "--time": '2.402155153215314s', "--delay": '-2.679952021006694s' }}></div>
                </div>
                <div className="content"></div>
            </div>

            <svg style={{ "position": 'fixed', top: '100vh' }}>
                <defs>
                    <filter id="blob">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="blob"></feColorMatrix>
                        <feComposite in="SourceGraphic" in2="blob" operator="atop"></feComposite>
                    </filter>
                </defs>
            </svg> */}
            {/* 
            <footer class="page-footer font-small cyan darken-3">
                <div class="footer_container">
                    <div class="row">


                        <div class="col-md-12 py-5">
                            <ul class="mb-5 flex-center">


                                <li class="fb-ic">
                                    <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </li>

                                <li class="tw-ic">
                                    <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </li>

                                <li class="gplus-ic">
                                    <i class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </li>

                                <li class="li-ic">
                                    <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </li>

                                <li class="ins-ic">
                                    <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </li>

                                <li class="pin-ic">
                                    <i class="fab fa-pinterest fa-lg white-text fa-2x"> </i>
                                </li>
                            </ul>
                        </div>


                    </div>

                </div>

                <div class="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="/"> abd828981@gmail.com</a>
                </div>


            </footer> */}
            <div className='page-footer'>


                <footer className="bg-light text-center text-lg-start " >

                    <div className="container p-4">

                        <div className="row">

                            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Footer text</h5>

                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                    molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                                    aliquam voluptatem veniam, est atque cumque eum delectus sint!
                                </p>
                            </div>



                            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Footer text</h5>

                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                    molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                                    aliquam voluptatem veniam, est atque cumque eum delectus sint!
                                </p>
                            </div>

                        </div>

                    </div>



                    <div className="text-center p-3" style={{ backgroundcolor: "rgba(0, 0, 0, 0.2)" }}>
                        © 2022 Copyright:
                        <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                    </div>

                </footer>
            </div>
        </>
    )
}

export default Footer