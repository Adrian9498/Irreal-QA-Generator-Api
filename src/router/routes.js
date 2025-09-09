/*
    This is the storage of the routes from the proyect.

    The routes follow the next path $HOST/$route/$functionality

    NOTE: No logic will be coded in HERE!

*/

import { Router } from "express";
import { analizefigmaQA, spellChekfigmaQA} from "../controllers/figma.controller.js";

const router = Router();

router.post("/qa/design/figma/comments", analizefigmaQA);
router.post("/qa/spellcheck/figma/comments", spellChekfigmaQA);

export default router;