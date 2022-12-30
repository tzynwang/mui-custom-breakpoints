/// <reference types="react-scripts" />

import type { BreakpointOverrides } from '@mui/system/createTheme/createBreakpoints';

declare module '@mui/system/createTheme/createBreakpoints' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}
