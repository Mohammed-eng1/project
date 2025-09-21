# serve.py
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
import mimetypes, os

# تأكيد تسجيل النوع الصحيح للـ SVG
mimetypes.add_type('image/svg+xml', '.svg')
mimetypes.add_type('image/svg+xml', '.svgz')

PORT = 5173
ROOT = os.path.dirname(__file__)
os.chdir(ROOT)

class Handler(SimpleHTTPRequestHandler):
    # لا حاجة لتعديل الرؤوس يدوياً؛ إضافة mimetypes تكفي

    # لو تبغى منع الكاش أثناء التطوير:
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()

ThreadingHTTPServer(('0.0.0.0', PORT), Handler).serve_forever()
"""

حسن الشعارات وفي الصفحة الرئيسية خلي اول شيئ فقرة اليوم الوطني بعدها اكاديمية طويق بعدها جدول الفعاليات بعدها ضف دخول لقسم الاسئلة واخر شيء اعضاء الفريق محمد بن مازن الشريف و فيصل لن فلاح الهرف و رائد بن سعود العتيبي وحسن شكل الموقع واضف حركات حلوه وخليه مناسب لجميع انواع الاجهزة وعطني الاكواد الي غيرتها كاملة
"""