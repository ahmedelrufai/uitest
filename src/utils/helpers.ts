import {Dimensions, PixelRatio} from 'react-native';
import moment from 'moment'
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
import { API_URL, JWT_MOBILE_PUBLIC_KEY } from "./config.ts";


export const generateToken = async () => {


  try {

  } catch (error) {
    console.error('Error generating token:', error);
    throw error;
  }
};



// based on iphone 11s's scale
const scalew = SCREEN_WIDTH / 828;
const scaleh = SCREEN_HEIGHT / 1792;

export function normalizeh(size:number) {
  const newSize = size * scaleh;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
export function hasSubscriptionExpired(endDateStr: string): boolean {
  // Check if the end date string is valid
  if (!endDateStr) {
    // If endDateStr is null, undefined, or an empty string, return true
    return true;
  }

  // Parse the end date string into a Date object
  const endDate = new Date(endDateStr);

  // Check if the parsed date is valid
  if (isNaN(endDate.getTime())) {
    // If the date is invalid, return true
    return true;
  }

  // Get the current date and time in UTC
  const currentDate = new Date();

  // Compare the end date with the current date
  return currentDate > endDate;
}

export function normalizew(size:number) {
  const newSize = size * scalew;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export function calculateRecipientAmount(amount:number, duration:number, discount:number) {
  // Calculate the total amount before discount
  const totalAmount = amount * duration;

  // Calculate the discount amount
  const discountAmount = totalAmount * discount;

  // Calculate the recipient amount after applying the discount
  const recipientAmount = totalAmount - discountAmount;

  return recipientAmount;
}

export const formatDate = (timestamp:any) => {
  moment.updateLocale('en', {
    relativeTime : {
      future: "in %s",
      past:   "%s ago",
      s  : 'a few seconds',
      ss : '%d seconds',
      m:  "a minute",
      mm: "%d minutes",
      h:  "an hour",
      hh: "%dh",
      d:  "A day ago",
      dd: "%d days",
      M:  "A month ago",
      MM: "%d months",
      y:  "a year ago",
      yy: "%d years"
    }
  });
  return moment(timestamp).fromNow(true)
};


export const mimeToExtension: { [key: string]: string } = {
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
  "image/png": "png",
  "image/gif": "gif",
  "image/svg+xml": "svg",
  "image/bmp": "bmp",
  "image/webp": "webp",
};
export function getFileExtension(mimeType: string): string | null {
  return mimeToExtension[mimeType] || null;
}


export function getPermissionDeniedMessage(permission: string): string {
  const permissionMessages = {
    'android.permission.ACCEPT_HANDOVER': 'Permission to accept handover was denied.',
    'android.permission.ACCESS_BACKGROUND_LOCATION': 'Permission to access your location in the background was denied.',
    'android.permission.ACCESS_COARSE_LOCATION': 'Permission to access your approximate location was denied.',
    'android.permission.ACCESS_FINE_LOCATION': 'Permission to access your precise location was denied.',
    'android.permission.ACCESS_MEDIA_LOCATION': 'Permission to access media location information was denied.',
    'android.permission.ACTIVITY_RECOGNITION': 'Permission to recognize physical activities was denied.',
    'com.android.voicemail.permission.ADD_VOICEMAIL': 'Permission to add voicemail messages was denied.',
    'android.permission.ANSWER_PHONE_CALLS': 'Permission to answer phone calls was denied.',
    'android.permission.BLUETOOTH_ADVERTISE': 'Permission to advertise over Bluetooth was denied.',
    'android.permission.BLUETOOTH_CONNECT': 'Permission to connect over Bluetooth was denied.',
    'android.permission.BLUETOOTH_SCAN': 'Permission to scan for Bluetooth devices was denied.',
    'android.permission.BODY_SENSORS': 'Permission to access body sensors was denied.',
    'android.permission.BODY_SENSORS_BACKGROUND': 'Permission to access body sensors in the background was denied.',
    'android.permission.CALL_PHONE': 'Permission to make phone calls was denied.',
    'android.permission.CAMERA': 'Permission to access the camera was denied.',
    'android.permission.GET_ACCOUNTS': 'Permission to access your accounts was denied.',
    'android.permission.NEARBY_WIFI_DEVICES': 'Permission to access nearby WiFi devices was denied.',
    'android.permission.POST_NOTIFICATIONS': 'Permission to post notifications was denied.',
    'android.permission.PROCESS_OUTGOING_CALLS': 'Permission to process outgoing calls was denied.',
    'android.permission.READ_CALENDAR': 'Permission to read calendar events was denied.',
    'android.permission.READ_CALL_LOG': 'Permission to read call logs was denied.',
    'android.permission.READ_CONTACTS': 'Permission to read contacts was denied.',
    'android.permission.READ_EXTERNAL_STORAGE': 'Permission to read external storage was denied.',
    'android.permission.READ_MEDIA_AUDIO': 'Permission to read audio files was denied.',
    'android.permission.READ_MEDIA_IMAGES': 'Permission to read image files was denied.',
    'android.permission.READ_MEDIA_VIDEO': 'Permission to read video files was denied.',
    'android.permission.READ_MEDIA_VISUAL_USER_SELECTED': 'Permission to read user-selected visual media was denied.',
    'android.permission.READ_PHONE_NUMBERS': 'Permission to read phone numbers was denied.',
    'android.permission.READ_PHONE_STATE': 'Permission to read phone state was denied.',
    'android.permission.READ_SMS': 'Permission to read SMS messages was denied.',
    'android.permission.RECEIVE_MMS': 'Permission to receive MMS messages was denied.',
    'android.permission.RECEIVE_SMS': 'Permission to receive SMS messages was denied.',
    'android.permission.RECEIVE_WAP_PUSH': 'Permission to receive WAP push messages was denied.',
    'android.permission.RECORD_AUDIO': 'Permission to record audio was denied.',
    'android.permission.SEND_SMS': 'Permission to send SMS messages was denied.',
    'android.permission.USE_SIP': 'Permission to use SIP protocol was denied.',
    'android.permission.UWB_RANGING': 'Permission to use UWB ranging was denied.',
    'android.permission.WRITE_CALENDAR': 'Permission to write calendar events was denied.',
    'android.permission.WRITE_CALL_LOG': 'Permission to write call logs was denied.',
    'android.permission.WRITE_CONTACTS': 'Permission to write contacts was denied.',
    'android.permission.WRITE_EXTERNAL_STORAGE': 'Permission to write to external storage was denied.',
    'ios.permission.APP_TRACKING_TRANSPARENCY': 'Permission for app tracking transparency was denied.',
    'ios.permission.BLUETOOTH': 'Permission to access Bluetooth was denied.',
    'ios.permission.CALENDARS': 'Permission to access calendars was denied.',
    'ios.permission.CALENDARS_WRITE_ONLY': 'Permission to write to calendars was denied.',
    'ios.permission.CAMERA': 'Permission to access the camera was denied.',
    'ios.permission.CONTACTS': 'Permission to access contacts was denied.',
    'ios.permission.FACE_ID': 'Permission to use Face ID was denied.',
    'ios.permission.LOCATION_ALWAYS': 'Permission to access location at all times was denied.',
    'ios.permission.LOCATION_WHEN_IN_USE': 'Permission to access location when in use was denied.',
    'ios.permission.MEDIA_LIBRARY': 'Permission to access media library was denied.',
    'ios.permission.MICROPHONE': 'Permission to access the microphone was denied.',
    'ios.permission.MOTION': 'Permission to access motion data was denied.',
    'ios.permission.PHOTO_LIBRARY': 'Permission to access the photo library was denied.',
    'ios.permission.PHOTO_LIBRARY_ADD_ONLY': 'Permission to add to the photo library was denied.',
    'ios.permission.REMINDERS': 'Permission to access reminders was denied.',
    'ios.permission.SIRI': 'Permission to access Siri was denied.',
    'ios.permission.SPEECH_RECOGNITION': 'Permission for speech recognition was denied.',
    'ios.permission.STOREKIT': 'Permission to access StoreKit was denied.',
  };

  return permissionMessages[permission as keyof typeof permissionMessages] || 'Permission not recognized.';
}


export function checkIfValidId (id:string) {
  let checkForValidMongoDbID = new RegExp("^[0-9a-fA-F]{24}$");
  return checkForValidMongoDbID.test(id)
}
