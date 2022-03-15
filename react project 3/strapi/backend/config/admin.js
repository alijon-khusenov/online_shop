module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ee037e118cea0ed1717930029f161db2'),
  },
});
