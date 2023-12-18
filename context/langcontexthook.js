"use client";

import { useContext } from "react";
import { LangContext } from "./langcontext";

export const useLangContext = () => useContext(LangContext);
