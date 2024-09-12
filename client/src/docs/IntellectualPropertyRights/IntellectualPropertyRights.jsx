import React from 'react';
import './IntellectualPropertyRights.css';
import DiyarahLogo from '/icons/MallStackTitledCleared.png'

import Header from '../../components/Layout/Header'
import HeroSection from '../../components/Other/HeroSection';
import Footer from '../../components/Layout/Footer';
import Up from '../../components/Other/Up';

const IntellectualPropertyRights = () => {
  return (
    <>
      <div className='overlay-image'></div>
      <Header />
      <HeroSection />
      <Up />
      <div className="intellectual-property-rights-container">
        <header>
          <h1 className="intellectual-property-rights-title">حقوق الملكية الفكرية</h1>
        </header>

        <section>
          <h2 className="intellectual-property-rights-text">
            المحتوى المحمي
          </h2>
          <p className="intellectual-property-rights-text">
            جميع النصوص، الصور، الشعارات، التصاميم، مقاطع الفيديو، والمعلومات التقنية المعروضة على منصة "معارض الضجيج للأثاث" هي ملك حصري للمنصة أو مقدمي المحتوى بموافقتهم، ومحمية بموجب قوانين الملكية الفكرية المحلية والدولية. يمنع نسخ، تعديل، نشر، إعادة توزيع أو استخدام أي جزء من هذا المحتوى دون الحصول على إذن خطي مسبق من الجهة المالكة
          </p>
        </section>

        <section>
          <h2>العلامات التجارية</h2>
          <p>
            العلامات التجارية والشعارات التي تظهر على المنصة، سواء كانت تابعة للمنصة أو للشركاء والتجار، هي علامات تجارية مسجلة أو غير مسجلة. يُمنع استخدامها دون تصريح مسبق من الجهة المالكة. أي استخدام غير مصرح به للعلامات التجارية قد يؤدي إلى اتخاذ إجراءات قانونية  
          </p>
        </section>

        <section>
          <h2>ترخيص الاستخدام</h2>
          <p>
           منصة "معارض الضجيج للأثاث" تمنح المستخدمين ترخيصًا محدودًا وغير حصري للوصول إلى المحتوى واستخدامه لأغراض شخصية فقط. لا يجوز للمستخدمين استغلال المحتوى تجاريًا أو استخدامه في أعمال مشتقة أو توزيعه بدون إذن خطي 
          </p>
        </section>

        <section>
          <h2>انتهاك حقوق الملكية</h2>
          <p>
            إذا كان لديك اعتقاد بأن أي محتوى معروض على المنصة ينتهك حقوق الملكية الفكرية الخاصة بك، نرجو التواصل معنا فورًا. سنتخذ الإجراءات المناسبة بما في ذلك إزالة المحتوى المتنازع عليه إن تطلب الأمر بعد التحقيق في الشكوى
          </p>
        </section>

        <section>
          <h2>التقديمات من المستخدمين</h2>
          <p>
            أي محتوى يتم تقديمه من قبل المستخدمين إلى المنصة، مثل المراجعات أو الصور أو المعلومات الأخرى، يظل ملكًا للمستخدم، ولكن من خلال تقديمه، يمنح المستخدم المنصة ترخيصًا دائمًا وغير قابل للإلغاء لاستخدام هذا المحتوى وعرضه وتعديله بما يتوافق مع سياسات المنصة  
          </p>
        </section>

        <section>
          <h2>المسؤولية القانونية</h2>
          <p>
            أي انتهاك لحقوق الملكية الفكرية قد يؤدي إلى مقاضاة الشخص المخالف من قبل الجهة المالكة للمحتوى أو العلامة التجارية. تحتفظ المنصة بالحق في اتخاذ كافة الإجراءات القانونية اللازمة لحماية حقوقها الفكرية، بما في ذلك مطالبة الشخص المخالف بالتعويض عن الأضرار
          </p>
        </section>

        <section>
          <h2>حقوق الطرف الثالث</h2>
          <p>
          قد تتضمن المنصة روابط أو محتويات مملوكة لأطراف ثالثة، مثل التجار أو الشركاء. جميع حقوق الملكية الفكرية المتعلقة بهذه الأطراف هي ملكهم الحصري. المنصة ليست مسؤولة عن أي انتهاك لهذه الحقوق من قبل المستخدمين
          </p>
        </section>

        <section>
          <h2>الاستثناءات</h2>
          <p>
            تتيح المنصة استخدامات معينة للمحتوى بدون إذن خطي، وذلك وفقًا لما تسمح به القوانين المعمول بها مثل "الاستخدام العادل" للأغراض التعليمية أو النقدية أو الإخبارية
          </p>
        </section>

        <div id='plogoDiv'>
          <img src={DiyarahLogo} alt="Company Logo" className="plogo" loading="lazy" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default IntellectualPropertyRights;