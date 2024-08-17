type serviceDataType = {
    icon: string,
    title: string,
    description: string
}[]

export const serviceData: serviceDataType = [
    {
        title: "Web development",
        description: "Craft a user-friendly, high-performing website that perfectly reflects your brand identity and achieves your business goals.",
        icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.0224 7.19547C24.6488 4.61031 22.9602 2.91078 21.1752 2.41078V10.5234C23.2882 10.4946 25.3516 10.3691 27.293 10.1562C26.9299 9.09773 26.5056 8.10508 26.0224 7.19547ZM27.9565 12.4441C25.8084 12.6954 23.5177 12.8426 21.1751 12.8737V18.8248H28.7912C28.7205 16.5879 28.4362 14.4327 27.9565 12.4441ZM12.0565 12.3902C11.569 14.3937 11.28 16.5677 11.2087 18.8248H18.8247V12.8659C16.473 12.8192 14.1884 12.657 12.0565 12.3902ZM13.9776 7.19547C13.502 8.09062 13.0835 9.06641 12.7243 10.106C14.6494 10.3328 16.7055 10.4721 18.8248 10.5152V2.41078C17.0398 2.9107 15.3512 4.61031 13.9776 7.19547ZM11.2131 21.1752C11.3085 23.8592 11.7121 26.4229 12.3914 28.7185C14.3648 28.4512 16.5273 28.2771 18.8248 28.2034V21.1752H11.2131ZM37.459 10.1543C36.2373 10.6379 35.7472 10.8371 35.5891 10.9054C35.6522 10.8853 35.7161 10.8656 35.7784 10.8453C35.8173 10.8327 35.3627 11.0033 35.5891 10.9054C34.044 11.3961 32.2516 11.8048 30.2933 12.1208C30.7839 14.2263 31.0731 16.4888 31.1427 18.8248H40C39.8229 15.7425 38.9514 12.7914 37.459 10.1543ZM8.8618 21.1751H0C0.210234 24.8327 1.39953 28.3048 3.44211 31.2874C4.12063 30.8869 4.90695 30.5265 5.79961 30.2081C7.02836 29.7701 8.46008 29.3978 10.0554 29.0953C9.36359 26.6591 8.95539 23.9709 8.8618 21.1751ZM4.28094 10.7052C4.05094 10.6263 3.38734 10.3927 2.59586 10.0593C1.07031 12.7205 0.179219 15.7052 0 18.8248H8.85734C8.92773 16.4613 9.22266 14.1726 9.72383 12.0459C7.68945 11.6975 5.84461 11.247 4.28094 10.7052ZM5.83305 5.83305C5.138 6.52788 4.49426 7.2722 3.90687 8.06016C4.28059 8.2097 4.658 8.34985 5.03875 8.48047L5.05016 8.48438C6.56148 9.00789 8.36219 9.44125 10.3589 9.77242C10.7884 8.45289 11.3043 7.2175 11.902 6.09258C13.7352 2.64234 16.1605 0.476406 18.8248 0C13.9152 0.282109 9.33883 2.32734 5.83305 5.83305ZM11.902 33.7708C11.4977 33.0098 11.1312 32.1977 10.8029 31.3439C9.20812 31.633 7.78961 31.994 6.58891 32.4222C5.91336 32.6631 5.35641 32.9135 4.89617 33.1636C5.19715 33.5084 5.50959 33.8431 5.83297 34.167C9.33867 37.6727 13.9151 39.7179 18.8247 40C16.1605 39.5235 13.7352 37.221 11.902 33.7708ZM34.167 5.83313C30.6612 2.32734 26.0848 0.282109 21.1752 0C23.8395 0.476406 26.2646 2.64234 28.0979 6.09266C28.7063 7.23766 29.2302 8.49687 29.6641 9.84297C31.6675 9.53078 33.4877 9.11852 35.0273 8.61797C35.1963 8.55359 35.4624 8.43406 36.1587 8.14937C35.5539 7.32838 34.8881 6.55411 34.167 5.83313ZM29.3295 30.9916C28.9684 31.975 28.5576 32.9057 28.098 33.7708C26.2647 37.221 23.8396 39.5235 21.1752 40C26.0848 39.7179 30.6613 37.6727 34.167 34.167C34.7511 33.5831 35.2991 32.9643 35.808 32.3139C33.9644 31.7451 31.7578 31.298 29.3295 30.9916ZM13.187 30.9821C13.4299 31.5702 13.6936 32.1334 13.9776 32.668C15.3511 35.2531 17.0398 37.0892 18.8248 37.5892V30.5546C16.8172 30.6203 14.9248 30.7646 13.187 30.9821ZM31.1382 21.1751C31.0494 23.8271 30.6777 26.3824 30.0493 28.7177C32.7559 29.0811 35.1988 29.6148 37.1973 30.2941C38.8495 27.545 39.8127 24.4334 40 21.1752L31.1382 21.1751ZM21.1752 21.1752V28.1635C21.2403 28.1634 21.305 28.1628 21.3703 28.1628C23.5393 28.1628 25.6663 28.2619 27.6867 28.4502C28.3191 26.2239 28.6952 23.7549 28.7869 21.1752H21.1752ZM21.3703 30.5133C21.305 30.5133 21.2402 30.5138 21.1752 30.514V37.5894C22.9602 37.0893 24.6488 35.2532 26.0223 32.668C26.3452 32.0605 26.6413 31.4158 26.911 30.7396C25.1334 30.591 23.2709 30.5133 21.3703 30.5133Z" fill="white"/>
</svg>
`
    },
    {
        title: "Custom software",
        description: "Streamline your operations and boost efficiency with custom software solutions meticulously tailored to your specific needs.",
        icon: `<svg width="46" height="41" viewBox="0 0 46 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M40.4072 3.85161L41.8724 2.75115C42.1119 2.56069 42.2739 2.67356 42.3867 2.79348L43.2672 3.68231C43.4081 3.8234 43.4292 4.04208 43.3095 4.19727L42.1965 5.71393C41.7808 6.28532 41.7104 7.04718 42.0203 7.70322C42.126 7.92896 42.2246 8.16175 42.3092 8.40159C42.5487 9.0788 43.1404 9.57965 43.8449 9.67841L45.6553 9.96058C45.8596 9.98879 46.0005 10.151 46.0005 10.3485V11.6253C46.0005 11.8158 45.8596 11.9922 45.6482 12.0204L43.8378 12.2955C43.1334 12.4013 42.5416 12.9022 42.3021 13.5794C42.2176 13.8192 42.1119 14.052 42.0063 14.2777C41.6963 14.9267 41.7667 15.6886 42.1894 16.267L43.3024 17.7837C43.4151 17.9389 43.4011 18.1576 43.2602 18.2986L42.3796 19.1875C42.3162 19.251 42.2387 19.3074 42.1471 19.3215C42.0344 19.1945 41.8583 19.1169 41.6822 19.0958L40.3931 18.1293C39.8225 17.7061 39.0335 17.6355 38.3784 17.9459C38.16 18.0517 37.9346 18.1435 37.7091 18.2281C37.0329 18.4821 36.5398 19.0746 36.4411 19.78L36.1594 21.6353C36.1312 21.8258 35.9692 21.9668 35.7719 21.9668H34.5462C34.356 21.9668 34.1799 21.8328 34.1517 21.6353L33.877 19.78C33.7713 19.0676 33.2782 18.475 32.6019 18.2281C32.3765 18.1435 32.1511 18.0447 31.9327 17.9459C31.6721 17.8119 31.3762 17.7484 31.0803 17.7484C30.6647 17.7484 30.2561 17.8824 29.925 18.1293L28.4527 19.2298C28.2132 19.4062 28.0512 19.3074 27.9315 19.1875L27.0579 18.2986C26.9171 18.1576 26.8959 17.9389 27.0157 17.7837L28.1217 16.267C28.5373 15.6956 28.6077 14.9338 28.3048 14.2777C28.1921 14.052 28.1005 13.8192 28.016 13.5794C27.7765 12.9022 27.1847 12.4013 26.4803 12.2955L24.6628 12.0204C24.4726 11.9922 24.3317 11.8229 24.3317 11.6253V10.3485C24.3307 10.2547 24.3637 10.1637 24.4246 10.0924C24.4855 10.021 24.5701 9.97422 24.6628 9.96058L26.4733 9.67841C26.8237 9.62833 27.1536 9.48274 27.4269 9.25755C27.7002 9.03237 27.9064 8.73625 28.023 8.40159C28.1076 8.16175 28.2062 7.92896 28.3119 7.70322C28.6218 7.05423 28.5514 6.29238 28.1287 5.71393L27.0227 4.19727C26.91 4.04208 26.9241 3.8234 27.065 3.68231L27.9385 2.79348C28.0583 2.67356 28.2203 2.56774 28.4598 2.75115L29.9321 3.85161C30.5097 4.26781 31.2987 4.34541 31.9468 4.03502C32.1652 3.92921 32.3906 3.8375 32.616 3.75285C33.2923 3.4989 33.7854 2.90635 33.8911 2.20092L34.1658 0.345657C34.1793 0.250273 34.2265 0.162913 34.2989 0.0994749C34.3713 0.0360366 34.4641 0.000736962 34.5603 0H35.786C35.8811 0.00197638 35.9724 0.0378777 36.0434 0.101243C36.1144 0.164609 36.1606 0.251279 36.1735 0.345657L36.4552 2.20092C36.5058 2.55056 36.6506 2.87979 36.874 3.15322C37.0974 3.42665 37.391 3.63396 37.7232 3.75285C37.9487 3.8375 38.1741 3.93626 38.3925 4.03502C39.0405 4.35246 39.8366 4.27487 40.4072 3.85161ZM30.1364 10.9834C30.1364 13.7628 32.3976 16.0272 35.1731 16.0272C36.508 16.0272 37.7883 15.4962 38.7322 14.5509C39.6761 13.6057 40.2064 12.3237 40.2064 10.9869C40.2064 9.65021 39.6761 8.3682 38.7322 7.42297C37.7883 6.47774 36.508 5.94672 35.1731 5.94672C32.3976 5.94672 30.1364 8.20407 30.1364 10.9834ZM31.6932 10.9834C31.6932 9.06468 33.25 7.50569 35.1732 7.50569C37.0893 7.50569 38.6461 9.06468 38.6461 10.9834C38.6461 12.9021 37.0893 14.4682 35.1732 14.4682C33.2571 14.4682 31.6932 12.9021 31.6932 10.9834ZM3.24772 40.5618H38.4911C39.7731 40.5618 40.8228 39.5178 40.8228 38.2268V20.3796L39.4773 19.385C39.4183 19.344 39.3499 19.3186 39.2784 19.3112C39.207 19.3038 39.1348 19.3146 39.0687 19.3427C38.801 19.4696 38.5333 19.5825 38.2515 19.6883C38.1107 19.7448 38.012 19.8576 37.9979 19.9987L37.7162 21.854C37.6452 22.3162 37.4118 22.7379 37.0579 23.0431C36.704 23.3483 36.253 23.517 35.786 23.5188H34.5603C33.6022 23.5188 32.771 22.7992 32.6301 21.854L32.3483 19.9987C32.3272 19.8576 32.2215 19.7448 32.0806 19.6883C31.8051 19.5864 31.5348 19.471 31.2705 19.3427C31.1296 19.2792 30.9676 19.2933 30.8619 19.385L29.3896 20.4713C28.6288 21.0427 27.5017 20.951 26.8325 20.2879L25.9519 19.3991C25.6247 19.0683 25.4263 18.6312 25.3927 18.1668C25.3591 17.7023 25.4925 17.2412 25.7688 16.8666L26.8889 15.35C26.9734 15.2301 26.9804 15.0749 26.917 14.9479C26.7832 14.6657 26.6705 14.3906 26.5648 14.1014C26.5419 14.033 26.5011 13.972 26.4465 13.9248C26.392 13.8776 26.3258 13.846 26.2549 13.8333L24.4444 13.5511C23.982 13.4832 23.5598 13.2502 23.2555 12.8949C22.9513 12.5397 22.7856 12.0863 22.789 11.6183V10.3415C22.789 9.37507 23.4793 8.55678 24.4444 8.40864L26.2549 8.13353C26.3957 8.11236 26.5225 8.00655 26.5648 7.86547C26.6634 7.57624 26.7832 7.28702 26.917 7.01896C26.9804 6.88493 26.9663 6.72973 26.8889 6.61687L26.6353 6.26416H3.24772C1.95859 6.27826 0.916016 7.32934 0.916016 8.61321V12.6835H20.8588C21.2885 12.6835 21.6337 13.0362 21.6337 13.4594C21.6337 13.8968 21.2815 14.2354 20.8588 14.2354H0.916016V38.2268C0.916016 39.5248 1.95859 40.5618 3.24772 40.5618ZM6.16412 10.2639H4.51572C4.08601 10.2639 3.74083 9.91119 3.74083 9.48794C3.74083 9.05763 4.09306 8.71197 4.51572 8.71197H6.16412C6.59384 8.71197 6.93901 9.06469 6.93901 9.48794C6.93901 9.91119 6.59384 10.2639 6.16412 10.2639ZM9.84133 10.2639H8.19997C7.76321 10.2639 7.42508 9.91119 7.42508 9.48794C7.42508 9.05763 7.77026 8.71197 8.19997 8.71197H9.84133C10.2781 8.71197 10.6162 9.06469 10.6162 9.48794C10.6162 9.91119 10.2781 10.2639 9.84133 10.2639ZM13.5255 10.2639H11.8771C11.4474 10.2639 11.1023 9.91119 11.1023 9.48794C11.1023 9.05763 11.4545 8.71197 11.8771 8.71197H13.5255C13.9553 8.71197 14.3004 9.06469 14.3004 9.48794C14.3004 9.91119 13.9482 10.2639 13.5255 10.2639ZM24.9446 21.6353H25.7688C26.1985 21.6353 26.5437 21.988 26.5437 22.4113C26.5437 22.8486 26.1915 23.1872 25.7688 23.1872H24.9446C24.5149 23.1872 24.1697 22.8416 24.1697 22.4113C24.1627 21.988 24.5149 21.6353 24.9446 21.6353ZM24.9446 26.6226H36.8074C37.2442 26.6226 37.5823 26.9753 37.5823 27.3986C37.5823 27.8219 37.2371 28.1746 36.8074 28.1746H24.9446C24.5149 28.1746 24.1697 27.8219 24.1697 27.3986C24.1697 26.9753 24.5149 26.6226 24.9446 26.6226ZM4.56503 18.99C4.56503 17.7061 5.60761 16.655 6.89675 16.655H17.8649C18.4828 16.6569 19.0748 16.9035 19.5116 17.341C19.9485 17.7784 20.1948 18.3713 20.1966 18.99V25.5504C20.1966 26.8413 19.147 27.8853 17.8649 27.8853H6.89675C5.60761 27.8853 4.56503 26.8413 4.56503 25.5504V18.99ZM4.9243 31.617H36.8004C37.2301 31.617 37.5753 31.9627 37.5753 32.393C37.5753 32.8233 37.2231 33.169 36.8004 33.169H4.9243C4.49459 33.169 4.14941 32.8162 4.14941 32.393C4.14941 31.9556 4.50163 31.617 4.9243 31.617ZM4.9243 36.5973H36.8004C37.2301 36.5973 37.5753 36.95 37.5753 37.3733C37.5753 37.8036 37.2231 38.1492 36.8004 38.1492H4.9243C4.49459 38.1492 4.14941 37.7965 4.14941 37.3733C4.14941 36.943 4.50163 36.5973 4.9243 36.5973ZM17.8649 26.3264H6.89675C6.46704 26.3264 6.11482 25.9807 6.12186 25.5504V18.99C6.12186 18.5667 6.46704 18.214 6.89675 18.214H17.8649C18.2876 18.214 18.6398 18.5597 18.6398 18.99V25.5504C18.6398 25.9737 18.2946 26.3264 17.8649 26.3264Z" fill="white"/>
</svg>
`
    },
    {
        title: "E-commerce",
        description: "Turn your business online with a secure and scalable e-commerce platform, empowering you to sell your products to a global audience.",
        icon: `<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_109_1105" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="44" height="44">
<path d="M44 0H0V44H44V0Z" fill="white"/>
</mask>
<g mask="url(#mask0_109_1105)">
<path d="M17.2494 19.7388H14.6823L13.8607 16.7028H16.8383L17.2494 19.7388ZM15.0631 21.2059L15.8847 24.2419H17.8509L17.4398 21.2059H15.0631ZM18.7303 19.7388H21.4143V16.7028H18.3198L18.7303 19.7388ZM19.3318 24.2419H21.4149V21.2059H18.9214L19.3318 24.2419ZM22.8814 24.2419H24.9783L25.3894 21.2059H22.8814V24.2419ZM22.8814 19.7388H25.5805L25.9909 16.7028H22.8814V19.7388ZM26.4605 24.2419H27.3109C27.9709 24.2419 28.5574 23.8019 28.7341 23.1563L29.2469 21.2059H26.8565L26.4605 24.2419ZM30.1269 16.7028H27.4725L27.0614 19.7388H29.6429L30.3621 17.0108C30.3723 16.9732 30.3737 16.9338 30.366 16.8956C30.3584 16.8574 30.342 16.8215 30.3181 16.7908C30.2942 16.7635 30.2648 16.7416 30.2319 16.7264C30.199 16.7112 30.1632 16.7032 30.1269 16.7028ZM19.7278 30.8859C19.7278 31.1946 19.1709 31.1946 19.1709 30.8859C19.1735 30.8129 19.2037 30.7435 19.2553 30.6919C19.307 30.6402 19.3763 30.61 19.4494 30.6075C19.5225 30.61 19.592 30.6403 19.6436 30.6921C19.6953 30.7439 19.7254 30.8128 19.7278 30.8859ZM26.2694 30.8859C26.2694 31.1946 25.7262 31.1946 25.7262 30.8859C25.7262 30.7395 25.8445 30.6075 26.0054 30.6075C26.1525 30.6075 26.2694 30.7388 26.2694 30.8859ZM26.2694 30.8859C26.2694 31.1946 25.7262 31.1946 25.7262 30.8859C25.7262 30.7395 25.8445 30.6075 26.0054 30.6075C26.1525 30.6075 26.2694 30.7388 26.2694 30.8859ZM19.7278 30.8859C19.7278 31.1946 19.1709 31.1946 19.1709 30.8859C19.1735 30.8129 19.2037 30.7435 19.2553 30.6919C19.307 30.6402 19.3763 30.61 19.4494 30.6075C19.5225 30.61 19.592 30.6403 19.6436 30.6921C19.6953 30.7439 19.7254 30.8128 19.7278 30.8859ZM19.7278 30.8859C19.7278 31.1946 19.1709 31.1946 19.1709 30.8859C19.1735 30.8129 19.2037 30.7435 19.2553 30.6919C19.307 30.6402 19.3763 30.61 19.4494 30.6075C19.5225 30.61 19.592 30.6403 19.6436 30.6921C19.6953 30.7439 19.7254 30.8128 19.7278 30.8859ZM26.2694 30.8859C26.2694 31.1946 25.7262 31.1946 25.7262 30.8859C25.7262 30.7395 25.8445 30.6075 26.0054 30.6075C26.1525 30.6075 26.2694 30.7388 26.2694 30.8859ZM26.2694 30.8859C26.2694 31.1946 25.7262 31.1946 25.7262 30.8859C25.7262 30.7395 25.8445 30.6075 26.0054 30.6075C26.1525 30.6075 26.2694 30.7388 26.2694 30.8859ZM19.7278 30.8859C19.7278 31.1946 19.1709 31.1946 19.1709 30.8859C19.1735 30.8129 19.2037 30.7435 19.2553 30.6919C19.307 30.6402 19.3763 30.61 19.4494 30.6075C19.5225 30.61 19.592 30.6403 19.6436 30.6921C19.6953 30.7439 19.7254 30.8128 19.7278 30.8859ZM19.7278 30.8859C19.7278 31.1946 19.1709 31.1946 19.1709 30.8859C19.1735 30.8129 19.2037 30.7435 19.2553 30.6919C19.307 30.6402 19.3763 30.61 19.4494 30.6075C19.5225 30.61 19.592 30.6403 19.6436 30.6921C19.6953 30.7439 19.7254 30.8128 19.7278 30.8859ZM26.2694 30.8859C26.2694 31.1946 25.7262 31.1946 25.7262 30.8859C25.7262 30.7395 25.8445 30.6075 26.0054 30.6075C26.1525 30.6075 26.2694 30.7388 26.2694 30.8859ZM26.2694 30.8859C26.2694 31.1946 25.7262 31.1946 25.7262 30.8859C25.7262 30.7395 25.8445 30.6075 26.0054 30.6075C26.1525 30.6075 26.2694 30.7388 26.2694 30.8859ZM19.7278 30.8859C19.7278 31.1946 19.1709 31.1946 19.1709 30.8859C19.1735 30.8129 19.2037 30.7435 19.2553 30.6919C19.307 30.6402 19.3763 30.61 19.4494 30.6075C19.5225 30.61 19.592 30.6403 19.6436 30.6921C19.6953 30.7439 19.7254 30.8128 19.7278 30.8859ZM19.7278 30.8859C19.7278 31.1946 19.1709 31.1946 19.1709 30.8859C19.1735 30.8129 19.2037 30.7435 19.2553 30.6919C19.307 30.6402 19.3763 30.61 19.4494 30.6075C19.5225 30.61 19.592 30.6403 19.6436 30.6921C19.6953 30.7439 19.7254 30.8128 19.7278 30.8859ZM26.2694 30.8859C26.2694 31.1946 25.7262 31.1946 25.7262 30.8859C25.7262 30.7395 25.8445 30.6075 26.0054 30.6075C26.1525 30.6075 26.2694 30.7388 26.2694 30.8859ZM26.2694 30.8859C26.2694 31.1946 25.7262 31.1946 25.7262 30.8859C25.7262 30.7395 25.8445 30.6075 26.0054 30.6075C26.1525 30.6075 26.2694 30.7388 26.2694 30.8859ZM19.7278 30.8859C19.7278 31.1946 19.1709 31.1946 19.1709 30.8859C19.1735 30.8129 19.2037 30.7435 19.2553 30.6919C19.307 30.6402 19.3763 30.61 19.4494 30.6075C19.5225 30.61 19.592 30.6403 19.6436 30.6921C19.6953 30.7439 19.7254 30.8128 19.7278 30.8859ZM41.2308 7.5941V32.0746L37.0061 28.5106C36.6021 28.1744 36.0947 27.9877 35.5692 27.9819C35.2744 27.9818 34.9825 28.0398 34.7101 28.1526C34.4377 28.2654 34.1902 28.4307 33.9818 28.6392C33.7733 28.8476 33.608 29.0951 33.4952 29.3675C33.3824 29.6399 33.3244 29.9318 33.3245 30.2266V36.7682H3.27113C2.40379 36.7674 1.57219 36.4226 0.958895 35.8093C0.345598 35.196 0.00072824 34.3644 0 33.497V7.5941H41.2308ZM21.1949 30.8866C21.1938 30.4239 21.0095 29.9804 20.6822 29.6533C20.355 29.3261 19.9114 29.1419 19.4487 29.141C18.9862 29.1423 18.543 29.3266 18.216 29.6537C17.8891 29.9808 17.7049 30.4241 17.7038 30.8866C17.7031 31.116 17.7477 31.3433 17.8352 31.5555C17.9227 31.7676 18.0512 31.9603 18.2135 32.1225C18.3757 32.2847 18.5684 32.4133 18.7805 32.5008C18.9926 32.5882 19.2199 32.6329 19.4494 32.6322C19.6789 32.6329 19.9062 32.5882 20.1184 32.5007C20.3305 32.4132 20.5233 32.2846 20.6855 32.1223C20.8478 31.96 20.9763 31.7672 21.0637 31.555C21.1512 31.3428 21.1958 31.1161 21.1949 30.8866ZM27.7365 30.8866C27.7365 29.933 26.9589 29.141 26.0054 29.141C25.5428 29.1421 25.0994 29.3264 24.7723 29.6535C24.4452 29.9806 24.2609 30.424 24.2598 30.8866C24.2591 31.1161 24.3038 31.3435 24.3913 31.5556C24.4788 31.7678 24.6074 31.9605 24.7697 32.1228C24.932 32.285 25.1248 32.4135 25.337 32.501C25.5492 32.5884 25.7766 32.633 26.0061 32.6322C26.2344 32.6313 26.4603 32.5854 26.6709 32.4971C26.8814 32.4088 27.0725 32.2799 27.2333 32.1177C27.394 31.9555 27.5211 31.7633 27.6075 31.5519C27.6938 31.3405 27.7377 31.1149 27.7365 30.8866ZM31.4909 15.9108C31.1541 15.4852 30.6701 15.2363 30.1269 15.2363H13.4647L13.0391 13.6083C12.93 13.2065 12.6911 12.852 12.3596 12.5999C12.0281 12.3479 11.6227 12.2125 11.2063 12.2148H10.12C9.70956 12.2148 9.38713 12.5379 9.38713 12.9477C9.38713 13.3588 9.71025 13.6812 10.1207 13.6812H11.2063C11.2988 13.681 11.389 13.711 11.463 13.7665C11.5371 13.8221 11.591 13.9003 11.6167 13.9892L15.1223 27.0875C15.3718 28.0555 16.2518 28.7155 17.2487 28.7155H28.9981C29.4085 28.7155 29.7309 28.3923 29.7309 27.9819C29.7302 27.7878 29.6528 27.6018 29.5155 27.4645C29.3782 27.3272 29.1922 27.2498 28.9981 27.249H17.2487C16.9118 27.249 16.6183 27.029 16.5303 26.7059L16.2663 25.709H27.3109C27.9558 25.7083 28.5825 25.4953 29.0942 25.1029C29.6059 24.7105 29.9741 24.1605 30.1421 23.5379L31.7845 17.3779C31.8516 17.1273 31.8601 16.8645 31.8092 16.61C31.7583 16.3556 31.6494 16.1163 31.4909 15.9108ZM26.2694 30.8859C26.2694 31.1946 25.7262 31.1946 25.7262 30.8859C25.7262 30.7395 25.8445 30.6075 26.0054 30.6075C26.1525 30.6075 26.2694 30.7388 26.2694 30.8859ZM19.7278 30.8859C19.7278 31.1946 19.1709 31.1946 19.1709 30.8859C19.1735 30.8129 19.2037 30.7435 19.2553 30.6919C19.307 30.6402 19.3763 30.61 19.4494 30.6075C19.5225 30.61 19.592 30.6403 19.6436 30.6921C19.6953 30.7439 19.7254 30.8128 19.7278 30.8859ZM19.7278 30.8859C19.7278 31.1946 19.1709 31.1946 19.1709 30.8859C19.1735 30.8129 19.2037 30.7435 19.2553 30.6919C19.307 30.6402 19.3763 30.61 19.4494 30.6075C19.5225 30.61 19.592 30.6403 19.6436 30.6921C19.6953 30.7439 19.7254 30.8128 19.7278 30.8859ZM26.2694 30.8859C26.2694 31.1946 25.7262 31.1946 25.7262 30.8859C25.7262 30.7395 25.8445 30.6075 26.0054 30.6075C26.1525 30.6075 26.2694 30.7388 26.2694 30.8859ZM26.2694 30.8859C26.2694 31.1946 25.7262 31.1946 25.7262 30.8859C25.7262 30.7395 25.8445 30.6075 26.0054 30.6075C26.1525 30.6075 26.2694 30.7388 26.2694 30.8859ZM19.7278 30.8859C19.7278 31.1946 19.1709 31.1946 19.1709 30.8859C19.1735 30.8129 19.2037 30.7435 19.2553 30.6919C19.307 30.6402 19.3763 30.61 19.4494 30.6075C19.5225 30.61 19.592 30.6403 19.6436 30.6921C19.6953 30.7439 19.7254 30.8128 19.7278 30.8859ZM19.7278 30.8859C19.7278 31.1946 19.1709 31.1946 19.1709 30.8859C19.1735 30.8129 19.2037 30.7435 19.2553 30.6919C19.307 30.6402 19.3763 30.61 19.4494 30.6075C19.5225 30.61 19.592 30.6403 19.6436 30.6921C19.6953 30.7439 19.7254 30.8128 19.7278 30.8859ZM26.2694 30.8859C26.2694 31.1946 25.7262 31.1946 25.7262 30.8859C25.7262 30.7395 25.8445 30.6075 26.0054 30.6075C26.1525 30.6075 26.2694 30.7388 26.2694 30.8859ZM26.2694 30.8859C26.2694 31.1946 25.7262 31.1946 25.7262 30.8859C25.7262 30.7395 25.8445 30.6075 26.0054 30.6075C26.1525 30.6075 26.2694 30.7388 26.2694 30.8859ZM19.7278 30.8859C19.7278 31.1946 19.1709 31.1946 19.1709 30.8859C19.1735 30.8129 19.2037 30.7435 19.2553 30.6919C19.307 30.6402 19.3763 30.61 19.4494 30.6075C19.5225 30.61 19.592 30.6403 19.6436 30.6921C19.6953 30.7439 19.7254 30.8128 19.7278 30.8859ZM19.7278 30.8859C19.7278 31.1946 19.1709 31.1946 19.1709 30.8859C19.1735 30.8129 19.2037 30.7435 19.2553 30.6919C19.307 30.6402 19.3763 30.61 19.4494 30.6075C19.5225 30.61 19.592 30.6403 19.6436 30.6921C19.6953 30.7439 19.7254 30.8128 19.7278 30.8859ZM26.2694 30.8859C26.2694 31.1946 25.7262 31.1946 25.7262 30.8859C25.7262 30.7395 25.8445 30.6075 26.0054 30.6075C26.1525 30.6075 26.2694 30.7388 26.2694 30.8859ZM41.2308 4.85097V6.12766H0V4.85166C0 3.04766 1.46644 1.59497 3.27113 1.59497H37.9596C39.7636 1.59497 41.2308 3.04697 41.2308 4.85097ZM11.6903 4.22122C11.6903 3.83966 11.3822 3.53166 11.0007 3.53166H3.46156C3.27877 3.53166 3.10347 3.60427 2.97421 3.73353C2.84496 3.86278 2.77234 4.03808 2.77234 4.22088C2.77234 4.40367 2.84496 4.57897 2.97421 4.70823C3.10347 4.83748 3.27877 4.9101 3.46156 4.9101H11C11.3816 4.9101 11.6903 4.6021 11.6903 4.22122ZM32.4005 4.22122C32.4 4.02684 32.3225 3.84057 32.185 3.70311C32.0476 3.56566 31.8613 3.4882 31.6669 3.48766C31.2709 3.48766 30.9341 3.82453 30.9341 4.22122C30.9341 4.63166 31.2709 4.9541 31.6669 4.9541C32.0781 4.9541 32.4005 4.63097 32.4005 4.22122ZM35.4365 4.22122C35.4365 3.82453 35.0996 3.48766 34.7036 3.48766C34.5091 3.48802 34.3227 3.5654 34.1851 3.70287C34.0475 3.84034 33.9699 4.02672 33.9694 4.22122C33.9694 4.63166 34.2925 4.9541 34.7029 4.9541C34.8971 4.95337 35.0831 4.87593 35.2204 4.73864C35.3576 4.60136 35.4358 4.41537 35.4365 4.22122ZM38.4581 4.22122C38.4575 4.02695 38.3802 3.84079 38.2429 3.70336C38.1055 3.56592 37.9195 3.48838 37.7252 3.48766C37.5308 3.4882 37.3445 3.56566 37.2071 3.70311C37.0696 3.84057 36.9922 4.02684 36.9916 4.22122C36.9916 4.63166 37.3148 4.9541 37.7252 4.9541C38.1356 4.9541 38.4581 4.63097 38.4581 4.22122ZM26.2694 30.8859C26.2694 31.1946 25.7262 31.1946 25.7262 30.8859C25.7262 30.7395 25.8445 30.6075 26.0054 30.6075C26.1525 30.6075 26.2694 30.7388 26.2694 30.8859ZM19.7278 30.8859C19.7278 31.1946 19.1709 31.1946 19.1709 30.8859C19.1735 30.8129 19.2037 30.7435 19.2553 30.6919C19.307 30.6402 19.3763 30.61 19.4494 30.6075C19.5225 30.61 19.592 30.6403 19.6436 30.6921C19.6953 30.7439 19.7254 30.8128 19.7278 30.8859ZM19.7278 30.8859C19.7278 31.1946 19.1709 31.1946 19.1709 30.8859C19.1735 30.8129 19.2037 30.7435 19.2553 30.6919C19.307 30.6402 19.3763 30.61 19.4494 30.6075C19.5225 30.61 19.592 30.6403 19.6436 30.6921C19.6953 30.7439 19.7254 30.8128 19.7278 30.8859ZM19.7278 30.8859C19.7278 31.1946 19.1709 31.1946 19.1709 30.8859C19.1735 30.8129 19.2037 30.7435 19.2553 30.6919C19.307 30.6402 19.3763 30.61 19.4494 30.6075C19.5225 30.61 19.592 30.6403 19.6436 30.6921C19.6953 30.7439 19.7254 30.8128 19.7278 30.8859ZM43.7243 36.0978L36.058 29.634C35.5554 29.2105 34.7868 29.568 34.7868 30.2252L34.7896 40.2531C34.7896 40.909 35.5541 41.2672 36.0587 40.8485L38.1638 39.0981L39.3298 41.6061C39.4842 41.9379 39.764 42.1949 40.1078 42.3204C40.4516 42.4459 40.8312 42.4297 41.163 42.2754C41.4949 42.121 41.7518 41.8412 41.8773 41.4974C42.0029 41.1536 41.9867 40.774 41.8323 40.4422L40.667 37.9348L43.362 37.4522C44.0069 37.3367 44.2255 36.5213 43.7243 36.0978Z" fill="white"/>
</g>
</svg>
`
    },
    {
        title: "SEO",
        description: "Increase your website's visibility in search engine results and attract more qualified leads through strategic search engine optimization techniques.",
        icon: `<svg width="60" height="29" viewBox="0 0 60 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.47066 16.7189C3.69281 16.7189 1.96906 16.1461 0.846949 15.5706L0 19.0172C1.0391 19.5918 3.11916 20.1384 5.22534 20.1384C10.2865 20.1384 12.666 17.5126 12.666 14.4215C12.666 11.8228 11.1335 10.127 7.87905 8.92282C5.49864 8.01897 4.45954 7.50035 4.45954 6.32414C4.45954 5.36619 5.33448 4.54536 7.14031 4.54536C8.94614 4.54536 10.2595 5.06584 10.9973 5.42122L11.9282 2.05674C10.8331 1.56424 9.30152 1.12678 7.22239 1.12678C2.87291 1.12678 0.24625 3.53331 0.24625 6.67952C0.24625 9.36028 2.2433 11.056 5.30743 12.1231C7.52274 12.9169 8.3986 13.5736 8.3986 14.7209C8.3986 15.926 7.38562 16.7189 5.47066 16.7189ZM27.247 16.4456H19.6701V12.069H26.4532V8.67657H19.6701V4.84664H26.8645V1.42713H15.4839V19.8651H27.247V16.4456ZM41.3457 21.2642C43.9341 21.2642 46.3061 20.3324 48.153 18.7896L51.8253 22.2166C51.8197 22.599 51.9587 22.9777 52.259 23.2585L57.6476 28.2898C57.9172 28.5416 58.2586 28.6657 58.6009 28.6657C58.8817 28.6653 59.1559 28.5806 59.388 28.4224C59.62 28.2643 59.7992 28.0401 59.9022 27.7789C60.0053 27.5176 60.0275 27.2315 59.9659 26.9575C59.9043 26.6835 59.7619 26.4344 59.557 26.2424L54.1684 21.212C54.0255 21.0802 53.8565 20.9799 53.6723 20.9177C53.4882 20.8555 53.293 20.8328 53.0994 20.851L49.4757 17.4697C51.093 15.558 51.98 13.1348 51.9792 10.6307C51.9792 4.76829 47.2109 0 41.3485 0C35.4861 0 30.715 4.77015 30.715 10.6316C30.714 16.4959 35.4833 21.2642 41.3457 21.2642ZM41.3457 2.79922C45.6653 2.79922 49.179 6.31294 49.179 10.6316C49.179 14.9503 45.6634 18.465 41.3457 18.465C37.0279 18.465 33.5123 14.9503 33.5123 10.6316C33.5123 6.31294 37.0261 2.79922 41.3457 2.79922Z" fill="white"/>
</svg>
`
    },
    {
        title: "API integration",
        description: "Connect your applications and data seamlessly, unlocking new possibilities with our expertise in API integration.",
        icon: `<svg width="50" height="49" viewBox="0 0 50 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.6635 15.0474C23.653 15.4015 23.4157 15.6982 23.0721 15.7853C22.1543 16.0188 21.2767 16.3825 20.4642 16.8648C20.1598 17.0457 19.7818 17.0036 19.5244 16.7615L18.0572 15.3795L15.4991 17.9377L16.8811 19.4048C17.1241 19.6622 17.1653 20.0403 16.9844 20.3446C16.5021 21.1571 16.1384 22.0338 15.9049 22.9525C15.8637 23.1183 15.7692 23.266 15.6359 23.3729C15.5026 23.4798 15.3378 23.5399 15.167 23.5439L13.1515 23.6042V27.2209L15.167 27.2821C15.5211 27.2926 15.8168 27.53 15.9049 27.8736C16.1384 28.7904 16.5011 29.668 16.9844 30.4805C17.1653 30.7858 17.1232 31.1629 16.8811 31.4203L15.4991 32.8884L18.0572 35.4456L19.5244 34.0636C19.7828 33.8215 20.1598 33.7794 20.4642 33.9603C21.2757 34.4426 22.1524 34.8053 23.0692 35.0388C23.4118 35.1259 23.6492 35.4226 23.6607 35.7767L23.7229 37.7932H27.3414L27.4036 35.7767C27.4141 35.4226 27.6524 35.1269 27.9951 35.0388C28.9098 34.8065 29.7865 34.4439 30.5982 33.9622C30.9025 33.7813 31.2796 33.8225 31.538 34.0646L33.008 35.4465L35.5661 32.8874L34.1842 31.4184C33.942 31.16 33.9009 30.7829 34.0808 30.4786C34.5624 29.6668 34.9253 28.7902 35.1584 27.8755C35.2455 27.5329 35.5422 27.2955 35.8963 27.284L37.9128 27.2218V23.6033L35.8963 23.5411C35.5432 23.5305 35.2465 23.2922 35.1594 22.9496C34.9259 22.0338 34.5641 21.1581 34.0818 20.3465C33.994 20.2002 33.9565 20.0292 33.9752 19.8597C33.9939 19.6901 34.0676 19.5313 34.1851 19.4077L35.5671 17.9377L33.0089 15.3795L31.5389 16.7605C31.2815 17.0026 30.9035 17.0438 30.5991 16.8639C29.7876 16.3815 28.9109 16.0188 27.9941 15.7853C27.6505 15.6982 27.4132 15.4015 27.4027 15.0474L27.3424 13.0319H23.7248L23.6635 15.0474ZM19.1329 40.9523C19.1329 42.8166 17.617 44.3326 15.7527 44.3326C13.8884 44.3326 12.3725 42.8166 12.3725 40.9523C12.3725 39.089 13.8884 37.5721 15.7527 37.5721C16.5537 37.5721 17.2897 37.8525 17.8697 38.3205L20.3599 35.2609C20.7101 35.4456 21.07 35.6102 21.4384 35.7557L18.6391 39.1952C18.9627 39.7241 19.1336 40.3323 19.1329 40.9523ZM38.3587 37.4266C38.9358 36.9682 39.6651 36.6926 40.4575 36.6926C42.3209 36.6926 43.8377 38.2095 43.8377 40.0728C43.8377 41.9371 42.3209 43.454 40.4575 43.454C38.5932 43.454 37.0773 41.9371 37.0773 40.0728C37.0773 39.4163 37.2668 38.8028 37.5922 38.2832L34.7211 35.4121L35.5336 34.5996L38.3587 37.4266ZM41.2241 16.7261C41.0461 16.3155 40.9466 15.8628 40.9466 15.3872C40.9466 13.5229 42.4635 12.0069 44.3268 12.0069C46.1901 12.0069 47.707 13.5229 47.707 15.3872C47.707 17.2505 46.1901 18.7674 44.3268 18.7674C43.3506 18.7674 42.4701 18.3511 41.8529 17.6869L35.9585 21.5342C35.8232 21.1697 35.6689 20.8126 35.4963 20.4642L41.2241 16.7261ZM10.2594 10.9504C9.71214 11.3087 9.07213 11.4993 8.41803 11.4987C6.55373 11.4987 5.0378 9.98186 5.0378 8.11852C5.0378 6.25422 6.55373 4.73828 8.41803 4.73828C10.2814 4.73828 11.7983 6.25422 11.7983 8.11852C11.7983 8.88893 11.5379 9.6 11.1025 10.1694L16.3461 15.413L15.5345 16.2246L10.2594 10.9504ZM8.28883 24.8388C8.01511 23.2473 6.62646 22.0328 4.95836 22.0328C3.09406 22.0328 1.57812 23.5487 1.57812 25.413C1.57812 27.2764 3.09406 28.7933 4.95836 28.7933C6.62646 28.7933 8.01511 27.5778 8.28883 25.9872H11.9657V24.8388H8.28883ZM29.534 23.3353C29.534 23.0176 29.7914 22.7611 30.1082 22.7611C30.425 22.7611 30.6824 23.0176 30.6824 23.3353V27.4907C30.6824 27.8075 30.425 28.065 30.1082 28.065C29.7914 28.065 29.534 27.8075 29.534 27.4907V23.3353ZM25.1469 23.3353C25.1469 23.0176 25.4044 22.7611 25.7211 22.7611H27.2811C28.1702 22.7611 28.8937 23.4846 28.8937 24.3737C28.8937 25.2637 28.1702 25.9872 27.2811 25.9872H26.2954V27.4907C26.2954 27.8075 26.0379 28.065 25.7211 28.065C25.4044 28.065 25.1469 27.8075 25.1469 27.4907V23.3353ZM26.2954 24.8388V23.9095H27.2811C27.5376 23.9095 27.7462 24.1182 27.7462 24.3737C27.7462 24.6302 27.5376 24.8388 27.2811 24.8388H26.2954ZM24.0932 24.6158V27.4907C24.0932 27.8075 23.8358 28.065 23.519 28.065C23.2022 28.065 22.9448 27.8075 22.9448 27.4907V26.6275H21.5322V27.4907C21.5322 27.8075 21.2748 28.065 20.958 28.065C20.6412 28.065 20.3838 27.8075 20.3838 27.4907V24.6158C20.3838 23.5928 21.2154 22.7611 22.2385 22.7611C23.2606 22.7611 24.0932 23.5928 24.0932 24.6158ZM22.2385 23.9095C22.628 23.9095 22.9448 24.2263 22.9448 24.6158V25.4791H21.5322V24.6158C21.5322 24.2263 21.849 23.9095 22.2385 23.9095ZM19.9091 19.7895C23.0099 16.6887 28.0553 16.6887 31.1561 19.7895C34.2569 22.8903 34.2569 27.9358 31.1561 31.0365C28.0563 34.1354 23.0099 34.1364 19.9091 31.0365C16.8093 27.9358 16.8093 22.8903 19.9091 19.7895Z" fill="white"/>
</svg>
`
    },
    {
        title: "Smart platforms",
        description: "Leverage the power of smart platforms to automate tasks, gain valuable insights from your data, and optimize your operations for maximum efficiency.",
        icon: `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.0007 48.5999C29.4757 48.5999 31.5817 46.9889 32.3197 44.7479H21.6817C22.0504 45.8679 22.7629 46.8431 23.7178 47.5347C24.6728 48.2263 25.8216 48.599 27.0007 48.5999ZM33.5437 42.0479V38.2859C33.5437 37.7909 33.1477 37.3859 32.6437 37.3859H21.3577C20.8537 37.3859 20.4577 37.7909 20.4577 38.2859V42.0479C20.4577 42.5519 20.8537 42.9479 21.3577 42.9479H32.6437C33.1477 42.9479 33.5437 42.5519 33.5437 42.0479ZM17.6677 29.9879C19.3351 31.4694 20.5149 33.421 21.0517 35.5859H32.9407C33.4717 33.4349 34.6417 31.4819 36.3157 30.0059C39.3397 27.3329 41.0767 23.4989 41.0767 19.4759C41.0767 15.4709 39.3667 11.6549 36.3787 8.9819C33.7687 6.6419 30.4927 5.3999 27.0187 5.3999C26.4787 5.3999 25.9387 5.4269 25.3897 5.4899C19.0897 6.1919 13.8967 11.2499 13.0597 17.5319C12.4297 22.2209 14.1487 26.8739 17.6677 29.9879ZM28.9717 23.4809C28.7917 23.6519 28.5577 23.7419 28.3327 23.7419C28.0987 23.7419 27.8737 23.6519 27.6937 23.4809C27.6032 23.3889 27.4954 23.3159 27.3764 23.266C27.2574 23.2162 27.1297 23.1905 27.0007 23.1905C26.8717 23.1905 26.744 23.2162 26.625 23.266C26.506 23.3159 26.3981 23.3889 26.3077 23.4809C25.9567 23.8319 25.3897 23.8319 25.0297 23.4809C24.6787 23.1299 24.6787 22.5539 25.0297 22.2029C26.1187 21.1229 27.8827 21.1229 28.9717 22.2029C29.3227 22.5539 29.3227 23.1299 28.9717 23.4809ZM31.6267 20.8169C31.5449 20.9009 31.4468 20.9673 31.3385 21.0122C31.2302 21.0571 31.1139 21.0794 30.9967 21.0779C30.7627 21.0779 30.5287 20.9969 30.3577 20.8169C29.9168 20.3761 29.3935 20.0264 28.8175 19.7878C28.2415 19.5492 27.6241 19.4264 27.0007 19.4264C26.3772 19.4264 25.7599 19.5492 25.1839 19.7878C24.6079 20.0264 24.0845 20.3761 23.6437 20.8169C23.4754 20.9852 23.2472 21.0797 23.0092 21.0797C22.7712 21.0797 22.543 20.9852 22.3747 20.8169C22.2064 20.6486 22.1119 20.4204 22.1119 20.1824C22.1119 19.9444 22.2064 19.7162 22.3747 19.5479C24.9217 16.9919 29.0797 16.9919 31.6267 19.5479C31.9777 19.8989 31.9777 20.4659 31.6267 20.8169ZM19.7107 16.8839C23.7337 12.8609 30.2677 12.8609 34.2907 16.8839C34.6417 17.2349 34.6417 17.8019 34.2907 18.1529C34.1107 18.3329 33.8857 18.4229 33.6517 18.4229C33.5339 18.4228 33.4174 18.3987 33.3091 18.3523C33.2008 18.3059 33.1031 18.2381 33.0217 18.1529C29.7007 14.8409 24.3007 14.8409 20.9797 18.1529C20.8964 18.2362 20.7974 18.3023 20.6886 18.3474C20.5797 18.3925 20.463 18.4157 20.3452 18.4157C20.2274 18.4157 20.1107 18.3925 20.0018 18.3474C19.8929 18.3023 19.794 18.2362 19.7107 18.1529C19.6274 18.0696 19.5613 17.9707 19.5162 17.8618C19.4711 17.7529 19.4479 17.6363 19.4479 17.5184C19.4479 17.4006 19.4711 17.2839 19.5162 17.175C19.5613 17.0662 19.6274 16.9673 19.7107 16.8839Z" fill="white"/>
</svg>
`
    },
    {
        title: "Consultancy services",
        description: "Get expert guidance and support for all your IT needs, from developing a winning strategy to successful implementation.",
        icon: `<svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.2408 7.31079V12.4243C29.2403 12.7785 29.0994 13.1181 28.8489 13.3686C28.5984 13.6191 28.2588 13.76 27.9046 13.7605H20.4082V16.2903C20.4082 16.483 20.5649 16.64 20.757 16.64H31.3468C31.475 16.64 31.5985 16.6901 31.6904 16.7795L34.1419 19.1607V17.1333C34.1419 16.8609 34.3628 16.64 34.6352 16.64H36.7382C36.9309 16.64 37.0878 16.4833 37.0878 16.2903V7.6607C37.0878 7.46775 36.9309 7.31107 36.7379 7.31107L29.2408 7.31079Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5745 3.79469V12.4232C11.5745 12.6162 11.7312 12.7731 11.9241 12.7731H14.0269C14.2993 12.7731 14.5202 12.994 14.5202 13.2664V15.3802L17.3839 12.8946C17.4736 12.8169 17.5884 12.7741 17.7072 12.7742H19.8841C19.9052 12.7729 19.9264 12.7729 19.9475 12.7742H27.9053C28.0982 12.7742 28.2549 12.6173 28.2549 12.4243V3.79442C28.2549 3.60175 28.0982 3.44507 27.9053 3.44507H11.9244C11.7317 3.44507 11.5745 3.60203 11.5745 3.79469ZM25.0657 9.335C25.1944 9.33805 25.3169 9.39135 25.4069 9.4835C25.4969 9.57565 25.5473 9.69935 25.5473 9.82816C25.5473 9.95696 25.4969 10.0807 25.4069 10.1728C25.3169 10.265 25.1944 10.3183 25.0657 10.3213H14.7624C14.6966 10.3229 14.6312 10.3113 14.57 10.2872C14.5088 10.2631 14.4531 10.227 14.406 10.1811C14.359 10.1351 14.3216 10.0802 14.2961 10.0196C14.2705 9.95902 14.2574 9.89392 14.2574 9.82816C14.2574 9.76239 14.2705 9.69729 14.2961 9.63668C14.3216 9.57608 14.359 9.52118 14.406 9.47523C14.4531 9.42929 14.5088 9.39321 14.57 9.36913C14.6312 9.34504 14.6966 9.33344 14.7624 9.335H25.0657ZM25.0657 6.88319H14.7624C14.6315 6.88319 14.5061 6.83122 14.4136 6.73871C14.3211 6.6462 14.2691 6.52072 14.2691 6.38989C14.2691 6.25906 14.3211 6.13359 14.4136 6.04108C14.5061 5.94857 14.6315 5.8966 14.7624 5.8966H25.0662C25.1971 5.8966 25.3225 5.94857 25.415 6.04108C25.5075 6.13359 25.5595 6.25906 25.5595 6.38989C25.5595 6.52072 25.5075 6.6462 25.415 6.73871C25.3225 6.83122 25.1966 6.88319 25.0657 6.88319ZM15.5308 19.1458C12.6297 19.1458 10.2695 21.5063 10.2695 24.4074C10.2695 27.3085 12.6297 29.6686 15.5306 29.6686C18.4316 29.6686 20.7918 27.3082 20.7918 24.4074C20.7918 21.5066 18.4316 19.1461 15.5308 19.1458ZM33.1328 24.1211C30.2317 24.1211 27.8715 26.4816 27.8715 29.3824C27.8715 32.2835 30.2317 34.6437 33.1328 34.6437C36.0339 34.6437 38.3943 32.2835 38.3943 29.3824C38.3943 26.4813 36.0339 24.1214 33.1328 24.1211ZM30.8402 35.6311C26.351 35.6311 22.6988 39.2829 22.6988 43.7724V44.555H43.5681V43.7724C43.5681 39.2829 39.9163 35.6311 35.4268 35.6311H30.8402Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.7259 30.656L17.0281 33.3074L17.7412 39.5793H22.7342C23.4312 38.2394 24.4475 37.0919 25.6934 36.2381C24.7893 32.9442 21.7949 30.656 18.364 30.656H17.7259ZM12.6958 30.656C8.50504 30.656 5.0957 34.0653 5.0957 38.2561V39.5793H13.3203L14.0334 33.3074L13.3356 30.656H12.6958ZM14.9746 33.7653L14.3136 39.5793H16.7482L16.0872 33.7653H14.9746ZM16.7059 30.656H14.3556L14.9145 32.7787H16.1467L16.7059 30.656Z" fill="white"/>
</svg>
`
    },
]