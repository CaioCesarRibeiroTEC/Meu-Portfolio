// Localização: src/app/layout.js
import ChatWidget from '@/components/chat/ChatWidget';
import StyledComponentsRegistry from '@/lib/registry'; // 1. Importamos o Registry que criamos
import './globals.css'; 

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <StyledComponentsRegistry>
          {children}
          <ChatWidget />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}