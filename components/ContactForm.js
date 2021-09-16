import React, { useState } from "react";
import SbEditable from "storyblok-react";
import { render } from "storyblok-rich-text-react-renderer";
import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useFormspark } from "@formspark/use-formspark";

const FORMSPARK_FORM_ID = "DOzUQauS";

function transactionID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export default function ContactForm({ blok }) {
  const router = useRouter();
  const { locale } = router;
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
    language: locale,
  };

  const trans = {
    contact: {
      en: "Contact Information",
      af: "Kontakbesonderhede",
    },
    submit: {
      en: "Submit",
      af: "Stuur",
    },
    name: {
      en: "First name",
      af: "Naame",
    },
    surname: {
      en: "Last name",
      af: "Van",
    },
    email: {
      en: "Email",
      af: "E-pos",
    },
    cellphone: {
      en: "Cellphone",
      af: "Selfoon",
    },
    message: {
      en: "Message",
      af: "Boodskap",
    },
    max: {
      en: "Max. 500 characters",
      af: "Maximum 500 letters",
    },
  };

  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    values.language = locale;
    await submit({ ...values });
    router.push(`/${locale}/thank-you?transaction_id=${transactionID()}`);
  };

  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="bg-gray-100">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
          <div className="relative bg-white shadow-xl">
            <h2 className="sr-only">Contact us</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Contact information */}
              <div className="relative px-6 py-10 overflow-hidden bg-brand-400 sm:px-10 xl:p-12">
                <div
                  className="absolute inset-0 pointer-events-none sm:hidden"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    width={343}
                    height={388}
                    viewBox="0 0 343 388"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                      fill="url(#linear1)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear1"
                        x1="254.553"
                        y1="107.554"
                        x2="961.66"
                        y2="814.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  className="absolute top-0 bottom-0 right-0 hidden w-1/2 pointer-events-none sm:block lg:hidden"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    width={359}
                    height={339}
                    viewBox="0 0 359 339"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                      fill="url(#linear2)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear2"
                        x1="192.553"
                        y1="28.553"
                        x2="899.66"
                        y2="735.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  className="absolute top-0 bottom-0 right-0 hidden w-1/2 pointer-events-none lg:block"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    width={160}
                    height={678}
                    viewBox="0 0 160 678"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                      fill="url(#linear3)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear3"
                        x1="192.553"
                        y1="325.553"
                        x2="899.66"
                        y2="1032.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className="mb-6 text-lg font-medium text-white">
                  {trans.contact[locale]}
                </h3>
                <div className="max-w-3xl mb-6 text-base text-brand-50">
                  {render(blok.description)}
                </div>

                <div className="max-w-3xl mb-6 text-base text-brand-50">
                  {render(blok.address)}
                </div>
                <dl className="my-8 space-y-6">
                  <dt>
                    <span className="sr-only">Phone number</span>
                  </dt>
                  <dd className="flex text-base text-brand-100">
                    <PhoneIcon
                      className="flex-shrink-0 w-6 h-6 text-brand-200"
                      aria-hidden="true"
                    />
                    <span className="ml-3">076 684 1249</span>
                  </dd>
                  <dt>
                    <span className="sr-only">Email</span>
                  </dt>
                  <dd className="flex text-base text-brand-100">
                    <MailIcon
                      className="flex-shrink-0 w-6 h-6 text-brand-200"
                      aria-hidden="true"
                    />
                    <span className="ml-3">elnadurr@gmail.com</span>
                  </dd>
                </dl>
                <div className="max-w-3xl mt-6 text-base text-brand-50">
                  {render(blok.additional_info)}
                </div>
              </div>

              {/* Contact form */}
              <div className="px-6 py-10 sm:px-10 lg:col-span-2 xl:p-12">
                <h3 className="text-lg font-medium text-gray-900">
                  {blok.title}
                </h3>
                <form
                  name="contact"
                  onSubmit={onSubmit}
                  method="POST"
                  className="grid grid-cols-1 mt-6 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                >
                  <input
                    type="hidden"
                    name="language"
                    id="language"
                    className="block w-full px-4 py-3 text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500"
                    value={locale}
                    onChange={handleInputChange}
                  />
                  <div>
                    <label
                      htmlFor="firstname"
                      className="block text-sm font-medium text-gray-900"
                    >
                      {trans.name[locale]}
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        autoComplete="given-name"
                        className="block w-full px-4 py-3 text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500"
                        value={values.firstname}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="lastname"
                      className="block text-sm font-medium text-gray-900"
                    >
                      {trans.surname[locale]}
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        autoComplete="family-name"
                        className="block w-full px-4 py-3 text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500"
                        value={values.lastname}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-900"
                    >
                      {trans.email[locale]}
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full px-4 py-3 text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500"
                        value={values.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-900"
                      >
                        {trans.cellphone[locale]}
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        className="block w-full px-4 py-3 text-gray-900 border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500"
                        aria-describedby="phone-optional"
                        value={values.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-900"
                      >
                        {trans.message[locale]}
                      </label>
                      <span id="message-max" className="text-sm text-gray-500">
                        {trans.max[locale]}
                      </span>
                    </div>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="block w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500"
                        aria-describedby="message-max"
                        value={values.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2 sm:flex sm:justify-end">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center justify-center w-full px-6 py-3 mt-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 sm:w-auto"
                    >
                      {submitting && "..."}
                      {!submitting && trans.submit[locale]}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SbEditable>
  );
}
