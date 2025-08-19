/*
    This is the storage of the routes from the proyect.

    The routes follow the next path $HOST/$route/$functionality

    NOTE: No logic will be coded in HERE!

*/

import { Router } from "express";


const router = Router();

router.post("/qa/design/figma/comments", analizefigmaQA);

export default router;