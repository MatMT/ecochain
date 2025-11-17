'use client';

import React from 'react';
import { Leaf } from 'lucide-react';
import { APP_NAME, APP_DESCRIPTION } from '../../config/constants';

const Header = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 mb-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-full p-2">
          <Leaf className="text-white" size={28} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{APP_NAME}</h1>
          <p className="text-xs text-gray-500">{APP_DESCRIPTION}</p>
        </div>
      </div>
      <div className="text-right">
        <div className="text-sm text-gray-500">Nivel</div>
        <div className="text-xl font-bold text-green-600">Eco Pioneer</div>
      </div>
    </div>
  );
};

export default Header;
