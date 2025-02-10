import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function LandingPage() {
  const previousSections = `
    {/* Previous sections remain the same */}
  `;

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Previous sections remain unchanged */}
      
      {/* Testimonials Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">לקוחות מספרים</h2>
            <p className="text-xl text-gray-600">מה הלקוחות שלנו אומרים</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: 'יוסי לוי',
                role: 'מנכ"ל טכנולוגיות אבג',
                content: '"המערכת שינתה לחלוטין את האופן בו אנחנו מנהלים את העסק. היעילות עלתה בצורה משמעותית."',
                image: '👨‍💻'
              },
              {
                name: 'רונית כהן',
                role: 'בעלת חנות אונליין',
                content: '"התמיכה הטכנית מדהימה, והמערכת קלה מאוד לשימוש. ממליצה בחום!"',
                image: '👩‍💼'
              },
              {
                name: 'דני שמעוני',
                role: 'יזם טכנולוגי',
                content: '"היכולת לנתח נתונים בזמן אמת עזרה לנו לקבל החלטות טובות יותר."',
                image: '👨‍💻'
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="text-center">
                  <div className="mb-4 text-4xl">{testimonial.image}</div>
                  <blockquote className="mb-4">{testimonial.content}</blockquote>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-primary-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">צור קשר</h2>
              <p className="text-xl text-gray-600">נשמח לענות על כל שאלה</p>
            </div>

            <Card className="p-6">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="block font-medium">שם מלא</label>
                  <Input type="text" placeholder="הכנס את שמך" />
                </div>

                <div className="space-y-2">
                  <label className="block font-medium">אימייל</label>
                  <Input type="email" placeholder="name@company.com" />
                </div>

                <div className="space-y-2">
                  <label className="block font-medium">הודעה</label>
                  <Textarea placeholder="הכנס את הודעתך" />
                </div>

                <Button className="w-full" size="lg">שלח הודעה</Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-bold">אודות</h3>
              <p className="text-gray-400">הפתרון המושלם לניהול העסק שלך</p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">קישורים</h3>
              <ul className="space-y-2 text-gray-400">
                <li>דף הבית</li>
                <li>תכונות</li>
                <li>מחירים</li>
                <li>צור קשר</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">שירותים</h3>
              <ul className="space-y-2 text-gray-400">
                <li>ניהול משימות</li>
                <li>דוחות</li>
                <li>אוטומציה</li>
                <li>תמיכה</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">צור קשר</h3>
              <ul className="space-y-2 text-gray-400">
                <li>info@company.com</li>
                <li>03-1234567</li>
                <li>תל אביב, ישראל</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400">
            © 2024 כל הזכויות שמורות
          </div>
        </div>
      </footer>
    </div>
  );
}
