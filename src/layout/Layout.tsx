import { AppBar, Menu } from '@/layout';
import { LayoutComponent, Layout as RaLayout } from 'react-admin';

export const Layout: LayoutComponent = (props) => {
  return <RaLayout {...props} appBar={AppBar} menu={Menu} />;
};
