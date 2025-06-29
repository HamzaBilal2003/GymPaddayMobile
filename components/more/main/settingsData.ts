import { images } from '@/constants';
import { AntDesign, MaterialIcons, Feather, FontAwesome } from '@expo/vector-icons';

export interface SettingItem {
  id: string;
  title: string;
  icon: string;
  iconFamily?: 'AntDesign' | 'MaterialIcons' | 'Feather' | 'FontAwesome';
  backgroundColor: string;
  onPress?: () => void;
  isDestructive?: boolean;
}

export const settingsData: SettingItem[] = [
  {
    id: 'notifications',
    title: 'Notifications',
    icon: images.notifcationIcon,
    backgroundColor: '#FF3B30',
  },
  {
    id: 'edit-profile',
    title: 'Edit Profile',
    icon: images.moreUser,
    backgroundColor: '#007AFF',
  },
  {
    id: 'gifts-history',
    title: 'Gifts History',
    icon: 'gift',
    iconFamily: 'AntDesign',
    backgroundColor: '#AF52DE',
  },
  {
    id: 'business-settings',
    title: 'Business Settings',
    icon: images.moreBag,
    backgroundColor: '#34C759',
  },
  {
    id: 'view-ads',
    title: 'View Ads',
    icon: images.moreClipboard,
    backgroundColor: '#1C1C1E',
  },
  {
    id: 'support',
    title: 'Support',
    icon: 'headphones',
    iconFamily: 'Feather',
    backgroundColor: '#A2845E',
  },
];

export const otherSettingsData: SettingItem[] = [
  
  {
    id: 'logout',
    title: 'Logout',
    icon: 'logout',
    iconFamily: 'MaterialIcons',
    backgroundColor: 'transparent',
    isDestructive: true,
  },
  {
    id: 'delete-account',
    title: 'Delete account',
    icon: 'delete-outline',
    iconFamily: 'MaterialIcons',
    backgroundColor: 'transparent',
    isDestructive: true,
  },
];