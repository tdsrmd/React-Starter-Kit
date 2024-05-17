import { Route, Routes } from 'react-router-dom'
import ProtectedRoutes from 'ProtectedRoute'

//Layouts
import RootLayout from 'layouts/RootLayout'
import AuthLayout from 'layouts/AuthLayout'
import DashboardLayout from 'layouts/DashboardLayout'

//(auth) Pages
import Login from 'pages/(auth)/Login'
import ForgetPassword from 'pages/(auth)/ForgetPassword'

//(sign-in) Pages
import Home from 'pages/(sign-in)/Home'
import EDetailing from 'pages/(sign-in)/E-Detailing'
import Product from 'pages/(sign-in)/Product'
import AddProduct from 'pages/(sign-in)/Product/Add'
import Promo from 'pages/(sign-in)/Product/Promo'
import AddBulkProduct from 'pages/(sign-in)/Product/AddBulk'
import PharmonAssistVideos from 'pages/(sign-in)/EducationalVideos/PharmonAssistVideos'
import CompanyVideos from 'pages/(sign-in)/EducationalVideos/CompanyVideos'
import AddCompanyEducationVideo from 'pages/(sign-in)/EducationalVideos/CompanyVideos/Add'
import Personnel from 'pages/(sign-in)/Personnel'
import AddBulkPersonnel from 'pages/(sign-in)/Personnel/AddBulk'
import Brick from 'pages/(sign-in)/Personnel/Brick'
import AddPersonnel from 'pages/(sign-in)/Personnel/Add'
import Frequency from 'pages/(sign-in)/Personnel/Frequency'
import PersonnelExpenses from 'pages/(sign-in)/Personnel/Expenses'
import Offer from 'pages/(sign-in)/Pharmacy/Offer'
import AddOffer from 'pages/(sign-in)/Pharmacy/Offer/Add'
import Order from 'pages/(sign-in)/Pharmacy/Order'
import Demand from 'pages/(sign-in)/Demand'
import Report from 'pages/(sign-in)/Personnel/Report'
import Plan from 'pages/(sign-in)/Personnel/Plan'
import DailyReportList from 'pages/(sign-in)/Personnel/Report/DailyReportList'
import AddBulkOffer from 'pages/(sign-in)/Pharmacy/Offer/AddBulk'
import AnalysisPersonnel from 'pages/(sign-in)/Personnel/Analysis'
import Absence from 'pages/(sign-in)/Personnel/Absence'
import UpdateProduct from 'pages/(sign-in)/Product/Update'
import Competing from 'pages/(sign-in)/Competing'
import AddCompeting from 'pages/(sign-in)/Competing/Add'
import ChangePassword from 'pages/(sign-in)/Settings/ChangePassword'
import FrequencySettings from 'pages/(sign-in)/Settings/FrequencySettings'
import FileManagement from 'pages/(sign-in)/FileManagement'

//Admin Pages
import DoctorManagement from 'pages/(admin)/Doctor'
import PharmacyManagement from 'pages/(admin)/Pharmacy'
import BrickManagement from 'pages/(admin)/Brick'
import ProfessionManagement from 'pages/(admin)/Profession'
import TitleManagement from 'pages/(admin)/Title'
import UnitManagement from 'pages/(admin)/Unit'
import NotFoundPage from 'pages/(other)/404'
import PersonnelManagement from 'pages/(admin)/Personnel'
import Detail from 'pages/(sign-in)/E-Detailing/Detail'
import AddFileManagement from 'pages/(sign-in)/FileManagement/Add'
import CompanyManagement from 'pages/(admin)/Company'
import DemandManagement from 'pages/(admin)/Demand'
import SubjectManagement from 'pages/(admin)/Subject'
import DemandLayout from 'pages/(sign-in)/Demand/layout'
import RightSide from 'pages/(sign-in)/Demand/Chat/RightSide'
import UpdateCompeting from 'pages/(sign-in)/Competing/Update'
import AddBulkPersonnelAdmin from 'pages/(admin)/Personnel/AddBulk'
import { Navigate } from 'react-router-dom'
import { useAuth } from 'store/client/useAuth'

export default function AllRoutes() {
  const { user } = useAuth()
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route
          path="/"
          element={
            <Navigate to={user?.roleId === 1 ? '/admin/saha-personelleri-yonetim' : '/anasayfa'} />
          }
        />
        <Route element={<ProtectedRoutes />}>
          <Route element={<DashboardLayout />}>
            <Route path="anasayfa" element={<Home />} />
            <Route path="personeller" element={<Personnel />} />
            <Route path="personeller/analiz/:userId" element={<AnalysisPersonnel />} />
            <Route path="personeller/brick/:userId" element={<Brick />} />
            <Route path="personeller/toplu-ekle" element={<AddBulkPersonnel />} />
            <Route path="personeller/ekle" element={<AddPersonnel />} />
            <Route path="personeller/plan/:userId" element={<Plan />} />
            <Route path="personeller/rapor/:userId" element={<Report />} />
            <Route path="personeller/rapor/:userId/:date" element={<DailyReportList />} />
            <Route path="personeller/frekans-yonetimi/:userId" element={<Frequency />} />
            <Route path="personeller/harcamalar/:userId" element={<PersonnelExpenses />} />
            <Route path="personeller/izin/:userId" element={<Absence />} />
            <Route path="eczane/kampanyalar" element={<Offer />} />
            <Route path="eczane/kampanyalar/ekle" element={<AddOffer />} />
            <Route path="eczane/kampanyalar/toplu-ekle" element={<AddBulkOffer />} />
            <Route path="eczane/siparisler" element={<Order />} />
            <Route path="dosyalar" element={<FileManagement />} />
            <Route path="dosyalar/ekle" element={<AddFileManagement />} />
            <Route path="urunler" element={<Product />} />
            <Route path="urunler/ekle" element={<AddProduct />} />
            <Route path="urunler/toplu-ekle" element={<AddBulkProduct />} />
            <Route path="urunler/:productId" element={<UpdateProduct />} />
            <Route path="rakip-urunler" element={<Competing />} />
            <Route path="rakip-urunler/ekle" element={<AddCompeting />} />
            <Route path="rakip-urunler/:id" element={<UpdateCompeting />} />
            <Route path="promosyonlar" element={<Promo />} />
            <Route path="e-detailing" element={<EDetailing />} />
            <Route path="e-detailing/:fileId" element={<Detail />} />
            <Route path="egitimvideolari/pharmonassist" element={<PharmonAssistVideos />} />
            <Route path="egitimvideolari/sirket" element={<CompanyVideos />} />
            <Route path="egitimvideolari/sirket/ekle" element={<AddCompanyEducationVideo />} />
            <Route element={<DemandLayout />}>
              <Route path="talepler" element={<Demand />} />
              <Route path="talepler/:id" element={<RightSide />} />
            </Route>
            <Route path="sifre-degistir" element={<ChangePassword />} />
            <Route path="frekans-ayarlari" element={<FrequencySettings />} />
          </Route>
          <Route element={<DashboardLayout />}>
            <Route path="admin/saha-personel-yonetimi" element={<PersonnelManagement />} />
            <Route
              path="admin/saha-personel-yonetimi/toplu-ekle"
              element={<AddBulkPersonnelAdmin />}
            />
            <Route path="admin/sirket-yonetimi" element={<CompanyManagement />} />
            <Route path="admin/talep-yonetimi" element={<DemandManagement />} />
            <Route path="admin/konu-yonetimi" element={<SubjectManagement />} />
            <Route path="admin/doktor-yonetimi" element={<DoctorManagement />} />
            <Route path="admin/eczane-yonetimi" element={<PharmacyManagement />} />
            <Route path="admin/brick-yonetimi" element={<BrickManagement />} />
            <Route path="admin/brans-yonetimi" element={<ProfessionManagement />} />
            <Route path="admin/unvan-yonetimi" element={<TitleManagement />} />
            <Route path="admin/unite-yonetimi" element={<UnitManagement />} />
          </Route>
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="girisyap" element={<Login />} />
          <Route path="sifremiunuttum" element={<ForgetPassword />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
