/*
 ********************************************************************
 *            Copyright (C) APIZR - All Rights Reserved             *
 * Unauthorized copying or usage of this file and its dependencies, *
 *              via any medium is strictly prohibited               *
 *                  Proprietary and confidential                    *
 *           Written by APIZR <contact@apizr.fr>, July 2020         *
 ********************************************************************
 */
require('dotenv').config();

if (!process.version.startsWith('v12.')) {
  throw new Error('Please use NodeJS in version 12');
}

require('bytenode');

require('./dist/apigrow.bundle.jsc');
