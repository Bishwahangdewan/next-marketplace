import { useMediaQuery } from '@mui/material';

export default function useBreakpoints() {
  // xs, extra-small: 0px
  // ms, mini-small: 415px
  // sm, small: 600px
  // md, medium: 850px
  // lg, large: 1290px
  // xl, extra-large: 1450px

  const xs = useMediaQuery('(min-width:0px)');
  const ms = useMediaQuery('(min-width:415px)');
  const sm = useMediaQuery('(min-width:600px)');
  const md = useMediaQuery('(min-width:820px)');
  const lg = useMediaQuery('(min-width:1290px)');
  const xl = useMediaQuery('(min-width:1450px)');

  return { xs, ms, sm, md, lg, xl };
}
