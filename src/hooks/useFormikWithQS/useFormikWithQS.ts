import { useEffect, useState, useCallback } from 'react';

import { FormikConfig, FormikValues, FormikHelpers, useFormik } from 'formik';
import queryString from 'query-string';
import { useLocation, useHistory } from 'react-router-dom';

export const useFormikWithQS = <Values extends FormikValues>(
  formikConfig: FormikConfig<Values>,
  path?: string
) => {
  const { pathname, search: locationSearch } = useLocation();
  const history = useHistory();
  const [urlParams, setUrlParams] = useState<Partial<Values>>({});

  const { initialValues } = formikConfig;

  const changeSearchParams = useCallback(
    (formValues: Values) => {
      setUrlParams(formValues);

      const stringifyUrlParams = queryString.stringify(formValues, {
        skipEmptyString: true,
        arrayFormat: 'bracket',
      });

      history.push({ pathname, search: stringifyUrlParams });
    },
    [history, pathname]
  );

  const handleSubmit = (formValues: Values, formikHelpers: FormikHelpers<Values>) => {
    changeSearchParams(formValues);
    formikConfig.onSubmit(formValues, formikHelpers);
  };

  const { setValues, ...formik } = useFormik({ ...formikConfig, onSubmit: handleSubmit });

  const updateFormikValues = useCallback(
    (values: Values) => {
      setValues({ ...initialValues, ...values });
    },
    [initialValues, setValues]
  );

  useEffect(() => {
    if (path && path !== pathname) return;

    if (!Object.values(urlParams).length && locationSearch) {
      updateFormikValues(
        queryString.parse(locationSearch, {
          parseBooleans: true,
          arrayFormat: 'bracket',
        }) as Values
      );
    }
  }, [urlParams, path, pathname, locationSearch, updateFormikValues]);

  return { ...formik, setValues, urlParams };
};
