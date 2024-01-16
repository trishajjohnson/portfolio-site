import { createTheme } from '@mui/material/styles';
import { alpha } from '@mui/material';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fal } from '@fortawesome/pro-light-svg-icons';
// import { far } from '@fortawesome/pro-regular-svg-icons';
// import { fas } from '@fortawesome/pro-solid-svg-icons';
// import '@assets/fonts/lexend.css';
// import '@assets/fonts/plexmono.css';

// library.add(fal);
// library.add(far);
// library.add(fas);

const colors = {
  black: '#0B0C12',
  black2: '#0a0c10',
  blue1: '#1592FF',
  blue2: '#1899B6',
  blue3: '#21BEE3',
  blue4: '#117fba',
  blue5: '#2ecff5',
  darkBlue1: '#161926',
  darkBlue2: '#192637',
  darkBlue3: '#203045',
  darkBlue4: '#303F52',
  darkBlue5: '#282b36',
  darkBlue6: '#151722',
  darkBlue7: '#2c324b',
  darkBlue8: '#4a5169',
  green1: '#00FFB1',
  green2: '#6af16f',
  grey1: '#5E6F82',
  grey2: '#8797AB',
  grey3: '#a7adb5',
  grey4: '#5d6e80',
  grey5: '#868a91',
  grey6: '#61788e',
  grey7: '#39485a',
  orange1: '#F46043',
  orange2: '#f67339',
  orange3: '#c46034',
  type: 'dark',
  white: '#FFFFFF',
  yellow1: '#FEBA06',
};

const defaultPalette = {
  primary: {
    main: colors.blue3,
  },
  secondary: {
    main: colors.orange1,
  },
  error: {
    main: colors.orange1,
  },
  warning: {
    main: colors.yellow1,
  },
  info: {
    main: colors.blue4,
  },
  success: {
    main: colors.green2,
  },
  subduedText: {
    main: colors.grey3,
  },
  skyBlue: {
    main: colors.blue1,
  },
  white: {
    main: colors.white,
  },
  type: 'dark',
};

const palette = Object.keys(colors).reduce( (acc, key) => {
  acc[key] = {
    main: colors[key],
  };

  return acc;
}, {});

const typography = {
  // fontFamily: 'Lexend',
  fontSize: 16,
  body1: {
    fontSize: 14,
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.57,
    letterSpacing: 'normal',
    textAlign: 'left',
    color: colors.white,
  },
  body2: {
    fontSize: 12,
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.5,
    letterSpacing: 'normal',
    textAlign: 'left',
    color: colors.white,
  },
  h1: {
    fontSize: 32,
    fontWeight: 'normal',
    lineHeight: 1.19,
    letterSpacing: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    color: colors.white,
  },
  h2: {
    fontSize: 26,
    fontWeight: 'normal',
    lineHeight: 1.31,
    letterSpacing: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    color: colors.white,
  },
  h3: {
    fontSize: 22,
    fontWeight: 'normal',
    lineHeight: 1.27,
    letterSpacing: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    color: colors.white,
  },
  h4: {
    fontSize: 18,
    fontWeight: 'normal',
    lineHeight: 1.22,
    letterSpacing: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    color: colors.blue3,
  },
  h5: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 1.25,
    letterSpacing: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    color: colors.white,
  },
  h6: {
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 1.5,
    letterSpacing: 0.6,
    fontStretch: 'normal',
    fontStyle: 'normal',
    color: colors.orange1,
  },
  textStyle13: {
    fontSize: '3.43rem',
    fontWeight: 600,
    lineHeight: 4.31,
    letterSpacing: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    color: colors.white,
  },
  textStyle12: {
    fontSize: '2.25rem',
    fontWeight: 700,
    lineHeight: '2.81',
    letterSpacing: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    color: colors.white,
  },
  textStyle11: {
    fontSize: '2.0rem',
    fontWeight: 400,
    lineHeight: '2.5rem',
    letterSpacing: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    color: colors.white,
  },
  textStyle10: {
    fontSize: '1.625rem',
    fontWeight: 600,
    lineHeight: '2.0rem',
    letterSpacing: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    color: colors.white,
  },
  textStyle9: {
    fontSize: '1.25rem',
    fontWeight: 600,
    lineHeight: '1.56rem',
    letterSpacing: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    color: colors.white,
  },
  textStyle8: {
    fontSize: '1.25rem',
    fontWeight: 400,
    lineHeight: '1.56rem',
    letterSpacing: 0.6,
    fontStretch: 'normal',
    fontStyle: 'normal',
    color: colors.orange1,
  },
  textStyle7: {
    fontSize: '1.125rem',
    fontWeight: 600,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.375rem',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: colors.white,
  },
  textStyle6: {
    fontSize: '1.125rem',
    fontWeight: 400,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.375rem',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: colors.white,
  },
  textStyle5: {
    fontSize: '1.0rem',
    fontWeight: 600,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.5rem',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: colors.white,
  },
  textStyle4: {
    fontSize: '1.0rem',
    fontWeight: 400,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.25rem',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: colors.white,
  },
  textStyle3: {
    fontSize: '0.875rem',
    fontWeight: 700,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.125rem',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: colors.white,
  },
  textStyle2: {
    fontSize: '0.875rem',
    fontWeight: 400,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.125rem',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: colors.white,
  },
  textStyle1: {
    fontSize: '0.8125rem',
    fontWeight: 400,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.25rem',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: colors.white,
  }
};

// const theme = createTheme({
//   palette: Object.assign(defaultPalette, palette),
//   typography,
// });

// export default createTheme(theme, {
//   components: {
//     MuiAccordion: {
//       styleOverrides: {
//         root: {
//           backgroundColor: 'transparent',
//         },
//       }
//     },
  
//     MuiAvatar: {
//       styleOverrides: {
//         img: {
//           borderRadius: '50%',
//         },
//       }
//     },
  
//     MuiBadge: {
//       styleOverrides: {
//         colorPrimary: {
//           backgroundColor: theme.palette.primary.main,
//           fontWeight: 'bold',
//         },
//         colorSecondary: {
//           backgroundColor: '#f85c5c',
//           fontWeight: 'bold',
//         },
//       }
//     },
  
//     MuiButton: {
//       styleOverrides: {
//         text: {
//           padding: 5,
//         },
//         endIcon: {
//           marginLeft: '1.5rem',
//           marginRight: 0,
//         },
//         startIcon: {
//           marginRight: '1.5rem',
//           marginLeft: 0,
//         },
//         containedPrimary: {
//           backgroundColor: theme.palette.primary.main,
//           color: theme.palette.white.main,
//           border: `1px solid ${theme.palette.primary.main}`,
//           padding: '5px 15px',
//           '& svg': {
//             fontSize: '17px !important',
//           },
//           '&:hover': {
//             backgroundColor: theme.palette.blue2.main,
//             borderColor: theme.palette.blue2.main,
//             boxShadow: 'none',
//           },
//           '&:active': {
//             boxShadow: 'none',
//             backgroundColor: theme.palette.blue2.main,
//             borderColor: theme.palette.blue2.main,
//           },
//           '&:focus': {
//             backgroundColor: theme.palette.blue2.main,
//             boxShadow: '0 0 0 5px rgba(33, 190, 227, 0.25)',
//             borderColor: theme.palette.blue2.main,
//           },
//         },
//         containedSecondary: {
//           backgroundColor: theme.palette.orange3.main,
//           color: '#ffffff',
//           border: `1px solid ${theme.palette.orange3.main}`,
//           padding: '5px 15px',
//           '& svg': {
//             fontSize: '17px !important',
//           },
//           '&:hover': {
//             backgroundColor: theme.palette.orange3.main,
//             borderColor: theme.palette.orange3.main,
//             boxShadow: 'none',
//           },
//           '&:active': {
//             boxShadow: 'none',
//             backgroundColor: theme.palette.orange3.main,
//             borderColor: theme.palette.orange3.main,
//           },
//           '&:focus': {
//             backgroundColor: theme.palette.orange3.main,
//             boxShadow: '0 0 0 5px rgba(246, 115, 57, 0.25)',
//             borderColor: theme.palette.orange3.main,
//           },
//         },
//         outlinedPrimary: {
//           backgroundColor: alpha(theme.palette.darkBlue5.main, 0.62),
//           color: theme.palette.white.main,
//           boxShadow: `0 0 0 1px ${theme.palette.white.main}`,
//           padding: '5px 15px',
//           border: 0,
//           '& svg': {
//             fontSize: '17px !important',
//           },
//           '&:hover': {
//             backgroundColor: alpha(theme.palette.darkBlue6.main, 0.60),
//             borderColor: theme.palette.white.main,
//             boxShadow: `0 0 0 1px ${theme.palette.white.main}`,
//             border: 0,
//           },
//           '&:active': {
//             boxShadow: 'none',
//             backgroundColor: alpha(theme.palette.darkBlue6.main, 0.60),
//             borderColor: theme.palette.white.main,
//           },
//           '&:focus': {
//             boxShadow: `0 0 0 5px ${alpha(theme.palette.white.main, 0.25)}`,
//             backgroundColor: alpha(theme.palette.darkBlue6.main, 0.60),
//             border: 0,
//           },
//         },
//         outlinedSecondary: {
//           color: theme.palette.primary.main,
//           padding: '5px 15px',
//           border: 0,
//           '& svg': {
//             fontSize: '17px !important',
//           },
//           '&:hover': {
//             color: theme.palette.blue2.main,
//             border: 0,
//             backgroundColor: alpha(theme.palette.white.main, 0),
//           },
//           '&:focus': {
//             color: theme.palette.blue2.main,
//           },
//         },
//         root: {
//           fontFamily: 'Lexend',
//           padding: '11px 22px 11px 18px',
//           fontWeight: 'bold',
//           fontStretch: 'normal',
//           fontStyle: 'normal',
//           lineHeight: 1.57,
//           letterSpacing: 'normal',
//           textTransform: 'none',
//           borderRadius: '2px',
//           border: 0,
//           height: 40,
//           '&.Mui-disabled': {
//             color: 'rgba(255, 255, 255, 0.3)',
//             backgroundColor: 'rgba(255, 255, 255, 0.12)', // Replace with your desired background color for disabled state
//           },
//         },
//         label: {
//           fontFamily: 'Lexend',
//           flexDirection: 'inherit',
//         },
//       },
//       variants: [
//         {
//           props: { variant: 'primary' },
//           style: {
//             background: theme.palette.primary.main,
//             borderRadius: '2px',
//             color: theme.palette.white.main,
//             '&:hover': {
//               backgroundColor: theme.palette.blue2.main,
//               borderColor: theme.palette.blue2.main,
//               boxShadow: 'none',
//             }
//           },
//         },
//         {
//           props: { variant: 'secondary' },
//           style: {
//             background: theme.palette.darkBlue2.main,
//             border: `0.5px solid ${theme.palette.grey2.main}`,
//             borderRadius: '2px',
//             color: theme.palette.white.main,
//           }
//         }
//       ]
//     },
  
//     MuiCard: {
//       styleOverrides: {
//         root: {
//           borderRadius: 6,
//           backgroundColor: theme.palette.black.main,
//         },
//       }
//     },
  
//     MuiCardContent: {
//       styleOverrides: {
//         root: {
//           padding: 16,
//           '&:last-child': {
//             paddingBottom: 16,
//           },
//         },
//       }
//     },
  
//     MuiDialog: {
//       styleOverrides: {
//         paper: {
//           border: `solid 1px ${theme.palette.grey4.main}`,
//           backgroundColor: theme.palette.black.main,
//         },
//       }
//     },
    
//     MuiDivider: {
//       styleOverrides: {
//         root: {
//           backgroundColor: theme.palette.grey1.main,
//           color: theme.palette.darkBlue7.main,
//         },
//       }
//     },
  
//     MuiIconButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: 2,
//           padding: 6,
//         },
//         colorPrimary: {
//           color: theme.palette.grey3.main,
//           '&:hover': {
//             color: theme.palette.white.main,
//             backgroundColor: alpha(theme.palette.white.main, 0.07),
//           },
//           '&:focus': {
//             color: theme.palette.white.main,
//             backgroundColor: alpha(theme.palette.white.main, 0.13),
//           },
//           '& svg': {
//             fontSize: 27,
//           },
//         },
//         colorSecondary: {
//           color: theme.palette.black2.main,
//           backgroundColor: theme.palette.blue5.main,
//           padding: '5px 4px 4px 5px',
//           borderRadius: '50%',
//           '&:hover': {
//             backgroundColor: theme.palette.blue2.main,
//           },
//           '&:focus': {
//             backgroundColor: theme.palette.blue2.main,
//             boxShadow: `0 0 0 3px ${alpha(theme.palette.blue3.main, 0.25)}`,
//           },
//           '& svg': {
//             fontSize: 14,
//           },
//         },
//         sizeSmall: {
//           '&:hover': {
//             backgroundColor: alpha(theme.palette.white.main, 0),
//             color: theme.palette.grey5.main,
//           },
//           '&:focus': {
//             color: theme.palette.grey5.main,
//           },
//           '& svg': {
//             fontSize: 16,
//           },
//         },
//       }
//     },
  
//     MuiInput: {
//       styleOverrides: {
//         underline: {
//           '&:hover:not(.Mui-disabled):before': {
//             borderBottom: 0,
//           },
//           '&:after': {
//             borderBottom: 0,
//           },
//           '&:before': {
//             borderBottom: 0,
//           },
//         },
//       }
//     },
  
//     MuiInputAdornment: {
//       styleOverrides: {
//         root: {
//           color: theme.palette.white.main,
//         },
//         positionStart: {
//           marginLeft: 12,
//           marginRight: 0,
//         },
//       }
//     },
  
//     MuiInputBase: {
//       styleOverrides: {
//         root: {
//           backgroundColor: alpha(theme.palette.white.main, 0),
//           color: theme.palette.white.main,
//         },
//         input: {
//           padding: '11px 17px',
//         },
//       }
//     },
  
//     MuiInputLabel: {
//       styleOverrides: {
//         shrink: {
//           transform: 'translate(0px, 0px) scale(1) !important',
//         },
//         formControl: {
//           fontFamily: 'Lexend !important',
//           transform: 'translate(14px, 30px) scale(1) !important',
//         },
//       }
//     },
    
//     MuiLink: {
//       styleOverrides: {
//         root: {
//           color: theme.palette.blue1.main,
//           textDecoration: 'underline',
//         },
//       }
//     },
  
//     MuiList: {
//       styleOverrides: {
//         padding: {
//           paddingTop: 0,
//           paddingBottom: 0,
//         },
//       }
//     },
  
//     MuiListItem: {
//       styleOverrides: {
//         root: {
//           '&$selected': {
//             fontWeight: 'bold',
//           },
//         },
//       }
//     },
  
//     MuiPaper: {
//       styleOverrides: {
//         root: {
//           backgroundColor: theme.palette.darkBlue1.main,
//         },
//         elevation1: {
//           boxShadow: 0,
//         },
//       }
//     },
  
//     MuiRadio: {
//       styleOverrides: {
//         root: {
//           backgroundColor: 'unset',
//           color: theme.palette.grey3.main,
//           '&:hover': {
//             backgroundColor: 'unset',
//           },
//           '& svg': {
//             width: 16.4,
//             height: 16.4,
//           },
//         },
//       }
//     },
  
//     MuiSelect: {
//       styleOverrides: {
//         root: {
//           color: theme.palette.white.main,
//           '&:hover .MuiOutlinedInput-notchedOutline': {
//             borderColor: theme.palette.grey6.main
//           }
//         },
//         icon: {
//           right: '6px',
//           color: theme.palette.white.main
//         },
//         select: {
//           border: `1px solid ${theme.palette.grey6.main}`,
//           borderRadius: '3px',
//           padding: '11px 17px',
//           '&:focus': {
//             borderRadius: '3px',
//           },
//           '&:hover': {
//             borderColor: theme.palette.grey6.main
//           },
//         },
//       }
//     },
  
//     MuiTab: {
//       styleOverrides: {
//         root: {
//           color: theme.palette.darkBlue8.main,
//           fontSize: '12px',
//           lineHeight: 1.5,
//           letterSpacing: '0.6px',
//           fontWeight: 'bold',
//         },
//         textColorPrimary: {
//           color: theme.palette.darkBlue8.main,
//           '&$selected': {
//             backgroundColor: theme.palette.black2.main,
//             color: theme.palette.white.main,
//           },
//         },
//         '& .PrivateTabIndicator': {
//           display: 'none',
//         },
//       }
//     },
  
//     MuiTable: {
//       styleOverrides: {
//         root: {
//           background: alpha(theme.palette.white.main, 0.07),
//           borderRadius: 6,
//         },
//       }
//     },
  
//     MuiTableCell: {
//       styleOverrides: {
//         root: {
//           padding: 14,
//           borderBottom: `solid 1px ${alpha(theme.palette.white.main, 0.12)}`,
//         },
//         head: {
//           fontFamily: 'Lexend',
//           fontSize: 14,
//           fontWeight: 'bold',
//           fontStretch: 'normal',
//           fontStyle: 'normal',
//           lineHeight: 1.25,
//           letterSpacing: 'normal',
//           textAlign: 'left',
//           color: theme.palette.white.main,
//         },
//       }
//     },
  
//     MuiTableRow: {
//       styleOverrides: {
//         root: {
//           '&:last-child td': {
//             borderBottom: 0,
//           },
//         },
//       }
//     },
  
//     MuiToggleButton: {
//       styleOverrides: {
//         root: {
//           verticalAlign: 'sub',
//           display: 'inline-block',
//           paddingLeft: 14,
//           paddingRight: 14,
//           padding: 0,
//           borderRadius: '16px',
//           height: '24px',
//           lineHeight: '1.6',
//           opacity: 0.23,
//           cursor: 'pointer',
//           border: 0,
//           textTransform: 'none',
//           fontWeight: 'bold',
//           '&$selected': {
//             opacity: 1,
//             backgroundColor: theme.palette.black2.main,
//           },
//         },
//       }
//     },
  
//     MuiToggleButtonGroup: {
//       styleOverrides: {
//         root: {
//           height: '31px',
//           fontSize: '14px',
//           paddingLeft: '8px',
//           paddingRight: '8px',
//           position: 'relative',
//           display: 'inline-block',
//           borderRadius: '16px',
//           backgroundColor: theme.palette.grey7.main,
//         },
//         groupedHorizontal: {
//           margin: 3,
//           border: 'none',
//           '&:not(:first-child)': {
//             borderTopLeftRadius: 16,
//             borderBottomLeftRadius: 16,
//             borderTopRightRadius: 16,
//             borderBottomRightRadius: 16,
//           },
//           '&:not(:last-child)': {
//             borderTopLeftRadius: 16,
//             borderBottomLeftRadius: 16,
//             borderTopRightRadius: 16,
//             borderBottomRightRadius: 16,
//           },
//           '&:first-child': {
//             borderRadius: 16,
//           },
//         },
//       }
//     },
  
//     MuiTooltip: {
//       styleOverrides: {
//         tooltip: {
//           textAlign: 'center',
//           fontSize: 12,
//           lineHeight: '1.5',
//           backgroundColor: theme.palette.black.main,
//           opacity: '0.91',
//           borderRadius: 3,
//           position: 'relative',
//           top: 10,
//           padding: 12,
//         },
//         arrow: {
//           '&:before': {
//             border: `solid ${theme.palette.black.main}`,
//           },
//         },
//       }
//     },
//     MuiCheckbox: {
//       styleOverrides: {
//         root: {
//           '&:hover': {
//             color: '#FFF'
//           },
//           color: 'rgba(255, 255, 255, 0.7)',
//         }, 
//       }
//     },
//     MuiDataGrid: {
//       styleOverrides: {
//         root: {
//           border: '1px solid rgba(81, 81, 81, 1)',
//         },
//         cell: {
//           borderBottom: '1px solid rgba(81, 81, 81, 1)'
//         },
//         overlay: { 
//           backgroundColor: 'rgba(48,48,48, 0.38)'
//         },
//         footerContainer: {
//           borderTop: '1px solid rgba(81, 81, 81, 1)'
//         },
//         columnSeparator: {
//           color: 'rgba(81, 81, 81, 1)', // Replace with your desired column separator color
//         },
//       }
//     }
//   }
// });
