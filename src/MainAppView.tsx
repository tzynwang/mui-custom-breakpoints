import React, { memo } from 'react';
import { useTheme, useMediaQuery, Theme } from './theme';

function MainAppView(): React.ReactElement {
  /* States */
  const theme = useTheme();
  const upMobile = useMediaQuery(theme.breakpoints.up('mobile'));
  const upTablet = useMediaQuery(theme.breakpoints.up('tablet'));
  const upLapTop = useMediaQuery(theme.breakpoints.up('laptop'));
  const upDesktop = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up('desktop')
  );

  /* Main */
  return (
    <ul>
      <li>
        {theme.breakpoints.up('mobile')}
        {`theme.breakpoints.up('mobile'): ${upMobile}`}
      </li>
      <li>
        {theme.breakpoints.up('tablet')}
        {`theme.breakpoints.up('tablet'): ${upTablet}`}
      </li>
      <li>
        {theme.breakpoints.up('laptop')}
        {`theme.breakpoints.up('laptop'): ${upLapTop}`}
      </li>
      <li>
        {theme.breakpoints.up('desktop')}
        {`theme.breakpoints.up('desktop'): ${upDesktop}`}
      </li>
    </ul>
  );
}

export default memo(MainAppView);
