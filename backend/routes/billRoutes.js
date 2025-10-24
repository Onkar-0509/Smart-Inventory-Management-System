import express from 'express';
import ensureAuthenticate from '../Middleware/auth.js';
import { CreateBill,GetBill,UpdateBill,dashData} from '../controllers/BillController.js';

const router = express.Router();

// Create a new bill
router.post('/create',ensureAuthenticate,CreateBill);

// Get all bills for the authenticated user
router.get('/getbill',ensureAuthenticate,GetBill);

router.put('/update/:billId',ensureAuthenticate,UpdateBill)

router.get('/dashdata',ensureAuthenticate,dashData);


export default router;

