import React, { useState } from 'react';

export interface ClientData {
  email: string;
}

interface DiscordIntegrationResponse {
  status: number;
}

function useNewsLetter(): [
  (data: ClientData) => Promise<void>,
  DiscordIntegrationResponse | undefined,
] {
  const [clientData, setClientData] = useState<
    DiscordIntegrationResponse | undefined
  >(undefined);

  const Send = async (data: ClientData) => {
    const body = {
      content: 'Message Received',
      tts: false,
      color: 'white',
      embeds: [
        {
          title: 'Message for Weekly News-letter',
          description: `Email: ${data.email}`,
        },
      ],
    };

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_DISCORD_INTERGRATION_HOOK || '',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        }
      );

      const responseData: DiscordIntegrationResponse = {
        status: response.status,
      };

      setClientData(responseData);

      // Optional: Handle specific status codes
      if (response.status !== 204) {
        console.warn('Request did not return a 204 status.');
      }
    } catch (error) {
      console.error('Error sending request:', error);
    }
  };

  return [Send, clientData];
}

export default useNewsLetter;
