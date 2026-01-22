import React from "react";

export default function Page() {
  return (
    <>
      <div className="py-6 lg:py-15">
        <div className="max-w-4xl mx-auto p-4 lg:p-8 bg-white rounded-lg shadow-xl border border-gray-200">
          <div className="flex flex-col gap-6">
            <header>
              <h1 className="text-3xl font-semibold">Imprint</h1>
              <p className="text-sm text-gray-500">
                Information pursuant to § 5 TMG
              </p>
            </header>

            <section className="space-y-1">
              <h2 className="text-xl font-semibold">Company</h2>
              <p>Mahsun Dic</p>
              <p>Example Street 12</p>
              <p>12345 Sample City</p>
              <p>Germany</p>
            </section>

            <section className="space-y-1">
              <h2 className="text-xl font-semibold">Contact</h2>
              <p>Phone: +49 123 456789</p>
              <p>
                Email:{" "}
                <a
                  className="text-blue-600 underline"
                  href="mailto:info@example.com"
                >
                  info@example.com
                </a>
              </p>
            </section>

            <section className="space-y-1">
              <h2 className="text-xl font-semibold">Responsible for content</h2>
              <p>Mahsun Dic</p>
              <p>Address as above</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold">EU dispute resolution</h2>
              <p>
                The European Commission provides a platform for online dispute
                resolution (OS):
                <a
                  className="text-blue-600 underline"
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
                .
              </p>
              <p>
                We are not willing or obliged to participate in dispute
                resolution proceedings before a consumer arbitration board.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold">Liability for content</h2>
              <p>
                As a service provider, we are responsible for our own content on
                these pages in accordance with § 7 (1) TMG. According to §§ 8–10
                TMG, we are not obligated to monitor transmitted or stored
                information or to investigate circumstances indicating illegal
                activity. Obligations to remove or block the use of information
                under general laws remain unaffected. Liability in this respect
                is only possible from the time of knowledge of a specific
                infringement. Upon becoming aware of such infringements, we will
                remove this content immediately.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold">Liability for links</h2>
              <p>
                Our site contains links to external third-party websites over
                which we have no control. Therefore, we cannot accept any
                responsibility for their content. The respective provider or
                operator is always responsible for the content of linked pages.
                Linked pages were checked for possible legal violations at the
                time of linking and no unlawful content was recognizable.
                Permanent monitoring of linked pages is unreasonable without
                concrete evidence of a violation. Upon notification of
                infringements, we will remove such links immediately.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold">Copyright</h2>
              <p>
                The content and works on these pages created by the site
                operator are subject to German copyright law. Duplication,
                processing, distribution, and any kind of use outside the limits
                of copyright require written consent of the respective author or
                creator. Downloads and copies of this site are only permitted
                for private, non-commercial use. Insofar as the content on this
                site was not created by the operator, third-party copyrights are
                respected. Should you nevertheless become aware of a copyright
                infringement, please inform us. Upon notification, we will
                remove such content immediately.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
