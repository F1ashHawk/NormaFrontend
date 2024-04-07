import 'styled-components';

declare module 'styled-components' {
  export interface IDefaultTheme {
    colors: {
      brand_blue: '#5063C0',
      brand_purple: '#5C6ECA',
      brand_chambray: '#39498F',
      brand_hover: '#7D8BD5',

      grey: '#A7A7A7',
      grey_semi: '#D8DBE2',
      grey_lightest: '#F0F2F5',

      white: '#FFFFFF',
      white_80: 'rgba(255,255,255,0.8)',
      white_60: 'rgba(255,255,255,0.6)',
      white_40: 'rgba(255,255,255,0.4)',

      black: '#030C1C',
      black_80: 'rgba(3,12,28,0.8)',
      black_60: 'rgba(3,12,28,0.6)',
      black_40: 'rgba(3,12,28,0.4)',
      black_20: 'rgba(3,12,28,0.2)',
      black_10: 'rgba(3,12,28,0.1)',
      black_5: 'rgba(3,12,28,0.05)',

      primary_light: '#F7F9FB',
      primary_blue: '#E3F5FF',
      primary_purple: '#E5ECF6',
      primary_semi_purple: 'rgba(229,236,246,0.5)',

      secondary_green_a: '#A1E3CB',
      secondary_green_b: '#BAEDBD',
      secondary_green_c: '#3FCA90',
      secondary_red: '#FF4747',
      secondary_red_b: '#FD7D7D',
      secondary_yellow_a: '#FFC555',
      secondary_yellow_b: '#FFE999',
      secondary_blue_a: '#A8C5DA',
      secondary_blue_b: '#E3F5FF',
      secondary_btn: '#4F68E8'
    },
    format: {
      main_lg_padding: '24px',
      main_md_padding: '12px',
      main_sm_padding: '8px',

      main_sm_gap: '10px',
      main_md_gap: '12px',
      main_lg_gap: '24px',

      main_lg_border_radius: '19px',
      main_md_border_radius: '12px',
      small_border_radius: '10px',
      header_height: '96px',
    },
    font_style: {
      font_family: string,
      font_weight: {
        bold: 700,
        regular: 400
      },
      line_height: '135%'
    },
    font_sizes: {
      small: '10px',
      content: '14px',
      large_content: '18px',
      title: '24px'
    }
  }
}