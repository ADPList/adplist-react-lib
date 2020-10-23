import React from "react";

const AdpLogo = ({ color, ...props }) => {
  return (
    <svg
      width="170"
      height="37"
      fill="none"
      viewBox="0 0 170 37"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M18.2597 0C14.6365 0 11.122 1.10119 8.11476 3.12004C5.10752 5.13889 2.75245 8.03869 1.37563 11.4157C-0.00117662 14.7927 -0.363495 18.5 0.361142 22.0972C1.04955 25.6944 2.78868 28.998 5.36114 31.5675C7.89737 34.1369 11.1582 35.8988 14.709 36.6329C18.2597 37.3671 21.9191 36.9633 25.2524 35.5685C28.5858 34.1736 31.4481 31.7877 33.4408 28.7411C35.4336 25.6945 36.5206 22.1339 36.5206 18.4633C36.5206 13.5446 34.6003 8.84623 31.1582 5.39583C27.7162 1.94544 23.0785 0 18.2597 0ZM18.2597 34.1369C15.2162 34.1369 12.209 33.2193 9.67273 31.4941C7.1365 29.7689 5.14375 27.3462 3.98433 24.4831C2.82491 21.62 2.49882 18.4633 3.11476 15.4534C3.69447 12.4067 5.17998 9.61706 7.35389 7.45139C9.52781 5.28571 12.2814 3.78075 15.2524 3.15675C18.2597 2.56944 21.3394 2.8631 24.1655 4.0377C26.9916 5.2123 29.3829 7.23115 31.0858 9.8006C32.7887 12.37 33.6945 15.4167 33.6945 18.5C33.6945 22.6478 32.064 26.6121 29.1655 29.5486C26.2669 32.4851 22.3539 34.1369 18.2597 34.1369Z"
          fill={color || "#05051B"}
        />
        <path
          d="M10.9413 18.133C11.0862 18.2799 11.2311 18.39 11.4123 18.4267C11.5934 18.5001 11.7746 18.5368 11.9557 18.5368C12.1369 18.5368 12.3181 18.5001 12.4992 18.4267C12.6804 18.3533 12.8253 18.2432 12.9702 18.133L16.2673 14.7928C16.8833 14.1688 17.2818 13.3245 17.3181 12.4436C17.3905 11.5626 17.1369 10.6817 16.6297 9.94753C16.1224 9.21341 15.3615 8.69952 14.492 8.47928C13.6224 8.25904 12.7166 8.33245 11.9195 8.73622C11.1224 8.33245 10.2166 8.22233 9.34705 8.44257C8.47749 8.66281 7.71662 9.1767 7.20937 9.91083C6.70213 10.645 6.4485 11.5626 6.52097 12.4436C6.59343 13.3612 6.99198 14.2055 7.64416 14.8295L10.9413 18.133ZM9.60068 11.3791C9.67314 11.3057 9.78184 11.2323 9.89053 11.1588C9.99923 11.1221 10.1079 11.0854 10.2529 11.0854C10.3615 11.0854 10.5065 11.1221 10.6152 11.1588C10.7239 11.1955 10.8326 11.269 10.905 11.3791C11.05 11.5259 11.1949 11.636 11.376 11.6727C11.5572 11.7461 11.7384 11.7828 11.9195 11.7828C12.1007 11.7828 12.2818 11.7461 12.463 11.6727C12.6442 11.5993 12.7891 11.4892 12.934 11.3791C13.0065 11.3057 13.1152 11.2323 13.2239 11.1588C13.3326 11.1221 13.4413 11.0854 13.5862 11.0854C13.6949 11.0854 13.8398 11.1221 13.9485 11.1588C14.0572 11.1955 14.1659 11.269 14.2384 11.3791C14.3108 11.4525 14.3833 11.5626 14.4557 11.6727C14.5282 11.7828 14.5282 11.893 14.5282 12.0398C14.5282 12.1499 14.492 12.2967 14.4557 12.4069C14.4195 12.517 14.3471 12.6271 14.2384 12.7005L11.9195 15.0864L9.60068 12.7739C9.52821 12.7005 9.45575 12.5904 9.38329 12.4803C9.34705 12.3702 9.31082 12.2233 9.31082 12.1132C9.31082 12.0031 9.34705 11.8563 9.38329 11.7461C9.41952 11.636 9.49198 11.5259 9.60068 11.4525V11.3791Z"
          fill={color || "#05051B"}
        />
        <path
          d="M23.5868 18.133C23.7317 18.2799 23.8766 18.39 24.0578 18.4267C24.2389 18.5001 24.4201 18.5368 24.6013 18.5368C24.7824 18.5368 24.9636 18.5001 25.1447 18.4267C25.3259 18.3533 25.4708 18.2432 25.6157 18.133L28.9129 14.7928C29.5288 14.1688 29.9273 13.3245 29.9636 12.4436C30.036 11.5626 29.7824 10.6817 29.2752 9.94753C28.7679 9.21341 28.0071 8.69952 27.1375 8.47928C26.2679 8.25904 25.3621 8.33245 24.565 8.73622C23.7679 8.33245 22.8621 8.22233 21.9926 8.44257C21.123 8.66281 20.3621 9.1767 19.8549 9.91083C19.3476 10.645 19.094 11.5626 19.1665 12.4436C19.2389 13.3612 19.6375 14.2055 20.2897 14.8295L23.5868 18.133ZM22.2462 11.3791C22.3186 11.3057 22.4273 11.2323 22.536 11.1588C22.6447 11.1221 22.7534 11.0854 22.8984 11.0854C23.0071 11.0854 23.152 11.1221 23.2607 11.1588C23.3694 11.1955 23.4781 11.269 23.5505 11.3791C23.6955 11.5259 23.8404 11.636 24.0215 11.6727C24.2027 11.7461 24.3839 11.7828 24.565 11.7828C24.7462 11.7828 24.9273 11.7461 25.1085 11.6727C25.2897 11.5993 25.4346 11.4892 25.5795 11.3791C25.652 11.3057 25.7607 11.2323 25.8694 11.1588C25.9781 11.1221 26.0868 11.0854 26.2317 11.0854C26.3766 11.0854 26.4853 11.1221 26.594 11.1588C26.7027 11.1955 26.8114 11.269 26.8839 11.3791C26.9563 11.4525 27.0288 11.5626 27.1013 11.6727C27.1375 11.7828 27.1737 11.893 27.1737 12.0398C27.1737 12.1499 27.1375 12.2967 27.1013 12.4069C27.065 12.517 26.9926 12.6271 26.8839 12.7005L24.565 15.0864L22.2462 12.7739C22.1737 12.7005 22.1013 12.5904 22.0288 12.4803C21.9926 12.3702 21.9563 12.2233 21.9563 12.1132C21.9563 12.0031 21.9926 11.8563 22.0288 11.7461C22.065 11.636 22.1375 11.5259 22.2462 11.4525V11.3791Z"
          fill={color || "#05051B"}
        />
        <path
          d="M28.0793 19.9316C27.717 19.9316 27.3547 20.0785 27.1011 20.3354C26.8475 20.5924 26.7025 20.9594 26.7025 21.3265C26.7025 25.2541 22.9344 28.4475 18.2967 28.4475C13.659 28.4475 9.8547 25.2541 9.8547 21.3265C9.8547 20.9594 9.70977 20.5924 9.45615 20.3354C9.20252 20.0785 8.8402 19.9316 8.47789 19.9316C8.11557 19.9316 7.75325 20.0785 7.49963 20.3354C7.246 20.5924 7.10107 20.9594 7.10107 21.3265C7.10107 26.8324 12.1373 31.2739 18.333 31.2739C24.5286 31.2739 29.5648 26.7957 29.5648 21.3265C29.5648 20.9594 29.4199 20.5924 29.1663 20.3354C28.9127 20.0785 28.4417 19.9316 28.0793 19.9316Z"
          fill={color || "#05051B"}
        />
        <path
          d="M54.0214 11.0127H49.2388L48.2605 13.7657H45.833L50.362 1.79945H53.0432L57.5359 13.7657H55.0359L54.0214 11.0127ZM49.9997 8.88377H53.2605L51.6301 4.36889L49.9997 8.88377ZM58.804 13.729V5.43338H60.9055V6.46115C61.0142 6.24092 61.1591 6.09409 61.3403 5.91056C61.5214 5.76373 61.7026 5.61691 61.92 5.50679C62.1374 5.39667 62.3547 5.32326 62.6084 5.28655C62.862 5.21314 63.0794 5.21314 63.2968 5.21314C63.8765 5.21314 64.3475 5.32326 64.7823 5.5802C65.2171 5.80044 65.5069 6.1675 65.7243 6.60798C66.0504 6.09409 66.4127 5.76373 66.8475 5.5435C67.2823 5.32326 67.7533 5.21314 68.2968 5.21314C68.6591 5.21314 69.0576 5.28655 69.3837 5.39667C69.7461 5.50679 70.0721 5.69032 70.3258 5.94727C70.6156 6.20421 70.833 6.53457 70.9779 6.93834C71.1591 7.34211 71.2316 7.81929 71.2316 8.36988V13.7657H69.0939V8.81036C69.0939 8.36988 68.9852 8.00282 68.7316 7.70917C68.5142 7.41552 68.1518 7.26869 67.6446 7.26869C67.1736 7.26869 66.8113 7.41552 66.5214 7.74588C66.2678 8.07623 66.1229 8.4433 66.1229 8.88377V13.729H63.9127V8.81036C63.9127 8.36988 63.804 8.00282 63.5504 7.70917C63.333 7.41552 62.9345 7.26869 62.4634 7.26869C61.9924 7.26869 61.5939 7.41552 61.3403 7.74588C61.0866 8.07623 60.9417 8.4433 60.9417 8.92048V13.7657H58.804V13.729ZM73.0794 11.4899C73.0794 11.1229 73.1518 10.7925 73.2605 10.4989C73.4055 10.2052 73.5866 9.94826 73.804 9.72802C74.0214 9.50778 74.275 9.36096 74.5649 9.21413C74.8548 9.10401 75.1808 8.99389 75.5432 8.95719L77.5721 8.66354C77.7895 8.62683 77.9707 8.55342 78.0432 8.4433C78.1156 8.33318 78.1881 8.18635 78.1881 8.03953C78.1881 7.74588 78.0794 7.48893 77.8258 7.26869C77.6084 7.04846 77.2461 6.93834 76.775 6.93834C76.304 6.93834 75.9055 7.08516 75.6519 7.34211C75.3982 7.59905 75.2533 7.92941 75.2171 8.29647L73.2605 7.856C73.2968 7.52564 73.4055 7.19528 73.5504 6.86492C73.7316 6.53457 73.9489 6.24092 74.2388 5.98397C74.5287 5.72703 74.891 5.50679 75.2895 5.35996C75.7243 5.17643 76.1953 5.10302 76.7388 5.10302C77.391 5.10302 77.9345 5.17643 78.4055 5.35996C78.8765 5.5435 79.2388 5.76373 79.4924 6.05738C79.7823 6.35104 79.9997 6.68139 80.1084 7.04846C80.2533 7.41552 80.3258 7.81929 80.3258 8.25977V12.3342C80.3258 12.5544 80.3258 12.8114 80.362 13.0683C80.3982 13.3252 80.3982 13.5088 80.4345 13.6556H78.4055C78.3692 13.5455 78.3692 13.3987 78.333 13.2151C78.333 12.9949 78.333 12.8481 78.333 12.6645C78.1156 12.9949 77.8258 13.2885 77.4272 13.5088C77.0287 13.7657 76.5214 13.8758 75.9417 13.8758C75.5069 13.8758 75.1084 13.8024 74.7461 13.6556C74.3837 13.5088 74.0939 13.3252 73.8765 13.105C73.6229 12.8848 73.4417 12.5911 73.2968 12.2975C73.1519 12.1139 73.0794 11.8203 73.0794 11.4899ZM76.3765 12.2975C76.5939 12.2975 76.8475 12.2608 77.0287 12.2241C77.2461 12.1506 77.4272 12.0405 77.6084 11.8937C77.7895 11.7469 77.8982 11.5266 78.0069 11.3064C78.1156 11.0494 78.1519 10.7558 78.1519 10.3887V10.0217L76.304 10.3153C76.0142 10.352 75.7605 10.4621 75.5794 10.6457C75.3982 10.7925 75.2895 11.0494 75.2895 11.3798C75.2895 11.6367 75.362 11.857 75.5432 12.0405C75.7243 12.2241 76.0142 12.2975 76.3765 12.2975ZM81.9924 13.729V11.7469L85.8692 7.34211H82.1011V5.39667H88.7316V7.26869L84.7461 11.7469H88.7678V13.6923H81.9924V13.729ZM90.5794 13.729V5.43338H92.7895V13.729H90.5794ZM90.3258 2.71711C90.3258 2.31334 90.4707 1.98298 90.7243 1.72604C90.9779 1.46909 91.304 1.32227 91.7026 1.32227C92.1011 1.32227 92.4272 1.46909 92.6808 1.72604C92.9345 1.98298 93.0794 2.31334 93.0794 2.71711C93.0794 3.08417 92.9345 3.41453 92.6808 3.67147C92.4272 3.92842 92.1011 4.07524 91.7026 4.07524C91.3403 4.07524 91.0142 3.92842 90.7243 3.67147C90.4345 3.41453 90.3258 3.08417 90.3258 2.71711ZM97.391 13.729H95.1808V5.43338H97.3185V6.46115C97.5721 6.02068 97.9345 5.72703 98.3692 5.50679C98.804 5.28655 99.275 5.21314 99.7098 5.21314C100.217 5.21314 100.652 5.28655 101.014 5.47008C101.376 5.65361 101.703 5.87385 101.956 6.1675C102.21 6.46115 102.391 6.79151 102.5 7.23199C102.608 7.63576 102.681 8.07623 102.681 8.51671V13.7657H100.471V8.88377C100.471 8.40659 100.362 8.00282 100.108 7.70917C99.891 7.37881 99.4924 7.23199 98.949 7.23199C98.4779 7.23199 98.0794 7.41552 97.8258 7.74588C97.5721 8.07623 97.4272 8.48 97.4272 8.95719V13.729H97.391ZM106.34 13.6556C106.413 14.1328 106.63 14.4998 106.956 14.7935C107.282 15.0871 107.717 15.234 108.261 15.234C108.949 15.234 109.492 15.0504 109.891 14.6834C110.253 14.3163 110.471 13.729 110.471 12.9215V12.2975C110.29 12.5544 110.036 12.8114 109.637 13.0316C109.275 13.2518 108.768 13.3619 108.188 13.3619C107.645 13.3619 107.137 13.2518 106.666 13.0683C106.195 12.8848 105.797 12.5911 105.434 12.2241C105.108 11.857 104.819 11.4532 104.637 10.9393C104.456 10.4621 104.348 9.91155 104.348 9.32425C104.348 8.77365 104.456 8.25977 104.637 7.78258C104.819 7.3054 105.072 6.86492 105.434 6.49786C105.761 6.1308 106.159 5.83715 106.63 5.61691C107.101 5.39667 107.608 5.28655 108.188 5.28655C108.84 5.28655 109.348 5.39667 109.746 5.65361C110.108 5.87385 110.398 6.1308 110.543 6.42445V5.43338H112.681V12.8481C112.681 13.4354 112.608 13.986 112.427 14.4998C112.282 15.0137 112.029 15.4909 111.666 15.8947C111.34 16.2985 110.869 16.6288 110.326 16.8491C109.782 17.106 109.13 17.2161 108.369 17.2161C107.79 17.2161 107.282 17.1427 106.811 16.9592C106.34 16.8123 105.942 16.5921 105.616 16.2985C105.29 16.0415 105 15.7112 104.782 15.3441C104.565 14.977 104.42 14.61 104.384 14.2062L106.34 13.6556ZM108.514 11.4532C109.094 11.4532 109.529 11.2697 109.891 10.8659C110.253 10.4989 110.434 9.98496 110.434 9.32425C110.434 8.70024 110.253 8.18635 109.855 7.81929C109.492 7.45223 109.021 7.23199 108.478 7.23199C108.188 7.23199 107.934 7.26869 107.681 7.37881C107.463 7.45223 107.246 7.59905 107.065 7.78258C106.884 7.96611 106.739 8.18635 106.666 8.4433C106.558 8.70024 106.521 8.99389 106.521 9.28754C106.521 9.94826 106.703 10.4621 107.065 10.8292C107.463 11.2697 107.934 11.4532 108.514 11.4532ZM123.261 11.5633C123.732 11.5633 124.203 11.4899 124.637 11.3431C125.072 11.1963 125.434 10.9393 125.761 10.6457C126.087 10.3153 126.34 9.94826 126.521 9.47107C126.703 8.99389 126.811 8.40659 126.811 7.78258C126.811 7.15857 126.703 6.57127 126.521 6.09409C126.34 5.61691 126.087 5.21314 125.761 4.88278C125.434 4.55242 125.072 4.33219 124.637 4.18536C124.203 4.03854 123.732 3.96512 123.261 3.96512H121.413V11.6H123.261V11.5633ZM119.13 13.729V1.76274H123.369C124.203 1.76274 125 1.90957 125.688 2.16651C126.413 2.42346 126.992 2.82723 127.536 3.34111C128.043 3.855 128.478 4.47901 128.768 5.21314C129.058 5.94727 129.203 6.79151 129.203 7.74588C129.203 8.70024 129.058 9.54449 128.768 10.2786C128.478 11.0127 128.079 11.6367 127.536 12.1506C127.029 12.6645 126.413 13.0316 125.688 13.3252C124.963 13.5822 124.203 13.729 123.369 13.729H119.13ZM136.376 8.62683C136.376 8.40659 136.304 8.22306 136.232 8.03953C136.159 7.81929 136.05 7.67246 135.905 7.52564C135.761 7.37881 135.579 7.23199 135.326 7.15857C135.108 7.04846 134.819 7.01175 134.529 7.01175C134.239 7.01175 133.985 7.04846 133.768 7.15857C133.55 7.26869 133.369 7.37881 133.188 7.56234C133.043 7.70917 132.898 7.8927 132.826 8.07623C132.753 8.25977 132.717 8.4433 132.681 8.66354H136.376V8.62683ZM138.442 11.3431C138.333 11.7102 138.188 12.0405 137.971 12.3709C137.753 12.7012 137.5 12.9582 137.174 13.2151C136.848 13.4354 136.485 13.6189 136.087 13.7657C135.688 13.9125 135.217 13.986 134.71 13.986C134.13 13.986 133.587 13.8758 133.079 13.6923C132.572 13.4721 132.101 13.2151 131.739 12.8114C131.34 12.4443 131.05 11.9671 130.797 11.4165C130.579 10.8659 130.471 10.2419 130.471 9.54449C130.471 8.88377 130.579 8.29647 130.797 7.74588C131.014 7.19528 131.304 6.7548 131.666 6.38774C132.029 6.02068 132.463 5.72703 132.971 5.50679C133.442 5.28655 133.949 5.17643 134.492 5.17643C135.761 5.17643 136.775 5.5435 137.463 6.31433C138.188 7.08516 138.514 8.14965 138.514 9.47107C138.514 9.6179 138.514 9.76472 138.514 9.91155C138.514 10.0584 138.514 10.1318 138.514 10.1318H132.645C132.645 10.3887 132.717 10.6457 132.826 10.9026C132.934 11.1229 133.116 11.3064 133.261 11.4899C133.442 11.6735 133.659 11.7836 133.913 11.8937C134.166 11.9671 134.42 12.0405 134.71 12.0405C135.217 12.0405 135.652 11.9304 135.942 11.6735C136.232 11.4532 136.449 11.1229 136.594 10.7558L138.442 11.3431ZM141.485 11.0127C141.521 11.3431 141.63 11.6367 141.884 11.8937C142.137 12.1506 142.5 12.2975 142.971 12.2975C143.333 12.2975 143.623 12.2241 143.804 12.0772C143.985 11.8937 144.058 11.7102 144.058 11.4899C144.058 11.3064 143.985 11.1229 143.84 11.0127C143.695 10.8659 143.478 10.7558 143.152 10.6824L142.065 10.4254C141.268 10.2419 140.688 9.94826 140.326 9.50778C139.963 9.0673 139.782 8.55342 139.782 7.96611C139.782 7.59905 139.855 7.23199 140 6.90163C140.145 6.57127 140.362 6.27762 140.616 6.05738C140.905 5.80044 141.232 5.61691 141.594 5.47008C141.956 5.32326 142.391 5.24985 142.826 5.24985C143.405 5.24985 143.877 5.32326 144.275 5.50679C144.674 5.65361 145 5.87385 145.253 6.1308C145.507 6.38774 145.688 6.64469 145.833 6.93834C145.942 7.19528 146.014 7.45223 146.05 7.67246L144.203 8.11294C144.166 8.00282 144.13 7.856 144.094 7.74588C144.058 7.59905 143.985 7.48893 143.876 7.37881C143.768 7.26869 143.623 7.15857 143.478 7.12187C143.333 7.04846 143.116 7.01175 142.898 7.01175C142.608 7.01175 142.355 7.08516 142.137 7.23199C141.92 7.37881 141.848 7.59905 141.848 7.81929C141.848 8.03953 141.92 8.18635 142.065 8.29647C142.21 8.40659 142.391 8.51671 142.608 8.55342L143.768 8.81036C144.565 8.99389 145.181 9.28754 145.579 9.76473C145.978 10.2419 146.195 10.7558 146.195 11.3798C146.195 11.7102 146.123 12.0405 145.978 12.3709C145.869 12.7012 145.652 12.9949 145.398 13.2518C145.145 13.5088 144.782 13.729 144.384 13.8758C143.985 14.0227 143.514 14.0961 142.971 14.0961C142.355 14.0961 141.811 14.0227 141.413 13.8391C140.978 13.6556 140.652 13.4354 140.362 13.1784C140.072 12.9215 139.891 12.6278 139.746 12.3342C139.637 12.0405 139.565 11.7469 139.529 11.5266L141.485 11.0127ZM147.971 13.729V5.43338H150.181V13.729H147.971ZM147.717 2.71711C147.717 2.31334 147.862 1.98298 148.116 1.72604C148.369 1.46909 148.695 1.32227 149.094 1.32227C149.492 1.32227 149.819 1.46909 150.072 1.72604C150.326 1.98298 150.471 2.31334 150.471 2.71711C150.471 3.08417 150.326 3.41453 150.072 3.67147C149.819 3.92842 149.492 4.07524 149.094 4.07524C148.732 4.07524 148.405 3.92842 148.116 3.67147C147.826 3.41453 147.717 3.08417 147.717 2.71711ZM153.985 13.6556C154.058 14.1328 154.275 14.4998 154.601 14.7935C154.927 15.0871 155.362 15.234 155.905 15.234C156.594 15.234 157.137 15.0504 157.536 14.6834C157.898 14.3163 158.116 13.729 158.116 12.9215V12.2975C157.934 12.5544 157.681 12.8114 157.282 13.0316C156.92 13.2518 156.413 13.3619 155.833 13.3619C155.29 13.3619 154.782 13.2518 154.311 13.0683C153.84 12.8848 153.442 12.5911 153.079 12.2241C152.753 11.857 152.463 11.4532 152.282 10.9393C152.101 10.4621 151.992 9.91155 151.992 9.32425C151.992 8.77365 152.101 8.25977 152.282 7.78258C152.463 7.3054 152.717 6.86492 153.079 6.49786C153.405 6.1308 153.804 5.83715 154.275 5.61691C154.746 5.39667 155.253 5.28655 155.833 5.28655C156.485 5.28655 156.992 5.39667 157.391 5.65361C157.753 5.87385 158.043 6.1308 158.188 6.42445V5.43338H160.326V12.8481C160.326 13.4354 160.253 13.986 160.072 14.4998C159.927 15.0137 159.674 15.4909 159.311 15.8947C158.985 16.2985 158.514 16.6288 157.971 16.8491C157.427 17.106 156.775 17.2161 156.014 17.2161C155.434 17.2161 154.927 17.1427 154.456 16.9592C153.985 16.8123 153.587 16.5921 153.261 16.2985C152.934 16.0415 152.645 15.7112 152.427 15.3441C152.21 14.977 152.065 14.61 152.029 14.2062L153.985 13.6556ZM156.195 11.4532C156.775 11.4532 157.21 11.2697 157.572 10.8659C157.934 10.4989 158.116 9.98496 158.116 9.32425C158.116 8.70024 157.934 8.18635 157.536 7.81929C157.174 7.45223 156.703 7.23199 156.159 7.23199C155.869 7.23199 155.616 7.26869 155.362 7.37881C155.145 7.45223 154.927 7.59905 154.746 7.78258C154.565 7.96611 154.42 8.18635 154.348 8.4433C154.239 8.70024 154.203 8.99389 154.203 9.28754C154.203 9.94826 154.384 10.4621 154.746 10.8292C155.145 11.2697 155.616 11.4532 156.195 11.4532ZM164.71 13.729H162.5V5.43338H164.637V6.46115C164.891 6.02068 165.253 5.72703 165.688 5.50679C166.123 5.28655 166.594 5.21314 167.029 5.21314C167.536 5.21314 167.971 5.28655 168.333 5.47008C168.695 5.65361 169.021 5.87385 169.275 6.1675C169.529 6.46115 169.71 6.79151 169.819 7.23199C169.927 7.63576 170 8.07623 170 8.51671V13.7657H167.79V8.88377C167.79 8.40659 167.681 8.00282 167.427 7.70917C167.21 7.37881 166.811 7.23199 166.268 7.23199C165.797 7.23199 165.398 7.41552 165.145 7.74588C164.891 8.07623 164.746 8.48 164.746 8.95719V13.729H164.71ZM51.1229 25.9522C51.7026 25.9522 52.1374 25.8054 52.4634 25.5117C52.7895 25.1814 52.9707 24.7776 52.9707 24.2637C52.9707 23.7131 52.7895 23.3094 52.4634 22.979C52.1374 22.6854 51.7026 22.5385 51.1229 22.5385H49.3113V25.9522H51.1229ZM49.275 27.9711V32.486H46.9924V20.483H51.4127C51.9924 20.483 52.5359 20.5931 53.0069 20.7766C53.4779 20.9602 53.9127 21.2171 54.2388 21.5475C54.6011 21.8778 54.8547 22.2816 55.0359 22.7221C55.2171 23.1625 55.3258 23.6764 55.3258 24.1903C55.3258 24.7409 55.2171 25.2181 55.0359 25.6953C54.8547 26.1725 54.6011 26.5395 54.2388 26.8699C53.8765 27.2002 53.4779 27.4572 53.0069 27.6407C52.5359 27.8242 51.9924 27.8977 51.4127 27.8977H49.275V27.9711ZM61.7026 27.3471C61.7026 27.1268 61.6301 26.9433 61.5576 26.7598C61.4852 26.5395 61.3765 26.3927 61.2316 26.2459C61.0866 26.0991 60.9055 25.9522 60.6518 25.8788C60.4345 25.7687 60.1808 25.732 59.8547 25.732C59.5649 25.732 59.3113 25.7687 59.0939 25.8788C58.8765 25.9889 58.6953 26.099 58.5142 26.2826C58.3692 26.4294 58.2243 26.6129 58.1518 26.7965C58.0794 26.98 58.0432 27.1635 58.0069 27.3838H61.7026V27.3471ZM63.7678 30.0633C63.6591 30.4304 63.5142 30.7608 63.2968 31.0911C63.0794 31.4215 62.8258 31.6784 62.4997 31.9354C62.1736 32.1556 61.8113 32.3758 61.4127 32.486C61.0142 32.6328 60.5432 32.7062 60.0359 32.7062C59.4562 32.7062 58.9127 32.5961 58.4055 32.4125C57.8982 32.1923 57.4272 31.9354 57.0649 31.5316C56.7026 31.1278 56.3765 30.6873 56.1229 30.1367C55.9055 29.5862 55.7968 28.9621 55.7968 28.2647C55.7968 27.604 55.9055 26.98 56.1229 26.4661C56.3403 25.9522 56.6301 25.475 56.9924 25.108C57.3547 24.7409 57.7895 24.4473 58.2968 24.227C58.7678 24.0068 59.275 23.8967 59.8185 23.8967C61.0866 23.8967 62.1011 24.2637 62.7895 25.0346C63.5142 25.8054 63.8403 26.8699 63.8403 28.1913C63.8403 28.3381 63.8403 28.485 63.8403 28.6318C63.8403 28.7786 63.8403 28.852 63.8403 28.852H57.9707C57.9707 29.109 58.0432 29.3659 58.1518 29.6229C58.2605 29.8431 58.4417 30.0633 58.5866 30.2102C58.7678 30.3937 58.9852 30.5038 59.2388 30.6139C59.4924 30.6873 59.7461 30.7608 60.0359 30.7608C60.5432 30.7608 60.9779 30.6506 61.2678 30.3937C61.5576 30.1735 61.775 29.8431 61.92 29.476L63.7678 30.0633ZM69.3113 30.6873C69.5649 30.6873 69.8547 30.6506 70.1084 30.5405C70.362 30.4304 70.5794 30.2836 70.7605 30.1C70.9417 29.8798 71.0866 29.6596 71.1953 29.3659C71.304 29.0723 71.3765 28.7419 71.3765 28.3381C71.3765 27.9344 71.304 27.604 71.1953 27.3104C71.0866 27.0167 70.9417 26.7598 70.7605 26.5762C70.5794 26.356 70.362 26.2092 70.1084 26.1358C69.8547 26.0256 69.6011 25.9889 69.3113 25.9889C69.0576 25.9889 68.7678 26.0256 68.5142 26.1358C68.2605 26.2459 68.0432 26.3927 67.862 26.5762C67.6808 26.7598 67.4997 27.0167 67.391 27.3104C67.2823 27.604 67.2098 27.9344 67.2098 28.3381C67.2098 28.7419 67.2823 29.0723 67.391 29.3659C67.4997 29.6596 67.6808 29.9165 67.862 30.1C68.0432 30.2836 68.2605 30.4304 68.5142 30.5405C68.7678 30.6139 69.0214 30.6873 69.3113 30.6873ZM69.3113 23.8967C69.9272 23.8967 70.5069 24.0068 71.0142 24.227C71.5576 24.4473 71.9924 24.7409 72.391 25.1447C72.7895 25.5117 73.0794 25.9889 73.2968 26.5395C73.5142 27.0901 73.6229 27.6774 73.6229 28.3014C73.6229 28.9254 73.5142 29.5494 73.2968 30.0633C73.0794 30.5772 72.7895 31.0544 72.391 31.4582C72.0287 31.8619 71.5576 32.1556 71.0142 32.3758C70.5069 32.5961 69.9272 32.7062 69.3113 32.7062C68.6953 32.7062 68.1156 32.5961 67.6084 32.3758C67.1011 32.1556 66.6301 31.8252 66.2316 31.4582C65.8692 31.0544 65.5432 30.6139 65.3258 30.0633C65.1084 29.5127 64.9997 28.9254 64.9997 28.3014C64.9997 27.6774 65.1084 27.0534 65.3258 26.5395C65.5432 25.9889 65.833 25.5485 66.2316 25.1447C66.6301 24.7409 67.0649 24.4473 67.6084 24.227C68.1156 24.0068 68.6953 23.8967 69.3113 23.8967ZM75.362 35.6794V24.1536H77.4997V25.1814C77.6808 24.851 78.0069 24.5574 78.4417 24.3371C78.8765 24.1169 79.42 23.9701 80.0359 23.9701C80.6518 23.9701 81.1591 24.0802 81.6301 24.3004C82.1011 24.5207 82.4997 24.8143 82.8258 25.2181C83.1519 25.5852 83.4055 26.0623 83.5866 26.5762C83.7678 27.0901 83.8403 27.6774 83.8403 28.2647C83.8403 28.8887 83.7316 29.476 83.5504 30.0266C83.3692 30.5405 83.1156 31.0177 82.7533 31.4215C82.4272 31.7885 82.0287 32.1189 81.5214 32.3391C81.0504 32.5594 80.5069 32.6695 79.9272 32.6695C79.3475 32.6695 78.8765 32.5594 78.4779 32.3758C78.0794 32.1556 77.7895 31.9354 77.5721 31.6417V35.6427H75.362V35.6794ZM81.6301 28.3014C81.6301 27.5673 81.4127 26.98 81.0142 26.5762C80.6156 26.1725 80.1446 25.9522 79.5649 25.9522C79.275 25.9522 79.0214 26.0256 78.7678 26.1358C78.5142 26.2459 78.2968 26.3927 78.1156 26.5762C77.9345 26.7598 77.7895 27.0167 77.6808 27.3104C77.5721 27.604 77.5359 27.9344 77.5359 28.3014C77.5359 28.6685 77.5721 28.9989 77.6808 29.2925C77.7895 29.5862 77.9345 29.8064 78.1156 30.0266C78.2968 30.2469 78.5142 30.3937 78.7678 30.5038C79.0214 30.6139 79.275 30.6506 79.5649 30.6506C80.1446 30.6506 80.6156 30.4304 81.0142 30.0266C81.4127 29.6229 81.6301 29.0356 81.6301 28.3014ZM85.5432 32.4492V20.226H87.7533V32.4492H85.5432ZM95.4345 27.3471C95.4345 27.1268 95.362 26.9433 95.2895 26.7598C95.2171 26.5395 95.1084 26.3927 94.9634 26.2459C94.8185 26.0991 94.6374 25.9522 94.3837 25.8788C94.1663 25.7687 93.9127 25.732 93.5866 25.732C93.2968 25.732 93.0432 25.7687 92.8258 25.8788C92.6084 25.9889 92.4272 26.099 92.2461 26.2826C92.1011 26.4294 91.9562 26.6129 91.8837 26.7965C91.8113 26.98 91.775 27.1635 91.7388 27.3838H95.4345V27.3471ZM97.4997 30.0633C97.391 30.4304 97.2461 30.7608 97.0287 31.0911C96.8113 31.4215 96.5577 31.6784 96.2316 31.9354C95.9055 32.1556 95.5432 32.3758 95.1446 32.486C94.7461 32.6328 94.275 32.7062 93.7678 32.7062C93.1881 32.7062 92.6446 32.5961 92.1374 32.4125C91.6301 32.1923 91.1591 31.9354 90.7968 31.5316C90.4345 31.1278 90.1084 30.6873 89.8548 30.1367C89.6374 29.5862 89.5287 28.9621 89.5287 28.2647C89.5287 27.604 89.6374 26.98 89.8548 26.4661C90.0721 25.9155 90.362 25.475 90.7243 25.108C91.0866 24.7409 91.5214 24.4473 92.0287 24.227C92.4997 24.0068 93.0069 23.8967 93.5504 23.8967C94.8185 23.8967 95.833 24.2637 96.5214 25.0346C97.2461 25.8054 97.5721 26.8699 97.5721 28.1913C97.5721 28.3381 97.5721 28.485 97.5721 28.6318C97.5721 28.7786 97.5721 28.852 97.5721 28.852H91.7026C91.7026 29.109 91.775 29.3659 91.8837 29.6229C91.9924 29.8431 92.1736 30.0633 92.3185 30.2102C92.4997 30.3937 92.7171 30.5038 92.9707 30.6139C93.2243 30.6873 93.4779 30.7608 93.7678 30.7608C94.275 30.7608 94.7098 30.6506 94.9997 30.3937C95.2895 30.1735 95.5069 29.8431 95.6519 29.476L97.4997 30.0633ZM103.659 32.4492V20.483H105.942V30.2102H111.195V32.4492H103.659ZM112.79 32.4492V24.1536H115V32.4492H112.79ZM112.536 21.4373C112.536 21.0336 112.681 20.7032 112.934 20.4463C113.188 20.1893 113.514 20.0425 113.913 20.0425C114.311 20.0425 114.637 20.1893 114.891 20.4463C115.145 20.7032 115.29 21.0336 115.29 21.4373C115.29 21.8044 115.145 22.1348 114.891 22.3917C114.637 22.6487 114.311 22.7955 113.913 22.7955C113.55 22.7955 113.224 22.6487 112.934 22.3917C112.681 22.1348 112.536 21.8044 112.536 21.4373ZM118.587 29.733C118.623 30.0633 118.732 30.357 118.985 30.6139C119.239 30.8709 119.601 31.0177 120.072 31.0177C120.434 31.0177 120.724 30.9443 120.905 30.7975C121.087 30.6139 121.159 30.4304 121.159 30.2102C121.159 30.0266 121.087 29.8431 120.942 29.733C120.797 29.5862 120.579 29.476 120.253 29.4026L119.166 29.1457C118.369 28.9621 117.79 28.6685 117.427 28.228C117.065 27.7875 116.884 27.2737 116.884 26.6863C116.884 26.3193 116.956 25.9522 117.101 25.6219C117.246 25.2915 117.463 24.9979 117.717 24.7776C118.007 24.5207 118.333 24.3371 118.695 24.1903C119.058 24.0435 119.492 23.9701 119.927 23.9701C120.507 23.9701 120.978 24.0435 121.376 24.227C121.775 24.3739 122.101 24.5941 122.355 24.851C122.608 25.108 122.79 25.3649 122.934 25.6586C123.043 25.9155 123.116 26.1725 123.152 26.3927L121.304 26.8332C121.268 26.7231 121.232 26.5762 121.195 26.4661C121.159 26.3193 121.087 26.2092 120.978 26.099C120.869 25.9889 120.724 25.8788 120.543 25.8421C120.398 25.7687 120.181 25.732 119.963 25.732C119.674 25.732 119.42 25.8054 119.203 25.9522C118.985 26.099 118.913 26.3193 118.913 26.5395C118.913 26.7598 118.985 26.9066 119.13 27.0167C119.275 27.1268 119.456 27.2369 119.674 27.2737L120.833 27.5306C121.63 27.7141 122.246 28.0078 122.645 28.485C123.043 28.9621 123.261 29.476 123.261 30.1C123.261 30.4304 123.188 30.7608 123.043 31.0911C122.934 31.4215 122.717 31.7151 122.463 31.9721C122.21 32.229 121.848 32.4492 121.449 32.5961C121.05 32.7429 120.579 32.8163 120.036 32.8163C119.42 32.8163 118.876 32.7429 118.478 32.5594C118.043 32.3758 117.717 32.1556 117.427 31.8987C117.174 31.6417 116.956 31.3481 116.811 31.0544C116.703 30.7608 116.63 30.4671 116.594 30.2469L118.587 29.733ZM127.79 24.1536H129.456V26.1358H127.79V29.6229C127.79 29.9899 127.862 30.2469 128.007 30.3937C128.188 30.5405 128.405 30.6139 128.732 30.6139C128.876 30.6139 128.985 30.6139 129.13 30.6139C129.275 30.6139 129.348 30.5772 129.42 30.5772V32.4492C129.311 32.486 129.166 32.5227 128.949 32.5961C128.732 32.6328 128.478 32.6695 128.152 32.6695C127.355 32.6695 126.703 32.4492 126.268 32.0088C125.833 31.5683 125.579 30.9443 125.579 30.1V26.1358H124.094V24.1536H124.492C124.927 24.1536 125.253 24.0435 125.434 23.7866C125.652 23.5296 125.761 23.1992 125.761 22.8322V21.6576H127.753V24.1536H127.79Z"
          fill={color || "#05051B"}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="170" height="37" fill="transparent" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AdpLogo;