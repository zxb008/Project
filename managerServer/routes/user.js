import express from 'express';
import User from './../models/User';
import formidable from 'formidable';
import config from './../src/config';
import {basename} from 'path';

const router = express.Router({});