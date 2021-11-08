<template>
  <main class="subpage">
    <header v-if="this.step < 9">
      <img @click="this.goBack" class="h-6 w-6" src="/icons/Back.svg" alt="" />

      <p>Sign Up</p>
    </header>
    <!-- ================================email================================= -->
    <section v-show="this.step == 1">
      <p class="text-center">Please enter your email address</p>
      <ValidationObserver v-slot="{ invalid }" slim ref="email">
        <ValidationProvider
          rules="required|email"
          name="email"
          v-slot="{ errors }"
        >
          <span class="input">
            <label for="email">Email</label>
            <div>
              <input
                @input="handleChange('email')"
                type="email"
                placeholder="email"
                name="email"
                autocomplete
                v-model="email"
              />
            </div>
            <small class="text-error">{{ errors[0] }}</small>
          </span>
        </ValidationProvider>
      </ValidationObserver>
    </section>
    <!-- ================================verify email================================= -->
    <section v-show="this.step == 2">
      <p class="text-center">
        Let’s verify your account. Please enter the code, we emailed you, below
      </p>
      <ValidationObserver v-slot="{ invalid }" slim ref="code">
        <ValidationProvider
          rules="required|numeric"
          name="code"
          v-slot="{ errors }"
        >
          <span class="input">
            <label for="code">Code</label>
            <div>
              <input
                @input="handleChange('code')"
                type="number"
                placeholder="code"
                name="code"
                v-model="code"
              />
            </div>
            <small class="text-error">{{ errors[0] }}</small>
          </span>
        </ValidationProvider>
      </ValidationObserver>
    </section>
    <!-- ================================choose password ================================= -->
    <section v-show="this.step == 3">
      <p class="text-center">
        Your Email has been successfully verified please enter your new
        password.
      </p>

      <ValidationObserver v-slot="{ invalid }" slim ref="addPassword">
        <ValidationProvider
          v-if="!showPassword"
          rules="required"
          name="password"
          v-slot="{ errors }"
        >
          <span class="input">
            <label for="name">Password</label>
            <div>
              <input
                @input="handleChange('addPassword')"
                type="text"
                placeholder="password"
                name="password"
                v-model="password"
              />
              <svg
                @click="togglePassword"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.33497 13.2561C0.888345 12.4782 0.888342 11.522 1.33497 10.7441C3.68496 6.65097 7.44378 4 11.6798 4C15.9158 4 19.6746 6.65094 22.0246 10.744C22.4712 11.5219 22.4712 12.4781 22.0246 13.256C19.6746 17.3491 15.9158 20 11.6798 20C7.44377 20 3.68497 17.3491 1.33497 13.2561Z"
                  stroke="currentcolor"
                  stroke-width="2"
                />
                <circle
                  cx="11.6797"
                  cy="12"
                  r="3"
                  stroke="currentcolor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <small class="text-error">{{ errors[0] }}</small>
          </span>
        </ValidationProvider>
        <ValidationProvider
          v-if="showPassword"
          rules="required"
          name="password"
          v-slot="{ errors }"
        >
          <span class="input">
            <label for="name">Password</label>
            <div>
              <input
                @input="handleChange('addPassword')"
                type="password"
                placeholder="password"
                name="password"
                v-model="password"
              />
              <svg
                @click="togglePassword"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.67969 3L21.6797 19"
                  stroke="currentcolor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.0546 4.79034C14.2347 4.26823 14.8039 3.99094 15.326 4.171C18.4478 5.24759 21.0835 7.65277 22.8918 10.8024C23.3668 11.6297 23.4799 12.6014 23.2316 13.4974C23.084 14.0296 22.5329 14.3414 22.0007 14.1939C21.4685 14.0463 21.1567 13.4953 21.3042 12.9631C21.4117 12.5756 21.3626 12.1557 21.1573 11.7982C19.5394 8.98025 17.2514 6.95057 14.674 6.06172C14.1519 5.88167 13.8746 5.31245 14.0546 4.79034ZM8.7503 4.94112C8.95814 5.45281 8.71183 6.0361 8.20014 6.24394C5.82167 7.21006 3.71737 9.15927 2.2022 11.7983C1.9326 12.2679 1.9326 12.8449 2.2022 13.3145C4.42466 17.1854 7.89339 19.5564 11.6798 19.5564C14.367 19.5564 16.8801 18.3688 18.9146 16.299C19.3017 15.9051 19.9349 15.8996 20.3288 16.2868C20.7226 16.6739 20.7281 17.3071 20.341 17.7009C17.9956 20.0871 14.9897 21.5564 11.6798 21.5564C6.99415 21.5564 2.94527 18.6255 0.467746 14.3103C-0.155911 13.2241 -0.155916 11.8888 0.467735 10.8025C2.16221 7.85116 4.58162 5.55506 7.44748 4.39097C7.95917 4.18313 8.54246 4.42944 8.7503 4.94112Z"
                  fill="currentcolor"
                />
                <path
                  d="M14.5892 11.8251C14.748 12.457 14.6968 13.1233 14.4434 13.7235C14.1899 14.3236 13.748 14.825 13.1844 15.1517C12.6208 15.4785 11.9662 15.6129 11.3194 15.5347C10.6726 15.4564 10.0689 15.1698 9.59949 14.7181C9.13007 14.2663 8.82045 13.6741 8.71743 13.0308C8.61441 12.3875 8.7236 11.7282 9.02848 11.1524C9.33337 10.5767 9.81738 10.1159 10.4074 9.83956C10.9973 9.56327 11.6612 9.48653 12.2987 9.62095"
                  stroke="currentcolor"
                  stroke-width="2"
                />
              </svg>
            </div>
            <small class="text-error">{{ errors[0] }}</small>
          </span>
        </ValidationProvider>
      </ValidationObserver>
    </section>
    <!-- ================================name================================= -->
    <section v-show="this.step == 4">
      <p class="text-center">Please add your name</p>
      <ValidationObserver v-slot="{ invalid }" slim ref="names">
        <ValidationProvider
          rules="required"
          name="firstname"
          v-slot="{ errors }"
        >
          <span class="input">
            <label for="firstname">First Name</label>
            <div>
              <input
                @input="handleChange('names')"
                type="text"
                placeholder="First Name"
                name="firstname"
                v-model="firstname"
              />
            </div>
            <small class="text-error">{{ errors[0] }}</small>
          </span>
        </ValidationProvider>
        <ValidationProvider
          rules="required"
          name="lastname"
          v-slot="{ errors }"
        >
          <span class="input">
            <label for="lastname">Last Name</label>
            <div>
              <input
                @input="handleChange('names')"
                type="text"
                placeholder="Last Name"
                name="lastname"
                v-model="lastname"
              />
            </div>
            <small class="text-error">{{ errors[0] }}</small>
          </span>
        </ValidationProvider>
      </ValidationObserver>
    </section>
    <!-- ================================first profile================================= -->
    <section v-show="this.step == 5">
      <p class="text-center">
        Add your first childs profile, you can add more later
      </p>
      <ValidationObserver v-slot="{ invalid }" slim ref="child">
        <ValidationProvider
          rules="required"
          name="childs_name"
          v-slot="{ errors }"
        >
          <span class="input">
            <label for="childs_name">First Name</label>
            <div>
              <input
                @input="handleChange('child')"
                type="text"
                placeholder="First Name"
                name="childs_name"
                v-model="childs_name"
              />
            </div>
            <small class="text-error">{{ errors[0] }}</small>
          </span>
        </ValidationProvider>

        <span class="input">
          <label for="lastname">Age</label>
        </span>
        <div class="ageContainer">
          <template v-for="item in age">
            <div
              @click="setSelectedAge(item)"
              :key="'age_' + item"
              :class="selectedAge == item ? 'ageSelected' : 'ageBlock'"
            >
              {{ item }}
            </div>
          </template>
        </div>
      </ValidationObserver>
    </section>
    <!-- ================================avatar================================= -->
    <section v-show="this.step == 6">
      <p class="text-center">Please choose an avatar , for Adeena</p>
      <div class="avatarContainer">
        <template v-for="item in avatars">
          <div
            @click="setSelectedavatar(item)"
            :key="'avatar_' + item"
            :class="selectedAvatar == item ? 'selectedAvatar' : 'avatar'"
          >
            <img :src="`/avatars/${item}.svg`" alt="" />
          </div>
        </template>
      </div>
    </section>
    <!-- ================================language================================= -->
    <section v-show="this.step == 7">
      <p class="text-center">
        Please Choose a primary language preference for Adeena
      </p>
      <div class="">
        <template v-for="item in lang">
          <div
            @click="setSelectedLang(item)"
            :key="'lang_' + item"
            :class="selectedLang == item ? 'langSelected' : 'lang'"
          >
            {{ item }}
          </div>
        </template>
      </div>
    </section>
    <!-- ================================terms================================= -->
    <section v-show="this.step == 8">
      <p class="text-left">
        Terms and Conditions of Service General Duolingo websites (“Websites”)
        and mobile applications (“Apps”) and related services (together with the
        Websites, the “Service”) are operated by Duolingo, Inc. (“Duolingo,”
        “us,” or “we”). Access and use of the Service is subject to the
        following Terms and Conditions of Service (“Terms and Conditions”). By
        accessing or using any part of the Service, you represent that you have
        read, understood, and agree to be bound by these Terms and Conditions
        including any future modifications. Duolingo may amend, update or change
        these Terms and Conditions. If we do this, we will post a notice that we
        have made changes to these Terms and Conditions on the Websites for at
        least 7 days after the changes are posted and will indicate at the
        bottom of the Terms and Conditions the date these terms were last
        revised. Any revisions to these Terms and Conditions will become
        effective the earlier of (i) the end of such 7-day period or (ii) the
        first time you access or use the Service after such changes. If you do
        not agree to abide by these Terms and Conditions, you are not authorized
        to use, access or participate in the Service. PLEASE NOTE THAT THESE
        TERMS AND CONDITIONS CONTAIN A MANDATORY ARBITRATION OF DISPUTES
        PROVISION THAT REQUIRES THE USE OF ARBITRATION ON AN INDIVIDUAL BASIS TO
        RESOLVE DISPUTES IN CERTAIN CIRCUMSTANCES, RATHER THAN JURY TRIALS OR
        CLASS ACTION LAWSUITS. VIEW THESE TERMS HERE. Description of Website and
        Service The Service allows users to access and use a variety of
        educational services, including learning or practicing a language.
        Duolingo may, in its sole discretion and at any time, update, change,
        suspend, make improvements to or discontinue any aspect of the Service,
        temporarily or permanently. Registration; Submission of Content a.
        Registration In connection with registering for and using the Service,
        you agree (i) to provide accurate, current and complete information
        about you and/or your organization as requested by Duolingo; (ii) to
        maintain the confidentiality of your password and other information
        related to the security of your account; (iii) to maintain and promptly
        update any registration information you provide to Duolingo, to keep
        such information accurate, current and complete; and (iv) to be fully
        responsible for all use of your account and for any actions that take
        place through your account. b. Course Contributor Submissions If you are
        or become a Course Contributor, you may offer to translate or have
        translated certain existing courses into other languages and you may
        offer to contribute new courses to the Service, as agreed between you
        and Duolingo on a case-by-case basis. Subject to any guidelines posted
        on the Service, you may perform any such translations or create any such
        courses in accordance with your own schedule and using your own
        facilities and resources. You are not required to become a Course
        Contributor and you may cease your activities as a Course Contributor at
        any time. You acknowledge that you do not desire and will not receive
        compensation for your activities as a Course Contributor or for our use
        of any Course Contributor Materials (as defined below) you submit. Any
        translation of an existing Duolingo course you submit or have submitted
        and any new language course you submit or have submitted as a Course
        Contributor (collectively, “Course Contributor Materials”) are owned by
        you (subject of course to us retaining ownership of the existing
        Duolingo course you translated). By submitting any Course Contributor
        Material, you grant us a fully paid up, royalty-free, perpetual,
        sublicensable license to reproduce, display, perform, modify, create
        derivative works of, distribute and otherwise use such Course
        Contributor Material in any manner. c. General Content As a condition of
        submitting any ratings, reviews, information, data, text, photographs,
        audio clips, audiovisual works, translations, flashcards or other
        materials on the Services (“Content”), you hereby grant to Duolingo a
        royalty free, perpetual, irrevocable, worldwide, nonexclusive,
        transferable, and sublicensable license to use, reproduce, copy, adapt,
        modify, merge, distribute, publicly display, create derivative works
        from, incorporate such Content into other works; sublicense through
        multiple tiers the Content, and acknowledge that this license cannot be
        terminated by you once your Content is submitted to the Services. You
        represent that you own or have secured all legal rights necessary for
        the Content submitted by you to be used by you, Duolingo, and others as
        described and otherwise contemplated in these Terms and Conditions. You
        understand that other users will have access to the Content and that
        neither they or Duolingo have any obligation to you or anyone else to
        maintain the confidentiality of the Content. Your Representations and
        Warranties You represent and warrant to Duolingo that your access and
        use of the Service will be in accordance with these Terms and Conditions
        and with all applicable laws, rules and regulations of the United States
        and any other relevant jurisdiction, including those regarding online
        conduct or acceptable content, and those regarding the transmission of
        data or information exported from the United States and/or the
        jurisdiction in which you reside. You further represent and warrant that
        you have created or own any material you submit via the Service
        (including Translation Materials, Course Contributor Materials, Activity
        Materials, and Content) and that you have the right, as applicable, to
        grant us a license to use that material as set forth above or the right
        to assign that material to us as set forth below. You represent and
        warrant that (1) you are not organized under the laws of, operating
        from, or otherwise ordinarily resident in a country or territory that is
        the target or comprehensive U.S. economic or trade sanctions (i.e., an
        embargo) or (2) identified on a list of prohibited or restricted
        persons, such as the U.S. Treasury Department’s List of Specially
        Designated Nationals and Blocked Persons, or (3) otherwise the target of
        U.S. sanctions. Inappropriate Use You will not upload, display or
        otherwise provide on or through the Service any content that: (i) is
        libelous, defamatory, abusive, threatening, harassing, hateful,
        offensive or otherwise violates any law or infringes upon the right of
        any third party (including copyright, trademark, privacy, publicity or
        other personal or proprietary rights); or (ii) in Duolingo’s sole
        judgment, is objectionable or which restricts or inhibits any other
        person from using the Service or which may expose Duolingo or its users
        to any harm or liability of any kind. Indemnification of Duolingo You
        agree to defend, indemnify and hold harmless Duolingo and its directors,
        officers, employees, contractors, agents, suppliers, licensors,
        successors and assigns, from and against any and all losses, claims,
        causes of action, obligations, liabilities and damages whatsoever,
        including attorneys' fees, arising out of or relating to your access or
        use of the Service, any false representation made to us (as part of
        these Terms and Conditions or otherwise), your breach of any of these
        Terms and Conditions, or any claim that any translation we provide to
        you is inaccurate, inappropriate or defective in any way whatsoever.
        License to Apps Subject to the terms of these Terms and Conditions,
        Duolingo grants you a non-transferable, non-exclusive license to
        download, install, and use one copy of each App in object code form only
        on an interactive wireless device that you own or control. You may not
        derive or attempt to derive the source code of all or any portion of any
        App, permit any third party to derive or attempt to derive such source
        code, or reverse engineer, decompile, disassemble, or translate any App
        or any part thereof. Duolingo and its licensors own and shall retain all
        intellectual property rights and other rights in and to the Apps, and
        any changes, modifications, or corrections thereto. The following terms
        and conditions apply to you only if you are using the Apps from the
        Apple App Store. To the extent the other terms and conditions of these
        Terms and Conditions are less restrictive than, or otherwise conflict
        with, the terms and conditions of this paragraph, the more restrictive
        or conflicting terms and conditions in this paragraph apply, but solely
        with respect to Apps from the Apple App Store. You acknowledge and agree
        that these Terms and Conditions are solely between you and Duolingo, not
        Apple, and that Apple has no responsibility for the Apps or content
        thereof. Your use of any App must comply with the App Store Terms of
        Service. You acknowledge that Apple has no obligation whatsoever to
        furnish any maintenance and support services with respect to the Apps.
        In the event of any failure of any App to conform to any applicable
        warranty, you may notify Apple, and Apple will refund the purchase
        price, if any, for the App to you; to the maximum extent permitted by
        applicable law, Apple will have no other warranty obligation whatsoever
        with respect to the Apps, and any other claims, losses, liabilities,
        damages, costs or expenses attributable to any failure to conform to any
        warranty will be solely governed by these Terms and Conditions. You and
        Duolingo acknowledge that Apple is not responsible for addressing any
        claims of you or any third party relating to the Apps or your possession
        and/or use of any App, including, but not limited to: (i) product
        liability claims; (ii) any claim that an App fails to conform to any
        applicable legal or regulatory requirement; and (iii) claims arising
        under consumer protection or similar legislation. You and Duolingo
        acknowledge that, in the event of any third-party claim that any App or
        your possession and use of that App infringes that third party’s
        intellectual property rights, Duolingo, not Apple, will be solely
        responsible for the investigation, defense, settlement and discharge of
        any such intellectual property infringement claim to the extent required
        by these Terms and Conditions. You must comply with applicable third
        party terms of agreement when using any App. You and Duolingo
        acknowledge and agree that Apple, and Apple’s subsidiaries, are third
        party beneficiaries of these Terms and Conditions as they relate to your
        license of the Apps, and that, upon your acceptance of these Terms and
        Conditions, Apple will have the right (and will be deemed to have
        accepted the right) to enforce these Terms and Conditions against you as
        a third party beneficiary thereof. In-App Purchases If you purchase an
        auto-renewing periodic subscription through the Service, your Duolingo
        account will be billed continuously for the subscription until you
        terminate it as set forth below. After your initial subscription period,
        and again after any subsequent subscription period, your subscription
        will automatically renew for an additional equivalent period. If you do
        not wish your subscription to renew automatically, or if you want to
        change or terminate your subscription, you will need to log in to your
        Duolingo account and follow instructions to terminate or change your
        subscription, even if you have deleted your account. In the Service, you
        may purchase, with “real world” money, a limited, personal,
        non-transferable, non-sublicensable, revocable license to use (a)
        “virtual currency,” including but not limited to virtual gems, solely
        for use in the Service, and (b) “virtual in-app items” (together with
        “virtual currency,” “Virtual Items”). You are allowed to purchase
        Virtual Items through the Service, and not in any other way. Duolingo
        may manage, regulate, control, modify, or eliminate Virtual Items at any
        time, with or without notice. Duolingo may update the pricing of Virtual
        Items at any time in its sole discretion, and may add new Virtual Items
        for additional fees. Duolingo shall have no liability to you or any
        third party in the event that Duolingo exercises any such rights. The
        transfer of Virtual Items is prohibited except where expressly
        authorized in the Service. Other than as expressly authorized in the
        Service, you shall not sell, redeem or otherwise transfer Virtual Items
        to any person or entity, including but not limited to Company, another
        user, or any third party. You agree to pay all fees and applicable taxes
        incurred by you or anyone using a Duolingo account registered to you.
        Duolingo may revise the pricing for the goods and services offered
        through the Service at any time. All information that you provide in
        connection with a purchase or transaction or other monetary transaction
        interaction with the Service must be accurate, complete, and current.
        You agree to pay all charges incurred by users of your credit card,
        debit card, or other payment method used in connection with a purchase
        or transaction or other monetary transaction interaction with the
        Service at the prices in effect when such charges are incurred. You will
        pay any applicable taxes, if any, relating to any such purchases,
        transactions or other monetary transaction interactions. Payment
        Processors All financial transactions made in connection with the
        Service will be processed by a third party in accordance with their
        respective terms of use, privacy policy, and/or any applicable payment
        terms and conditions. We encourage you to learn about the practices of
        such third party. In no event will Duolingo be responsible for the
        actions or inactions of any third party payment processor, including,
        but not limited to, system downtime or payment service outages. Refund
        Policy In the event that Duolingo suspends or terminates your use of the
        Service or these Terms and Conditions or you close your account
        voluntarily, you understand and agree that you will receive no refund or
        exchange of any kind, including for any unused virtual currency or other
        Virtual Item, any Content or data associated with your use of the
        Service, or for anything else. Third-Party Links, Sites, and Services
        The Service may contain links to third-party websites, advertisers,
        services, special offers, or other events or activities that are not
        owned or controlled by Duolingo. We do not endorse or assume any
        responsibility for any such third-party sites, information, materials,
        products, or services. If you access any third party website, service,
        or content from Duolingo, you understand that these Terms and Conditions
        and our Privacy Policy do not apply to your use of such sites. You
        expressly acknowledge and agree that Duolingo shall not be responsible
        or liable, directly or indirectly, for any damage or loss arising from
        your use of any third-party website, service, or content. The Service
        may include advertisements, which may be targeted to the Content or
        information on the Service, or other information. The types and extent
        of advertising by Duolingo on the Service are subject to change. In
        consideration for Duolingo granting you access to and use of the
        Service, you agree that Duolingo and its third party providers and
        partners may place such advertising in connection with the display of
        content or information submitted by you or others. NO REPRESENTATIONS OR
        WARRANTIES BY DUOLINGO THE SERVICE, INCLUDING ALL IMAGES, AUDIO FILES
        AND OTHER CONTENT THEREIN, AND ANY OTHER INFORMATION, PROPERTY AND
        RIGHTS GRANTED OR PROVIDED TO YOU BY DUOLINGO ARE PROVIDED TO YOU ON AN
        “AS IS” BASIS. DUOLINGO AND ITS SUPPLIERS MAKE NO REPRESENTATIONS OR
        WARRANTIES OF ANY KIND WITH RESPECT TO THE SERVICE, EITHER EXPRESS OR
        IMPLIED, AND ALL SUCH REPRESENTATIONS AND WARRANTIES, INCLUDING
        WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR
        NON-INFRINGEMENT, ARE EXPRESSLY DISCLAIMED. WITHOUT LIMITING THE
        GENERALITY OF THE FOREGOING, DUOLINGO DOES NOT MAKE ANY REPRESENTATION
        OR WARRANTY OF ANY KIND RELATING TO ACCURACY, SERVICE AVAILABILITY,
        COMPLETENESS, INFORMATIONAL CONTENT, ERROR-FREE OPERATION, RESULTS TO BE
        OBTAINED FROM USE, OR NON-INFRINGEMENT. ACCESS AND USE OF THE SERVICE
        MAY BE UNAVAILABLE DURING PERIODS OF PEAK DEMAND, SYSTEM UPGRADES,
        MALFUNCTIONS OR SCHEDULED OR UNSCHEDULED MAINTENANCE OR FOR OTHER
        REASONS. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED
        WARRANTIES, SO THE ABOVE EXCLUSION MAY NOT APPLY TO YOU. LIMITATION ON
        TYPES OF DAMAGES/LIMITATION OF LIABILITY IN NO EVENT WILL DUOLINGO BE
        LIABLE TO YOU OR ANY THIRD PARTY CLAIMING THROUGH YOU (WHETHER BASED IN
        CONTRACT, TORT, STRICT LIABILITY OR OTHER THEORY) FOR INDIRECT,
        INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES ARISING OUT OF
        OR RELATING TO THE ACCESS OR USE OF, OR THE INABILITY TO ACCESS OR USE,
        THE SERVICE OR ANY PORTION THEREOF, INCLUDING BUT NOT LIMITED TO THE
        LOSS OF USE OF THE SERVICE, INACCURATE RESULTS, LOSS OF PROFITS,
        BUSINESS INTERRUPTION, OR DAMAGES STEMMING FROM LOSS OR CORRUPTION OF
        DATA OR DATA BEING RENDERED INACCURATE, THE COST OF RECOVERING ANY DATA,
        THE COST OF SUBSTITUTE SERVICES OR CLAIMS BY THIRD PARTIES FOR ANY
        DAMAGE TO COMPUTERS, SOFTWARE, MODEMS, TELEPHONES OR OTHER PROPERTY,
        EVEN IF DUOLINGO HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
        DUOLINGO’S LIABILITY TO YOU OR ANY THIRD PARTY CLAIMING THROUGH YOU FOR
        ANY CAUSE WHATSOEVER, AND REGARDLESS OF THE FORM OF THE ACTION, IS
        LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO DUOLINGO FOR THE SERVICE
        IN THE 12 MONTHS PRIOR TO THE INITIAL ACTION GIVING RISE TO LIABILITY.
        THIS IS AN AGGREGATE LIMIT. THE EXISTENCE OF MORE THAN ONE CLAIM
        HEREUNDER WILL NOT INCREASE THIS LIMIT. Termination Duolingo may
        terminate your access and use of the Service immediately at any time,
        for any reason, and at such time you will have no further right to use
        the Service. You may terminate your Duolingo account at any time by
        following the instructions available through the Service. The provisions
        of these Terms and Conditions relating to the protection and enforcement
        of Duolingo’s proprietary rights, your representations and warranties,
        disclaimer of representations and warranties, release and indemnities,
        limitations of liability and types of damages, ownership of data and
        information, governing law and venue, and miscellaneous provisions shall
        survive any such termination. Proprietary Rights in Service Content and
        Activity Materials All content available through the Service, including
        designs, text, graphics, images, information, software, audio and other
        files, and their selection and arrangement (the "Service Content"), are
        the proprietary property of Duolingo or its licensors. No Service
        Content may be modified, copied, distributed, framed, reproduced,
        republished, downloaded, scraped, displayed, posted, transmitted, or
        sold in any form or by any means, in whole or in part, other than as
        expressly permitted in these Terms and Conditions. You may not use any
        data mining, robots, scraping or similar data gathering or extraction
        methods to obtain Service Content. As between you and Duolingo, all
        data, information and materials generated from your access and use of
        the educational activities made available on or through the Service,
        including translated content generated by you (collectively, the
        “Activity Materials”), shall be exclusively owned by Duolingo, and you
        shall not have any right to use such Activity Materials except as
        expressly authorized by these Terms and Conditions. Activity Materials
        will not include Translation Materials. By using the Service, you hereby
        assign to Duolingo any and all rights, title and interest, including any
        intellectual property rights or proprietary rights, in the Activity
        Materials. All rights of Duolingo or its licensors that are not
        expressly granted in these Terms and Conditions are reserved to Duolingo
        and its licensors. Trademarks “Duolingo” and all other trademarks,
        service marks, graphics and logos used in connection with the Service
        are trademarks or service marks of Duolingo or their respective owners,
        and certain of them are registered with the United States Patent and
        Trademark Office. Access and use of the Service does not grant or
        provide you with the right or license to reproduce or otherwise use the
        Duolingo name or any Duolingo or third-party trademarks, service marks,
        graphics or logos. Privacy Use of the Service is also governed by our
        Privacy Policy, a copy of which is located at www.duolingo.com/privacy.
        By using the Service, you consent to the terms of the Privacy Policy.
        Promotion Code Terms Duolingo Promotion Codes (each a “Promotional
        Code”) are made available by Duolingo (either directly or through a
        partner) subject to the Terms and Conditions of Service (“Terms and
        Conditions”). Each Promotional Code is made available in connection with
        a form of an auto-renewing periodic subscription (as defined in the
        Terms and Conditions). The Promotional Code. Each Promotional Code
        provides access to Duolingo Plus: A. at the price advertised; and B.
        beginning the moment that you confirm your acceptance of the Promotional
        Code by submitting valid payment details that are accepted by Duolingo
        (the “Promotional Period”); and C. in some circumstances, subject to an
        overall limit of allowed redemptions of that Promotional Code. By
        submitting your payment details, you (i) confirm your acceptance of the
        Promotional Code advertised; (ii) accept and agree to these Promotional
        Code Terms; and (iii) acknowledge and agree to the Terms and Conditions.
        Eligibility. In order to be eligible for a Promotional Code, users must
        satisfy all of the following conditions (each an “Eligible User”): A.
        Unless you are subscribing to a Promotional Code that is advertised as
        available to current subscribers, you must not be a current subscriber.
        B. Provide Duolingo with a valid and current payment method that is
        approved by Duolingo. C. Additional eligibility requirements (if any) as
        advertised from time-to-time in connection with a Promotional Code.
        Eligible Users may accept a Promotional Code once - previous users may
        not redeem the offer again. Availability. A Promotional Code must be
        accepted before the applicable expiration date advertised, if any.
        Except where prohibited by law, Duolingo reserves the right to modify,
        suspend or terminate a Promotional Code at any time and for any reason,
        in which case we will not honour subsequent Promotional Code
        enrollments. Duration and cancellation. Unless you cancel your
        subscription before the end of the Promotional Period, you will
        automatically become a recurring subscriber and your Duolingo Plus
        subscription will continue to automatically renew for additional periods
        equal to the expiring subscription term, unless you cancel before the
        end of the relevant subscription term pursuant to Duolingo’s terms and
        conditions. The payment method you provided will automatically be
        charged for the then-current subscription price. If you cancel during
        the Promotional Period, you will lose access to Duolingo Plus and you
        understand and agree that you will receive no refund or exchange of any
        kind, including for any unused virtual currency or other Virtual Item,
        any Content or data associated with your use of the Service, or for
        anything else. Notice for Claims of Copyright Violations and Agent for
        Notice If you are a copyright owner and have a good faith belief that
        any material available through the Service infringes upon your
        copyrights, you may submit a copyright infringement notification to
        Duolingo pursuant to the Digital Millennium Copyright Act by providing
        us with the following information in writing: an electronic or physical
        signature of the copyright owner or the person authorized to act on
        behalf of the owner of the copyright interest; a description of the
        copyrighted work that you claim has been infringed; a description of
        where the material that you claim is infringing is located on the
        Service, with enough detail that we may find it on the Service; your
        address, telephone number, and email address; a statement by you that
        you have a good faith belief that the disputed use is not authorized by
        the copyright owner, its agent, or the law; and a statement by you, made
        under penalty of perjury, that the above information in your notice is
        accurate and that you are the copyright owner or are authorized to act
        on the copyright owner's behalf. Please consult your legal counsel for
        further details or see 17 U.S.C. §512(c)(3). Duolingo’s Agent for Notice
        of claims of copyright infringement can be reached as follows: By mail:
        5900 Penn Avenue, Pittsburgh PA 15206, USA By email: abuse@duolingo.com
        Governing Law and Arbitration; No Class Action These Terms and
        Conditions, its subject matter and Duolingo’s and your respective rights
        under these Terms and Conditions, as well as and any claim, cause of
        action or dispute (“claim”) arising out of or related to these Terms and
        Conditions, shall be governed by and construed under the laws of the
        Commonwealth of Pennsylvania, United States of America, excluding the
        conflict of law provisions of that or any other jurisdiction, regardless
        of your country of origin or where you access the Service. ANY DISPUTE
        OR CLAIM RELATING IN ANY WAY TO THESE TERMS AND CONDITIONS OR THE
        SERVICE WILL BE RESOLVED BY BINDING ARBITRATION, RATHER THAN IN COURT,
        except for Duolingo’s right to seek injunctive relief as set forth
        below. Unless otherwise expressly required by applicable law, each party
        shall bear its own attorneys’ fees without regard to which party is
        deemed the prevailing party in the arbitration proceeding. If you do not
        want to arbitrate disputes with Duolingo and you are an individual, you
        may opt out of this arbitration agreement by sending an email to
        legal@duolingo.com within 30 days of the day you first access or use the
        Service. If you intend to seek arbitration you must first send written
        notice to Duolingo’s Administration Office of your intent to arbitrate
        (“Notice”). The Notice to Duolingo should be sent by any of the
        following means: (i) electronic mail to legal@duolingo.com; or (ii)
        sending the Notice by U.S. Postal Service certified mail to Duolingo,
        Inc., Attention: Legal, 5900 Penn Ave; Pittsburgh, PA 15206. The Notice
        must (x) describe the nature and basis of the claim or dispute; and (y)
        set forth the specific relief sought; and (z) set forth your name,
        address and contact information. If we intend to seek arbitration
        against you, we will send any notice of dispute to you at the contact
        information we have for you. The arbitration will be conducted before a
        neutral single arbitrator in the County of Allegheny in the Commonwealth
        of Pennsylvania, whose decision will be final and binding, and the
        arbitral proceedings will be governed by JAMS under its Comprehensive
        Arbitration Rules and Procedures (the “JAMS Rules”) as modified by these
        Terms and Conditions. The JAMS Rules are available at www.jamsadr.com.
        All issues are for the arbitrator to decide, including the scope of this
        arbitration clause, but the arbitrator is bound by the terms of these
        Terms and Conditions. If you initiate arbitration, your arbitration fees
        will be limited to the filing fee set forth in the JAMS Rules. We will
        reimburse all other JAMS filing, administration and arbitrator fees paid
        by you, unless the arbitrator determines that the arbitration was
        frivolous or brought for an improper purpose, in which case the payment
        of all such fees shall be governed by the JAMS Rules. The arbitration
        will be conducted in the English language. Judgment on the award
        rendered by the arbitrator may be entered in any court of competent
        jurisdiction. For any claim where the potential award is reasonably
        likely to be $10,000 or less, either you or Duolingo may elect to have
        the dispute resolved through non-appearance-based arbitration. To the
        fullest extent permitted by applicable law, YOU AND DUOLINGO EACH AGREE
        THAT ANY DISPUTE RESOLUTION PROCEEDING WILL BE CONDUCTED ONLY ON AN
        INDIVIDUAL BASIS AND NOT IN A CLASS, CONSOLIDATED OR REPRESENTATIVE
        ACTION. If for any reason a claim proceeds in court rather than in
        arbitration, YOU AND DUOLINGO EACH WAIVE ANY RIGHT TO A JURY TRIAL. If a
        court of competent jurisdiction finds the foregoing arbitration
        provisions invalid or inapplicable, you and Duolingo agree that all
        claims arising out of or related to these Terms and Conditions must be
        resolved exclusively by a state or federal court located in the County
        of Allegheny in the Commonwealth of Pennsylvania, and you and Duolingo
        each agree to submit to the exercise of personal jurisdiction of such
        courts for the purpose of litigating all such claims. Notwithstanding
        the above, you agree that Duolingo shall still be allowed to apply for
        and obtain injunctive remedies (or an equivalent type of urgent legal
        relief) in any jurisdiction. Language This agreement was originally
        written in English (US). To the extent any translated version of this
        agreement conflicts with the English version, the English version
        controls. California Resident If you are a California resident, in
        accordance with Cal. Civ. Code § 1789.3, you may report complaints to
        the Complaint Assistance Unit of the Division of Consumer Services of
        the California Department of Consumer Affairs by contacting them in
        writing at 1625 North Market Blvd., Suite N 112 Sacramento, CA 95834, or
        by telephone at (800) 952-5210. Miscellaneous These Terms and Conditions
        constitute the entire agreement between Duolingo and you concerning the
        subject matter hereof. In the event that any of the Terms and Conditions
        are held by a court or other tribunal of competent jurisdiction to be
        unenforceable, such provisions shall be limited or eliminated to the
        minimum extent necessary so that these Terms and Conditions shall
        otherwise remain in full force and effect. A waiver by Duolingo or you
        of any provision of these Terms and Conditions or any breach thereof, in
        any one instance, will not waive such term or condition or any
        subsequent breach thereof. Duolingo may assign its rights or obligations
        under these Terms and Conditions without condition. These Terms and
        Conditions will be binding upon and will inure to the benefit of
        Duolingo and you, and Duolingo's and your respective successors and
        permitted assigns. Last revised on October 22nd, 2020
      </p>
    </section>
    <!-- ================================done================================= -->
    <div
      class="px-4 py-2 h-full flex flex-col justify-between lg:justify-center"
      v-show="this.step == 9"
    >
      <p class="text-center">Welcome To</p>
      <div>
        <img class="h-12 mx-auto" src="/logo/main.svg" alt="" />
      </div>
      <img
        class="w-9/12 lg:w-96 mx-auto mt-auto lg:mt-0"
        src="/images/boy.png"
        alt=""
      />
      <div class="w-full lg:w-1/2 bg-background mx-auto px-auto flex flex-col">
        <p class="text-center lg:w-96 mx-auto">
          In order to continue please add your payment details, or start your 7
          day free trail
        </p>
        <button
          v-if="this.step == 9"
          @click="nextStep"
          class="btn primary mt-auto block mx-auto"
        >
          Add Payment Details
        </button>
        <button
          v-if="this.step == 9"
          @click="nextStep"
          class="btn outline block mx-auto"
        >
          Start 7 day free trail
        </button>
      </div>
    </div>
    <footer v-if="this.step < 9">
      <button @click="nextStep" class="btn primary">Next</button>
    </footer>
  </main>
</template>
<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default {
  layout: 'public',
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      email: '',
      code: null,
      password: '',
      firstname: '',
      lastname: '',
      showPassword: false,
      childs_name: '',
      step: 1,
      age: [1, 2, 3, 4, 5, 6],
      avatars: [
        'boy_1',
        'boy_2',
        'boy_3',
        'girl_1',
        'girl_2',
        'girl_3',
        'girl_4',
      ],
      lang: ['english', 'afrikaans', 'zulu', 'venda'],
      selectedLang: 'english',
      selectedAge: 0,
      selectedAvatar: '',
    }
  },
  methods: {
    goBack() {
      if (this.step > 1) {
        this.step = this.step - 1
      } else {
        this.$router.replace('/welcome')
      }
    },
    togglePassword() {
      this.showPassword = !this.showPassword
    },
    handleChange(form) {
      this.$refs[form].reset()
    },
    async nextStep() {
      let validated
      switch (this.step) {
        case 1:
          validated = await this.$refs.email.validate()

          if (!validated) {
            return false
          }
          break
        case 2:
          validated = await this.$refs.code.validate()

          if (!validated) {
            return false
          }
          break
        case 3:
          validated = await this.$refs.addPassword.validate()

          if (!validated) {
            return false
          }
          break
        case 4:
          validated = await this.$refs.names.validate()

          if (!validated) {
            return false
          }
          break
        case 5:
          validated = await this.$refs.child.validate()

          if (!validated) {
            return false
          }
          break
        case 6:
          break
        case 7:
          break
        case 8:
          break
        case 9:
          break
      }
    },
    setSelectedAge(age) {
      this.selectedAge = age
    },
    setSelectedavatar(item) {
      this.selectedAvatar = item
    },
    setSelectedLang(item) {
      this.selectedLang = item
    },
  },
}
</script>
<style>

</style>
