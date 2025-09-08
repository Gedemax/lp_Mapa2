import Head from 'next/head';
import { useTherapist } from './TherapistProvider';

const AnalyticsScripts = () => {
  const { therapistData } = useTherapist();

  return (
    <>
      {/* Facebook Pixel */}
      {therapistData?.tracking?.facebookPixelId && (
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${therapistData.tracking.facebookPixelId}');
                fbq('track', 'PageView');
              `
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${therapistData.tracking.facebookPixelId}&ev=PageView&noscript=1`}
            />
          </noscript>
        </Head>
      )}

      {/* Google Tag Manager */}
      {therapistData?.tracking?.gtmId && (
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${therapistData.tracking.gtmId}');
              `
            }}
          />
        </Head>
      )}

      {/* Microsoft Clarity */}
      {therapistData?.tracking?.clarityId && (
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${therapistData.tracking.clarityId}");
              `
            }}
          />
        </Head>
      )}
    </>
  );
};

export default AnalyticsScripts;
