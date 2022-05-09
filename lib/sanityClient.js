import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'x23utnen',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skaIDofS8VbStCbT1ENyvuZDGuvJE0PiwuzzyuK2UGU7oC8oUbH8lJwt6jmdOZPldZikRXN7te631FdLH2D6YfuKBV8d4Xm7x2J3BfwozvYA50MpB6SbXVTEI7yH6MHLyMClax9OaYWXWDf0VHXUN07rkgZbrhV0FP5uMiMY9xiZh1TlQEpd',
  useCdn: false,
})
