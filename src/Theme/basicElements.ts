import styled, {IDefaultTheme} from 'styled-components';

interface IBasicElements {
  theme: IDefaultTheme;
}

export const BasicPageWrapper = styled.section<IBasicElements>`
  padding: ${props => props.theme.format.main_lg_padding};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.format.main_lg_padding};
`;

export const BasicPageTitle = styled.h2<IBasicElements>`
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.font_style.font_family};
  font-weight: ${props => props.theme.font_style.font_weight.bold};
  font-size: ${props => props.theme.font_sizes.title};
  line-height: ${props => props.theme.font_style.line_height};
  color: ${props => props.theme.colors.brand_blue};
`;

export const BasicBlockItem = styled.p<IBasicElements>`
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.font_style.font_family};
  font-weight: ${props => props.theme.font_style.font_weight.regular};
  font-size: ${props => props.theme.font_sizes.content};
  color: ${props => props.theme.colors.grey};
`;

export const BasicBlockContent = styled.p<IBasicElements>`
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.font_style.font_family};
  font-weight: ${props => props.theme.font_style.font_weight.regular};
  font-size: ${props => props.theme.font_sizes.content};
  color: ${props => props.theme.colors.black};
`;

export const StyledTable = styled.table`
  width: 100%;
`;

export const StyledThead = styled.thead<IBasicElements>`
`;

export const StyledTbody = styled.tbody<IBasicElements>`
  background: ${props => props.theme.colors.white};
`;

export const StyledTr = styled.tr`
  font-size: 14px;
  line-height: 100%;
  color: #3E3E3E;
  border-bottom: 1px solid rgba(115, 127, 210, 0.25);
`;

export const BasicTableTh = styled.th`
  white-space: nowrap;
  font-family: ${props => props.theme.font_style.font_family};
  font-size: ${props => props.theme.font_sizes.content};
  font-weight: ${props => props.theme.font_style.font_weight.regular};
`;

export const BasicTableTd = styled.td`
  white-space: nowrap;

  font-family: ${props => props.theme.font_style.font_family};
  font-size: ${props => props.theme.font_sizes.content};
  font-weight: ${props => props.theme.font_style.font_weight.regular};
`;

export const BasicContentParagraph = styled.p`
  font-family: ${props => props.theme.font_style.font_family};
  font-size: ${props => props.theme.font_sizes.content};
  font-weight: ${props => props.theme.font_style.font_weight.regular};
`;

export const BasicContentSpan = styled.span`
  font-family: ${props => props.theme.font_style.font_family};
  font-size: ${props => props.theme.font_sizes.content};
  font-weight: ${props => props.theme.font_style.font_weight.regular};
`;

export const BasicSmallSpan = styled.span<IBasicElements>`
  font-family: ${props => props.theme.font_style.font_family};
  font-size: ${props => props.theme.font_sizes.small};
  font-weight: ${props => props.theme.font_style.font_weight.regular};
`;

export const BasicEmptyTableDataText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;

  font-family: ${props => props.theme.font_style.font_family};
  font-size: 30px;
  color: ${props => props.theme.colors.grey};
  width: max-content;

  transform: translate(-50%, -50%);
`;