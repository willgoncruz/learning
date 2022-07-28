import React from "react";
import { IntlProvider } from "react-intl";
import { FormattedMessage } from "react-intl";

import ErrorBoundary from "ErrorBoundary";

import Button from "component/Button";
import messages from "lang/pt-BR.json";
import customMessages from "./messages";

const locale = "pt-BR";

const App = () => (
  <ErrorBoundary>
    <IntlProvider key={locale} locale={locale} defaultLocale={locale} messages={messages}>
      <div>
        <span>Teste APP</span>
        <Button
          type="primary"
          label={<FormattedMessage {...customMessages.buttonLabel} />}
          onClick={() => <div />}
        />
      </div>
    </IntlProvider>
  </ErrorBoundary>
);

export default App;
