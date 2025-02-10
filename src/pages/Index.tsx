import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col items-center text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl md:leading-tight">
            פתרון חכם לניהול העסק שלך
          </h1>
          <p className="mb-8 text-xl text-gray-600 md:text-2xl">
            פלטפורמה מתקדמת שעוזרת לך לנהל את העסק ביעילות מקסימלית
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-x-reverse sm:space-y-0">
            <Button size="lg" className="text-lg">
              התחל עכשיו
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              צפה בהדגמה
            </Button>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">+1,000</div>
              <div className="mt-2 text-gray-600">לקוחות מרוצים</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">99.9%</div>
              <div className="mt-2 text-gray-600">זמן פעילות</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">24/7</div>
              <div className="mt-2 text-gray-600">תמיכה טכנית</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">התכונות שלנו</h2>
            <p className="text-xl text-gray-600">כל מה שאתה צריך לניהול עסק מצליח</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'ניהול מתקדם',
                description: 'מעקב אחר כל הפעילויות העסקיות שלך במקום אחד',
                icon: '📊'
              },
              {
                title: 'דוחות בזמן אמת',
                description: 'קבל תובנות מיידיות על ביצועי העסק',
                icon: '⏱'
              },
              {
                title: 'אוטומציה חכמה',
                description: 'חסוך זמן יקר עם מערכת האוטומציה שלנו',
                icon: '🤖'
              },
            ].map((feature, index) => (
              <Card key={index} className="p-6">
                <div className="mb-4 text-4xl">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">מחירים</h2>
            <p className="text-xl text-gray-600">בחר את התכנית המתאימה לך</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: 'בסיסי',
                price: '99',
                features: [
                  'ניהול משימות',
                  'דוחות בסיסיים',
                  'משתמש אחד',
                ],
              },
              {
                name: 'מתקדם',
                price: '199',
                features: [
                  'כל התכונות הבסיסיות',
                  'דוחות מתקדמים',
                  'עד 5 משתמשים',
                ],
                highlighted: true,
              },
              {
                name: 'עסקי',
                price: '299',
                features: [
                  'כל התכונות המתקדמות',
                  'דוחות מותאמים אישית',
                  'משתמשים ללא הגבלה',
                ],
              },
            ].map((plan, index) => (
              <Card 
                key={index} 
                className={`p-6 ${plan.highlighted ? 'border-primary-500 border-2' : ''}`}
              >
                <div className="text-center">
                  <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">₪{plan.price}</span>
                    <span className="text-gray-600">/ חודש</span>
                  </div>
                  <ul className="mb-6 space-y-2 text-right">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-end gap-2">
                        <span>{feature}</span>
                        <span className="text-green-500">✓</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.highlighted ? 'default' : 'outline'}
                  >
                    התחל עכשיו
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
