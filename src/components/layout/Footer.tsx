import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<'privacy' | 'imprint'>('privacy');

  const openModal = (tab: 'privacy' | 'imprint') => {
    setLegalTab(tab);
    setLegalModalOpen(true);
  };

  return (
    <>
      <footer className="main-footer" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="section-bg-wrapper" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          <div 
            style={{ 
              backgroundImage: "url('images/bar3_landscape.png')", 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
          />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(6, 6, 6, 0.92)' }}></div>
        </div>

        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="footer-grid-luxury">
            
            <div className="footer-col brand-col">
              <span className="footer-logo">MISO<span className="dot">•</span>U</span>
              <p className="footer-tagline">{t('footer.tagline')}</p>
              <div className="footer-socials">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><span className="social-icon">IG</span></a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><span className="social-icon">FB</span></a>
              </div>
            </div>

            <div className="footer-col">
              <h5 className="footer-col-title">{t('footer.hours')}</h5>
              <div className="footer-hours-list">
                <div className="hours-item">
                  <span className="days">{t('contact.daysWeek')}</span>
                  <span className="time">{t('contact.timeWeek')}</span>
                </div>
                <div className="hours-item">
                  <span className="days">{t('contact.daysWeekend')}</span>
                  <span className="time">{t('contact.timeWeekend')}</span>
                </div>
                <div className="hours-item">
                  <span className="days">{t('contact.dayMonday')}</span>
                  <span className="time" style={{ color: 'var(--color-crimson)' }}>{t('contact.closed')}</span>
                </div>
              </div>
            </div>

            <div className="footer-col">
              <h5 className="footer-col-title">{t('footer.location')}</h5>
              <p className="footer-address">
                Marc Aurel Straße 2A<br/>
                1010 Wien, Austria
              </p>
              <a href="https://maps.google.com/?q=Marc+Aurel+Straße+2A,+1010+Wien" target="_blank" rel="noopener noreferrer" className="footer-map-link link-underline">{t('footer.directions')}</a>
            </div>

            <div className="footer-col">
              <h5 className="footer-col-title">{t('footer.inquiries')}</h5>
              <a href="tel:+436601288953" className="footer-contact-link link-underline">+43 660 12 88 953</a>
              <a href="mailto:office@misou.online" className="footer-contact-link link-underline">office@misou.online</a>
              <a href="https://www.gastro.site/reserve?id=BATr49A62nAkQ&details=yes" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-gold btn-sm footer-book-btn">{t('footer.book')}</a>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">{t('footer.copyright')}</p>
            <div className="legal-links">
              <button className="footer-link link-underline" onClick={() => openModal('imprint')}>{t('footer.imprint')}</button>
              <button className="footer-link link-underline" onClick={() => openModal('privacy')}>{t('footer.privacy')}</button>
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {legalModalOpen && (
          <motion.div 
            className="legal-modal-overlay active"
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(15px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            style={{ display: 'flex', visibility: 'visible' }}
          >
            <motion.div 
              className="legal-modal-container active"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <button className="legal-close-btn" onClick={() => setLegalModalOpen(false)}>&times;</button>

              <div className="legal-modal-tabs">
                <button 
                  className={`legal-tab-btn ${legalTab === 'privacy' ? 'active' : ''}`} 
                  onClick={() => setLegalTab('privacy')}
                >
                  {t('footer.privacy')}
                </button>
                <button 
                  className={`legal-tab-btn ${legalTab === 'imprint' ? 'active' : ''}`} 
                  onClick={() => setLegalTab('imprint')}
                >
                  {t('footer.imprint')}
                </button>
              </div>

              <div className="legal-modal-content">
                {legalTab === 'privacy' ? (
                  <div className="legal-panel-content active">
                    <h2>{language === 'de' ? 'Erklärung zur Informationspflicht' : 'Declaration of Information Obligation'}</h2>
                    <h3 className="text-gold" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', margin: '15px 0' }}>
                      {language === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}
                    </h3>
                    <p>
                      {language === 'de'
                        ? 'In folgender Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Webseite. Wir erheben und verarbeiten personenbezogene Daten nur auf Grundlage der gesetzlichen Bestimmungen (Datenschutzgrundverordnung, Telekommunikationsgesetz 2003).'
                        : 'In the following privacy policy, we inform you about the key aspects of data processing within our website. We collect and process personal data only on the basis of legal regulations (General Data Protection Regulation, Telecommunications Act 2003).'}
                    </p>
                    <p>
                      {language === 'de'
                        ? 'Sobald Sie als Benutzer auf unsere Webseite zugreifen oder diese besuchen wird Ihre IP-Adresse, Beginn sowie Beginn und Ende der Sitzung erfasst. Dies ist technisch bedingt und stellt somit ein berechtigtes Interesse iSv Art 6 Abs 1 lit f DSGVO.'
                        : 'As soon as you access or visit our website as a user, your IP address, start, and end of the session are recorded. This is technically necessary and therefore constitutes a legitimate interest according to Art. 6 Para. 1 GDPR.'}
                    </p>

                    <h3 className="text-gold" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.2rem', margin: '20px 0 10px 0' }}>
                      {language === 'de' ? 'Kontakt mit uns' : 'Contact with us'}
                    </h3>
                    <p>
                      {language === 'de'
                        ? 'Wenn Sie uns, entweder über unser Kontaktformular auf unserer Webseite, oder per Email kontaktieren, dann werden die von Ihnen an uns übermittelten Daten zwecks Bearbeitung Ihrer Anfrage oder für den Fall von weiteren Anschlussfragen für sechs Monate bei uns gespeichert. Es erfolgt, ohne Ihre Einwilligung, keine Weitergabe Ihrer übermittelten Daten.'
                        : 'If you contact us, either via our contact form on our website or by email, the data you transmit to us will be stored for six months for the purpose of processing your inquiry or in case of follow-up questions. No transfer of your transmitted data will occur without your consent.'}
                    </p>

                    <h3 className="text-gold" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.2rem', margin: '20px 0 10px 0' }}>
                      {language === 'de' ? 'Cookies' : 'Cookies'}
                    </h3>
                    <p>
                      {language === 'de'
                        ? 'Unsere Website verwendet so genannte Cookies. Dabei handelt es sich um kleine Textdateien, die mit Hilfe des Browsers auf Ihrem Endgerät abgelegt werden. Sie richten keinen Schaden an. Wir nutzen Cookies dazu, unser Angebot nutzerfreundlich zu gestalten. Einige Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Sie ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.'
                        : 'Our website uses so-called cookies. These are small text files that are stored on your device with the help of your browser. They do not cause any harm. We use cookies to design our offer to be user-friendly. Some cookies remain stored on your device until you delete them. They allow us to recognize your browser on your next visit.'}
                    </p>
                    <p>
                      {language === 'de'
                        ? 'Wenn Sie dies nicht wünschen, so können Sie Ihren Browser so einrichten, dass er Sie über das Setzen von Cookies informiert und Sie dies nur im Einzelfall erlauben. Bei der Deaktivierung von Cookies kann die Funktionalität unserer Website eingeschränkt sein.'
                        : 'If you do not wish this, you can configure your browser to inform you about the setting of cookies and only allow it in individual cases. Disabling cookies may limit the functionality of our website.'}
                    </p>

                    <h3 className="text-gold" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.2rem', margin: '20px 0 10px 0' }}>
                      {language === 'de' ? 'Google Maps' : 'Google Maps'}
                    </h3>
                    <p>
                      <strong>{language === 'de' ? 'Dienstanbieter:' : 'Service Provider:'}</strong> Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland. Tel: +353 1 543 1000
                    </p>
                    <p>
                      {language === 'de'
                        ? 'Im Zuge der Nutzung von Google Maps ist es notwendig Ihre IP-Adresse zu speichern und zu verarbeiten. Google überträgt in der Regel an einen Server in den USA und speichert die Daten dort. Die Verarbeitung geschieht durch den Diensteanbieter (oben genannt), der Betreiber dieser Homepage hat keinen Einfluss auf die Übertragung der Daten.'
                        : 'In the course of using Google Maps, it is necessary to store and process your IP address. Google usually transmits to a server in the USA and stores the data there. The processing is done by the service provider (named above); the operator of this homepage has no influence on the transmission of the data.'}
                    </p>
                    <p>
                      {language === 'de'
                        ? 'Die Datenverarbeitung erfolgt auf Basis der gesetzlichen Bestimmungen des § 96 Abs 3 TKG sowie des Art 6 Abs 1 lit f (berechtigtes Interesse) der DSGVO. Die Nutzung von Google Maps erhöht die Auffindbarkeit der Orte, welche auf unserer Webseite bereitgestellt werden.'
                        : 'Data processing is based on the legal provisions of § 96 Paragraph 3 TKG and Art 6 Paragraph 1 lit f (legitimate interest) of the GDPR. The use of Google Maps increases the findability of the locations provided on our website.'}
                    </p>
                    <p>
                      {language === 'de' ? 'Weitere Informationen über den Umgang mit Nutzerdaten des Diensteanbieters „Google“ können Sie der Datenschutzerklärung entnehmen:' : 'Further information on how Google handles user data can be found in their privacy policy:'}{' '}
                      <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" className="text-gold">https://policies.google.com/privacy</a>
                    </p>
                    <p>
                      {language === 'de'
                        ? 'Google verarbeitet die Daten auch in den USA, hat sich jedoch dem EU-US Privacy-Shield unterworfen:'
                        : 'Google also processes data in the USA, but has submitted to the EU-US Privacy Shield:'}{' '}
                      <a href="https://www.privacyshield.gov/EU-US-Framework" target="_blank" rel="noopener noreferrer" className="text-gold">https://www.privacyshield.gov</a>
                    </p>

                    <h3 className="text-gold" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.2rem', margin: '20px 0 10px 0' }}>
                      {language === 'de' ? 'Google Fonts' : 'Google Fonts'}
                    </h3>
                    <p>
                      <strong>{language === 'de' ? 'Dienstanbieter:' : 'Service Provider:'}</strong> Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland. Tel: +353 1 543 1000
                    </p>
                    <p>
                      {language === 'de'
                        ? 'Beim Aufrufen dieser Webseite lädt Ihr Browser Schriftarten und speichert diese in den Cache. Da Sie, als Besucher der Webseite, Daten des Dienstanbieters empfangen kann Google unter Umständen Cookies auf Ihrem Rechner setzen oder analysieren.'
                        : 'When accessing this website, your browser loads fonts and stores them in the cache. Since you, as a visitor to the website, receive data from the service provider, Google may under certain circumstances set or analyze cookies on your computer.'}
                    </p>
                    <p>
                      {language === 'de'
                        ? 'Die Nutzung von „Google-Fonts“ dient der Optimierung unserer Dienstleistung und der einheitlichen Darstellung von Inhalten. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.'
                        : 'The use of ' + '"' + 'Google Fonts' + '"' + ' serves to optimize our service and uniform presentation of content. This constitutes a legitimate interest within the meaning of Art. 6 Paragraph 1 lit. f GDPR.'}
                    </p>
                    <p>
                      {language === 'de' ? 'Weitere Informationen zu Google Fonts erhalten Sie unter folgendem Link:' : 'Further information on Google Fonts can be found at:'}{' '}
                      <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer" className="text-gold">https://developers.google.com/fonts/faq</a><br/>
                      {language === 'de' ? 'Weitere Informationen über den Umgang mit Nutzerdaten von Google können Sie der Datenschutzerklärung entnehmen:' : 'Further information on how Google handles user data can be found in their privacy policy:'}{' '}
                      <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" className="text-gold">https://policies.google.com/privacy</a>
                    </p>

                    <h3 className="text-gold" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.2rem', margin: '20px 0 10px 0' }}>
                      {language === 'de' ? 'Server-Log Files' : 'Server-Log Files'}
                    </h3>
                    <p>
                      {language === 'de'
                        ? 'Diese Webseite und der damit verbundene Provider erhebt im Zuge der Webseitennutzung automatisch Informationen im Rahmen sogenannter „Server-Log Files“. Dies betrifft insbesondere:'
                        : 'This website and its hosting provider automatically collect information during website usage in so-called ' + '"' + 'Server Log Files' + '"' + '. This applies in particular to:'}
                    </p>
                    <ul style={{ paddingLeft: '20px', marginBottom: '15px', fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.8' }}>
                      <li>{language === 'de' ? 'IP-Adresse oder Hostname' : 'IP address or hostname'}</li>
                      <li>{language === 'de' ? 'den verwendeten Browser' : 'the browser used'}</li>
                      <li>{language === 'de' ? 'Aufenthaltsdauer auf der Webseite sowie Datum und Uhrzeit' : 'duration of stay on the website as well as date and time'}</li>
                      <li>{language === 'de' ? 'aufgerufene Seiten der Webseite' : 'accessed pages of the website'}</li>
                      <li>{language === 'de' ? 'Spracheinstellungen und Betriebssystem' : 'language settings and operating system'}</li>
                      <li>{language === 'de' ? '„Leaving-Page“ (auf welcher URL hat der Benutzer die Webseite verlassen)' : '"Leaving-Page" (the URL where the user left the website)'}</li>
                      <li>ISP (Internet Service Provider)</li>
                    </ul>
                    <p>
                      {language === 'de'
                        ? 'Diese erhobenen Informationen werden nicht personenbezogen verarbeitet oder mit personenbezogenen Daten in Verbindung gebracht.'
                        : 'This collected information is not processed with personal identifiers or associated with personal data.'}
                    </p>
                    <p>
                      {language === 'de'
                        ? 'Der Webseitenbetreiber behält es sich vor, im Falle von Bekanntwerden rechtswidriger Tätigkeiten, diese Daten auszuwerten oder zu überprüfen.'
                        : 'The website operator reserves the right to evaluate or check this data in the event that illegal activities become known.'}
                    </p>

                    <h3 className="text-gold" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.2rem', margin: '20px 0 10px 0' }}>
                      {language === 'de' ? 'Ihre Rechte als Betroffener' : 'Your rights as a data subject'}
                    </h3>
                    <p>
                      {language === 'de'
                        ? 'Sie als Betroffener haben bezüglich Ihrer Daten, welche bei uns gespeichert sind grundsätzlich ein Recht auf:'
                        : 'As a data subject, you generally have a right to the following regarding your data stored by us:'}
                    </p>
                    <ul style={{ paddingLeft: '20px', marginBottom: '15px', fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.8' }}>
                      <li>{language === 'de' ? 'Auskunft' : 'Access'}</li>
                      <li>{language === 'de' ? 'Löschung der Daten' : 'Deletion of data'}</li>
                      <li>{language === 'de' ? 'Berichtigung der Daten' : 'Correction of data'}</li>
                      <li>{language === 'de' ? 'Übertragbarkeit der Daten' : 'Data portability'}</li>
                      <li>{language === 'de' ? 'Widerruf und Widerspruch zur Datenverarbeitung' : 'Revocation of and objection to data processing'}</li>
                      <li>{language === 'de' ? 'Einschränkung' : 'Restriction'}</li>
                    </ul>
                    <p>
                      {language === 'de'
                        ? 'Wenn sie vermuten, dass im Zuge der Verarbeitung Ihrer Daten Verstöße gegen das Datenschutzrecht passiert sind, so haben Sie die Möglichkeit sich bei uns (office@misou.online) oder der Datenschutzbehörde zu beschweren.'
                        : 'If you suspect that violations of data protection law have occurred in the course of processing your data, you have the option to complain to us (office@misou.online) or to the Data Protection Authority.'}
                    </p>

                    <h3 className="text-gold" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.2rem', margin: '20px 0 10px 0' }}>
                      {language === 'de' ? 'Sie erreichen uns unter folgenden Kontaktdaten:' : 'You can reach us at the following contact details:'}
                    </h3>
                    <p>
                      <strong>{language === 'de' ? 'Webseitenbetreiber:' : 'Website Operator:'}</strong> YUNA GMBH<br/>
                      <strong>{language === 'de' ? 'Telefonnummer:' : 'Phone:'}</strong> 066012837456<br/>
                      <strong>{language === 'de' ? 'Email:' : 'Email:'}</strong> <a href="mailto:office@misou.online" className="text-gold">office@misou.online</a>
                    </p>

                    <h3 className="text-gold" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.2rem', margin: '20px 0 10px 0' }}>
                      {language === 'de' ? 'SIE WOLLEN RESERVIEREN?' : 'WANT TO RESERVE?'}
                    </h3>
                    <p>
                      <strong>{language === 'de' ? 'Email:' : 'Email:'}</strong> <a href="mailto:office@misou.online" className="text-gold">office@misou.online</a><br/>
                      <strong>{language === 'de' ? 'Telefon:' : 'Phone:'}</strong> +43 660 12 88 953
                    </p>
                  </div>
                ) : (
                  <div className="legal-panel-content active">
                    <h2>{language === 'de' ? 'Impressum' : 'Imprint'}</h2>
                    <h3 className="text-gold" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', margin: '15px 0' }}>
                      {language === 'de' ? 'Informationen und Offenlegung' : 'Information and Disclosure'}
                    </h3>
                    <p>{language === 'de' ? 'gemäß §5 (1) ECG, § 25 MedienG, § 63 GewO und § 14 UGB' : 'according to §5 (1) ECG, § 25 MedienG, § 63 GewO and § 14 UGB'}</p>
                    
                    <p style={{ marginTop: '20px' }}>
                      <strong>{language === 'de' ? 'Webseitenbetreiber:' : 'Website Operator:'}</strong> YUNA GMBH<br/>
                      <strong>{language === 'de' ? 'Firmenbuchnummer:' : 'Commercial Register No.:'}</strong> FN 579185 v<br/>
                      <strong>{language === 'de' ? 'Firmenbuchgericht:' : 'Commercial Register Court:'}</strong> HANDELSGERICHT WIEN
                    </p>
                    
                    <p>
                      <strong>{language === 'de' ? 'Anschrift:' : 'Address:'}</strong> MARC AUREL STRASSE 2A, 1010 Wien
                    </p>

                    <p>
                      <strong>{language === 'de' ? 'UID-Nr:' : 'VAT ID No.:'}</strong><br/>
                      <strong>{language === 'de' ? 'Gewerbeaufsichtsbehörde:' : 'Trade Authority:'}</strong> MAGISTRAT WIEN<br/>
                      <strong>{language === 'de' ? 'Mitgliedschaften:' : 'Memberships:'}</strong> {language === 'de' ? 'MITGLIED BEI DER WKO' : 'MEMBER OF WKO'}
                    </p>

                    <p>
                      <strong>{language === 'de' ? 'Kontaktdaten:' : 'Contact:'}</strong><br/>
                      <strong>{language === 'de' ? 'Telefon:' : 'Phone:'}</strong> 066022834765<br/>
                      <strong>{language === 'de' ? 'Email:' : 'Email:'}</strong> office@misou.online<br/>
                      <strong>{language === 'de' ? 'Fax:' : 'Fax:'}</strong>
                    </p>

                    <p>
                      <strong>{language === 'de' ? 'Anwendbare Rechtsvorschrift:' : 'Applicable Legislation:'}</strong> <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer" className="text-gold">www.ris.bka.gv.at</a><br/>
                      <strong>{language === 'de' ? 'Berufsbezeichnung:' : 'Professional Title:'}</strong>
                    </p>

                    <h3 className="text-gold" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.2rem', margin: '20px 0 10px 0' }}>
                      {language === 'de' ? 'Online Streitbeilegung' : 'Online Dispute Resolution'}
                    </h3>
                    <p>
                      {language === 'de' 
                        ? 'Verbraucher, welche in Österreich oder in einem sonstigen Vertragsstaat der ODR-VO niedergelassen sind, haben die Möglichkeit Probleme bezüglich dem entgeltlichen Kauf von Waren oder Dienstleistungen im Rahmen einer Online-Streitbeilegung (nach OS, AStG) zu lösen. Die Europäische Kommission stellt eine Plattform hierfür bereit: '
                        : 'Consumers residing in Austria or in another contracting state of the ODR Regulation have the option of resolving problems regarding the paid purchase of goods or services as part of an online dispute resolution (according to OS, AStG). The European Commission provides a platform for this: '}
                      <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-gold">https://ec.europa.eu/consumers/odr</a>
                    </p>

                    <h3 className="text-gold" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.2rem', margin: '20px 0 10px 0' }}>
                      {language === 'de' ? 'Urheberrecht' : 'Copyright'}
                    </h3>
                    <p>
                      {language === 'de'
                        ? 'Die Inhalte dieser Webseite unterliegen, soweit dies rechtlich möglich ist, diversen Schutzrechten (z.B dem Urheberrecht). Jegliche Verwendung/Verbreitung von bereitgestelltem Material, welche urheberrechtlich untersagt ist, bedarf schriftlicher Zustimmung des Webseitenbetreibers.'
                        : 'To the extent legally possible, the contents of this website are subject to various protection rights (e.g. copyright). Any use/distribution of provided material that is prohibited by copyright requires the written consent of the website operator.'}
                    </p>

                    <h3 className="text-gold" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.2rem', margin: '20px 0 10px 0' }}>
                      {language === 'de' ? 'Haftungsausschluss' : 'Disclaimer'}
                    </h3>
                    <p style={{ marginBottom: '10px' }}>
                      {language === 'de'
                        ? 'Trotz sorgfältiger inhaltlicher Kontrolle übernimmt der Webseitenbetreiber dieser Webseite keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich. Sollten Sie dennoch auf ausgehende Links aufmerksam werden, welche auf eine Webseite mit rechtswidriger Tätigkeit/Information verweisen, ersuchen wir um dementsprechenden Hinweis, um diese nach § 17 Abs. 2 ECG umgehend zu entfernen.'
                        : 'Despite careful content control, the website operator of this website assumes no liability for the contents of external links. The operators of the linked pages are solely responsible for their content. Should you nevertheless become aware of outgoing links that refer to a website with illegal activity/information, we ask for a corresponding notice in order to remove them immediately in accordance with § 17 Abs. 2 ECG.'}
                    </p>
                    <p>
                      {language === 'de'
                        ? 'Die Urheberrechte Dritter werden vom Betreiber dieser Webseite mit größter Sorgfalt beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden derartiger Rechtsverletzungen werden wir den betroffenen Inhalt umgehend entfernen.'
                        : 'The copyrights of third parties are respected by the operator of this website with the utmost care. Should you nevertheless become aware of a copyright infringement, we ask for a corresponding notice. Upon becoming aware of such legal violations, we will remove the affected content immediately.'}
                    </p>

                    <h3 className="text-gold" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.2rem', margin: '20px 0 10px 0' }}>
                      {language === 'de' ? 'SIE WOLLEN RESERVIEREN?' : 'WANT TO RESERVE?'}
                    </h3>
                    <p>
                      <strong>{language === 'de' ? 'Email:' : 'Email:'}</strong> <a href="mailto:office@misou.online" className="text-gold">office@misou.online</a>
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
