import Home from '../Pages/Home';
import MerchantManagement from '../Pages/MerchantManagement';
import MerchantPayment from '../Pages/MerchantPayment';
import Parameters from '../Pages/Parameters';
import UserManagement from '../Pages/UserManagement';
import Demo from '../Pages/Demo';

export const MenuList =[
    
    {
        title:"Home",
        path:"/",
        page:<Home />,
    },
    {
        title:"Merchant Management",
        path:"/merchantmanagement",
        page:<MerchantManagement />,
    },
    {
        title:"Merchant Payment",
        path:"/merchantpayment",
        page:<MerchantPayment />,
    },
    {
        title:"Parameters",
        path:"/parameters",
        page:<Parameters />,
    },
    {
        title:"User Management",
        path:"/usermanagement",
        page:<UserManagement/>,
    },
    {
        title:"Demo",
        path:"/demo",
        page:<Demo />,
    },
]
