"use client"
import { useUser } from '../hooks/useUser'
import Link from 'next/link'
import React from 'react'

const ProductPrice = ({ price }) => {
    const { isAuthenticated } = useUser();
    
    return (
        <div className="mt-2">
            {isAuthenticated ? (
                <span className="font-semibold text-lg text-gray-700">₹{price}</span>
            ) : (
                <div className="text-sm text-gray-600">
                    
                    <p > <Link href="/login" className="text-indigo-600 hover:text-indigo-500 font-medium">Log in</Link> or create an account to see pricing </p>
                </div>
            )}
        </div>
    );
}

export default ProductPrice
