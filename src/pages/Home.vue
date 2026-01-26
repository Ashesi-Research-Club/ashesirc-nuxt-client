<template>
  <main>
    <!-- Hero Section - Comment out this entire section to disable -->
    <section class="bg-gradient-to-br from-slate-50 to-slate-100 border-b border-slate-200/70">
      <div class="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 items-center">
          <!-- Left: Text Content -->
          <div class="order-2 md:order-1">
            <h1 class="font-serif text-4xl leading-tight text-ink md:text-5xl lg:text-6xl">
              Advancing Research at 
              <span class="text-accent">Ashesi University</span>
            </h1>
            <p class="mt-6 text-lg text-ink/75 leading-relaxed">
              Discover cutting-edge research, innovative solutions, and academic excellence from Ghana's premier liberal arts institution. Join us in shaping the future through knowledge and discovery.
            </p>
            <div class="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="/apply" class="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-blue-oxford-800 transition-colors">
                Get Featured
                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12l-7.5 7.5M21 12H3"/>
                </svg>
              </a>
              <a href="#featured" class="inline-flex items-center justify-center gap-2 rounded-md border border-secondary bg-secondary px-6 py-3 text-sm font-medium text-primary hover:bg-vista-blue-300 transition-colors">
                Explore Research
              </a>
            </div>
          </div>
          
          <!-- Right: SVG Illustration -->
          <div class="order-1 md:order-2 flex justify-center">
            <div class="w-full max-w-md">
              <!-- SVG Placeholder - Replace with actual SVG -->
              <!-- <div class="aspect-square bg-slate-200 rounded-lg flex items-center justify-center">
                <span class="text-slate-500 text-sm">SVG Illustration Here</span>
              </div> -->

            <svg class="w-full h-auto aspect-square" viewBox="0 0 154 154" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M106.987 73.2515C111.742 71.5893 115.756 68.2982 118.317 63.9609C120.371 60.2815 121.322 55.4829 119.727 49.3965C116.309 36.5414 106.918 31.8961 92.6376 37.6069C89.1651 38.9944 82.2432 43.0724 80.2272 50.3776C78.5484 56.4334 80.7791 62.5735 84.1596 67.8703C89.4258 76.1414 97.8348 76.3407 106.987 73.2515ZM80.6794 50.5386C82.5805 43.3484 89.3261 39.2473 92.7373 37.8829C105.669 32.7163 115.649 35.9972 119.145 49.5881C120.678 55.4522 119.75 60.0898 117.757 63.6466C115.274 67.8465 111.386 71.0339 106.78 72.6459C97.9191 75.6431 89.786 75.5358 84.6655 67.579C81.354 62.4508 79.108 56.441 80.6794 50.5386Z" fill="black"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M101.269 42.6661C107.225 44.3218 110.69 49.7107 112.315 55.6975C112.351 55.8841 112.426 56.0611 112.534 56.2171C112.643 56.3732 112.783 56.5048 112.945 56.6037C113.107 56.7025 113.289 56.7663 113.477 56.791C113.666 56.8157 113.857 56.8008 114.04 56.7471C114.222 56.6935 114.391 56.6024 114.536 56.4795C114.681 56.3567 114.799 56.205 114.882 56.034C114.965 55.863 115.011 55.6765 115.018 55.4866C115.025 55.2966 114.992 55.1074 114.921 54.9309C112.744 48.0779 108.643 42.7428 101.499 41.6313C101.427 41.6074 101.35 41.599 101.274 41.6066C101.198 41.6142 101.125 41.6377 101.058 41.6755C100.992 41.7134 100.935 41.7647 100.89 41.8262C100.844 41.8877 100.813 41.958 100.797 42.0325C100.78 42.107 100.78 42.1841 100.796 42.2588C100.811 42.3335 100.842 42.404 100.887 42.4659C100.931 42.5279 100.988 42.5797 101.054 42.6182C101.12 42.6566 101.193 42.6808 101.269 42.6891V42.6661ZM103.484 22.6285C103.494 22.6607 103.51 22.6907 103.531 22.7168C103.552 22.7429 103.578 22.7646 103.608 22.7806C103.637 22.7966 103.67 22.8067 103.703 22.8102C103.736 22.8136 103.77 22.8105 103.802 22.801C103.835 22.7914 103.865 22.7756 103.891 22.7544C103.917 22.7333 103.939 22.7072 103.955 22.6776C103.971 22.6481 103.981 22.6157 103.984 22.5823C103.988 22.5488 103.984 22.5151 103.975 22.4828C102.687 16.9024 103.362 19.6313 101.928 14.2041C101.905 14.1226 101.865 14.0465 101.812 13.9802C101.759 13.9139 101.693 13.8587 101.619 13.8178C101.545 13.7769 101.463 13.751 101.378 13.7417C101.294 13.7323 101.209 13.7397 101.127 13.7633C101.046 13.787 100.97 13.8265 100.903 13.8795C100.837 13.9326 100.782 13.9982 100.741 14.0726C100.7 14.147 100.674 14.2287 100.665 14.3131C100.655 14.3974 100.663 14.4828 100.686 14.5644C102.35 19.9302 101.491 17.232 103.484 22.6285ZM57.4223 45.9929C62.8725 47.3037 60.0976 46.6522 65.7777 47.7407C65.8395 47.7469 65.9016 47.7309 65.9526 47.6954C66.0037 47.66 66.0404 47.6074 66.0561 47.5473C66.0718 47.4872 66.0656 47.4234 66.0384 47.3675C66.0112 47.3116 65.965 47.2672 65.908 47.2424C60.4502 45.4717 63.1484 46.3072 57.7519 44.7435C57.5862 44.6997 57.41 44.7236 57.2619 44.8099C57.1138 44.8962 57.0061 45.0377 56.9624 45.2034C56.9187 45.3691 56.9426 45.5453 57.0288 45.6934C57.1151 45.8415 57.2566 45.9492 57.4223 45.9929ZM109.126 22.2299C109.686 16.5037 109.54 19.3476 109.824 13.7212C109.813 13.5603 109.743 13.4091 109.627 13.2969C109.511 13.1847 109.358 13.1194 109.197 13.1137C109.036 13.108 108.878 13.1622 108.755 13.2659C108.631 13.3696 108.55 13.5155 108.528 13.6752C108.413 19.3323 108.467 16.4578 108.613 22.2145C108.621 22.2755 108.651 22.3314 108.697 22.3725C108.743 22.4135 108.801 22.437 108.863 22.4389C108.924 22.4407 108.984 22.4207 109.033 22.3825C109.081 22.3442 109.114 22.2902 109.126 22.2299ZM68.8362 41.5163C68.8859 41.5604 68.9506 41.5839 69.017 41.582C69.0835 41.58 69.1467 41.5528 69.1937 41.5058C69.2407 41.4588 69.2679 41.3956 69.2699 41.3291C69.2718 41.2627 69.2483 41.198 69.2042 41.1483C65.4481 36.871 67.3491 38.8487 63.4704 34.8243C63.3483 34.7026 63.1829 34.6343 63.0105 34.6343C62.838 34.6343 62.6726 34.7026 62.5505 34.8243C62.4905 34.8841 62.4429 34.9552 62.4104 35.0335C62.3779 35.1117 62.3611 35.1956 62.3611 35.2804C62.3611 35.3651 62.3779 35.4491 62.4104 35.5273C62.4429 35.6056 62.4905 35.6767 62.5505 35.7365C66.5519 39.6382 64.5895 37.7295 68.8362 41.5163ZM39.393 28.8299C39.2551 28.1783 38.6265 28.0633 37.9903 28.0633C37.7655 28.0769 37.5487 28.1513 37.363 28.2786C37.1773 28.4059 37.0297 28.5813 36.936 28.7861C36.8423 28.9908 36.806 29.2171 36.831 29.4409C36.8561 29.6646 36.9415 29.8774 37.0781 30.0564C37.9596 31.0759 40.0523 30.2863 39.393 28.8299ZM37.561 29.0292C37.6152 28.9233 37.6932 28.8314 37.789 28.7609C37.8848 28.6904 37.9957 28.6432 38.1129 28.6229C38.5575 28.5079 38.9944 28.5003 39.1861 28.9142C39.439 30.2633 37.0167 30.1483 37.561 29.0292ZM39.4697 46.0466C39.2139 45.9228 38.9393 45.8425 38.6572 45.809C38.0376 45.7688 37.4164 45.8576 36.8328 46.0696C36.5798 46.1846 36.4035 46.2919 36.2885 46.3532C35.9972 46.5295 36.1122 46.6828 36.2885 46.6675C36.8656 46.6406 37.4397 46.5688 38.0056 46.4529C38.0822 46.4529 39.2167 46.2995 39.4084 46.2995C39.4412 46.3058 39.4752 46.2991 39.5032 46.281C39.5313 46.2629 39.5514 46.2347 39.5592 46.2022C39.5671 46.1697 39.5622 46.1355 39.5455 46.1065C39.5289 46.0776 39.5017 46.0561 39.4697 46.0466ZM44.8126 45.6097C44.778 45.6168 44.7477 45.6373 44.7283 45.6668C44.7089 45.6963 44.702 45.7322 44.7091 45.7668C44.7162 45.8014 44.7367 45.8317 44.7662 45.8511C44.7957 45.8705 44.8317 45.8774 44.8662 45.8703H45.8397C47.0509 45.8703 46.2537 45.9623 47.8788 45.8703C47.907 45.8633 47.9321 45.847 47.95 45.8241C47.968 45.8012 47.9777 45.7729 47.9777 45.7438C47.9777 45.7147 47.968 45.6864 47.95 45.6635C47.9321 45.6406 47.907 45.6243 47.8788 45.6173C47.4066 45.3646 46.8811 45.228 46.3457 45.2187C45.8084 45.2055 45.2779 45.3408 44.8126 45.6097ZM39.1937 47.8326C39.1876 47.7473 39.1479 47.6678 39.0832 47.6117C39.0185 47.5557 38.9342 47.5276 38.8488 47.5337C38.7634 47.5398 38.6839 47.5796 38.6279 47.6443C38.5718 47.7089 38.5437 47.7933 38.5498 47.8786L38.6035 48.5992C38.6065 48.6415 38.6178 48.6828 38.6368 48.7207C38.6558 48.7586 38.682 48.7924 38.7141 48.8201C38.7461 48.8479 38.7833 48.8691 38.8235 48.8824C38.8637 48.8958 38.9062 48.9012 38.9484 48.8982C38.9907 48.8951 39.032 48.8838 39.0699 48.8648C39.1078 48.8459 39.1416 48.8196 39.1694 48.7876C39.1971 48.7556 39.2183 48.7184 39.2317 48.6782C39.2451 48.6379 39.2504 48.5955 39.2474 48.5532L39.1937 47.8326ZM45.993 47.1044C45.909 47.0904 45.8228 47.1087 45.7517 47.1556C45.6806 47.2025 45.6299 47.2746 45.6098 47.3574C45.5903 47.633 45.5903 47.9096 45.6098 48.1853C45.6217 48.2631 45.6612 48.334 45.7209 48.3853C45.7807 48.4366 45.8568 48.4648 45.9356 48.4648C46.0143 48.4648 46.0904 48.4366 46.1502 48.3853C46.2099 48.334 46.2494 48.2631 46.2613 48.1853V47.4877C46.2701 47.4448 46.2701 47.4006 46.2612 47.3577C46.2524 47.3148 46.2348 47.2742 46.2097 47.2383C46.1846 47.2024 46.1524 47.172 46.1152 47.149C46.0779 47.126 46.0364 47.1108 45.993 47.1044ZM40.9721 55.8431C41.3046 56.0952 41.6839 56.2785 42.0879 56.3825C42.4919 56.4865 42.9126 56.509 43.3254 56.4487C43.723 56.3792 44.1063 56.2445 44.4599 56.0501C44.4774 56.0471 44.494 56.0404 44.5086 56.0304C44.5232 56.0205 44.5355 56.0074 44.5446 55.9923C44.5537 55.9771 44.5594 55.9601 44.5613 55.9425C44.5633 55.9249 44.5614 55.9071 44.5558 55.8904C44.5502 55.8736 44.541 55.8582 44.5289 55.8453C44.5168 55.8324 44.5021 55.8222 44.4857 55.8156C44.4693 55.8089 44.4517 55.8058 44.434 55.8066C44.4163 55.8074 44.399 55.812 44.3833 55.8201C43.6756 55.9424 42.9523 55.9424 42.2446 55.8201C41.5669 55.6132 40.9454 55.254 40.4279 54.7699C40.3359 54.6396 40.1366 54.7699 40.2363 54.9079C40.4181 55.2647 40.6681 55.5824 40.9721 55.8431ZM64.1756 100.556C64.4132 100.556 63.3477 90.3225 62.0829 81.6068C61.9526 80.687 61.784 80.9859 61.7916 81.0626C62.4202 89.0041 63.6774 98.4786 64.0913 100.433C64.0938 100.459 64.1028 100.484 64.1176 100.506C64.1323 100.527 64.1523 100.544 64.1756 100.556Z" fill="black"/>
              <!-- <path fill-rule="evenodd" clip-rule="evenodd" d="M149.117 95.65C147.791 93.0897 143.813 88.4521 139.006 83.3085C141.735 81.8598 143.514 80.6793 143.82 79.974C144.027 79.4988 143.345 79.0235 142.916 78.7322C140.769 77.2605 134.545 74.3322 126.887 70.8981C125.599 69.618 124.35 68.3915 123.185 67.2416C126.895 61.2626 127.339 54.5322 125.553 47.7253C120.854 29.949 107.693 25.7023 90.4223 32.5936C85.915 34.3873 76.9464 39.6535 74.3248 49.0438C73.4721 52.1031 73.3201 55.3154 73.8802 58.4417C68.8976 60.3504 62.5123 62.8033 54.4022 65.7315C52.4015 64.7274 51.5889 64.5357 51.6042 64.4284C51.6168 64.367 51.6127 64.3035 51.5925 64.2442C51.5723 64.1849 51.5367 64.1321 51.4893 64.0911C49.9562 63.1406 47.4112 62.8417 47.0203 63.1713C46.8216 63.3161 46.6502 63.4952 46.5144 63.7002L45.3875 60.0514C46.0851 59.7601 47.8022 58.7713 49.0133 55.7741C49.8842 53.3934 50.3103 50.8731 50.2705 48.3385C50.5969 47.8415 50.7546 47.2524 50.7201 46.6587C50.6856 46.065 50.4607 45.4982 50.0788 45.0424C50.0788 44.8584 50.0252 44.6821 50.0022 44.4981C50.1638 43.9442 50.2918 43.3811 50.3854 42.8117C50.3854 41.9148 50.6001 40.512 50.1861 39.6688C50.1315 39.267 50.1315 38.8596 50.1861 38.4577C50.1861 37.1546 48.5457 36.5643 47.3729 35.4605C47.3729 34.579 47.4419 33.6131 47.4495 32.8236C49.7809 32.167 52.0631 31.3473 54.2795 30.3706C54.6781 30.1636 55.2913 29.8263 55.299 29.4047C55.299 27.6033 39.5617 23.441 37.6224 23.8932C37.5534 23.6786 23.0119 28.9601 20.7583 31.2138C20.7088 31.259 20.6692 31.3141 20.6422 31.3755C20.6151 31.4368 20.6012 31.5032 20.6012 31.5702C20.6012 31.6373 20.6151 31.7036 20.6422 31.765C20.6692 31.8264 20.7088 31.8814 20.7583 31.9267C20.5225 33.0672 20.5645 34.2477 20.8809 35.3685C20.644 35.3865 20.4173 35.4725 20.228 35.6163C20.0388 35.76 19.8951 35.9553 19.8141 36.1787C19.7332 36.4021 19.7184 36.6441 19.7717 36.8757C19.825 37.1073 19.944 37.3186 20.1144 37.4842C19.3478 38.5497 19.4628 40.8033 20.03 41.9608C20.0313 41.9802 20.0368 41.9991 20.0463 42.0161C20.0557 42.0331 20.0689 42.0477 20.0847 42.059C20.1006 42.0702 20.1187 42.0778 20.1379 42.0811C20.157 42.0844 20.1767 42.0834 20.1954 42.0781C20.2141 42.0729 20.2314 42.0635 20.246 42.0507C20.2606 42.0379 20.2722 42.0219 20.2799 42.0041C20.2875 41.9862 20.2911 41.9669 20.2903 41.9474C20.2895 41.928 20.2844 41.909 20.2753 41.8918C20.1914 40.4834 20.2273 39.0705 20.3827 37.6681C20.5335 37.7441 20.6974 37.7909 20.8656 37.8061C20.5564 39.1405 20.6416 40.536 21.1109 41.8228C21.1179 41.8511 21.1342 41.8762 21.1571 41.8941C21.18 41.912 21.2083 41.9218 21.2374 41.9218C21.2665 41.9218 21.2947 41.912 21.3177 41.8941C21.3406 41.8762 21.3568 41.8511 21.3638 41.8228C21.4865 39.6765 21.2489 39.7608 21.2259 37.8445C22.2684 37.7295 21.1722 36.8863 22.3067 41.6772C22.3019 41.6964 22.3016 41.7164 22.3057 41.7358C22.3099 41.7551 22.3184 41.7733 22.3305 41.7889C22.3427 41.8044 22.3583 41.8171 22.3761 41.8257C22.3939 41.8344 22.4134 41.8389 22.4332 41.8389C22.453 41.8389 22.4725 41.8344 22.4903 41.8257C22.5081 41.8171 22.5236 41.8044 22.5358 41.7889C22.548 41.7733 22.5565 41.7551 22.5606 41.7358C22.5648 41.7164 22.5644 41.6964 22.5597 41.6772C22.6784 40.2697 22.5061 38.8529 22.0537 37.5148C22.1665 37.4181 22.2601 37.3011 22.3297 37.1699C22.8433 37.6298 22.7283 39.2319 23.3645 41.6849C23.3715 41.7131 23.3878 41.7382 23.4107 41.7561C23.4337 41.7741 23.4619 41.7838 23.491 41.7838C23.5201 41.7838 23.5484 41.7741 23.5713 41.7561C23.5942 41.7382 23.6105 41.7131 23.6175 41.6849C23.6175 40.3894 23.6635 37.3155 22.4217 36.9016C22.4527 36.7253 22.4452 36.5444 22.3997 36.3713C22.3543 36.1982 22.2719 36.037 22.1584 35.8987C22.0448 35.7603 21.9027 35.6482 21.7417 35.5699C21.5808 35.4916 21.4048 35.4491 21.2259 35.4452C21.2963 34.455 21.2963 33.4611 21.2259 32.4709C21.1722 32.0187 20.8196 32.7622 28.3548 34.1267C28.4084 34.9776 28.5004 36.2654 28.6154 37.4229C27.8852 38.1911 27.2823 39.0709 26.8293 40.0291C26.1241 41.6849 26.8293 43.218 27.3506 44.7894C27.4579 45.096 27.4809 45.441 27.5576 45.7629C27.6802 46.3302 27.8719 46.3225 27.8182 46.8897C27.7645 47.457 27.4043 48.2389 27.6342 48.8981C28.0411 49.6988 28.557 50.4392 29.1673 51.0981C29.5905 51.5738 29.858 52.1677 29.9339 52.7998C29.9339 53.3824 31.1757 54.172 31.5436 54.2026L32.0189 55.4444C32.4252 56.487 35.1924 59.0779 36.0203 59.8368C36.1046 60.5113 36.2809 62.1364 36.3192 63.2709C36.0484 63.1885 35.7716 63.1269 35.4914 63.0869C31.9806 63.0333 15.3694 69.526 9.55131 80.135C0.651663 96.4165 8.19452 107.455 8.22518 107.532C3.19661 112.552 0.222395 124.373 12.1882 129.547C16.6327 131.395 21.2954 132.668 26.0628 133.334C25.9938 134.66 25.9018 140.179 27.2203 140.233C27.6726 140.233 28.0328 139.673 28.2705 139.236C29.0284 137.639 29.6465 135.98 30.1178 134.276C32.4175 134.123 32.3408 134.161 32.4175 134.046C43.8352 134.91 55.3178 134.076 66.4906 131.571C66.5826 131.571 66.5826 131.609 66.7359 130.934L68.1311 130.697C75.7966 142.777 72.9757 128.604 70.6223 125.208C70.3551 124.716 69.907 124.348 69.3729 124.181C71.1 123.225 72.7643 122.16 74.3554 120.992C78.8013 123.734 83.409 126.204 88.1534 128.389C91.6335 129.922 139.819 111.18 141.551 107.141C141.758 106.665 141.076 106.19 140.654 105.899C139.546 105.186 138.396 104.539 137.213 103.959L137.305 103.262C144.778 108.451 151.072 99.4291 149.117 95.65ZM21.9618 36.2194C22.253 37.5608 19.8307 37.4535 20.3367 36.3344C20.3899 36.227 20.4676 36.1337 20.5634 36.0618C20.6593 35.9899 20.7706 35.9415 20.8886 35.9204C21.3332 35.8131 21.7701 35.8054 21.9618 36.2194ZM126.021 92.7524C115.374 96.9991 100.135 102.396 91.7715 104.136C91.7525 104.136 91.7339 104.14 91.7169 104.149C91.6998 104.157 91.6848 104.169 91.6728 104.183C91.6608 104.198 91.6521 104.215 91.6473 104.233C91.6426 104.252 91.6419 104.271 91.6453 104.289C91.6486 104.308 91.656 104.326 91.6669 104.341C91.6778 104.357 91.692 104.369 91.7083 104.379C91.7247 104.388 91.743 104.394 91.7618 104.396C91.7807 104.397 91.7997 104.395 91.8175 104.389C100.878 102.71 115.703 97.6583 126.435 93.1817C127.14 93.9099 127.838 94.6305 128.52 95.3204C117.941 99.866 101.039 106.267 92.1011 108.275C92.0827 108.277 92.0648 108.282 92.0486 108.291C92.0325 108.3 92.0184 108.312 92.0074 108.327C91.9964 108.342 91.9886 108.359 91.9847 108.377C91.9808 108.395 91.9807 108.414 91.9845 108.432C91.9884 108.45 91.996 108.467 92.0069 108.482C92.0179 108.497 92.0319 108.509 92.048 108.518C92.064 108.527 92.0819 108.533 92.1003 108.535C92.1187 108.536 92.1373 108.534 92.1547 108.528C101.905 106.55 118.217 100.571 128.903 95.7037L129.907 96.7155C117.305 102.173 92.4844 112.629 89.0272 113.104C88.2607 108.865 89.3875 103.622 90.9589 101.345C94.5387 101.414 110.307 95.8723 123.714 90.3225C124.49 91.1197 125.259 91.9297 126.021 92.7524ZM89.2878 117.642C86.8349 116.592 83.922 115.113 80.7025 113.357C80.8961 112.803 81.0448 112.234 81.1471 111.656C83.8453 113.066 86.5129 114.392 89.2419 115.58C91.7485 116.684 118.639 106.796 133.249 99.9273C133.709 100.349 134.146 100.748 134.568 101.115C120.463 107.884 91.7485 118.662 89.2878 117.604V117.642ZM135.089 101.545C135.672 102.035 136.208 102.472 136.691 102.84C136.598 104.034 136.371 105.215 136.017 106.359C133.564 107.585 90.9819 125.982 87.7241 125.982C87.0802 123.177 87.9924 120.578 89.6405 118.233C95.1596 118.325 123.691 107.095 135.089 101.537V101.545ZM47.5262 89.2646C47.698 89.1512 47.8596 89.0229 48.0091 88.8814C48.6914 88.2068 48.3771 87.4402 47.6872 87.3483C48.3387 86.6354 47.9555 85.6235 46.591 85.9378C45.8316 86.1277 45.1442 86.5353 44.6133 87.1106C44.3757 86.4667 44.1534 85.7538 43.6858 85.5162C43.3868 81.9901 43.1799 79.1002 43.2412 78.4563C43.8855 78.3897 44.5359 78.4155 45.1729 78.5329C69.0279 79.6444 56.0886 82.9099 72.2091 73.466C72.6537 75.1448 73.0983 77.6514 73.5122 80.4186C72.8689 80.228 72.1938 80.168 71.5269 80.2423C70.1318 80.365 70.0858 81.4458 70.9213 81.9058C70.7727 81.9681 70.6475 82.0758 70.5635 82.2134C70.4796 82.351 70.4412 82.5116 70.4537 82.6723C70.515 83.2319 71.1359 83.4925 71.6802 83.6458C71.1053 84.0751 70.8753 84.857 71.6035 85.2632C72/> -->
            </svg>

            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Hero Section -->

    <!-- Hero Featured Story -->
    <section id="featured" class="border-b border-slate-200/70 bg-paper">
      <div class="mx-auto grid items-center max-w-6xl grid-cols-1 gap-6 px-4 py-10 md:grid-cols-12 md:gap-10 md:py-14">
        <div class="md:col-span-7">
          <div class="aspect-[16/10] overflow-hidden rounded bg-slate-100">
            <img :src="featuredImageUrl" alt="Featured" class="h-full w-full object-cover" />
          </div>
        </div>
        <div class="md:col-span-5">
          <p class="text-xs uppercase tracking-wide text-accent">Featured</p>
          <h1 class="mt-2 font-serif text-3xl leading-tight text-ink md:text-4xl">
            {{ featuredTitle }}
          </h1>
          <p class="mt-3 text-ink/75">
            {{ featuredExcerpt }}
          </p>
          <p class="mt-2 text-xs text-ink/60">By {{ featuredAuthor }} • {{ featuredDate }} • {{ featuredReadTime }} min read</p>
          <div class="mt-5">
            <a :href="featuredHref" class="inline-flex items-center gap-2 rounded bg-ink px-4 py-2 text-sm font-medium text-paper hover:bg-ink/90">
              Read the story
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12l-7.5 7.5M21 12H3"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- List of remaining articles (only show if there are any) -->
    <section v-if="remainingCount > 0" id="articles-list" class="bg-white">
      <div class="mx-auto max-w-6xl px-4 py-12">
        <div class="mx-auto max-w-4xl">
          <h2 class="font-serif text-2xl text-ink mb-6">Latest Articles</h2>

          <div class="grid grid-cols-1 gap-6">
            <div v-for="a in remainingArticles" :key="a.documentId || a.id" class="mx-auto w-full max-w-4xl">
              <ArticleCard
                :title="a.title"
                :description="a.excerpt"
                :author="a.author ? (a.author.firstName + ' ' + a.author.lastName) : 'Anonymous'"
                :date="formatPublishedDate(a.publishedDate)"
                :tag="a.tags?.[0]?.name || a.category"
                :image="a.featuredImage?.url || null"
                :link="articleLink(a.slug)"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Magazine Subscription -->
    <NewsletterSignup />
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useApi, type Article } from '@/composables/useApi'
import TopicBlock from '@/components/TopicBlock.vue'
import NewsletterSignup from '@/components/NewsletterSignup.vue'
import ArticleCard from '@/components/ArticleCard.vue'
import { fetchFeaturedArticle, fetchArticlesList, urlFor } from '@/lib/sanity'
import { appConfig } from '@/config/app'

// NOTE: keep the api composable so existing loading/error bindings still work in the template,
// but DO NOT call the network methods here — we want a minimal change that avoids runtime API calls.
const { /* getArticles, */ loading, error } = useApi()

// Article data (previously loaded from API)
const articles = ref<Article[]>([])
const featuredArticle = ref<Article | null>(null)
const apiError = ref<string | null>(null)

// On mount: do not call the remote API. Instead inject a local hardcoded featured article
onMounted(async () => {
  try {
    // Enable smooth scrolling for in-page anchors
    if (typeof document !== 'undefined' && document.documentElement) {
      document.documentElement.style.scrollBehavior = 'smooth'
    }

    // If Sanity is configured, fetch articles from CMS and select featured
    if (appConfig.sanityProjectId) {
      try {
        const featuredDoc = await fetchFeaturedArticle()
        if (featuredDoc) {
          featuredArticle.value = {
            id: featuredDoc._id || 0,
            documentId: featuredDoc._id || 'sanity-'+(featuredDoc._id||'0'),
            title: featuredDoc.title || 'Untitled',
            excerpt: featuredDoc.excerpt || featuredDoc.description || '',
            content: featuredDoc.content || featuredDoc.body || '',
            slug: featuredDoc.slug?.current || '',
            category: featuredDoc.category || 'interdisciplinary',
            status: 'published',
            featured: !!featuredDoc.featured,
            readTime: featuredDoc.readTime || 5,
            publishedDate: featuredDoc.publishedDate || featuredDoc._createdAt || new Date().toISOString(),
            viewCount: 0,
            createdAt: featuredDoc._createdAt || new Date().toISOString(),
            updatedAt: featuredDoc._updatedAt || new Date().toISOString(),
            publishedAt: featuredDoc.publishedDate || new Date().toISOString(),
            locale: featuredDoc.lang || 'en',
            author: featuredDoc.author ? {
              id: 0,
              documentId: featuredDoc.author._id || featuredDoc.author._ref || 'author',
              firstName: featuredDoc.author.firstName || featuredDoc.author.name || '',
              lastName: featuredDoc.author.lastName || '',
              email: '',
              program: 'other',
              yearOfStudy: 'faculty',
              researchAdvisor: '',
              bio: '',
              researchInterests: '',
              status: 'active',
              achievements: '',
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
              publishedAt: new Date().toISOString(),
              locale: 'en'
            } : null,
            tags: Array.isArray(featuredDoc.tags) ? featuredDoc.tags.map((t:any)=>({ id: t._id, name: t.title || t.slug })) : [],
            featuredImage: (() => {
              const src = featuredDoc.featuredImage || featuredDoc.mainImage
              if (!src) return null
              try { return { url: urlFor(src).width(1200).auto('format').url(), caption: src.caption || src.alt || '' } } catch { return { url: src.asset?.url || '', caption: src.caption || '' } }
            })(),
            seo: featuredDoc.seo || null,
            pdfFile: null,
            createdBy: null,
            updatedBy: null,
            localizations: []
          }
        }

        // Also fetch a list of latest articles to populate other sections
        const list = await fetchArticlesList(20)
        articles.value = Array.isArray(list) ? list.map((doc:any) => ({
          id: doc._id || 0,
          documentId: doc._id || 'sanity-'+(doc._id||'0'),
          title: doc.title || 'Untitled',
          excerpt: doc.excerpt || doc.description || '',
          content: doc.content || doc.body || '',
          slug: doc.slug?.current || '',
          category: doc.category || 'interdisciplinary',
          status: 'published',
          featured: !!doc.featured,
          readTime: doc.readTime || 5,
          publishedDate: doc.publishedDate || doc._createdAt || new Date().toISOString(),
          viewCount: 0,
          createdAt: doc._createdAt || new Date().toISOString(),
          updatedAt: doc._updatedAt || new Date().toISOString(),
          publishedAt: doc.publishedDate || new Date().toISOString(),
          locale: doc.lang || 'en',
          author: doc.author ? {
            id: 0,
            documentId: doc.author._id || doc.author._ref || 'author',
            firstName: doc.author.firstName || doc.author.name || '',
            lastName: doc.author.lastName || '',
            email: '',
            program: 'other',
            yearOfStudy: 'faculty',
            researchAdvisor: '',
            bio: '',
            researchInterests: '',
            status: 'active',
            achievements: '',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            publishedAt: new Date().toISOString(),
            locale: 'en'
          } : null,
          tags: Array.isArray(doc.tags) ? doc.tags.map((t:any)=>({ id: t._id, name: t.title || t.slug })) : [],
          featuredImage: (() => {
            const src = doc.featuredImage || doc.mainImage
            if (!src) return null
            try { return { url: urlFor(src).width(800).auto('format').url(), caption: src.caption || src.alt || '' } } catch { return { url: src.asset?.url || '', caption: src.caption || '' } }
          })(),
          seo: doc.seo || null,
          pdfFile: null,
          createdBy: null,
          updatedBy: null,
          localizations: []
        })) : []

        return
      } catch (e) {
        console.warn('Sanity fetch failed, falling back to local featured article', e)
      }
    }

    // Keep latest articles empty (no runtime fetch) if CMS not available
    articles.value = []

    // Minimal hardcoded featured article for the Home featured section
    featuredArticle.value = {
      id: 0,
      documentId: 'local-from-curiosity',
      title: 'From Curiosity to Impact',
      excerpt: 'How curiosity-driven student research at Ashesi translated into measurable community impact and policy change. Lessons for researchers and institutions.',
      content: '',
      slug: 'from-curiosity-to-impact',
      category: 'engineering',
      status: 'published',
      featured: true,
      readTime: 5,
      publishedDate: '2025-12-03',
      viewCount: 0,
      collaborators: null,
      fundingSource: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      publishedAt: new Date().toISOString(),
      locale: 'en',
      author: {
        id: 0,
        documentId: 'local-author',
        firstName: 'Ashesi Research Club',
        lastName: '',
        email: 'info@ashesi.edu',
        phone: '',
        program: 'other',
        yearOfStudy: 'faculty',
        researchAdvisor: '',
        bio: '',
        researchInterests: '',
        status: 'active',
        achievements: '',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString(),
        locale: 'en'
      },
      tags: [],
      featuredImage: null,
      seo: null,
      pdfFile: null,
      createdBy: null,
      updatedBy: null,
      localizations: []
    } as Article
  } catch (err) {
    apiError.value = err instanceof Error ? err.message : 'Failed to load featured article'
    console.error('Failed to load featured article:', err)
  }
})

// Computed properties for different article categories — keep logic as-is, they will operate on the (empty) articles array
const computerScienceArticles = computed(() => {
  return articles.value
    .filter(article => article.category === 'computer-science' || article.category === 'engineering')
    .slice(0, 2)
    .map(article => ({
      title: article.title,
      description: article.excerpt,
      author: article.author ? `${article.author.firstName} ${article.author.lastName.charAt(0)}.` : 'Anonymous',
      date: new Date(article.publishedDate).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      }),
      tag: article.category === 'computer-science' ? 'CS' : 'Engineering',
      image: null,
      link: `/article/${article.slug}`
    }))
})

const businessArticles = computed(() => {
  return articles.value
    .filter(article => article.category === 'business')
    .slice(0, 2)
    .map(article => ({
      title: article.title,
      description: article.excerpt,
      author: article.author ? `${article.author.firstName} ${article.author.lastName.charAt(0)}.` : 'Anonymous',
      date: new Date(article.publishedDate).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      }),
      tag: article.tags?.[0]?.name || 'Business',
      image: null,
      link: `/article/${article.slug}`
    }))
})

const humanitiesArticles = computed(() => {
  return articles.value
    .filter(article => article.category === 'humanities')
    .slice(0, 2)
    .map(article => ({
      title: article.title,
      description: article.excerpt,
      author: article.author ? `${article.author.firstName} ${article.author.lastName.charAt(0)}.` : 'Anonymous',
      date: new Date(article.publishedDate).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      }),
      tag: 'Humanities',
      image: null,
      link: `/article/${article.slug}`
    }))
})

const spotlightArticles = computed(() => {
  return articles.value
    .filter(article => article.category === 'interdisciplinary')
    .slice(0, 2)
    .map(article => ({
      title: article.title,
      description: article.excerpt,
      author: article.author ? `${article.author.firstName} ${article.author.lastName.charAt(0)}.` : 'Anonymous',
      date: new Date(article.publishedDate).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      }),
      tag: article.tags?.[0]?.name || 'Research',
      image: null,
      link: `/article/${article.slug}`
    }))
})

const latestArticles = computed(() => {
  return articles.value
    .slice(0, 4)
    .map(article => ({
      title: article.title,
      description: article.excerpt,
      author: article.author ? `${article.author.firstName} ${article.author.lastName}` : 'Anonymous',
      date: new Date(article.publishedDate).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      }),
      tag: article.tags?.[0]?.name || article.category,
      image: null,
      link: `/article/${article.slug}`
    }))
})

// Featured article computed properties
const featuredTitle = computed(() => featuredArticle.value?.title || 'Loading...')
const featuredExcerpt = computed(() => featuredArticle.value?.excerpt || '')
const featuredAuthor = computed(() => {
  if (!featuredArticle.value) return 'Loading...'
  if (!featuredArticle.value.author) return 'Anonymous'
  return `${featuredArticle.value.author.firstName} ${featuredArticle.value.author.lastName}`
})
const featuredDate = computed(() => {
  if (!featuredArticle.value) return ''
  return new Date(featuredArticle.value.publishedDate).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  })
})
const featuredReadTime = computed(() => featuredArticle.value?.readTime || 0)
const featuredSlug = computed(() => featuredArticle.value?.slug || '')

const remainingArticles = computed(() => {
  if (!featuredArticle.value) return articles.value
  return articles.value.filter(a => a.slug !== featuredArticle.value?.slug)
})

const remainingCount = computed(() => remainingArticles.value.length)


// Computed for hero image URL: prefer CMS image when available
const featuredImageUrl = computed(() => {
  return featuredArticle.value?.featuredImage?.url || 'https://images.unsplash.com/photo-1523246191914-9fdb7d0b42d4?q=80&w=1200&auto=format&fit=crop'
})

// Helper functions used by the template to avoid complex inline expressions
function formatPublishedDate(dateString?: string) {
  if (!dateString) return ''
  try {
    const d = new Date(dateString)
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
  } catch (e) {
    return dateString
  }
}

const featuredHref = computed(() => '/article/' + (featuredSlug.value || ''))

function articleLink(slug?: string) {
  return '/article/' + (slug || '')
}
</script>

<style>
/* Enable smooth anchor scrolling for the whole site (unscoped) */
html { scroll-behavior: smooth; }
</style>

<style scoped>
/* ...existing scoped styles (if any) ... */
</style>
