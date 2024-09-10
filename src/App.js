import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"

import HomePage from './pages/homepage/HomePage'
import SpecialityChem from './pages/specialitychem/SpecialityChem'
import BulkDrug from './pages/bulkdrug/BulkDrug'
import Services from './pages/sectionservice/Services'
import AboutPage from './pages/aboutpage/AboutPage'
import Career from './pages/career/Career'
import ContactPage from './pages/contactpage/ContactPage'

// Pages

import SPaper from './pages/specialitychem/specialproduct/paper/SPaper'
import Oil from './pages/specialitychem/specialproduct/oil/Oil'
import SpTextile from './pages/specialitychem/specialproduct/sptextile/SpTextile'
import SpMining from './pages/specialitychem/specialproduct/spmining/SpMining'
import SpWater from './pages/specialitychem/specialproduct/spindwater/SpWater'
import WaterSp from './pages/specialitychem/specialproduct/spwater/WaterSp'
import Clarification from './pages/specialitychem/specialproduct/spwater/spwaterproduct/clarification/Clarification'
import Rishfloc1 from './pages/specialitychem/specialproduct/spwater/spwaterproduct/clarification/rishfloc1/Rishfloc1'
import Rishfloc2 from './pages/specialitychem/specialproduct/spwater/spwaterproduct/clarification/rishfloc2/Rishfloc2'
import RishLyte1 from './pages/specialitychem/specialproduct/spwater/spwaterproduct/clarification/rishLyte1/RishLyte1'
import RishLyte2 from './pages/specialitychem/specialproduct/spwater/spwaterproduct/clarification/rishLyte2/RishLyte2'
import RishLyte3 from './pages/specialitychem/specialproduct/spwater/spwaterproduct/clarification/rishLyte3/RishLyte3'
import RishLyte4 from './pages/specialitychem/specialproduct/spwater/spwaterproduct/clarification/rishLyte4/RishLyte4'
import Biological from './pages/specialitychem/specialproduct/spwater/spwaterproduct/biological/Biological'
import Biorishzym from './pages/specialitychem/specialproduct/spwater/spwaterproduct/biological/biorishzym/Biorishzym'
import Scale from './pages/specialitychem/specialproduct/spwater/spwaterproduct/scale/Scale'
import Richscale from './pages/specialitychem/specialproduct/spwater/spwaterproduct/scale/richscale/Richscale'
import FoamControl from './pages/specialitychem/specialproduct/spwater/spwaterproduct/foamcontrol/FoamControl'
import RichFoam from './pages/specialitychem/specialproduct/spwater/spwaterproduct/foamcontrol/richfoam/RichFoam'
import Sugar from './pages/specialitychem/specialproduct/sugar/Sugar'
import Ceramic from './pages/specialitychem/specialproduct/ceramic/Ceramic'
import CeramicProduct from './pages/specialitychem/specialproduct/ceramic/ceramicproduct/CeramicProduct'
import Methyl from './pages/bulkdrug/bulkdrugproduct/methyl/Methyl'
import Technical from './pages/bulkdrug/bulkdrugproduct/methyl/methylproduct/technical/Technical'
import FF from './pages/bulkdrug/bulkdrugproduct/methyl/methylproduct/f&f/FF'
import Octyl from './pages/bulkdrug/bulkdrugproduct/octyl/Octyl'
import Salicylamide from './pages/bulkdrug/bulkdrugproduct/salicylamide/Salicylamide'
import Salicylic from './pages/bulkdrug/bulkdrugproduct/salicylic/Salicylic'
import SalicylicTechnical from './pages/bulkdrug/bulkdrugproduct/salicylic/salicylicproduct/technical/SalicylicTechnical'
import PharmaSalicylic from './pages/bulkdrug/bulkdrugproduct/salicylic/salicylicproduct/pharmasalicylic/PharmaSalicylic'
import Aspirin from './pages/bulkdrug/bulkdrugproduct/aspirin/Aspirin'


// Instruements Pages
import PaperPulp from './pages/instrument/paperpulp/PaperPulp'
import WetendQC from './pages/instrument/paperpulp/wetend/WetendQC'
import PaperTesting from './pages/instrument/paperpulp/papertesting/PaperTesting'
import PackagingTesting from './pages/instrument/packagingtesting/PackagingTesting'
import RD from './pages/instrument/RD/RD'
import WaterWaste from './pages/instrument/waterwaste/WaterWaste'
import Textile from './pages/instrument/textile/Textile'
import Industrial from './pages/instrument/industrial/Industrial'


//sperate pages routes
import Roughnessporocity from './pages/instrument/paperpulp/paperpluppage/automatictesting/roughness/Roughnessporocity'
import Profitgloss from './pages/instrument/paperpulp/paperpluppage/automatictesting/profit/Profitgloss'
import Burst from './pages/instrument/paperpulp/paperpluppage/automatictesting/burst/Burst'
import Thickness from './pages/instrument/paperpulp/paperpluppage/automatictesting/thickness/Thickness'
import SampleCutter from './pages/instrument/paperpulp/paperpluppage/samplepreparation/samplecutter/SampleCutter'
import PeneumaticCutter from './pages/instrument/paperpulp/paperpluppage/samplepreparation/peneumaticcutter/PeneumaticCutter'
import DoubleBladeCutter from './pages/instrument/paperpulp/paperpluppage/samplepreparation/doublebladecutter/DoubleBladeCutter'
import CompressionTester from './pages/instrument/paperpulp/paperpluppage/corrugatedboardtesting/compressiontester/CompressionTester'
import BoxCompressionTest from './pages/instrument/paperpulp/paperpluppage/corrugatedboardtesting/boxcompressiontest/BoxCompressionTest'
import InternalBod from './pages/instrument/paperpulp/paperpluppage/corrugatedboardtesting/internalbond/InternalBond'
import PenuematicPress from './pages/instrument/paperpulp/paperpluppage/pulptesting/penuematicpress/PenuematicPress'
import FiberClassifier from './pages/instrument/paperpulp/paperpluppage/pulptesting/fiberclassifier/FiberClassifier'
import ManualSheetFormer from './pages/instrument/paperpulp/paperpluppage/pulptesting/manualsheetformer/ManualSheetFormer'
import PFIMill from './pages/instrument/paperpulp/paperpluppage/pulptesting/pfimill/PFIMill'
import ChargeAnalyserSystem from './pages/instrument/paperpulp/paperpluppage/pulptesting/chargeanalysersystem/ChargeAnalyserSystem'
import FiberPotentialAnalyser from './pages/instrument/paperpulp/paperpluppage/pulptesting/fiberpontenanalyser/FiberPotentialAnalyser'
import AutomatedGram from './pages/instrument/paperpulp/paperpluppage/pulptesting/automatedgram/AutomatedGram'
import AutomatedCaliper from './pages/instrument/paperpulp/paperpluppage/pulptesting/automatedcaliper/AutomatedCaliper'
import AutomatedCaliperPp from './pages/instrument/paperpulp/paperpluppage/pulptesting/automatedcaliperpp/AutomatedCaliperPp'
import AutomatedCaliperTSA from './pages/instrument/paperpulp/paperpluppage/pulptesting/automatedcalipertsa/AutomatedCaliperTSA'
import PortableMoistureMeters from './pages/instrument/paperpulp/paperpluppage/pulptesting/portablemoisturemeters/PortableMoistureMeters'
import LaboratoryBeater from './pages/instrument/paperpulp/paperpluppage/pulptesting/laboratorybeater/LaboratoryBeater'
import MoistureMeter from './pages/instrument/paperpulp/paperpluppage/pulptesting/moisturemeter/MoistureMeter'
import TactileSensation from './pages/instrument/textile/textilepages/tactilesensation/TactileSensation'
import AbsorbencyTester from './pages/instrument/textile/textilepages/absorbencytester/AbsorbencyTester'
import CO2Tester from './pages/instrument/waterwaste/waterwastepages/co2tester/CO2Tester'
import AmmoniumProb from './pages/instrument/waterwaste/waterwastepages/ammoniumprob/AmmoniumProb'
import AmmonoLab from './pages/instrument/waterwaste/waterwastepages/ammonolab/AmmonoLab'
import CODMonitor from './pages/instrument/waterwaste/waterwastepages/codmonitor/CODMonitor'
import RDChargeAnalyzerSystem from './pages/instrument/RD/rdpages/rdchargeanalyzersystem/RDChargeAnalyzerSystem'
import ZetaPotentialAnalyser from './pages/instrument/RD/rdpages/zetapotentialanalyser/ZetaPotentialAnalyser'
import ParticleSizeAnalyser from './pages/instrument/RD/rdpages/particlesizeanalyser/ParticleSizeAnalyser'
import ParticlesizeMeasurement from './pages/instrument/RD/rdpages/particlesizemeasurement/ParticlesizeMeasurement'
import PSIHighPressure from './pages/instrument/RD/rdpages/PSIhighpressure/PSIHighPressure'
import DigitalBenchtopViscometer from './pages/instrument/RD/rdpages/digitalbenchtopviscometer/DigitalBenchtopViscometer'
import ArtPhotonics from './pages/instrument/RD/rdpages/artphotonics/ArtPhotonics'
import FPA from './pages/instrument/paperpulp/wetend/wetendqcpages/fpa/FPA'
import AshContentAnalyzer from './pages/instrument/paperpulp/wetend/wetendqcpages/ashcontentanalyzer/AshContentAnalyzer'
import WetStetech from './pages/instrument/paperpulp/wetend/wetendqcpages/wetstetech/WetStetech'
import PDAhigh from './pages/instrument/paperpulp/wetend/wetendqcpages/pda/PDAhigh'
import SurfaceTesting from './pages/instrument/paperpulp/wetend/wetendqcpages/surfacetestig/SurfaceTesting'
import TSA from './pages/instrument/paperpulp/wetend/wetendqcpages/tsa/TSA'
import BurstTester from './pages/instrument/paperpulp/papertesting/papertestingpages/bursttester/BurstTester'
import Fluter from './pages/instrument/paperpulp/papertesting/papertestingpages/fluter/Fluter'
import ManualMicormeter from './pages/instrument/paperpulp/papertesting/papertestingpages/manualmicrometer/ManualMicormeter'
import Smoothness from './pages/instrument/paperpulp/papertesting/papertestingpages/smoothness/Smoothness'
import SampleCrushTester from './pages/instrument/packagingtesting/packagingtestingpages/samplecrushtester/SampleCrushTester'
import FourPointBendingTester from './pages/instrument/packagingtesting/packagingtestingpages/4pointbendingtester/FourPointBendingTester'
import PDAHighViscous from './pages/instrument/packagingtesting/packagingtestingpages/highviscous/PDAHighViscous'
import FrictionTester from './pages/instrument/packagingtesting/packagingtestingpages/frictiontester/FrictionTester'
import BurstingStrengthTester from './pages/instrument/packagingtesting/packagingtestingpages/burstingstrengthtester/BurstingStrengthTester'
import VAL from './pages/instrument/packagingtesting/packagingtestingpages/val/VAL'
import DigitalMicrometer from './pages/instrument/packagingtesting/packagingtestingpages/digitalmicrometer/DigitalMicrometer'
import CobbSizingTester from './pages/instrument/packagingtesting/packagingtestingpages/cobbsizingtester/CobbSizingTester'
import PunctureTester from './pages/instrument/packagingtesting/packagingtestingpages/puncturetester/PunctureTester'
import CircularCutter from './pages/instrument/packagingtesting/packagingtestingpages/circularcutter/CircularCutter'
import TwinBladeCutter from './pages/instrument/packagingtesting/packagingtestingpages/twinbladecutter/TwinBladeCutter'
import CorrugatedSampleCutter from './pages/instrument/packagingtesting/packagingtestingpages/corrugatedsamplecutter/CorrugatedSampleCutter'
import BoxOpening from './pages/instrument/packagingtesting/packagingtestingpages/boxopening/BoxOpening'
import Processviscometer from './pages/instrument/industrial/industrialpages/processviscometer/Processviscometer'
import ExtrusionViscometer from './pages/instrument/industrial/industrialpages/extrusionviscometer/ExtrusionViscometer'
import CoatingViscometer from './pages/instrument/industrial/industrialpages/coatingviscometer/CoatingViscometer'
import UreaAmmonium from './pages/instrument/industrial/industrialpages/ureaammonium/UreaAmmonium'
import HighPressViscometer from './pages/instrument/industrial/industrialpages/highpressviscometer/HighPressViscometer'
import FertilizerProcessAnalyser from './pages/instrument/industrial/industrialpages/fertilizerprocessanalyser/FertilizerProcessAnalyser'
import ElectroMechanicalMaterial from './pages/instrument/industrial/industrialpages/electromechanical/ElectroMechanicalMaterial'
import DrumAbrasionTester from './pages/instrument/industrial/industrialpages/drumabrasiontester/DrumAbrasionTester'
import PneumaticManualSampleCutter from './pages/instrument/industrial/industrialpages/pneumaticmanualsample/PneumaticManualSampleCutter'
import ReboundResilienceTester from './pages/instrument/industrial/industrialpages/reboundresiliencetester/ReboundResilienceTester'
import BasicComputerizedMeltIndexer from './pages/instrument/industrial/industrialpages/basiccompterizedmelt/BasicComputerizedMeltIndexer'
import OpacityMeterPlasticFlim from './pages/instrument/industrial/industrialpages/opacitymeterinplasticfilm/OpacityMeterPlasticFlim'
import SoftingPointTester from './pages/instrument/industrial/industrialpages/softingpointtester/SoftingPointTester'
import FallingDropWeight from './pages/instrument/industrial/industrialpages/fallingdrop/FallingDropWeight'
import PenetrationTest from './pages/instrument/industrial/industrialpages/penetrationtest/PenetrationTest'
import GelBloomTester from './pages/instrument/industrial/industrialpages/blomtester/GelBloomTester'
import BackExtractionTester from './pages/instrument/industrial/industrialpages/backextractiontester/BackExtractionTester'
import NotchingMachine from './pages/instrument/industrial/industrialpages/notchingmachine/NotchingMachine'
import PendulumImpactTester from './pages/instrument/industrial/industrialpages/pendulumtester/PendulumImpactTester'
import PureEarthRareMaterial from './pages/instrument/industrial/industrialpages/purearthrarematerial/PureEarthRareMaterial'
import LegalNotices from './pages/legalnotice/LegalNotices'
import PrivacyPolicy from './pages/privacypolicy/PrivacyPolicy'
import Disclaimer from './pages/disclaimer/Disclaimer'
import PaperInPaper from './pages/specialitychem/specialproduct/paper/spaperpages/Paperinpaper/PaperInPaper'
import PaperInTissue from './pages/specialitychem/specialproduct/paper/spaperpages/papertissue/PaperInTissue'
import PaperPackaging from './pages/specialitychem/specialproduct/paper/spaperpages/paperpackaging/PaperPackaging'
import PaperPaperPulp from './pages/specialitychem/specialproduct/paper/spaperpages/paperpulp/PaperPaperPulp'













const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/specialalitychem' element={<SpecialityChem />} />
        <Route path='/bulk-drug' element={<BulkDrug />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/careers' element={<Career />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/legalnotice' element={<LegalNotices />} />
        <Route path='/Privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/Disclaimer' element={<Disclaimer />} />




        {/* SpecialityChem products */}
        <Route path='/spaper' element={<SPaper />} />
        <Route path='/soil' element={<Oil />} />
        <Route path='/sptextile' element={<SpTextile />} />
        <Route path='/spmining' element={<SpMining />} />
        <Route path='/spindustrywater' element={<SpWater />} />
        <Route path='/spwater' element={<WaterSp />} />
        <Route path='/spsugar' element={<Sugar />} />
        <Route path='/spceramic' element={<Ceramic />} />


        {/* SP paper  Product Routes */}
        <Route path='/spaperpaper' element={<PaperInPaper />} />
        <Route path='/spapertissue' element={<PaperInTissue />} />
        <Route path='/spaperpackaging' element={<PaperPackaging />} />
        <Route path='/spaperpaperpulp' element={<PaperPaperPulp />} />


        {/* SP Water Product Routes */}
        <Route path='/clarification' element={<Clarification />} />

        {/* SP Clarification Product Routes */}
        <Route path='/rishfloc1' element={<Rishfloc1 />} />
        <Route path='/rishfloc2' element={<Rishfloc2 />} />
        <Route path='/rishLyte1' element={<RishLyte1 />} />
        <Route path='/rishLyte2' element={<RishLyte2 />} />
        <Route path='/rishLyte3' element={<RishLyte3 />} />
        <Route path='/rishLyte4' element={<RishLyte4 />} />
        {/* SP Clarification Product Routes close */}

        <Route path='/biological' element={<Biological />} />
        <Route path='/biorishzym' element={<Biorishzym />} />
        <Route path='/scale' element={<Scale />} />
        <Route path='/rishScale' element={<Richscale />} />

        <Route path='/foamcontrol' element={<FoamControl />} />
        <Route path='/richfoam' element={<RichFoam />} />

        {/* Ceramic products */}
        <Route path='/claydisperant' element={<CeramicProduct />} />

        {/* Bulk Drug products routes */}

        <Route path='/methyl' element={<Methyl />} />
        <Route path='/technicalmethyl' element={<Technical />} />
        <Route path='/ffmethyl' element={<FF />} />
        <Route path='/pharmamethyl' element={<FF />} />

        <Route path='/octyle' element={<Octyl />} />
        <Route path='/salicylamide' element={<Salicylamide />} />
        <Route path='/salicylic' element={<Salicylic />} />
        <Route path='/techsalicylic' element={<SalicylicTechnical />} />
        <Route path='/pharmasalicylic' element={<PharmaSalicylic />} />
        <Route path='/aspirin' element={<Aspirin />} />

        {/* Instruments routes */}

        <Route path='/paperpulp' element={<PaperPulp />} />
        {/* Instruments routes */}
        <Route path='/PPwetendQC' element={<WetendQC />} />
        <Route path='/paperTesting' element={<PaperTesting />} />

        <Route path='/packaingtesting' element={<PackagingTesting />} />
        <Route path='/industrial' element={<Industrial />} />
        <Route path='/rd' element={<RD />} />
        <Route path='/wastewater' element={<WaterWaste />} />
        <Route path='/textile' element={<Textile />} />

        {/* separate pages routes of automatic testing */}
        <Route path='/roughnessporocity' element={<Roughnessporocity />} />
        <Route path='/profitgloss' element={<Profitgloss />} />
        <Route path='/burst' element={<Burst />} />
        <Route path='/thickness' element={<Thickness />} />

        {/* separate pages routes of sample preparation */}
        <Route path='/samplecutter' element={<SampleCutter />} />
        <Route path='/peneumacutter' element={<PeneumaticCutter />} />
        <Route path='/doubleblade' element={<DoubleBladeCutter />} />

        {/* separate pages routes of corrugated board testing */}
        <Route path='/compressiontester' element={<CompressionTester />} />
        <Route path='/peneumacutter' element={<PeneumaticCutter />} />
        <Route path='/doubleblade' element={<DoubleBladeCutter />} />
        <Route path='/boxcomptester' element={<BoxCompressionTest />} />
        <Route path='/internalbond' element={<InternalBod />} />

        {/* separate pages routes of pulp testing */}
        <Route path='/penupress' element={<PenuematicPress />} />
        <Route path='/fiberclassifier' element={<FiberClassifier />} />
        <Route path='/manualsheetformer' element={<ManualSheetFormer />} />
        <Route path='/pfimill' element={<PFIMill />} />
        <Route path='/chargeanalysersys' element={<ChargeAnalyserSystem />} />
        <Route path='/fiberpontenanalyser' element={<FiberPotentialAnalyser />} />
        <Route path='/automatedgrammage' element={<AutomatedGram />} />
        <Route path='/autocaliper' element={<AutomatedCaliper />} />
        <Route path='/autocaliperpps' element={<AutomatedCaliperPp />} />
        <Route path='/autocalipertensil' element={<AutomatedCaliperTSA />} />
        <Route path='/portablemoisture' element={<PortableMoistureMeters />} />
        <Route path='/laboratorybeater' element={<LaboratoryBeater />} />
        <Route path='/moisturemeter' element={<MoistureMeter />} />

        {/* separate pages routes of wet end QC */}
        <Route path='/FPAonline' element={<FPA />} />
        <Route path='/ashcontentanalyzer' element={<AshContentAnalyzer />} />
        <Route path='/wetstetch' element={<WetStetech />} />
        <Route path='/PDAhighviscous' element={<PDAhigh />} />
        <Route path='/surfacetesting' element={<SurfaceTesting />} />
        <Route path='/TSA' element={<TSA />} />

        {/* separate pages routes of paper testing */}
        <Route path='/bursttester' element={<BurstTester />} />
        <Route path='/fluter' element={<Fluter />} />
        <Route path='/manualmicrometer' element={<ManualMicormeter />} />
        <Route path='/smoothnessporocity' element={<Smoothness />} />


        {/* separate pages routes of packaging testing */}
        <Route path='/samplescrushtester' element={<SampleCrushTester />} />
        <Route path='/4pointbendingtester' element={<FourPointBendingTester />} />
        <Route path='/PDAhighviscous' element={<PDAHighViscous />} />
        <Route path='/frictiontester' element={<FrictionTester />} />
        <Route path='/burstingstrengthtester' element={<BurstingStrengthTester />} />
        <Route path='/VAL' element={<VAL />} />
        <Route path='/digitalmicrometer' element={<DigitalMicrometer />} />
        <Route path='/cobbsizingtester' element={<CobbSizingTester />} />
        <Route path='/digitalpuncture' element={<PunctureTester />} />
        <Route path='/circularcutter' element={<CircularCutter />} />
        <Route path='/twinbladercutter' element={<TwinBladeCutter />} />
        <Route path='/corrugatedsamplecutter' element={<CorrugatedSampleCutter />} />
        <Route path='/boxopeningforcetester' element={<BoxOpening />} />


        {/* separate pages routes of R&D */}

        <Route path='/chargeanalyzersystem' element={<RDChargeAnalyzerSystem />} />
        <Route path='/zetapotetial' element={<ZetaPotentialAnalyser />} />
        <Route path='/particlesize' element={<ParticleSizeAnalyser />} />
        <Route path='/particlesizemeasurement' element={<ParticlesizeMeasurement />} />
        <Route path='/PSIHP' element={<PSIHighPressure />} />
        <Route path='/DBV' element={<DigitalBenchtopViscometer />} />
        <Route path='/APOFP' element={<ArtPhotonics />} />

        {/* separate pages routes of industrial  */}

        <Route path='/processviscometer' element={<Processviscometer />} />
        <Route path='/sofluxEV' element={<ExtrusionViscometer />} />
        <Route path='/coatingviscometer' element={<CoatingViscometer />} />
        <Route path='/ureaANA' element={<UreaAmmonium />} />
        <Route path='/highpressvidcometer' element={<HighPressViscometer />} />
        <Route path='/FPA' element={<FertilizerProcessAnalyser />} />
        <Route path='/EMTM' element={<ElectroMechanicalMaterial />} />
        <Route path='/drumabrasiontester' element={<DrumAbrasionTester />} />
        <Route path='/PMSC' element={<PneumaticManualSampleCutter />} />
        <Route path='/reboundresiliencetester' element={<ReboundResilienceTester />} />
        <Route path='/BasiccomputrizedMI' element={<BasicComputerizedMeltIndexer />} />
        <Route path='/opacitymeterPI' element={<OpacityMeterPlasticFlim />} />
        <Route path='/softingpointtester' element={<SoftingPointTester />} />
        <Route path='/FDWIT' element={<FallingDropWeight />} />
        <Route path='/penetrationtestanalyser' element={<PenetrationTest />} />
        <Route path='/bloomtester' element={<GelBloomTester />} />
        <Route path='/backextractiontester' element={<BackExtractionTester />} />
        <Route path='/notchingmachine' element={<NotchingMachine />} />
        <Route path='/pendulumtester' element={<PendulumImpactTester />} />
        <Route path='/purearthrarematerial' element={<PureEarthRareMaterial />} />






        {/* separate pages routes of water waste */}
        <Route path='/co2tester' element={<CO2Tester />} />
        <Route path='/ammoniumprob' element={<AmmoniumProb />} />
        <Route path='/ammonolab' element={<AmmonoLab />} />
        <Route path='/codbod' element={<CODMonitor />} />

        {/* separate pages routes of textile testing */}
        <Route path='/tactilesensation' element={<TactileSensation />} />
        <Route path='/absorbencytester' element={<AbsorbencyTester />} />

      </Routes>
    </Router>
  )
}

export default App
